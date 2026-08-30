import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — Nadia Cendra" },
      {
        name: "description",
        content:
          "Proyectos backend de Nadia Cendra: Mentor Virtual, AURA y un sistema de gestión de inventario.",
      },
      { property: "og:title", content: "Proyectos — Nadia Cendra" },
      {
        property: "og:description",
        content: "Pocos proyectos, contados con honestidad.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProyectosLayout,
});

function ProyectosLayout() {
  return <Outlet />;
}
