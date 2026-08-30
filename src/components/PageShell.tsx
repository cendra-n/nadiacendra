import { motion } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { LINKS } from "@/constants/portfolio";
import { useI18n } from "@/i18n/LanguageProvider";

interface Props {
  children: ReactNode;
  eyebrow?: string;
}

export function PageShell({ children, eyebrow }: Props) {
  const { t } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const sections = [
    { to: "/sobre-mi", label: t.nav.about },
    { to: "/stack", label: t.nav.stack },
    { to: "/proyectos", label: t.nav.projects },
  ].filter((s) => !pathname.startsWith(s.to));

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 md:px-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-display text-sm font-semibold leading-tight tracking-tight transition-colors hover:text-primary"
            aria-label={t.nav.back}
          >
            <ArrowLeft
              size={15}
              className="text-primary transition-transform group-hover:-translate-x-1"
            />
            <span>
              {t.brand.line1}
              <br />
              <span className="text-primary">{t.brand.line2}</span>
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-2 md:gap-2.5">
            {sections.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="rounded-full border border-foreground/20 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                {s.label}
              </Link>
            ))}
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-primary bg-primary px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
            >
              {t.nav.linkedin}
            </a>
            <Link
              to="/contacto"
              className="rounded-full border border-primary bg-primary px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
            >
              {t.nav.contact}
            </Link>
            <LanguageToggle />
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-20 mx-auto max-w-4xl px-6 pb-24 pt-8 md:px-10"
      >
        {eyebrow && (
          <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint" />
            {eyebrow}
          </p>
        )}
        {children}
      </motion.main>
    </div>
  );
}
