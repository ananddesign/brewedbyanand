/* ============================================================
   HERO CUP
   Draco-compressed GLB rendered into #heroCup. Everything here
   is decorative: if WebGL is missing, the module fails to load,
   or the file 404s, the hero is just type on cream.
   ============================================================ */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createClayTexture } from './hero/marble-texture.js';

const mount = document.getElementById('heroCup');
if (mount) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* The canvas is taller than its layout box; the extra pixels sit above
     the cup and give the steam somewhere to go. */
  const BLEED = reduced
    ? 0
    : parseFloat(getComputedStyle(mount).getPropertyValue('--steam-bleed')) || 150;
  const CREAM = 0xF0EBE5;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0.55, 4.4);

  /* A room probe gives the polished glaze its reflections; without an
     environment map a white ceramic reads as flat grey. */
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(2.4, 4.2, 2.8);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.top = 2;
  key.shadow.camera.bottom = -2;
  key.shadow.camera.left = -2;
  key.shadow.camera.right = 2;
  key.shadow.camera.far = 12;
  key.shadow.bias = -0.0015;
  scene.add(key);
  scene.add(new THREE.AmbientLight(0xffffff, 0.35));

  /* Contact shadow only — the plane itself stays invisible so the cream
     page colour shows through. */
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(12, 12),
    new THREE.ShadowMaterial({ color: 0x1C1C1C, opacity: 0.16 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  const pivot = new THREE.Group();
  scene.add(pivot);

  /* Loaded on its own so a CDN hiccup costs the steam, not the cup. */
  let steam = null;

  const draco = new DRACOLoader();
  draco.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.185.1/examples/jsm/libs/draco/');
  const loader = new GLTFLoader();
  loader.setDRACOLoader(draco);

  let model = null;

  loader.load('assets/models/cup.glb', (gltf) => {
    model = gltf.scene;

    model.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true;
      o.receiveShadow = false;
      /* Photogrammetry bakes both faces; single-sided renders cleaner
         and halves the shadow work. */
      o.material.side = THREE.FrontSide;
      o.material.envMapIntensity = 1.15;

      /* Unglazed brown stoneware: built from the scan's own albedo (so
         the sculpted shading survives) with mottled firing-variation
         painted on top. High roughness and a low envMapIntensity are
         what actually sell "rough" — a matte clay surface shouldn't
         pick up the room's reflection the way glazed ceramic or
         polished stone would. */
      if (o.material.map) {
        o.material.map = createClayTexture(o.material.map.image);
        o.material.color.set(0xffffff);
        o.material.roughness = 0.92;
        o.material.metalness = 0;
        o.material.envMapIntensity = 0.25;
        o.material.needsUpdate = true;
      }
    });

    /* Normalise whatever scale and origin the export shipped with:
       centre on X/Z, sit on the ground plane, fit to a fixed height. */
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const centre = box.getCenter(new THREE.Vector3());
    const scale = 1.7 / Math.max(size.y, 0.0001);

    model.scale.setScalar(scale);
    model.position.set(
      -centre.x * scale,
      -box.min.y * scale,
      -centre.z * scale
    );

    pivot.add(model);

    /* Coffee. A flat disc, not part of the scan — measured against this
       specific model's rim (inner radius ~0.77-0.90, top ~1.70, with a
       few centimetres of organic wobble) and set in far enough that it
       clears the low side of the lip. */
    const coffee = new THREE.Mesh(
      new THREE.CircleGeometry(0.72, 64),
      new THREE.MeshStandardMaterial({
        color: 0x0c0705,
        /* Low enough to still read as liquid, high enough that the
           overhead key light doesn't blow out into a white disc — a
           flat horizontal surface catches a direct light straight on. */
        roughness: 0.38,
        metalness: 0,
        envMapIntensity: 0.5,
      })
    );
    coffee.rotation.x = -Math.PI / 2;
    coffee.position.y = 1.62;
    coffee.receiveShadow = true;
    pivot.add(coffee);

    ground.position.y = 0;
    mount.classList.add('is-ready');
    render();
  }, undefined, (err) => {
    console.warn('hero cup: model failed to load', err);
    mount.remove();
  });

  /* ---------- Framing ---------- */
  const render = () => { renderer.render(scene, camera); };

  const resize = () => {
    const w = mount.clientWidth;
    const h = mount.clientHeight;
    if (!w || !h) return;

    renderer.setSize(w, h + BLEED, false);
    const aspect = w / h;
    camera.aspect = aspect;
    /* Narrow viewports crop a fixed frustum; pull back as the box
       gets tighter so the cup always fits. */
    const dist = 4.4 * Math.max(1, 1.35 / aspect);
    camera.position.z = dist;
    camera.lookAt(0, 0.85, 0);

    /* An asymmetric frustum, extended upward by exactly the bleed. The
       left, right and bottom planes are untouched, so the cup projects to
       the same pixels it would have without any of this. */
    const halfH = dist * Math.tan((camera.fov * Math.PI) / 360);
    const halfW = halfH * aspect;
    const pxPerWorld = h / (2 * halfH);
    const k = camera.near / dist;
    camera.projectionMatrix.makePerspective(
      -halfW * k,
      halfW * k,
      (halfH + BLEED / pxPerWorld) * k,
      -halfH * k,
      camera.near,
      camera.far
    );
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();

    if (steam) steam.setScale(pxPerWorld, renderer.getPixelRatio());
    /* With no animation loop running, a resize needs its own frame. */
    if (reduced && model) render();
  };
  resize();
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(mount);
  else window.addEventListener('resize', resize);

  if (!reduced) {
    import('./hero/steam-system.js')
      .then(({ SteamSystem }) => {
        steam = new SteamSystem();
        scene.add(steam.group);
        resize();
      })
      .catch((err) => console.warn('hero steam unavailable', err));
  }

  /* ---------- Motion ---------- */
  const SHADOW_BASE = ground.material.opacity;
  let pointerX = 0, pointerY = 0, tiltX = 0, tiltY = 0;
  let clock = 0;    /* idle phase */
  let reactT = -1;  /* below zero means no reaction in flight */
  let visible = true;

  if (!reduced) {
    window.addEventListener('pointermove', (e) => {
      pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      pointerY = (e.clientY / window.innerHeight) * 2 - 1;
    }, { passive: true });
  }

  /* Nothing currently dispatches this — the headline that used to fire it
     on every word change is gone — but the reaction is cheap to leave
     wired up for whatever wants to trigger it next. */
  document.addEventListener('hero:brew', () => { reactT = 0; disturb(0.14); });

  /* ---------- Drag to rotate ---------- */
  /* User rotation is added on top of the idle drift rather than replacing
     it, so letting go leaves the cup alive rather than frozen. */
  let userRot = 0, userVel = 0, dragging = false, lastX = 0;
  /* Vertical drag changes the angle it sits at. Clamped either side of
     level — further forward than back, since tipping it toward you shows
     the inside and that is the more useful direction. */
  let userPitch = 0, lastY = 0;
  const PITCH_MIN = -0.34, PITCH_MAX = 0.52;

  /* Knocked, it rocks. Amplitude comes from how hard it was disturbed. */
  let wobbleT = -1, wobbleAmp = 0;
  const disturb = (strength) => {
    const s = Math.min(Math.abs(strength), 1);
    if (s < 0.04) return;
    /* A fresh knock during a rock adds to it rather than restarting flat. */
    wobbleAmp = Math.min(wobbleT >= 0 ? wobbleAmp + s * 0.7 : s, 1.25);
    wobbleT = 0;
  };

  if (!reduced) {
    /* The canvas overhangs the paragraph above, so the drag target is its
       own element sized to the cup — the copy stays selectable. */
    const grab = document.createElement('div');
    grab.className = 'hero-cup-grab';
    mount.appendChild(grab);

    grab.addEventListener('pointerdown', (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      userVel = 0;
      grab.setPointerCapture(e.pointerId);
    });
    grab.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const dx = (e.clientX - lastX) * 0.009;
      const dy = (e.clientY - lastY) * 0.006;
      lastX = e.clientX;
      lastY = e.clientY;
      userRot += dx;
      userVel = dx;
      userPitch = Math.max(PITCH_MIN, Math.min(PITCH_MAX, userPitch + dy));
    });
    const release = (e) => {
      if (!dragging) return;
      dragging = false;
      /* Let go of a spin and the ceramic rocks it off. */
      disturb(Math.abs(userVel) * 22);
      if (grab.hasPointerCapture(e.pointerId)) grab.releasePointerCapture(e.pointerId);
    };
    grab.addEventListener('pointerup', release);
    grab.addEventListener('pointercancel', release);
  }

  let last = performance.now();
  const tick = () => {
    const now = performance.now();
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!visible) return;
    if (steam) steam.update(dt);

    if (model) {
      clock += dt;

      /* Idle: a slow float, a breath, and a turn kept under half a degree —
         enough that the cup reads as alive, not as animated. */
      const float = Math.sin(clock * 0.55) * 0.026;
      const breath = 1 + Math.sin(clock * 0.42) * 0.0045;
      const drift = Math.sin(clock * 0.31) * 0.0070; /* ±0.40° */

      /* Reaction: roughly two pixels of lift, rung out over a second. */
      let lift = 0, ring = 0;
      if (reactT >= 0) {
        reactT += dt;
        const decay = Math.exp(-reactT * 4.0);
        lift = Math.sin(reactT * 21.0) * 0.024 * decay;
        ring = Math.sin(reactT * 17.0) * 0.0045 * decay;
        if (reactT > 1.4) { reactT = -1; lift = 0; ring = 0; }
      }

      /* Spin carries on after release, then settles. */
      if (!dragging) {
        userRot += userVel;
        userVel *= 0.93;
        if (Math.abs(userVel) < 0.00002) userVel = 0;
        /* Parallax is frozen mid-drag so it cannot fight the hand. */
        tiltX += (pointerX * 0.22 - tiltX) * 0.05;
        tiltY += (pointerY * 0.12 - tiltY) * 0.05;
      }

      /* Rocking on its base: a tilt that rings out, with the faintest bob
         and a touch of counter-yaw so it reads as ceramic, not rubber. */
      let rockZ = 0, rockX = 0, rockY = 0, rockYaw = 0;
      if (wobbleT >= 0) {
        wobbleT += dt;
        const decay = Math.exp(-wobbleT * 3.1);
        const osc = Math.sin(wobbleT * 13.5);
        rockZ = osc * 0.055 * wobbleAmp * decay;
        rockX = Math.sin(wobbleT * 13.5 + 0.9) * 0.026 * wobbleAmp * decay;
        rockYaw = Math.sin(wobbleT * 9.0) * 0.010 * wobbleAmp * decay;
        rockY = Math.abs(osc) * 0.010 * wobbleAmp * decay;
        if (wobbleT > 2.4) { wobbleT = -1; wobbleAmp = 0; }
      }

      pivot.position.y = float + lift + rockY;
      pivot.scale.setScalar(breath);
      pivot.rotation.y = drift + ring + tiltX + userRot + rockYaw;
      pivot.rotation.x = tiltY + userPitch + rockX;
      pivot.rotation.z = rockZ;
      /* The shadow softens as the cup rises off it. */
      ground.material.opacity = SHADOW_BASE - (lift + rockY) * 1.1;
    }

    renderer.render(scene, camera);
  };

  if (reduced) {
    /* Static three-quarter view, no loop. */
    pivot.rotation.y = -0.5;
  } else {
    renderer.setAnimationLoop(tick);

    /* Stop the loop once the hero scrolls away. */
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
      }, { threshold: 0 }).observe(mount);
    }
  }
}
