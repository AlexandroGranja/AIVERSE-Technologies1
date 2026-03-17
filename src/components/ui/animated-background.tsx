import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const EARTH_TEXTURE_URL = "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg";
const EARTH_CLOUDS_URL = "https://threejs.org/examples/textures/planets/earth_clouds_1024.png";

function createGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  if (!ctx) return null;

  const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.24, "rgba(122,195,255,0.9)");
  gradient.addColorStop(0.58, "rgba(0,160,255,0.3)");
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function drawPolygon(
  ctx: CanvasRenderingContext2D,
  points: Array<[number, number]>,
  fill: string,
  stroke: string
) {
  if (!points.length) return;

  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (let index = 1; index < points.length; index += 1) {
    ctx.lineTo(points[index][0], points[index][1]);
  }
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();
}

function createPlanetTexture() {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) return null;

  const backgroundGradient = ctx.createLinearGradient(0, 0, width, height);
  backgroundGradient.addColorStop(0, "#030712");
  backgroundGradient.addColorStop(0.35, "#07192f");
  backgroundGradient.addColorStop(0.68, "#0b2f57");
  backgroundGradient.addColorStop(1, "#031120");
  ctx.fillStyle = backgroundGradient;
  ctx.fillRect(0, 0, width, height);

  const atmosphere = ctx.createRadialGradient(width * 0.32, height * 0.24, 20, width * 0.42, height * 0.46, width * 0.62);
  atmosphere.addColorStop(0, "rgba(255,255,255,0.22)");
  atmosphere.addColorStop(0.18, "rgba(147,223,255,0.16)");
  atmosphere.addColorStop(0.44, "rgba(27,125,214,0.08)");
  atmosphere.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = atmosphere;
  ctx.fillRect(0, 0, width, height);

  const continents: Array<Array<[number, number]>> = [
    [
      [290, 230], [420, 180], [530, 218], [560, 320], [500, 392], [372, 372], [292, 312],
    ],
    [
      [800, 190], [940, 165], [1100, 210], [1180, 315], [1140, 438], [1014, 470], [866, 426], [790, 314],
    ],
    [
      [1190, 516], [1316, 470], [1450, 520], [1518, 620], [1472, 760], [1330, 812], [1210, 748], [1148, 618],
    ],
    [
      [582, 530], [720, 482], [818, 562], [792, 742], [690, 842], [566, 760], [540, 622],
    ],
  ];

  continents.forEach((polygon) => {
    drawPolygon(ctx, polygon, "rgba(210,245,255,0.18)", "rgba(117,204,255,0.42)");
  });

  ctx.strokeStyle = "rgba(100, 210, 255, 0.18)";
  ctx.lineWidth = 1.2;
  for (let index = 0; index < 24; index += 1) {
    const x = 220 + index * 62;
    ctx.beginPath();
    ctx.moveTo(x, 140);
    ctx.lineTo(x, 880);
    ctx.stroke();
  }

  for (let index = 0; index < 13; index += 1) {
    const y = 150 + index * 54;
    ctx.beginPath();
    ctx.moveTo(150, y);
    ctx.lineTo(1880, y);
    ctx.stroke();
  }

  const nodes: Array<[number, number]> = [];
  const nodeBands = [
    { xStart: 240, xEnd: 560, yStart: 190, yEnd: 400, count: 24 },
    { xStart: 790, xEnd: 1160, yStart: 170, yEnd: 470, count: 28 },
    { xStart: 1160, xEnd: 1500, yStart: 490, yEnd: 800, count: 24 },
    { xStart: 540, xEnd: 820, yStart: 490, yEnd: 830, count: 24 },
  ];

  nodeBands.forEach((band) => {
    for (let index = 0; index < band.count; index += 1) {
      nodes.push([
        band.xStart + Math.random() * (band.xEnd - band.xStart),
        band.yStart + Math.random() * (band.yEnd - band.yStart),
      ]);
    }
  });

  ctx.strokeStyle = "rgba(120, 225, 255, 0.24)";
  ctx.lineWidth = 1;
  for (let index = 0; index < nodes.length; index += 1) {
    const current = nodes[index];
    for (let connection = index + 1; connection < nodes.length; connection += 1) {
      const target = nodes[connection];
      const dx = current[0] - target[0];
      const dy = current[1] - target[1];
      const distance = Math.hypot(dx, dy);
      if (distance < 120 && Math.random() > 0.58) {
        ctx.beginPath();
        ctx.moveTo(current[0], current[1]);
        ctx.lineTo(target[0], target[1]);
        ctx.stroke();
      }
    }
  }

  nodes.forEach(([x, y]) => {
    const radius = 2 + Math.random() * 2.4;
    const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 5.5);
    glow.addColorStop(0, "rgba(255,255,255,0.95)");
    glow.addColorStop(0.4, "rgba(114,214,255,0.65)");
    glow.addColorStop(1, "rgba(114,214,255,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, radius * 5.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(234,249,255,0.95)";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

function createStarfield(texture: THREE.Texture | null) {
  const group = new THREE.Group();
  const positions = new Float32Array(320 * 3);
  for (let index = 0; index < 320; index += 1) {
    const radius = 4.2 + Math.random() * 3.4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[index * 3 + 2] = radius * Math.cos(phi);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    map: texture ?? undefined,
    size: 0.05,
    transparent: true,
    opacity: 0.72,
    color: new THREE.Color("#b8ebff"),
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  group.add(new THREE.Points(geometry, material));

  const sparkleGeometry = new THREE.BufferGeometry();
  const sparklePositions = new Float32Array(80 * 3);
  for (let index = 0; index < 80; index += 1) {
    const radius = 3.9 + Math.random() * 2.8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    sparklePositions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    sparklePositions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    sparklePositions[index * 3 + 2] = radius * Math.cos(phi);
  }
  sparkleGeometry.setAttribute("position", new THREE.BufferAttribute(sparklePositions, 3));

  const sparkles = new THREE.Points(
    sparkleGeometry,
    new THREE.PointsMaterial({
      map: texture ?? undefined,
      size: 0.11,
      transparent: true,
      opacity: 0.95,
      color: new THREE.Color("#eefcff"),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  group.add(sparkles);
  return group;
}

function createPlanetNetwork(radius: number) {
  const points: THREE.Vector3[] = [];
  for (let index = 0; index < 120; index += 1) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    points.push(
      new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      )
    );
  }

  const linePositions: number[] = [];
  for (let index = 0; index < points.length; index += 1) {
    const current = points[index];
    let added = 0;
    for (let targetIndex = index + 1; targetIndex < points.length; targetIndex += 1) {
      const target = points[targetIndex];
      if (current.distanceTo(target) < radius * 0.72 && Math.random() > 0.52) {
        linePositions.push(current.x, current.y, current.z, target.x, target.y, target.z);
        added += 1;
      }
      if (added >= 3) break;
    }
  }

  const linesGeometry = new THREE.BufferGeometry();
  linesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
  const lines = new THREE.LineSegments(
    linesGeometry,
    new THREE.LineBasicMaterial({
      color: new THREE.Color("#6ed3ff"),
      transparent: true,
      opacity: 0.09,
      blending: THREE.AdditiveBlending,
    })
  );

  const nodeGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const nodes = new THREE.Points(
    nodeGeometry,
    new THREE.PointsMaterial({
      color: new THREE.Color("#ebfbff"),
      size: 0.038,
      transparent: true,
      opacity: 0.46,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );

  const network = new THREE.Group();
  network.add(lines);
  network.add(nodes);
  return network;
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

export const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 12);

    const ambientLight = new THREE.AmbientLight(0xa7d7ff, 1.55);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xc4ebff, 2.1);
    keyLight.position.set(-4, 3, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x2da7ff, 0.06);
    rimLight.position.set(5, -2, 4);
    scene.add(rimLight);

    const planetGroup = new THREE.Group();
    scene.add(planetGroup);

    const planetTexture = createPlanetTexture();
    const glowTexture = createGlowTexture();
    const textureLoader = new THREE.TextureLoader();

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(3.1, 96, 96),
      new THREE.MeshStandardMaterial({
        map: planetTexture ?? undefined,
        color: new THREE.Color("#dff5ff"),
        emissive: new THREE.Color("#0b2540"),
        emissiveIntensity: 0.06,
        roughness: 0.72,
        metalness: 0.06,
        transparent: true,
        opacity: 0.96,
      })
    );
    planetGroup.add(sphere);

    const clouds = new THREE.Mesh(
      new THREE.SphereGeometry(3.18, 72, 72),
      new THREE.MeshLambertMaterial({
        color: new THREE.Color("#dff8ff"),
        transparent: true,
        opacity: 0.03,
        depthWrite: false,
      })
    );
    planetGroup.add(clouds);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(3.28, 64, 64),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#63c9ff"),
        transparent: true,
        opacity: 0,
        side: THREE.BackSide,
      })
    );
    planetGroup.add(atmosphere);

    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(3.17, 44, 44),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#7fd7ff"),
        transparent: true,
        opacity: 0,
        wireframe: true,
      })
    );
    planetGroup.add(shell);

    const network = createPlanetNetwork(3.17);
    planetGroup.add(network);

    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture ?? undefined,
        color: new THREE.Color("#72d9ff"),
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    glow.scale.set(8.5, 8.5, 1);
    planetGroup.add(glow);

    const stars = createStarfield(glowTexture);
    scene.add(stars);

    const disposeOnCleanup: THREE.Texture[] = [];
    textureLoader.load(EARTH_TEXTURE_URL, (loadedTexture) => {
      loadedTexture.colorSpace = THREE.SRGBColorSpace;
      loadedTexture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
      loadedTexture.needsUpdate = true;
      (sphere.material as THREE.MeshStandardMaterial).map = loadedTexture;
      (sphere.material as THREE.MeshStandardMaterial).needsUpdate = true;
      disposeOnCleanup.push(loadedTexture);
    });

    textureLoader.load(EARTH_CLOUDS_URL, (loadedTexture) => {
      loadedTexture.colorSpace = THREE.SRGBColorSpace;
      loadedTexture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
      loadedTexture.needsUpdate = true;
      (clouds.material as THREE.MeshLambertMaterial).map = loadedTexture;
      (clouds.material as THREE.MeshLambertMaterial).needsUpdate = true;
      disposeOnCleanup.push(loadedTexture);
    });

    let scrollProgress = 0;
    let rafId = 0;

    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const updateScrollProgress = () => {
      const servicesSection = document.getElementById("servicos");
      const stopPoint = servicesSection
        ? Math.max(servicesSection.offsetTop - window.innerHeight * 0.2, 1)
        : Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);

      scrollProgress = Math.min(window.scrollY / stopPoint, 1);
    };

    const animate = () => {
      rafId = window.requestAnimationFrame(animate);

      const progress = prefersReducedMotion ? 0 : easeOutCubic(scrollProgress);
      const x = -0.42 + progress * 1.18;
      const y = 2.95 - progress * 5.7;
      const scale = 1.42 - progress * 0.78;
      const opacity = 0.96 - progress * 0.34;
      const hiddenFactor = 1 - progress;

      planetGroup.position.set(x, y, 0);
      planetGroup.scale.setScalar(scale);
      planetGroup.rotation.x = 0.22 + progress * 0.1;
      planetGroup.rotation.z = -0.12 + progress * 0.2;

      sphere.rotation.y = progress * 2.65;
      network.rotation.y = progress * 2.95;
      shell.rotation.y = progress * 2.38;
      shell.rotation.x = 0.1 + progress * 0.08;
      clouds.rotation.y = progress * 2.9 + 0.18;
      stars.rotation.y = progress * 0.22;

      (sphere.material as THREE.MeshStandardMaterial).opacity = opacity;
      (clouds.material as THREE.MeshLambertMaterial).opacity = 0.012 + hiddenFactor * 0.01;
      (shell.material as THREE.MeshBasicMaterial).opacity = 0;
      (atmosphere.material as THREE.MeshBasicMaterial).opacity = 0;
      (glow.material as THREE.SpriteMaterial).opacity = 0;

      renderer.render(scene, camera);
    };

    updateSize();
    updateScrollProgress();
    animate();

    window.addEventListener("resize", updateSize);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("scroll", updateScrollProgress);
      window.cancelAnimationFrame(rafId);
      renderer.dispose();
      planetTexture?.dispose();
      glowTexture?.dispose();
      disposeOnCleanup.forEach((texture) => texture.dispose());
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.LineSegments || object instanceof THREE.Sprite) {
          object.geometry?.dispose?.();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material?.dispose?.();
          }
        }
      });
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
    </div>
  );
};
