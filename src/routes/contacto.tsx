import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { PageShell } from "@/components/PageShell";
import { LINKS } from "@/constants/portfolio";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Nadia Cendra" },
      {
        name: "description",
        content: "Formulario de contacto de Nadia Cendra. Backend Developer en formación.",
      },
      { property: "og:title", content: "Contacto — Nadia Cendra" },
      {
        property: "og:description",
        content: "Hablemos sobre oportunidades junior en backend.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contacto,
});

type Field = "nombre" | "email" | "asunto" | "mensaje";

const LETTERS_ONLY = /^[a-zA-ZÀ-ÿ\s]+$/;

function Contacto() {
  const { t } = useI18n();
  const e = t.contact.errors;
  const schema = z.object({
    nombre: z
      .string()
      .trim()
      .min(2, e.name)
      .max(80, e.tooLong)
      .regex(LETTERS_ONLY, e.nameInvalid),
    email: z.string().trim().email(e.emailInvalid).max(200),
    asunto: z
      .string()
      .trim()
      .min(3, e.subject)
      .max(30, e.tooLong)
      .regex(LETTERS_ONLY, e.subjectInvalid),
    mensaje: z.string().trim().min(1, e.message).max(200, e.tooLong),
  });
  const [values, setValues] = useState<Record<Field, string>>({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [touched, setTouched] = useState(false);

  const isValid = schema.safeParse(values).success;

  const onChange = (f: Field) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [f]: ev.target.value }));
    if (errors[f]) setErrors((prev) => ({ ...prev, [f]: undefined }));
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as Field;
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }
    // Sin backend: abrimos el cliente de email con destino cendra.nadia.1345@gmail.com.
    const body = `${parsed.data.mensaje}\n\n— ${parsed.data.nombre}`;
    window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(
      parsed.data.asunto
    )}&body=${encodeURIComponent(body)}`;
    setValues({ nombre: "", email: "", asunto: "", mensaje: "" });
    setErrors({});
    toast.success(t.contact.sent);
  };

  const fieldCls =
    "w-full border-b-2 border-foreground/20 bg-transparent py-2 font-sans text-[14px] text-foreground placeholder:text-foreground/40 transition-colors focus:border-primary focus:outline-none disabled:opacity-50";

  const placeholders: Record<Field, string> = {
    nombre: t.contact.placeholders.name,
    email: t.contact.placeholders.email,
    asunto: t.contact.placeholders.subject,
    mensaje: t.contact.placeholders.message,
  };

  return (
    <PageShell eyebrow={t.contact.eyebrow}>
      <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
        {t.contact.title1}<span className="text-primary">{t.contact.title2}</span>
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-foreground/70">
        {t.contact.lead}
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onSubmit={onSubmit}
          noValidate
          className="space-y-4"
          aria-label={t.contact.formLabel}
        >
          {(["nombre", "email", "asunto"] as const).map((f) => (
            <div key={f}>
              <label
                htmlFor={f}
                className="block font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/60"
              >
                {f === "nombre" ? t.contact.name : f === "email" ? t.contact.email : t.contact.subject}
              </label>
              <input
                id={f}
                type={f === "email" ? "email" : "text"}
                value={values[f]}
                onChange={onChange(f)}
                placeholder={placeholders[f]}
                maxLength={f === "asunto" ? 30 : undefined}
                aria-invalid={!!errors[f]}
                aria-describedby={errors[f] ? `${f}-err` : undefined}
                className={fieldCls}
                autoComplete={f === "email" ? "email" : f === "nombre" ? "name" : "off"}
              />
              {errors[f] && (
                <p id={`${f}-err`} className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {errors[f]}
                </p>
              )}
            </div>
          ))}

          <div>
            <div className="flex items-baseline justify-between">
              <label
                htmlFor="mensaje"
                className="block font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/60"
              >
                {t.contact.message}
              </label>
              <span
                aria-hidden
                className="font-mono text-[10px] tracking-[0.2em] text-foreground/40"
              >
                {values.mensaje.length} / 200
              </span>
            </div>
            <textarea
              id="mensaje"
              rows={4}
              value={values.mensaje}
              onChange={onChange("mensaje")}
              placeholder={placeholders.mensaje}
              maxLength={200}
              aria-invalid={!!errors.mensaje}
              aria-describedby={errors.mensaje ? "mensaje-err" : undefined}
              className={fieldCls + " resize-none"}
            />
            {errors.mensaje && (
              <p id="mensaje-err" className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                {errors.mensaje}
              </p>
            )}
          </div>

          <motion.button
            whileHover={isValid ? { scale: 1.02 } : undefined}
            whileTap={isValid ? { scale: 0.98 } : undefined}
            type="submit"
            disabled={!isValid}
            aria-disabled={!isValid}
            className="inline-flex items-center gap-2 bg-primary px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-primary-foreground transition-all hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-primary disabled:hover:text-primary-foreground"
          >
            {t.contact.send} <span aria-hidden>→</span>
          </motion.button>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-5"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/60">
            {t.contact.asideTitle}
          </p>
          <ul className="space-y-3 font-mono text-[12px] uppercase tracking-[0.2em]">
            {[
              ["LinkedIn", LINKS.linkedin],
              ["GitHub", LINKS.github],
              [t.contact.bookMeeting, LINKS.calendar],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between border-b-2 border-foreground/10 pb-2.5 transition-colors hover:border-primary hover:text-primary"
                >
                  <span>{label}</span>
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </PageShell>
  );
}
