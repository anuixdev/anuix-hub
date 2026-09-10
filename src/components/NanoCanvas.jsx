import React, { useRef, useEffect, useState } from 'react';

// --- PROYECCIÓN 3D ISOMÉTRICA ---
function project3D(x, y, z, scale, rotX, rotY, cx, cy) {
  const x1 = x * Math.cos(rotY) + z * Math.sin(rotY);
  const z1 = -x * Math.sin(rotY) + z * Math.cos(rotY);
  const y2 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
  const z2 = y * Math.sin(rotX) + z1 * Math.cos(rotX);
  const cameraDist = 3.5;
  const fov = cameraDist / (cameraDist + z2);

  return {
    x: cx + x1 * scale * fov,
    y: cy + y2 * scale * fov,
  };
}

// --- CATÁLOGO DE FIGURAS 3D ---
const FIGURAS = [
  {
    nombre: 'FIGURA: CUBO ISOMÉTRICO 3D',
    fn: (p, scale, t, cx, cy) => {
      const S = 0.60;
      const edges = [
        [-S,-S,-S,  S,-S,-S], [ S,-S,-S,  S, S,-S], [ S, S,-S, -S, S,-S], [-S, S,-S, -S,-S,-S],
        [-S,-S, S,  S,-S, S], [ S,-S, S,  S, S, S], [ S, S, S, -S, S, S], [-S, S, S, -S,-S, S],
        [-S,-S,-S, -S,-S, S], [ S,-S,-S,  S,-S, S], [ S, S,-S,  S, S, S], [-S, S,-S, -S, S, S],
      ];
      const e = edges[Math.floor(p * edges.length) % edges.length];
      const sub = (p * edges.length) % 1;
      return project3D(
        e[0] + (e[3] - e[0]) * sub,
        e[1] + (e[4] - e[1]) * sub,
        e[2] + (e[5] - e[2]) * sub,
        scale * 0.32, t * 0.0006, t * 0.0008, cx, cy
      );
    },
  },
  {
    nombre: 'FIGURA: PIRÁMIDE VECTORIAL 3D',
    fn: (p, scale, t, cx, cy) => {
      const S = 0.65, baseY = 0.50, apexY = -0.50;
      const edges = [
        [-S, baseY, -S,  S, baseY, -S], [ S, baseY, -S,  S, baseY,  S],
        [ S, baseY,  S, -S, baseY,  S], [-S, baseY,  S, -S, baseY, -S],
        [-S, baseY, -S,  0, apexY,  0], [ S, baseY, -S,  0, apexY,  0],
        [ S, baseY,  S,  0, apexY,  0], [-S, baseY,  S,  0, apexY,  0],
      ];
      const e = edges[Math.floor(p * edges.length) % edges.length];
      const sub = (p * edges.length) % 1;
      return project3D(
        e[0] + (e[3] - e[0]) * sub,
        e[1] + (e[4] - e[1]) * sub,
        e[2] + (e[5] - e[2]) * sub,
        scale * 0.32, 0.28, t * 0.0008, cx, cy
      );
    },
  },
  {
    nombre: 'FIGURA: DIAMANTE / OCTAEDRO 3D',
    fn: (p, scale, t, cx, cy) => {
      const S = 0.65, H = 0.70;
      const edges = [
        [-S, 0,  0,  0, 0,-S], [ 0, 0,-S,  S, 0,  0], [ S, 0,  0,  0, 0, S], [ 0, 0, S, -S, 0,  0],
        [-S, 0,  0,  0,-H, 0], [ 0, 0,-S,  0,-H, 0], [ S, 0,  0,  0,-H, 0], [ 0, 0, S,  0,-H, 0],
        [-S, 0,  0,  0, H, 0], [ 0, 0,-S,  0, H, 0], [ S, 0,  0,  0, H, 0], [ 0, 0, S,  0, H, 0],
      ];
      const e = edges[Math.floor(p * edges.length) % edges.length];
      const sub = (p * edges.length) % 1;
      return project3D(
        e[0] + (e[3] - e[0]) * sub,
        e[1] + (e[4] - e[1]) * sub,
        e[2] + (e[5] - e[2]) * sub,
        scale * 0.32, t * 0.0006, t * 0.0008, cx, cy
      );
    },
  },
  {
    nombre: 'FIGURA: ESFERA DE ANILLOS ORBITALES',
    fn: (p, scale, t, cx, cy) => {
      const ring = Math.floor(p * 3);
      const theta = (p * 3 % 1) * Math.PI * 2;
      const r = 0.65;
      let x = 0, y = 0, z = 0;
      if (ring === 0) { x = Math.cos(theta) * r; y = Math.sin(theta) * r; z = 0; }
      else if (ring === 1) { x = Math.cos(theta) * r; y = 0; z = Math.sin(theta) * r; }
      else { y = Math.cos(theta) * r; z = Math.sin(theta) * r; }
      return project3D(x, y, z, scale * 0.32, t * 0.0006, t * 0.0007, cx, cy);
    },
  },
  {
    nombre: 'FIGURA: PRISMA HEXAGONAL 3D',
    fn: (p, scale, t, cx, cy) => {
      const hexSide = Math.floor(p * 6);
      const sub = (p * 6) % 1;
      const a1 = (hexSide * Math.PI) / 3;
      const a2 = ((hexSide + 1) * Math.PI) / 3;
      const r = 0.60, topY = -0.50, btmY = 0.50;
      const part = Math.floor(sub * 3), s = (sub * 3) % 1;
      let x = 0, y = 0, z = 0;
      if (part === 0) {
        x = (Math.cos(a1) + (Math.cos(a2) - Math.cos(a1)) * s) * r;
        z = (Math.sin(a1) + (Math.sin(a2) - Math.sin(a1)) * s) * r;
        y = topY;
      } else if (part === 1) {
        x = (Math.cos(a1) + (Math.cos(a2) - Math.cos(a1)) * s) * r;
        z = (Math.sin(a1) + (Math.sin(a2) - Math.sin(a1)) * s) * r;
        y = btmY;
      } else {
        x = Math.cos(a1) * r;
        z = Math.sin(a1) * r;
        y = topY + (btmY - topY) * s;
      }
      return project3D(x, y, z, scale * 0.32, 0.35, t * 0.0007, cx, cy);
    },
  },
];

