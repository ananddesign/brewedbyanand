/* ============================================================
   MARBLE TEXTURE
   Builds a marble albedo from the cup's own baked photogrammetry
   texture, so the existing ambient-occlusion shading (already in
   that map) survives underneath the veining rather than being
   replaced by something flat.
   ============================================================ */
import * as THREE from 'three';

/* Carrara-style white: soft warm-white base, grey veining. */
export const WHITE_MARBLE = {
  base: 'rgb(233, 230, 224)',
  veinBroadDark: 'rgb(150, 148, 144)',
  veinBroadLight: 'rgb(250, 249, 246)',
  veinSharp: 'rgb(96, 93, 88)',
  speckleLight: 'rgba(255, 255, 253, 0.10)',
  speckleDark: 'rgba(110, 108, 104, 0.08)',
};

/* Bardiglio-style dark: slate grey base, near-black veining. */
export const DARK_MARBLE = {
  base: 'rgb(72, 72, 78)',
  veinBroadDark: 'rgb(30, 30, 34)',
  veinBroadLight: 'rgb(118, 118, 124)',
  veinSharp: 'rgb(18, 18, 21)',
  speckleLight: 'rgba(150, 150, 155, 0.10)',
  speckleDark: 'rgba(10, 10, 12, 0.10)',
};

/* Warm terracotta: unglazed stoneware, no veining — clay is fired, not
   crystalline, so its variation is mottled and grainy rather than banded. */
export const ROUGH_CLAY = {
  base: 'rgb(150, 100, 68)',
  blotchDark: 'rgb(96, 60, 38)',
  blotchLight: 'rgb(186, 138, 96)',
  grainDark: 'rgba(58, 34, 20, 0.16)',
  grainLight: 'rgba(210, 168, 128, 0.12)',
};

const rand = (seed) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

function finalizeTexture(cv) {
  const texture = new THREE.CanvasTexture(cv);
  /* Match the source map's orientation and filtering exactly, or the
     new albedo drifts out of registration with the UVs the mesh
     already has (and with the normal/roughness maps left in place). */
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
}

/* One long, gently curved vein — quadratic segments chained so the
   line wanders rather than arcing uniformly. */
function drawVein(ctx, rng, size, color, alpha, width) {
  const steps = 5 + Math.floor(rng() * 3);
  let x = rng() * size * 1.3 - size * 0.15;
  let y = -size * 0.1;
  ctx.beginPath();
  ctx.moveTo(x, y);
  for (let i = 0; i < steps; i++) {
    const nx = x + (rng() - 0.3) * size * 0.5;
    const ny = y + (size * 1.2) / steps;
    const cx = (x + nx) / 2 + (rng() - 0.5) * size * 0.3;
    const cy = (y + ny) / 2;
    ctx.quadraticCurveTo(cx, cy, nx, ny);
    x = nx; y = ny;
  }
  ctx.strokeStyle = color;
  ctx.globalAlpha = alpha;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.stroke();
}

export function createMarbleTexture(sourceImage, { size = 1024, seed = 7, palette = WHITE_MARBLE } = {}) {
  const cv = document.createElement('canvas');
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext('2d');
  const rng = rand(seed);

  /* The scan's own soft shading, kept as the base — this is what makes
     the surface still read as a sculpted vessel rather than flat paint. */
  ctx.drawImage(sourceImage, 0, 0, size, size);

  /* Multiply keeps the original's light/dark relationships intact; only
     the overall value shifts toward the palette's base tone. */
  ctx.globalCompositeOperation = 'multiply';
  ctx.fillStyle = palette.base;
  ctx.fillRect(0, 0, size, size);
  ctx.globalCompositeOperation = 'source-over';

  /* Broad, blurred veins first — the diffuse mineral bands under the
     surface. Alternates a shade darker and a shade lighter than the base
     so the stone reads as banded, not just scribbled on. */
  ctx.filter = `blur(${size * 0.006}px)`;
  for (let i = 0; i < 6; i++) {
    const dark = rng() > 0.4;
    drawVein(
      ctx, rng, size,
      dark ? palette.veinBroadDark : palette.veinBroadLight,
      dark ? 0.32 : 0.24,
      size * (0.012 + rng() * 0.02)
    );
  }

  /* A few sharp fracture lines on top, unblurred — the fine detail that
     sells it as stone rather than a soft gradient. */
  ctx.filter = 'none';
  for (let i = 0; i < 4; i++) {
    drawVein(
      ctx, rng, size,
      palette.veinSharp,
      0.38,
      size * (0.0015 + rng() * 0.003)
    );
  }
  ctx.globalAlpha = 1;

  /* Fine mineral speckle — sparse, so it stays a texture and not noise. */
  const speckles = Math.floor(size * size * 0.0025);
  for (let i = 0; i < speckles; i++) {
    const x = rng() * size;
    const y = rng() * size;
    const light = rng() > 0.5;
    ctx.fillStyle = light ? palette.speckleLight : palette.speckleDark;
    ctx.fillRect(x, y, 1.4, 1.4);
  }

  return finalizeTexture(cv);
}

/* A soft, irregular blob — clay's fired-color variation is patchy, not
   linear, so this is a filled organic shape rather than a stroked line. */
function drawBlotch(ctx, rng, size, color, alpha, radius) {
  const cx = rng() * size, cy = rng() * size;
  const points = 7 + Math.floor(rng() * 3);
  ctx.beginPath();
  for (let i = 0; i <= points; i++) {
    const a = (i / points) * Math.PI * 2;
    const r = radius * (0.7 + rng() * 0.6);
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.globalAlpha = alpha;
  ctx.fill();
}

export function createClayTexture(sourceImage, { size = 1024, seed = 11, palette = ROUGH_CLAY } = {}) {
  const cv = document.createElement('canvas');
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext('2d');
  const rng = rand(seed);

  /* The scan's own soft shading, kept as the base. */
  ctx.drawImage(sourceImage, 0, 0, size, size);

  /* Multiply toward the clay base tone, same technique as the marble
     variant — only the target colour differs. */
  ctx.globalCompositeOperation = 'multiply';
  ctx.fillStyle = palette.base;
  ctx.fillRect(0, 0, size, size);
  ctx.globalCompositeOperation = 'source-over';

  /* Firing marks: large soft blotches, heavily blurred so they read as
     tonal drift across the surface rather than distinct shapes. */
  ctx.filter = `blur(${size * 0.03}px)`;
  for (let i = 0; i < 9; i++) {
    const dark = rng() > 0.45;
    drawBlotch(
      ctx, rng, size,
      dark ? palette.blotchDark : palette.blotchLight,
      dark ? 0.22 : 0.16,
      size * (0.10 + rng() * 0.10)
    );
  }
  ctx.filter = 'none';
  ctx.globalAlpha = 1;

  /* Coarse grain — unglazed stoneware has visible texture at this scale,
     unlike marble's fine mineral speckle. Bigger flecks, denser field. */
  const grains = Math.floor(size * size * 0.006);
  for (let i = 0; i < grains; i++) {
    const x = rng() * size;
    const y = rng() * size;
    const light = rng() > 0.5;
    ctx.fillStyle = light ? palette.grainLight : palette.grainDark;
    const s = 1 + rng() * 1.8;
    ctx.fillRect(x, y, s, s);
  }

  return finalizeTexture(cv);
}
