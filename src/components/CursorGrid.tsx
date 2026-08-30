import { useEffect, useRef } from "react";

interface Props {
  /** Tamaño de cada celda de la grilla (px). */
  cellSize?: number;
  /** Radio de influencia del cursor (px). */
  radius?: number;
  /** Tiempo que una celda se mantiene encendida tras salir del radio (ms). */
  holdTime?: number;
  /** Duración del desvanecido (ms). */
  fadeDuration?: number;
  /** Grosor de línea de las celdas activas. */
  lineWidth?: number;
  /** Opacidad máxima del trazo activo (0-1). */
  maxOpacity?: number;
  /** Pulso radial al hacer click. */
  clickPulse?: boolean;
  /** Velocidad de expansión del pulso (px/s). */
  pulseSpeed?: number;
}

interface Pulse {
  x: number;
  y: number;
  born: number;
}

/**
 * Grilla técnica de fondo que reacciona al cursor: las celdas cercanas
 * se iluminan con el token --primary del tema y se desvanecen suavemente.
 * Click = pulso radial. Canvas fijo, pointer-events none: no interfiere.
 */
export function CursorGrid({
  cellSize = 70,
  radius = 140,
  holdTime = 400,
  fadeDuration = 800,
  lineWidth = 1.2,
  maxOpacity = 1,
  clickPulse = true,
  pulseSpeed = 600,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let primary = "rgb(116 3 35)";

    const readColor = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim();
      if (v) primary = v;
    };
    readColor();
    const observer = new MutationObserver(readColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Convierte "oklch(...)" / "rgb(...)" a la misma función con alpha
    const withAlpha = (a: number) => {
      const base = primary.slice(0, -1);
      return `${base} / ${a})`;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: -9999, y: -9999 };
    // Última vez que cada celda estuvo "caliente" (key: "col,row")
    const heat = new Map<string, number>();
    const pulses: Pulse[] = [];

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onClick = (e: PointerEvent) => {
      if (clickPulse) pulses.push({ x: e.clientX, y: e.clientY, born: performance.now() });
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onClick);
    document.documentElement.addEventListener("pointerleave", onLeave);

    const tick = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / cellSize);
      const rows = Math.ceil(h / cellSize);

      // Marcar celdas dentro del radio del cursor
      const c0 = Math.max(0, Math.floor((mouse.x - radius) / cellSize));
      const c1 = Math.min(cols - 1, Math.floor((mouse.x + radius) / cellSize));
      const r0 = Math.max(0, Math.floor((mouse.y - radius) / cellSize));
      const r1 = Math.min(rows - 1, Math.floor((mouse.y + radius) / cellSize));
      for (let c = c0; c <= c1; c++) {
        for (let r = r0; r <= r1; r++) {
          const cx = c * cellSize + cellSize / 2;
          const cy = r * cellSize + cellSize / 2;
          const d = Math.hypot(cx - mouse.x, cy - mouse.y);
          if (d <= radius) heat.set(`${c},${r}`, now);
        }
      }

      // Pulso de click: enciende celdas al pasar el frente de onda
      for (const p of pulses) {
        const age = (now - p.born) / 1000;
        const front = age * pulseSpeed;
        const band = cellSize * 1.5;
        for (let c = 0; c < cols; c++) {
          for (let r = 0; r < rows; r++) {
            const cx = c * cellSize + cellSize / 2;
            const cy = r * cellSize + cellSize / 2;
            const d = Math.hypot(cx - p.x, cy - p.y);
            if (Math.abs(d - front) < band) heat.set(`${c},${r}`, now);
          }
        }
      }
      // Limpia pulsos viejos (frente fuera de pantalla)
      for (let i = pulses.length - 1; i >= 0; i--) {
        const age = (now - pulses[i].born) / 1000;
        if (age * pulseSpeed > Math.hypot(w, h) + cellSize * 2) pulses.splice(i, 1);
      }

      // Dibujar celdas calientes con fade suave
      ctx.lineWidth = lineWidth;
      for (const [key, t] of heat) {
        const idle = now - t;
        if (idle > holdTime + fadeDuration) {
          heat.delete(key);
          continue;
        }
        const fade = idle <= holdTime ? 1 : 1 - (idle - holdTime) / fadeDuration;
        const a = fade * maxOpacity * 0.5;
        const [c, r] = key.split(",").map(Number);
        ctx.strokeStyle = withAlpha(a);
        ctx.strokeRect(c * cellSize + 0.5, r * cellSize + 0.5, cellSize - 1, cellSize - 1);
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onClick);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [cellSize, radius, holdTime, fadeDuration, lineWidth, maxOpacity, clickPulse, pulseSpeed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 h-full w-full"
    />
  );
}
