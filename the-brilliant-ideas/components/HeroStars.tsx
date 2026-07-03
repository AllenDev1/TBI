'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * WebGL starfield layered over the night hero: twinkling depth-attenuated
 * stars, gentle drift, mouse parallax, and a shooting star every few seconds.
 */
export default function HeroStars() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return; // no WebGL — the photo still carries the scene
    }

    let w = el.clientWidth;
    let h = el.clientHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.z = 12;

    const makeStars = (count: number, size: number, color: number) => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 44;
        pos[i * 3 + 1] = Math.random() * 22 - 6; // bias toward the sky
        pos[i * 3 + 2] = -Math.random() * 24;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color,
        size,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true,
        depthWrite: false,
      });
      return new THREE.Points(geo, mat);
    };

    const starsSmall = makeStars(900, 0.045, 0xffffff);
    const starsBig = makeStars(220, 0.1, 0xfff3e0);
    scene.add(starsSmall, starsBig);

    // shooting star — a short fading streak
    const streakGeo = new THREE.BufferGeometry();
    streakGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0, 1.6, 0.55, 0]), 3));
    const streakMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
    const streak = new THREE.Line(streakGeo, streakMat);
    scene.add(streak);
    let streakT = -2; // negative = waiting

    const mouse = { x: 0, y: 0 };
    const onMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse, { passive: true });

    const onResize = () => {
      w = el.clientWidth;
      h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let last = 0;
    let frame = 0;
    const tick = () => {
      const t = clock.getElapsedTime();
      const dt = Math.min(t - last, 0.05);
      last = t;

      starsSmall.material.opacity = 0.65 + Math.sin(t * 1.4) * 0.2;
      starsBig.material.opacity = 0.7 + Math.sin(t * 0.9 + 2) * 0.25;
      starsSmall.rotation.z = t * 0.006;
      starsBig.rotation.z = t * 0.004;

      // shooting star lifecycle
      streakT += dt;
      if (streakT > 0 && streakT < 1) {
        streak.position.x = 14 - streakT * 22;
        streak.position.y = 9 - streakT * 7;
        streak.position.z = -6;
        streakMat.opacity = Math.sin(streakT * Math.PI) * 0.9;
      } else if (streakT >= 1) {
        streakMat.opacity = 0;
        streakT = -(3 + Math.random() * 5); // wait 3–8s
      }

      camera.position.x += (mouse.x * 1.1 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 0.7 - camera.position.y) * 0.03;
      camera.lookAt(0, 2, -8);

      renderer.render(scene, camera);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      starsSmall.geometry.dispose();
      starsSmall.material.dispose();
      starsBig.geometry.dispose();
      starsBig.material.dispose();
      streakGeo.dispose();
      streakMat.dispose();
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} className="pointer-events-none absolute inset-0" aria-hidden="true" />;
}
