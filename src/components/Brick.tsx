import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

interface BrickProps {
  size?: "sm" | "md";
  driftDuration?: number;
  driftAmplitude?: number;
  delay?: number;
  wordAnchor?: "left" | "center" | "right";
  /**
   * Registro compartido entre los ladrillos de una columna.
   * Cada ladrillo "reserva" su índice de palabra para que ninguna
   * palabra se repita dentro de la misma columna.
   */
  usedWords?: Set<number>;
}

const FRAGMENTS = [
  { x: -22, y: -18, r: -35 },
  { x: 20, y: -22, r: 28 },
  { x: -26, y: 14, r: -18 },
  { x: 24, y: 18, r: 40 },
  { x: 0, y: -28, r: 12 },
  { x: 0, y: 22, r: -10 },
];

/** Elige un índice al azar que no esté reservado en `used` ni sea `exclude`. */
function pickIndex(wordsLength: number, used: Set<number> | undefined, exclude?: number): number {
  const available: number[] = [];
  for (let i = 0; i < wordsLength; i++) {
    if (i === exclude) continue;
    if (used && used.has(i)) continue;
    available.push(i);
  }
  if (available.length === 0) {
    // Todas reservadas: caer a cualquiera distinta de exclude
    let next = Math.floor(Math.random() * wordsLength);
    if (exclude !== undefined) while (next === exclude) next = Math.floor(Math.random() * wordsLength);
    return next;
  }
  return available[Math.floor(Math.random() * available.length)];
}

/**
 * Un ladrillo. Flota lento y en hover "explota"
 * en fragmentos revelando una palabra clave, luego se reforma.
 */
export function Brick({
  size = "md",
  driftDuration = 9,
  driftAmplitude = 18,
  delay = 0,
  wordAnchor = "center",
  usedWords,
}: BrickProps) {
  const { t } = useI18n();
  const words = t.brickWords;
  const [exploded, setExploded] = useState(false);
  const [wordIndex, setWordIndex] = useState<number>(() => {
    const idx = pickIndex(words.length, usedWords);
    usedWords?.add(idx);
    return idx;
  });
  const word = words[wordIndex % words.length];
  const timer = useRef<number | null>(null);
  const indexRef = useRef(wordIndex);
  indexRef.current = wordIndex;

  useEffect(() => {
    // Reservar el índice inicial por si el registro llegó después del primer render
    usedWords?.add(wordIndex);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dims = size === "sm" ? { w: 34, h: 14 } : { w: 54, h: 22 };

  const trigger = () => {
    if (exploded) return;
    const current = indexRef.current;
    // Elegir una palabra distinta a la actual y que no esté en uso en la columna
    const next = pickIndex(words.length, usedWords, current);
    if (usedWords) {
      usedWords.delete(current);
      usedWords.add(next);
    }
    setWordIndex(next);
    setExploded(true);
    if (timer.current) window.clearTimeout(timer.current);
    // Duración total ~1.75s: la palabra queda visible entre 1.5s y 2s
    timer.current = window.setTimeout(() => setExploded(false), 1750);
  };

  const horizontalAnchor =
    wordAnchor === "left" ? "left-0" : wordAnchor === "right" ? "right-0" : "left-1/2 -translate-x-1/2";

  const safeMaxWidth = wordAnchor === "center" ? "calc(100vw - 32px)" : "calc(100vw - 40px)";

  return (
    <motion.div
      className="relative"
      style={{ width: dims.w, height: dims.h }}
      animate={{ y: [0, -driftAmplitude, 0] }}
      transition={{
        duration: driftDuration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onMouseEnter={trigger}
      onFocus={trigger}
      tabIndex={-1}
    >
      {/* Ladrillo entero */}
      <motion.div
        aria-hidden={exploded}
        className="absolute inset-0 rounded-[2px] bg-primary shadow-[0_2px_0_0_rgba(0,0,0,0.25)]"
        animate={{ opacity: exploded ? 0 : 1, scale: exploded ? 0.9 : 1 }}
        transition={{ duration: 0.18 }}
      />

      {/* Fragmentos */}
      <AnimatePresence>
        {exploded &&
          FRAGMENTS.map((f, i) => (
            <motion.span
              key={i}
              initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
              animate={{ x: f.x, y: f.y, rotate: f.r, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute left-1/2 top-1/2 block rounded-[1px] bg-primary"
              style={{
                width: dims.w / 3,
                height: dims.h / 2,
                marginLeft: -(dims.w / 6),
                marginTop: -(dims.h / 4),
              }}
            />
          ))}
      </AnimatePresence>

      {/* Palabra revelada */}
      <AnimatePresence>
        {exploded && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3, delay: 0.12 }}
            className={`pointer-events-none absolute top-1/2 block -translate-y-1/2 whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary ${horizontalAnchor}`}
            style={{
              maxWidth: safeMaxWidth,
              overflow: "visible",
            }}
          >
            {word}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
