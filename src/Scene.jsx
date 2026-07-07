import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function useThreeScene(setupScene, className) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    const clock = new THREE.Clock();
    const cleanupScene = setupScene({ scene, camera, renderer, mount, reducedMotion });

    let animationFrame = 0;
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      mount.dispatchEvent(new CustomEvent('scene-tick', { detail: { elapsed, reducedMotion } }));
      renderer.render(scene, camera);
      if (!reducedMotion) animationFrame = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', onResize);
      cleanupScene?.();
      scene.traverse((object) => {
        object.geometry?.dispose?.();
        if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose?.());
        else object.material?.dispose?.();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [setupScene]);

  return <div className={className} ref={mountRef} />;
}

function makeLine(points, color = 0xff4692, opacity = 0.45) {
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
  return new THREE.Line(geometry, material);
}

export function HeroScene() {
  return useThreeScene(({ scene, camera, mount }) => {
    camera.position.set(0, 0.5, 9);

    scene.add(new THREE.AmbientLight(0xffffff, 1.1));
    const key = new THREE.PointLight(0xff4692, 26, 18);
    key.position.set(2.8, 3, 3);
    scene.add(key);
    const violet = new THREE.PointLight(0x5122d0, 18, 14);
    violet.position.set(-3, -1, 4);
    scene.add(violet);

    const group = new THREE.Group();
    scene.add(group);

    const headMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf8fbff,
      roughness: 0.22,
      transmission: 0.18,
      thickness: 0.9,
      clearcoat: 0.8,
    });
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.72, 48, 48), headMaterial);
    head.position.set(-1.15, 0.72, 0);
    group.add(head);

    const shoulder = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.82, 1.25, 8, 40),
      new THREE.MeshPhysicalMaterial({ color: 0xeef6ff, roughness: 0.38, clearcoat: 0.3 }),
    );
    shoulder.position.set(-1.15, -0.78, 0);
    shoulder.rotation.z = Math.PI / 2;
    shoulder.scale.set(1.5, 0.54, 0.54);
    group.add(shoulder);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.88, 2),
      new THREE.MeshPhysicalMaterial({
        color: 0xff4692,
        emissive: 0x690082,
        emissiveIntensity: 0.5,
        roughness: 0.16,
        metalness: 0.25,
        transparent: true,
        opacity: 0.86,
      }),
    );
    core.position.set(1.25, 0.15, 0);
    group.add(core);

    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xff4692, transparent: true, opacity: 0.55 });
    for (let i = 0; i < 3; i += 1) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.35 + i * 0.38, 0.008, 8, 96), ringMaterial);
      ring.position.copy(core.position);
      ring.rotation.set(Math.PI / 2.4, i * 0.7, Math.PI / 5);
      group.add(ring);
    }

    const nodes = [];
    for (let i = 0; i < 34; i += 1) {
      const angle = i * 0.82;
      const radius = 2.2 + (i % 5) * 0.34;
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(i % 4 === 0 ? 0.05 : 0.032, 16, 16),
        new THREE.MeshBasicMaterial({ color: i % 3 === 0 ? 0x1a0456 : 0xff4692 }),
      );
      node.position.set(Math.cos(angle) * radius, Math.sin(angle * 0.75) * 1.5, Math.sin(angle) * 0.75);
      nodes.push(node);
      group.add(node);
      if (i > 0) group.add(makeLine([nodes[i - 1].position, node.position], 0xff4692, 0.24));
    }

    const panels = [];
    for (let i = 0; i < 5; i += 1) {
      const panel = new THREE.Mesh(
        new THREE.BoxGeometry(1.08, 0.64, 0.025),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.16 }),
      );
      panel.position.set(-0.5 + i * 0.62, -1.65 + Math.sin(i) * 0.2, -0.55 - i * 0.08);
      panel.rotation.set(-0.12, 0.18, -0.08);
      panels.push(panel);
      group.add(panel);
    }

    const onTick = (event) => {
      const t = event.detail.elapsed;
      group.rotation.y = Math.sin(t * 0.18) * 0.18;
      group.rotation.x = Math.sin(t * 0.12) * 0.05;
      core.rotation.x = t * 0.25;
      core.rotation.y = t * 0.38;
      panels.forEach((panel, index) => {
        panel.position.y += Math.sin(t * 0.8 + index) * 0.0009;
      });
      nodes.forEach((node, index) => {
        node.scale.setScalar(1 + Math.sin(t * 1.4 + index) * 0.22);
      });
    };
    mount.addEventListener('scene-tick', onTick);

    return () => mount.removeEventListener('scene-tick', onTick);
  }, 'three-scene hero-scene');
}

