import * as THREE from 'three';

/* ============================================================
   A paper card lying on the page, rendered with three.js.
   The card face is drawn onto a canvas texture (the site's own fonts,
   a little paper grain), the card casts a soft shadow onto the page,
   and it tilts towards the pointer and lifts on hover.

   Decorative: the same content exists as HTML underneath (PaperCard.tsx);
   `onReady` fires after the first frame so the HTML can step back.
   ============================================================ */

export type PaperSpec = {
  tag: string;
  tagColor: string;
  title: string[];
  steps: string[];
  mark: string;
};

const CARD_W = 1;
const CARD_H = 1.5;
const TEX_W = 1024;
const TEX_H = 1536;
/* World units visible vertically. The canvas overhangs its card slot
   (.qr-paper-gl, 130% tall) so the shadow has room to fade out before the
   canvas edge; 2.09 keeps the card at ~93% of the slot height. */
const VIEW_H = 2.09;

async function drawFace(spec: PaperSpec) {
  await Promise.all([
    document.fonts.load('italic 150px "Instrument Serif"'),
    document.fonts.load('400 92px "Instrument Serif"'),
    document.fonts.load('600 28px "Hanken Grotesk"'),
  ]).catch(() => {});

  const c = document.createElement('canvas');
  c.width = TEX_W;
  c.height = TEX_H;
  const ctx = c.getContext('2d')!;
  const spaced = (px: number) => { (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = `${px}px`; };

  // paper + grain
  ctx.fillStyle = '#F8F6F1';
  ctx.fillRect(0, 0, TEX_W, TEX_H);
  const img = ctx.getImageData(0, 0, TEX_W, TEX_H);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 6;
    img.data[i] += n; img.data[i + 1] += n; img.data[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);

  // tag, top left
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';
  ctx.fillStyle = spec.tagColor;
  ctx.font = '600 28px "Hanken Grotesk", sans-serif';
  spaced(7);
  ctx.fillText(spec.tag.toUpperCase(), 104, 190);

  // title: italic serif, set at a slight upward slant like a handwritten line
  ctx.save();
  ctx.translate(TEX_W / 2, 660);
  ctx.rotate(-0.05);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#1C1C1C';
  ctx.font = 'italic 400 148px "Instrument Serif", serif';
  spaced(0);
  spec.title.forEach((line, i) => ctx.fillText(line, i === 0 ? -40 : 40, (i - (spec.title.length - 1) / 2) * 140));
  ctx.restore();

  // steps: small italic serif lines, centred
  ctx.textAlign = 'center';
  ctx.fillStyle = '#5F5A50';
  ctx.font = 'italic 400 42px "Instrument Serif", serif';
  const gap = 58;
  const start = 1040 - ((spec.steps.length - 1) * gap) / 2;
  spec.steps.forEach((s, i) => ctx.fillText(s, TEX_W / 2, start + i * gap));

  // wordmark
  ctx.fillStyle = '#1C1C1C';
  ctx.font = '400 92px "Instrument Serif", serif';
  spaced(5);
  ctx.fillText(spec.mark.toUpperCase(), TEX_W / 2, 1370);

  return c;
}

export function mountPaperCard(
  host: HTMLElement,
  spec: PaperSpec,
  { reduced, side, onReady }: { reduced: boolean; side: -1 | 1; onReady: () => void },
) {
  let disposed = false;
  let raf = 0;
  const cleanups: (() => void)[] = [];

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
  camera.position.set(0, 0, VIEW_H / 2 / Math.tan(THREE.MathUtils.degToRad(15)));

  /* Soft shadow: a pre-blurred image on a plane under the card, not a
     shadow map. Shadow maps leave faint banding across the whole canvas;
     this is fully transparent outside the shadow, so the canvas area is
     exactly the page grey. It drifts and spreads as the card lifts. */
  const shadowTex = (() => {
    const c = document.createElement('canvas');
    c.width = 300; c.height = 420;
    const g = c.getContext('2d')!;
    g.filter = 'blur(13px)';
    g.fillStyle = 'rgba(58, 50, 38, 1)';
    g.fillRect(30, 30, 240, 360); // card-shaped core, 30px of fade all round
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  })();
  // the core (240×360 of 300×420) matches the card, so the fade only reaches ~12% past it
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(CARD_W * 300 / 240, CARD_H * 420 / 360),
    new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.2, depthWrite: false }),
  );
  scene.add(shadow);

  /* The face is unlit, so the paper always shows its exact off-white
     whatever the GPU or lighting; the shadow carries the depth. */
  const edge = new THREE.MeshBasicMaterial({ color: 0xe9e6df });
  const face = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const card = new THREE.Mesh(new THREE.BoxGeometry(CARD_W, CARD_H, 0.012), [edge, edge, edge, edge, face, edge]);
  const pivot = new THREE.Group();
  pivot.add(card);
  scene.add(pivot);

  // pose: current eases towards target every frame
  // it holds a tilted "dropped in" pose until it's well on screen, then settles
  const rest = { rx: 0, ry: 0, rz: 0, z: 0.05 };
  const start = reduced ? { ...rest } : { rx: 0.55, ry: side * -0.25, rz: side * 0.06, z: 0.4 };
  const cur = { ...start };
  const target = { ...start };
  let visible = false;
  let hovering = false;
  let entered = reduced;
  const enter = () => { if (!entered) { entered = true; Object.assign(target, rest); } };

  const apply = () => {
    pivot.rotation.set(cur.rx, cur.ry, cur.rz);
    pivot.position.z = cur.z;
    // light from the top left: higher card → shadow further down-right, softer, fainter
    const lift = Math.max(0, cur.z);
    shadow.position.set(0.014 + lift * 0.12, -0.02 - lift * 0.16, 0);
    shadow.scale.setScalar(1 + lift * 0.18);
    shadow.rotation.z = cur.rz;
    (shadow.material as THREE.MeshBasicMaterial).opacity = Math.max(0.06, 0.24 - lift * 0.5);
  };

  const resize = () => {
    const w = host.clientWidth;
    const h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  };

  const frame = (t: number) => {
    raf = 0;
    if (disposed) return;
    const k = 0.085;
    const float = !reduced && !hovering ? Math.sin(t / 1400 + side) * 0.006 : 0;
    let moving = false;
    (Object.keys(cur) as (keyof typeof cur)[]).forEach((key) => {
      const goal = target[key] + (key === 'z' ? float : 0);
      const d = goal - cur[key];
      if (Math.abs(d) > 0.0004) moving = true;
      cur[key] += d * k;
    });
    apply();
    renderer.render(scene, camera);
    if (visible && (moving || !reduced)) raf = requestAnimationFrame(frame);
  };
  const wake = () => { if (!raf && !disposed) raf = requestAnimationFrame(frame); };

  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && e.intersectionRatio > 0.35) enter();
    if (visible) wake();
  }, { threshold: [0, 0.35] });
  io.observe(host);
  cleanups.push(() => io.disconnect());

  if (!reduced) {
    const ac = new AbortController();
    host.addEventListener('pointermove', (e) => {
      const r = host.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
      enter();
      hovering = true;
      target.rx = ny * 0.16;
      target.ry = nx * 0.2;
      target.z = 0.13;
      wake();
    }, { signal: ac.signal });
    host.addEventListener('pointerleave', () => {
      hovering = false;
      Object.assign(target, rest);
      wake();
    }, { signal: ac.signal });
    cleanups.push(() => ac.abort());
  }

  const ro = new ResizeObserver(resize);
  ro.observe(host);
  cleanups.push(() => ro.disconnect());

  drawFace(spec).then((canvas) => {
    if (disposed) return;
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    face.map = tex;
    face.needsUpdate = true;
    apply();
    resize();
    onReady();
    wake();
  });

  return () => {
    disposed = true;
    if (raf) cancelAnimationFrame(raf);
    cleanups.forEach((fn) => fn());
    face.map?.dispose();
    scene.traverse((o) => { if (o instanceof THREE.Mesh) o.geometry.dispose(); });
    shadowTex.dispose();
    [edge, face, shadow.material as THREE.Material].forEach((m) => m.dispose());
    renderer.dispose();
    renderer.domElement.remove();
  };
}
