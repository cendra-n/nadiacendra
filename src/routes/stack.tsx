import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { TECH_SKILLS, HUMAN_SKILLS } from "@/constants/portfolio";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack — Nadia Cendra" },
      {
        name: "description",
        content:
          "Tecnologías y habilidades humanas de Nadia Cendra: Java, Spring Boot, Python, Angular y las soft skills que sostienen el trabajo.",
      },
      { property: "og:title", content: "Stack — Nadia Cendra" },
      {
        property: "og:description",
        content: "Lo técnico y lo humano, en igualdad de peso.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Stack,
});

function SkillItem({ label, index, variant }: { label: string; index: number; variant: "tech" | "human" }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ x: 4 }}
      className={
        "group flex items-center justify-between border-b py-3 font-mono text-sm uppercase tracking-[0.14em] transition-colors " +
        (variant === "tech"
          ? "border-foreground/10 text-foreground hover:border-primary hover:text-primary"
          : "border-foreground/10 text-foreground hover:border-primary hover:text-primary")
      }
    >
      <span>{label}</span>
      <span
        aria-hidden
        className="text-primary opacity-0 transition-opacity group-hover:opacity-100"
      >
        ▸
      </span>
    </motion.li>
  );
}

function Stack() {
  return (
    <PageShell eyebrow="02 · Stack & habilidades">
      <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
        Herramientas <span className="text-primary">y</span> personas.
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-foreground/70">
        Lo técnico y lo humano tienen el mismo peso. Todavía estoy aprendiendo, y por eso lo listo con
        honestidad.
      </p>

      <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-16">
        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
            Tecnologías
          </h2>
          <ul className="mt-6">
            {TECH_SKILLS.map((s, i) => (
              <SkillItem key={s} label={s} index={i} variant="tech" />
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
            Habilidades humanas
          </h2>
          <ul className="mt-6">
            {HUMAN_SKILLS.map((s, i) => (
              <SkillItem key={s} label={s} index={i} variant="human" />
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
