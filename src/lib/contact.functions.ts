import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const OWNER_EMAIL = "cendra.nadia.1345@gmail.com";

const contactSchema = z.object({
  nombre: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(200),
  asunto: z.string().trim().min(3).max(30),
  mensaje: z.string().trim().min(1).max(200),
});

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const LOVABLE_API_KEY = process.env["LOVABLE_API_KEY"];
    const RESEND_API_KEY = process.env["RESEND_API_KEY"];
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      throw new Error("Email service is not configured");
    }

    const nombre = escapeHtml(data.nombre);
    const email = escapeHtml(data.email);
    const asunto = escapeHtml(data.asunto);
    const mensaje = escapeHtml(data.mensaje).replaceAll("\n", "<br />");

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "Portfolio Nadia Cendra <onboarding@resend.dev>",
        to: [OWNER_EMAIL],
        reply_to: data.email,
        subject: `[Portfolio] ${data.asunto}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
            <h2 style="color: #740323; margin: 0 0 16px;">Nuevo mensaje desde tu portfolio</h2>
            <p style="margin: 0 0 8px;"><strong>Nombre:</strong> ${nombre}</p>
            <p style="margin: 0 0 8px;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 16px;"><strong>Asunto:</strong> ${asunto}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <p style="margin: 0; line-height: 1.6;">${mensaje}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <p style="margin: 0; font-size: 12px; color: #888;">Respondé directamente a este correo para contestarle a ${nombre}.</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Resend gateway failed [${response.status}]: ${errorBody}`);
      throw new Error("No se pudo enviar el mensaje. Intentá de nuevo.");
    }

    return { ok: true };
  });
