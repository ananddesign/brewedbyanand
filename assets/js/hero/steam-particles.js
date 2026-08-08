/* ============================================================
   STEAM PARTICLES
   One Points draw call. Every particle's path is evaluated in
   the vertex shader from curl-style simplex noise, so the CPU
   writes a few uniforms per frame and nothing else.
   ============================================================ */
import * as THREE from 'three';

/* Simplex noise — Ashima Arts / Stefan Gustavson, MIT. */
const SIMPLEX = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(
      i.z+vec4(0.0,i1.z,i2.z,1.0))
    + i.y+vec4(0.0,i1.y,i2.y,1.0))
    + i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

export class SteamParticles {
  constructor({ count = 1400, color = 0xF7F4F0 } = {}) {
    this.count = count;

    const seeds = new Float32Array(count);
    const drifts = new Float32Array(count);
    const scales = new Float32Array(count);
    const spawn = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      seeds[i] = Math.random();
      drifts[i] = Math.random() * 2 - 1;
      scales[i] = 0.5 + Math.random() * 0.7;
      /* Emitted across the mouth of the cup, biased to the middle. */
      const r = (Math.random() + Math.random() - 1) * 0.42;
      const a = Math.random() * Math.PI * 2;
      spawn[i * 3] = Math.cos(a) * r;
      spawn[i * 3 + 1] = Math.random() * 0.05;
      spawn[i * 3 + 2] = Math.sin(a) * r * 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(spawn, 3));
    geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    geometry.setAttribute('aDrift', new THREE.BufferAttribute(drifts, 1));
    geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));

    this.uniforms = {
      uTime: { value: 0 },
      uRate: { value: 0.19 },        /* ≈5.3s per wisp */
      uRise: { value: 1.75 },        /* world units travelled in a life */
      uOpacity: { value: 0 },
      uPixelRatio: { value: 1 },
      uScale: { value: 100 },        /* px per world unit, for point sizing */
      uColor: { value: new THREE.Color(color) },
    };

    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: THREE.NormalBlending,
      vertexShader: SIMPLEX + /* glsl */ `
        attribute float aSeed;
        attribute float aDrift;
        attribute float aScale;

        uniform float uTime, uRate, uRise;
        uniform float uOpacity, uPixelRatio, uScale;

        varying float vAlpha;

        void main() {
          /* Each particle owns its phase, so the column never pulses. */
          float t = fract(uTime * uRate + aSeed);

          /* Fast off the surface, slowing as it cools. */
          float rise = 1.0 - pow(1.0 - t, 1.8);

          /* Curl-ish advection: two noise fields sampled along the path,
             widening with height the way a real plume entrains air. */
          vec3 np = vec3(position.x * 1.4, t * 2.1 - uTime * 0.13, position.z * 1.4);
          float nx = snoise(np + vec3(aSeed * 21.0, 0.0, 0.0));
          float nz = snoise(np + vec3(0.0, 0.0, aSeed * 17.0 + 5.0));
          float spread = 0.12 + 0.62 * t;

          vec3 pos;
          pos.x = position.x + nx * spread + aDrift * 0.10 * t;
          pos.y = position.y + rise * uRise;
          pos.z = position.z + nz * spread * 0.6;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

          /* Sized in world units so it holds up at any canvas size. */
          gl_PointSize = aScale * (0.055 + 0.13 * t) * uScale * uPixelRatio;

          float fadeIn = smoothstep(0.0, 0.12, t);
          float fadeOut = 1.0 - smoothstep(0.45, 1.0, t);
          vAlpha = fadeIn * fadeOut * aScale * 0.22 * uOpacity;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.03, d);
          a *= a;
          if (a < 0.001) discard;
          gl_FragColor = vec4(uColor, a * vAlpha);
        }
      `,
    });

    this.points = new THREE.Points(geometry, material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 2;
    this._geometry = geometry;
    this._material = material;
  }

  update(elapsed) { this.uniforms.uTime.value = elapsed; }

  dispose() {
    this._geometry.dispose();
    this._material.dispose();
    this.points.removeFromParent();
  }
}
