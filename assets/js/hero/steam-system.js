/* ============================================================
   STEAM SYSTEM
   Composes the emitter and the particles into one object the
   host scene can add and update. The host owns the camera and
   the clock; this owns everything above the rim.
   ============================================================ */
import * as THREE from 'three';
import { SteamParticles } from './steam-particles.js';

export class SteamSystem {
  constructor({
    rimHeight = 1.62,   /* world y of the cup's lip — the emitter plane */
    count = 1400,
  } = {}) {
    this.group = new THREE.Group();

    /* SteamEmitter: the origin the particles rise from. */
    this.emitter = new THREE.Group();
    this.emitter.position.y = rimHeight;
    this.group.add(this.emitter);

    this.particles = new SteamParticles({ count });
    this.emitter.add(this.particles.points);

    this._elapsed = 0;
    this._opacity = 0;
  }

  /* Called by the host whenever the projection changes, so the wisps stay
     the same size on screen however the canvas is sized. */
  setScale(pxPerWorld, pixelRatio) {
    this.particles.uniforms.uScale.value = pxPerWorld;
    this.particles.uniforms.uPixelRatio.value = pixelRatio;
  }

  update(dt) {
    this._elapsed += dt;
    /* Ease in, so nothing pops on at load. */
    this._opacity = Math.min(this._opacity + dt / 2.2, 1);
    this.particles.uniforms.uOpacity.value = this._opacity;
    this.particles.update(this._elapsed);
  }

  dispose() {
    this.particles.dispose();
    this.group.removeFromParent();
  }
}
