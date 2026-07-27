import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ScrollBricks } from "./ScrollBricks";
import { BackHome } from "./BackHome";
import { LINKS } from "@/constants/portfolio";

interface Props {
  children: ReactNode;
  showBack?: boolean;
  eyebrow?: string;
}

export function PageShell({ children, showBack = true, eyebrow }: Props) {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <ScrollBricks />

      <header className="relative z-30 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          to="/"
          className="font-display text-sm font-semibold leading-tight tracking-tight"
        >
          Lógica backend.
          <br />
          <span className="text-primary">Valor humano.</span>
        </Link>
        <nav className="flex items-center gap-2 md:gap-3">
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-primary bg-primary px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            LinkedIn
          </a>
          <Link
            to="/contacto"
            className="rounded-full border border-primary bg-primary px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            Contacto
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-20 mx-auto max-w-4xl px-6 pb-24 pt-8 md:px-10"
      >
        {showBack && (
          <div className="mb-10">
            <BackHome />
          </div>
        )}
        {eyebrow && (
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
            {eyebrow}
          </p>
        )}
        {children}
      </motion.main>
    </div>
  );
}