export function GlobeScene() {
  return useThreeScene(({ scene, camera, mount }) => {
    camera.position.set(0, 0, 6.2);
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const light = new THREE.PointLight(0xff4692, 28, 14);
    light.position.set(3, 3, 4);
    scene.add(light);

    const globe = new THREE.Group();
    scene.add(globe);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.55, 64, 64),
      new THREE.MeshPhysicalMaterial({
        color: 0x1a0456,
        roughness: 0.32,
        metalness: 0.15,
        transparent: true,
        opacity: 0.82,
        clearcoat: 0.5,
      }),
    );
    globe.add(sphere);

    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(1.58, 24, 16),
      new THREE.MeshBasicMaterial({ color: 0xff4692, wireframe: true, transparent: true, opacity: 0.18 }),
    );
    globe.add(wire);

    const points = [];
    for (let i = 0; i < 42; i += 1) {
      const phi = Math.acos(-1 + (2 * i) / 42);
      const theta = Math.sqrt(42 * Math.PI) * phi;
      const point = new THREE.Vector3(
        1.72 * Math.cos(theta) * Math.sin(phi),
        1.72 * Math.sin(theta) * Math.sin(phi),
        1.72 * Math.cos(phi),
      );
      points.push(point);
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.025 + (i % 6 === 0 ? 0.025 : 0), 12, 12),
        new THREE.MeshBasicMaterial({ color: 0xff4692 }),
      );
      node.position.copy(point);
      globe.add(node);
    }
    for (let i = 0; i < points.length - 2; i += 3) {
      globe.add(makeLine([points[i], points[i + 2]], 0xff4692, 0.26));
    }

    const onTick = (event) => {
      const t = event.detail.elapsed;
      globe.rotation.y = t * 0.12;
      globe.rotation.x = Math.sin(t * 0.2) * 0.08;
      wire.material.opacity = 0.14 + Math.sin(t * 1.2) * 0.04;
    };
    mount.addEventListener('scene-tick', onTick);

    return () => mount.removeEventListener('scene-tick', onTick);
  }, 'three-scene globe-scene');
}

export function HandConnectionScene() {
  return useThreeScene(({ scene, camera, mount }) => {
    camera.position.set(0, 0.05, 6.4);
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const light = new THREE.PointLight(0xff4692, 24, 12);
    light.position.set(0, 1.8, 3.4);
    scene.add(light);

    const group = new THREE.Group();
    scene.add(group);

    const skin = new THREE.MeshPhysicalMaterial({ color: 0xf5e6d2, roughness: 0.44, clearcoat: 0.15 });
    const metal = new THREE.MeshPhysicalMaterial({
      color: 0xd8d9ef,
      metalness: 0.55,
      roughness: 0.2,
      clearcoat: 0.6,
    });
    const spark = new THREE.MeshBasicMaterial({ color: 0xff4692, transparent: true, opacity: 0.85 });

    const humanPalm = new THREE.Mesh(new THREE.CapsuleGeometry(0.32, 1.45, 12, 28), skin);
    humanPalm.position.set(-1.55, -0.12, 0);
    humanPalm.rotation.z = Math.PI / 2;
    humanPalm.scale.set(0.76, 1, 0.48);
    group.add(humanPalm);

    const robotPalm = new THREE.Mesh(new THREE.CapsuleGeometry(0.32, 1.35, 12, 28), metal);
    robotPalm.position.set(1.55, 0.04, 0);
    robotPalm.rotation.z = -Math.PI / 2;
    robotPalm.scale.set(0.7, 1, 0.44);
    group.add(robotPalm);

    const fingertips = [];
    for (let i = 0; i < 4; i += 1) {
      const y = -0.36 + i * 0.22;
      const humanFinger = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.82, 8, 18), skin);
      humanFinger.position.set(-0.55, y, 0);
      humanFinger.rotation.z = Math.PI / 2 - i * 0.04;
      const robotFinger = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.76, 8, 18), metal);
      robotFinger.position.set(0.55, y + 0.04, 0.02);
      robotFinger.rotation.z = -Math.PI / 2 + i * 0.035;
      group.add(humanFinger, robotFinger);
      fingertips.push([humanFinger.position, robotFinger.position]);
    }

    const arcs = fingertips.map(([from, to], index) => {
      const mid = new THREE.Vector3(0, from.y + 0.03, 0.3 + index * 0.015);
      const curve = new THREE.CatmullRomCurve3([from.clone(), mid, to.clone()]);
      const line = makeLine(curve.getPoints(24), 0xff4692, 0.74);
      group.add(line);
      return line;
    });

    const nodes = [];
    for (let i = 0; i < 18; i += 1) {
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.025 + (i % 5 === 0 ? 0.02 : 0), 12, 12), spark);
      node.position.set(-0.85 + Math.random() * 1.7, -0.55 + Math.random() * 1.1, -0.15 + Math.random() * 0.45);
      nodes.push(node);
      group.add(node);
    }

    const onTick = (event) => {
      const t = event.detail.elapsed;
      group.rotation.y = Math.sin(t * 0.18) * 0.12;
      humanPalm.position.x = -1.55 + Math.sin(t * 0.45) * 0.04;
      robotPalm.position.x = 1.55 - Math.sin(t * 0.45) * 0.04;
      arcs.forEach((arc, index) => {
        arc.material.opacity = 0.42 + Math.sin(t * 3 + index) * 0.28;
      });
      nodes.forEach((node, index) => {
        node.scale.setScalar(0.8 + Math.sin(t * 2.5 + index) * 0.35);
        node.position.y += Math.sin(t + index) * 0.0008;
      });
    };
    mount.addEventListener('scene-tick', onTick);

    return () => mount.removeEventListener('scene-tick', onTick);
  }, 'three-scene workbench-scene');
}
