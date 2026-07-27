import { motion } from "framer-motion";

/**
 * Ladrillos muy pequeños flotando de fondo en toda la página.
 * Extremadamente sutiles, nunca compiten con el contenido.
 */
export function ScrollBricks() {
  const bricks = Array.from({ length: 14 }, (_, i) => ({
    left: `${(i * 7.7) % 100}%`,
    top: `${(i * 11.3) % 100}%`,
    duration: 14 + ((i * 1.3) % 10),
    delay: (i * 0.7) % 6,
    size: 6 + ((i * 3) % 6),
  }));

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {bricks.map((b, i) => (
        <motion.span
          key={i}
          className="absolute rounded-[1px] bg-primary/10 dark:bg-primary/15"
          style={{ left: b.left, top: b.top, width: b.size * 2, height: b.size }}
          animate={{ y: [0, -40, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