const TOTAL_BOTS = 1100;
const PALETA = ['#0a0a0a', '#222222', '#555555', '#888888', '#b5b5b5'];

export default function NanoCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [selectedFigure, setSelectedFigure] = useState(null);

  useEffect(() => {
    // Selección aleatoria fija para toda la sesión
    const fig = FIGURAS[Math.floor(Math.random() * FIGURAS.length)];
    setSelectedFigure(fig);

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animId;
    let cx = 300, cy = 200, viewScale = 300;

    const updateSize = () => {
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      if (cw > 20 && ch > 20) {
        if (canvas.width !== cw || canvas.height !== ch) {
          canvas.width = cw;
          canvas.height = ch;
        }
        cx = cw / 2;
        cy = ch / 2 - 8;
        viewScale = Math.min(cw, ch);
      }
    };
    updateSize();

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(container);

    const bots = Array.from({ length: TOTAL_BOTS }, (_, i) => ({
      id: i,
      x: cx + (Math.random() - 0.5) * 40,
      y: cy + (Math.random() - 0.5) * 40,
      vx: 0,
      vy: 0,
      tx: cx,
      ty: cy,
      color: PALETA[Math.floor(Math.random() * PALETA.length)],
      size: Math.random() < 0.25 ? 2.2 : (Math.random() < 0.75 ? 1.4 : 0.9),
      k: 0.05 + Math.random() * 0.025,
    }));

    const render = (time) => {
      updateSize();

      ctx.fillStyle = 'rgba(250, 250, 250, 0.28)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < TOTAL_BOTS; i++) {
        const b = bots[i];
        const p = i / TOTAL_BOTS;
        const tgt = fig.fn(p, viewScale, time, cx, cy);

        b.tx = tgt.x;
        b.ty = tgt.y;

        let dx = b.tx - b.x;
        let dy = b.ty - b.y;
        b.vx = (b.vx + dx * b.k) * 0.82;
        b.vy = (b.vy + dy * b.k) * 0.82;
        b.x += b.vx + (Math.random() - 0.5) * 0.35;
        b.y += b.vy + (Math.random() - 0.5) * 0.35;

        ctx.fillStyle = b.color;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="canvas-inner" ref={containerRef}>
      <div className="canvas-overlay-top">
        SÍNTESIS POR PUNTOS [CANVAS 2D]<br />
        MATRIZ: 1.100 NANOBOTS<br />
        ESCALA DE GRISES: MONO-PBR
      </div>
      <div className="figure-badge">
        {selectedFigure ? selectedFigure.nombre : 'CALCULANDO FIGURA...'}
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
}