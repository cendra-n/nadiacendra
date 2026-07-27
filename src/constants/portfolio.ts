export const LINKS = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  email: "nadia.cendra@example.com",
  cv: "/cv-nadia-cendra.pdf",
};

export const BRICK_WORDS = [
  "JAVA",
  "PYTHON",
  "BACKEND",
  "EMPATÍA",
  "COMUNICACIÓN",
  "RESOLUCIÓN DE PROBLEMAS",
  "ADAPTABILIDAD",
  "RESPONSABILIDAD",
  "COMPROMISO",
];

export const TECH_SKILLS = [
  "Java",
  "Spring Boot",
  "Python",
  "Git",
  "GitHub",
  "Postman",
  "MySQL",
  "SQL",
  "REST APIs",
  "TypeScript",
  "Angular",
];

export const HUMAN_SKILLS = [
  "Comunicación",
  "Empatía",
  "Adaptabilidad",
  "Responsabilidad",
  "Compromiso",
  "Trabajo en equipo",
  "Resolución de problemas",
  "Aprendizaje continuo",
];

export const TIMELINE = [
  {
    period: "2026 — hoy",
    title: "Backend Developer en formación",
    detail:
      "Cerca de 6 meses de práctica en simulaciones y entornos IT colaborativos con Java, Spring Boot y Python.",
  },
  {
    period: "2023 — 2025",
    title: "Emprendimiento independiente",
    detail:
      "Venta directa y diseño digital de piezas gráficas. Comunicación, escucha activa y organización con clientes.",
  },
  {
    period: "2016 — 2023",
    title: "Operaria de fábrica",
    detail:
      "Siete años sosteniendo horarios, disciplina, trabajo bajo presión y compromiso con el equipo.",
  },
];

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  context: string;
  problem: string;
  solution: string;
  stack: string[];
  learned: string;
  repo?: string;
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "mentor-virtual",
    name: "Mentor Virtual",
    tagline: "Un asistente conversacional pensado para acompañar a estudiantes.",
    context: "Proyecto colaborativo — Innova Lab",
    problem:
      "Los estudiantes tenían dudas frecuentes que se repetían y no había un canal que las respondiera de forma rápida y ordenada.",
    solution:
      "Un asistente conversacional que orienta sobre contenidos, responde preguntas frecuentes y deriva al humano cuando hace falta.",
    stack: ["Python", "Django", "REST APIs", "IA"],
    learned:
      "Trabajar en un equipo real con roles definidos, entender un dominio ajeno y comunicar avances con claridad.",
  },
  {
    slug: "aura",
    name: "AURA",
    tagline: "Backend Java dentro de una práctica profesional intensiva.",
    context: "Smart Projects — Foo Talent Group",
    problem:
      "Practicar el flujo real de un equipo backend: convenciones, ramas, pull requests y revisiones cruzadas.",
    solution:
      "Sumé código en Spring Boot dentro del sistema del programa, integrada al ritmo de un equipo con seniority mixta.",
    stack: ["Java", "Spring Boot", "Git", "GitHub"],
    learned: "Cómo se organiza un equipo backend en la vida real, con revisiones y ritmo compartido.",
  },
  {
    slug: "inventario",
    name: "Sistema de Gestión de Inventario",
    tagline: "Un CRUD completo, desde cero, para practicar sostener un proyecto.",
    context: "Proyecto personal",
    problem:
      "Necesitaba practicar por mi cuenta un CRUD completo: entidades, relaciones, operaciones de stock y pruebas.",
    solution:
      "Modelé el dominio, implementé la API, escribí pruebas y sostuve el proyecto de principio a fin.",
    stack: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    learned: "Sostener un proyecto sin nadie que me pase el enunciado. Equivocarme, corregir y seguir.",
  },
];
