export type Lang = "es" | "en";

export const dict = {
  es: {
    brand: { line1: "Lógica backend.", line2: "Valor humano." },
    nav: {
      linkedin: "LinkedIn",
      contact: "Contacto",
      about: "Sobre mí",
      stack: "Stack",
      projects: "Proyectos",
      explore: "Explorá",
      back: "Volver al inicio",
      langLabel: "Cambiar a inglés",
    },
    home: {
      role: "Backend Developer",
      subrole: "Técnica Analista de Sistemas",
      intro1: "Doy mis primeros pasos profesionales en desarrollo, con cerca de ",
      months: "5 meses de práctica",
      intro2: " en simulaciones y entornos IT colaborativos, sostenidos por ",
      factory: "7 años de trabajo en fábrica",
      intro3:
        " y una etapa emprendedora en venta directa y diseño digital. Todavía estoy creciendo técnicamente. Ese es, justamente, el punto de partida.",
      hint: "Deslizá el mouse sobre los ladrillos rojos y conoce un poco más sobre mis habilidades",
    },
    about: {
      eyebrow: "01 · Sobre mí",
      title1: "Un camino que se construye ",
      title2: "un ladrillo a la vez.",
      timelineLabel: "Línea de tiempo",
      story: [
        "Todavía estoy construyendo mi camino en IT.",
        "Mi experiencia técnica es inicial: cerca de seis meses de práctica en simulaciones y entornos IT colaborativos con Java, Spring Boot y Python.",
        "No vengo a aparentar seniority. Vengo a sumar, aprender y sostener el trabajo con criterio.",
        "Antes de programar pasé siete años en fábrica. Ahí aprendí disciplina, responsabilidad, trabajo bajo presión y compromiso.",
        "Después emprendí en venta directa y diseño gráfico. Allí desarrollé comunicación, escucha activa y organización.",
        "Hoy combino esas experiencias con el desarrollo backend. Mi objetivo es seguir creciendo dentro de un equipo donde pueda aportar mientras continúo aprendiendo.",
      ],
      timeline: [
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
      ],
    },
    stack: {
      eyebrow: "02 · Stack & habilidades",
      title1: "Herramientas ",
      and: "y",
      title2: " personas.",
      lead: "Lo técnico y lo humano tienen el mismo peso. Todavía estoy aprendiendo, y por eso lo listo con honestidad.",
      tech: "Tecnologías",
      human: "Habilidades humanas",
      humanSkills: [
        "Comunicación",
        "Empatía",
        "Adaptabilidad",
        "Responsabilidad",
        "Compromiso",
        "Trabajo en equipo",
        "Resolución de problemas",
        "Aprendizaje continuo",
      ],
    },
    projects: {
      eyebrow: "03 · Proyectos",
      title1: "Pocos proyectos, ",
      title2: "contados con honestidad.",
      lead: "Prefiero mostrar cómo pienso y trabajo antes que inflar resultados.",
      details: "Ver detalles",
      problem: "Problema",
      solution: "Solución",
      learned: "Aprendizajes",
      techs: "Tecnologías",
      shot: "Captura del proyecto",
      shotNote: "(placeholder — próximamente)",
      github: "Ver en GitHub",
      noRepo: "Repositorio no público",
      demo: "Ver demo",
      notFoundTitle: "Ese proyecto no existe.",
      notFoundText: "Puede que el enlace esté roto o que el proyecto todavía no esté publicado.",
      notFoundLink: "← Ver todos los proyectos",
      items: {
        "mentor-virtual": {
          name: "Mentor Virtual",
          tagline: "Un asistente conversacional pensado para acompañar a estudiantes.",
          context: "Proyecto colaborativo — Innova Lab",
          problem:
            "Los estudiantes tenían dudas frecuentes que se repetían y no había un canal que las respondiera de forma rápida y ordenada.",
          solution:
            "Un asistente conversacional que orienta sobre contenidos, responde preguntas frecuentes y deriva al humano cuando hace falta.",
          learned:
            "Trabajar en un equipo real con roles definidos, entender un dominio ajeno y comunicar avances con claridad.",
        },
        aura: {
          name: "AURA",
          tagline: "Backend Java dentro de una práctica profesional intensiva.",
          context: "Smart Projects — Foo Talent Group",
          problem:
            "Practicar el flujo real de un equipo backend: convenciones, ramas, pull requests y revisiones cruzadas.",
          solution:
            "Sumé código en Spring Boot dentro del sistema del programa, integrada al ritmo de un equipo con seniority mixta.",
          learned:
            "Cómo se organiza un equipo backend en la vida real, con revisiones y ritmo compartido.",
        },
        inventario: {
          name: "Sistema de Gestión de Inventario",
          tagline: "Un CRUD completo, desde cero, para practicar sostener un proyecto.",
          context: "Proyecto personal",
          problem:
            "Necesitaba practicar por mi cuenta un CRUD completo: entidades, relaciones, operaciones de stock y pruebas.",
          solution:
            "Modelé el dominio, implementé la API, escribí pruebas y sostuve el proyecto de principio a fin.",
          learned:
            "Sostener un proyecto sin nadie que me pase el enunciado. Equivocarme, corregir y seguir.",
        },
      },
    },
    contact: {
      eyebrow: "Contacto",
      title1: "Hablemos. ",
      title2: "Sin humo.",
      lead: "Estoy abierta a oportunidades junior en backend, prácticas y equipos que valoren compromiso y ganas reales de aprender.",
      formLabel: "Formulario de contacto",
      name: "Nombre",
      email: "Correo electrónico",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar mensaje",
      sent: "Se abrió tu cliente de email. ¡Gracias!",
      asideTitle: "O escribime por acá",
      errors: {
        name: "Contame tu nombre",
        emailInvalid: "Email inválido",
        subject: "Un asunto breve",
        message: "Contame algo más",
        tooLong: "Demasiado largo",
      },
    },
    brickWords: [
      "JAVA",
      "PYTHON",
      "BACKEND",
      "EMPATÍA",
      "COMUNICACIÓN",
      "RESOLUCIÓN DE PROBLEMAS",
      "ADAPTABILIDAD",
      "RESPONSABILIDAD",
      "COMPROMISO",
      "SPRING BOOT",
      "MYSQL",
      "TRABAJO EN EQUIPO",
      "APRENDIZAJE CONTINUO",
    ],
  },

  en: {
    brand: { line1: "Backend logic.", line2: "Human value." },
    nav: {
      linkedin: "LinkedIn",
      contact: "Contact",
      about: "About me",
      stack: "Stack",
      projects: "Projects",
      explore: "Explore",
      back: "Back to home",
      langLabel: "Switch to Spanish",
    },
    home: {
      role: "Backend Developer",
      subrole: "Systems Analyst Technician",
      intro1: "I'm taking my first professional steps in development, with about ",
      months: "5 months of hands-on practice",
      intro2: " in simulations and collaborative IT environments, backed by ",
      factory: "7 years of factory work",
      intro3:
        " and a self-employed stage in direct sales and digital design. I'm still growing technically. That, precisely, is the starting point.",
      hint: "Hover the red bricks to discover a bit more about my skills",
    },
    about: {
      eyebrow: "01 · About me",
      title1: "A path built ",
      title2: "one brick at a time.",
      timelineLabel: "Timeline",
      story: [
        "I'm still building my path in IT.",
        "My technical experience is early-stage: about six months of practice in simulations and collaborative IT environments with Java, Spring Boot and Python.",
        "I'm not here to fake seniority. I'm here to contribute, learn and hold the work with good judgement.",
        "Before coding I spent seven years in a factory. That's where I learned discipline, responsibility, working under pressure and commitment.",
        "Then I ran my own business in direct sales and graphic design. There I developed communication, active listening and organisation.",
        "Today I combine those experiences with backend development. My goal is to keep growing inside a team where I can contribute while I keep learning.",
      ],
      timeline: [
        {
          period: "2026 — today",
          title: "Backend Developer in training",
          detail:
            "About 6 months of practice in simulations and collaborative IT environments with Java, Spring Boot and Python.",
        },
        {
          period: "2023 — 2025",
          title: "Self-employed business",
          detail:
            "Direct sales and digital design of graphic pieces. Communication, active listening and organisation with clients.",
        },
        {
          period: "2016 — 2023",
          title: "Factory operator",
          detail:
            "Seven years holding shifts, discipline, work under pressure and commitment to the team.",
        },
      ],
    },
    stack: {
      eyebrow: "02 · Stack & skills",
      title1: "Tools ",
      and: "and",
      title2: " people.",
      lead: "The technical and the human carry the same weight. I'm still learning, and that's why I list it honestly.",
      tech: "Technologies",
      human: "Human skills",
      humanSkills: [
        "Communication",
        "Empathy",
        "Adaptability",
        "Responsibility",
        "Commitment",
        "Teamwork",
        "Problem solving",
        "Continuous learning",
      ],
    },
    projects: {
      eyebrow: "03 · Projects",
      title1: "A few projects, ",
      title2: "told honestly.",
      lead: "I'd rather show how I think and work than inflate results.",
      details: "View details",
      problem: "Problem",
      solution: "Solution",
      learned: "Takeaways",
      techs: "Technologies",
      shot: "Project screenshot",
      shotNote: "(placeholder — coming soon)",
      github: "View on GitHub",
      noRepo: "Repository not public",
      demo: "View demo",
      notFoundTitle: "That project doesn't exist.",
      notFoundText: "The link may be broken or the project may not be published yet.",
      notFoundLink: "← See all projects",
      items: {
        "mentor-virtual": {
          name: "Virtual Mentor",
          tagline: "A conversational assistant designed to support students.",
          context: "Collaborative project — Innova Lab",
          problem:
            "Students had recurring questions and there was no channel answering them quickly and in an organised way.",
          solution:
            "A conversational assistant that guides on course content, answers FAQs and escalates to a human when needed.",
          learned:
            "Working in a real team with defined roles, understanding an unfamiliar domain and communicating progress clearly.",
        },
        aura: {
          name: "AURA",
          tagline: "Java backend inside an intensive professional practice.",
          context: "Smart Projects — Foo Talent Group",
          problem:
            "Practising the real flow of a backend team: conventions, branches, pull requests and peer reviews.",
          solution:
            "I contributed Spring Boot code to the program's system, integrated into the rhythm of a mixed-seniority team.",
          learned: "How a backend team is organised in real life, with reviews and a shared pace.",
        },
        inventario: {
          name: "Inventory Management System",
          tagline: "A complete CRUD, from scratch, to practise carrying a project through.",
          context: "Personal project",
          problem:
            "I needed to practise a full CRUD on my own: entities, relationships, stock operations and tests.",
          solution:
            "I modelled the domain, implemented the API, wrote tests and carried the project from start to finish.",
          learned:
            "Carrying a project with nobody handing me the brief. Making mistakes, fixing them and moving on.",
        },
      },
    },
    contact: {
      eyebrow: "Contact",
      title1: "Let's talk. ",
      title2: "No fluff.",
      lead: "I'm open to junior backend roles, internships and teams that value commitment and a real willingness to learn.",
      formLabel: "Contact form",
      name: "Name",
      email: "Email address",
      subject: "Subject",
      message: "Message",
      send: "Send message",
      sent: "Your email client just opened. Thank you!",
      asideTitle: "Or reach me here",
      errors: {
        name: "Tell me your name",
        emailInvalid: "Invalid email",
        subject: "A short subject",
        message: "Tell me a bit more",
        tooLong: "Too long",
      },
    },
    brickWords: [
      "JAVA",
      "PYTHON",
      "BACKEND",
      "EMPATHY",
      "COMMUNICATION",
      "PROBLEM SOLVING",
      "ADAPTABILITY",
      "RESPONSIBILITY",
      "COMMITMENT",
      "SPRING BOOT",
      "MYSQL",
      "TEAMWORK",
      "CONTINUOUS LEARNING",
    ],
  },
} as const;

export type Dict = (typeof dict)["es"];
