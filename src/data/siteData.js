export const NAV_LABELS = {
  es: {
    home: 'Inicio',
    about: 'Sobre mí',
    portfolio: 'Portafolio',
    contact: 'Contacto',
    cv: 'CV',
    settings: 'Ajustes',
    cfgHeader: 'SYS_CONFIG // PREFERENCIAS',
    langLabel: 'IDIOMA',
    themeLabel: 'TEMA',
    cvModal: {
      title: 'DOC_SELECTOR // CV',
      prompt: '> Elige la versión del documento:',
      options: [
        {
          badge: 'ES',
          label: 'Versión en Español',
          meta: 'Curriculum Vitae [PDF]',
          url: '/CV_Alexandru_Nicolas_Untaru_Ionescu.pdf'
        },
        {
          badge: 'EN',
          label: 'English Version',
          meta: 'Resume [PDF]',
          url: '/EN_CV_Alexandru_Nicolas_Untaru_Ionescu.pdf'
        }
      ]
    }
  },
  en: {
    home: 'Home',
    about: 'About me',
    portfolio: 'Portfolio',
    contact: 'Contact',
    cv: 'CV',
    settings: 'Settings',
    cfgHeader: 'SYS_CONFIG // PREFERENCES',
    langLabel: 'LANGUAGE',
    themeLabel: 'THEME',
    cvModal: {
      title: 'DOC_SELECTOR // CV',
      prompt: '> Select document locale:',
      options: [
        {
          badge: 'ES',
          label: 'Spanish Version',
          meta: 'Curriculum Vitae [PDF]',
          url: '/CV_Alexandru_Nicolas_Untaru_Ionescu.pdf'
        },
        {
          badge: 'EN',
          label: 'English Version',
          meta: 'Resume [PDF]',
          url: '/EN_CV_Alexandru_Nicolas_Untaru_Ionescu.pdf'
        }
      ]
    }
  },
};

export const HERO_PHRASES = {
  es: [
    'Ingeniero de Software e IA',
    'Ingeniero Informático',
    'Enfocado en Sistemas Escalables',
    'Integración de Modelos & IA'
  ],
  en: [
    'Software & AI Engineer',
    'Computer Engineer',
    'Scalable Systems Developer',
    'AI & Model Integration'
  ]
};

export const HERO_CONTENT = {
  es: {
    cardTitle: 'Ingeniero Informático',
    cardModule: 'MOD:01 // BIO-IDENT',
    consoleModule: 'MOD:02 // EXEC_CORE',
    statusBadge: 'ESTADO: ONLINE // DISPONIBLE',
    greeting: 'EN EL MUNDO DE LA INFORMÁTICA ME LLAMO',
    telemetryLoc: 'España // Presencial • Híbrido',
    telemetryFocus: 'React • Node • Python • Java • Y más...',
    primaryCta: 'CÓMO PIENSO Y CONSTRUYO',
    contactTag: 'MOD:05 // CANAL DE COMUNICACIÓN',
    status: 'ESTADO: ACTIVO // EN ESCUCHA',
    contactTitle: '¡Hablemos!',
    contactSubtitle: 'Disponible para incorporación inmediata a equipos de desarrollo, ingeniería de software y soluciones de IA.',
    sendMail: 'Enviar Correo',
    copyMail: 'Copiar Email',
    mailCopied: '¡Email Copiado!'
  },
  en: {
    cardTitle: 'Computer Engineer',
    cardModule: 'MOD:01 // BIO-IDENT',
    consoleModule: 'MOD:02 // EXEC_CORE',
    statusBadge: 'STATUS: ONLINE // AVAILABLE',
    greeting: 'IN THE WORLD OF COMPUTING I GO BY',
    telemetryLoc: 'Spain // On-site • Hybrid',
    telemetryFocus: 'React • Node • Python • Java • And more...',
    primaryCta: 'HOW I THINK & BUILD',
    contactTag: 'MOD:05 // TRANSMISSION GATEWAY',
    status: 'STATUS: ACTIVE // LISTENING',
    contactTitle: 'Get in touch!',
    contactSubtitle: 'Available for full-time software engineering roles, development teams, and AI projects.',
    sendMail: 'Send Email',
    copyMail: 'Copy Email',
    mailCopied: 'Email Copied!'
  }
};

export const ANUIX_CONTENT = {
  es: {
    heroBadge: 'MOD:01 // IDENTIDAD & TELEMETRÍA',
    heroStatus: 'SISTEMA NOMINAL',
    sysId: 'ID: ANX-904',
    heroTitle: 'Alexandru Nicolas Untaru Ionescu',
    heroRole: 'Ingeniero Informático // Software & Inteligencia Artificial',
    heroBio: 'Ingeniero de software centrado en backend, arquitectura de sistemas y bajo nivel. Me interesa entender qué ocurre por debajo de cada capa de abstracción para construir soluciones predecibles, eficientes y fáciles de mantener.',
    telemetry: [
      { key: 'LOC', label: 'LOCALIZACIÓN', val: 'España // Presencial o Híbrido' },
      { key: 'STACK', label: 'ESPECIALIZACIÓN', val: 'Bajo Nivel • Web • Modelos IA • Embebidos' },
      { key: 'STATUS', label: 'ESTADO', val: 'Incorporación Inmediata' },
      { key: 'CREED', label: 'METODOLOGÍA', val: 'Clean Code • Determinismo • Benchmarking' }
    ],
    expTag: 'MOD:02 // REGISTRO LABORAL & TRAYECTORIA',
    expTitle: 'Experiencia Profesional',
    expSub: 'Historial cronológico de roles técnicos, despliegues en producción y desarrollo de sistemas.',
    pendingSlot: {
      period: 'ACTUALIDAD',
      role: 'Generando nuevo puesto laboral',
      status: 'BUFFER // ASIGNANDO',
      desc: 'En búsqueda activa de nuevos retos en ingeniería de software, arquitectura de sistemas distribuidos o integración de inteligencia artificial. Preparado para incorporación y despliegue inmediato.',
      stack: ['Ingeniería de Software', 'Arquitectura de Sistemas', 'IA aplicada', 'Pipelines de inferencia']
    },
    experiences: [
      {
        period: 'FEB 2026 — JUL 2026',
        role: 'Jefe de Proyecto — Cyber & Cloud Housing',
        company: 'Telefónica Tech · Programa Talentum · Becario',
        status: 'COMPLETADO',
        isCurrent: false,
        desc: 'Gestión integral del ciclo de vida de proyectos de infraestructura Cloud Housing y gobernanza operativa bajo marcos ágiles.',
        achievements: [
          'Gestión end-to-end de despliegues Cloud Housing: control de ubicación de equipamiento físico en datacenter, creación/asignación de TAS y garantía de cumplimiento de SLAs.',
          'Liderazgo operativo y facilitación técnica de flujos de trabajo interfuncionales aplicando metodologías Agile (Scrum y Kanban).',
          'Supervisión y control de plazos críticos de entrega de infraestructura sobre los sistemas de gestión interna de Telefónica Tech.'
        ],
        stack: ['Cloud Housing', 'Scrum / Kanban', 'Gestión de SLAs', 'Infraestructura Cloud', 'Jira']
      },
      {
        period: 'OCT 2025 — ENE 2026',
        role: 'Ingeniero de Operaciones TI',
        company: 'Telefónica España · Jefatura Arquitectura y Operaciones (Red y TI) · Becario',
        status: 'COMPLETADO',
        isCurrent: false,
        desc: 'Desarrollo de herramientas de IA aplicada e intervención técnica en operaciones críticas de infraestructura de Red y TI.',
        achievements: [
          'Diseño y ejecución en menos de 30 días de una PoC funcional de chatbot corporativo con arquitectura RAG y LLMs locales (Ollama, ChromaDB, Python y TypeScript) para acelerar la migración de datos.',
          'Diagnóstico técnico y gestión operativa de incidencias bajo metodologías ágiles en entornos de telecomunicaciones de alta demanda.',
          'Reconocimiento al desempeño técnico mediante Carta de Recomendación oficial emitida por la Jefatura de Arquitectura y Operaciones.'
        ],
        stack: ['Python', 'TypeScript', 'Ollama (LLMs)', 'ChromaDB (RAG)', 'Linux', 'Red y TI']
      }
    ],
    principlesTag: 'MOD:03 // CRITERIO TÉCNICO',
    principlesTitle: 'Cómo Afronto el Software',
    principlesSub: 'Criterios prácticos que guían mis decisiones de diseño, depuración y arquitectura en el día a día.',
    principles: [
      {
        code: 'CRIT_01',
        title: 'Entender qué hay debajo',
        mantra: 'Las abstracciones resuelven problemas, pero no eliminan el coste del silicio.',
        desc: 'Antes de incorporar librerías o frameworks, me aseguro de entender qué hacen con la memoria, los hilos y la red. Conocer el bajo nivel me permite tomar decisiones de alto nivel mucho más predecibles.'
      },
      {
        code: 'CRIT_02',
        title: 'Resolver el problema real',
        mantra: 'El código más mantenible es el que resuelve la necesidad actual con claridad.',
        desc: 'Evito la sobreingeniería y el diseño especulativo para escenarios que aún no existen. Prefiero interfaces desacopladas y código directo que sea sencillo de modificar cuando el sistema lo exija.'
      },
      {
        code: 'CRIT_03',
        title: 'Fallar rápido y de forma visible',
        mantra: 'Un error evidente en el origen ahorra horas de depuración silenciosa.',
        desc: 'Priorizo tipado estricto, validaciones exhaustivas en las entradas y excepciones descriptivas. Si un estado es inválido o un dato se corrompe, el sistema debe detenerse e informar al instante, nunca degradar en silencio.'
      },
      {
        code: 'CRIT_04',
        title: 'Medir antes de optimizar',
        mantra: 'La intuición formula hipótesis; la telemetría y los datos dan la respuesta.',
        desc: 'No refactorizo por suposiciones. Ya sea ajustando un pipeline de visión artificial o reduciendo latencias en una API, primero perfilo el cuello de botella con métricas reales y luego intervengo donde hay un impacto comprobable.'
      }
    ],
    lifeTag: 'MOD:04 // VIDA EXTERNA & INTERESES',
    lifeTitle: 'Fuera de la Terminal',
    lifeSub: 'Actividades fuera de la pantalla que me ayudan a despejar la mente, ejercitar la concentración y alimentar la curiosidad.',
    lifeCards: [
      {
        status: 'SEÑAL // DINÁMICA',
        title: 'Pádel y Deportes de Raqueta',
        desc: 'Lectura rápida de trayectorias, coordinación táctica y toma de decisiones en fracciones de segundo. La vía idónea para reiniciar el foco mental tras jornadas intensas de código.'
      },
      {
        status: 'ESTADO // LECTURA',
        title: 'Lectura, Ficción & Ensayo',
        desc: 'Novelas de ciencia ficción combinadas con manuales de arquitectura y sistemas. Un hábito diario para cultivar la concentración profunda y reflexionar lejos de las pantallas.'
      },
      {
        status: 'MODO // TALLER',
        title: 'Cacharreo, Robótica y Maker',
        desc: 'Montaje de circuitos, reparación y proyectos electrónicos prácticos. El software opera en lo abstracto; construir hardware tangible devuelve la ingeniería al plano real.'
      },
      {
        status: 'MODO // DESCONEXIÓN',
        title: 'Rutas, Montaña y Naturaleza',
        desc: 'Senderismo y travesías al aire libre sin notificaciones. Salir del entorno urbano para resetear la fatiga cognitiva y asentar ideas complejas con perspectiva despejada.'
      }
    ]
  },
  en: {
    heroBadge: 'MOD:01 // IDENTITY & TELEMETRY',
    heroStatus: 'SYSTEM NOMINAL',
    sysId: 'ID: ANX-904',
    heroTitle: 'Alexandru Nicolas Untaru Ionescu',
    heroRole: 'Computer Engineer // Software & Artificial Intelligence',
    heroBio: 'Software engineer focused on backend, systems architecture, and low-level development. I care about what happens beneath the abstractions to build predictable, efficient, and maintainable software',
    telemetry: [
      { key: 'LOC', label: 'LOCATION', val: 'Spain // On-site or Hybrid' },
      { key: 'STACK', label: 'SPECIALIZATION', val: 'Low Level • Web • AI Models • Embedded' },
      { key: 'STATUS', label: 'STATUS', val: 'Available for Immediate Hire' },
      { key: 'CREED', label: 'METHODOLOGY', val: 'Clean Code • Determinism • Benchmarking' }
    ],
    expTag: 'MOD:02 // CAREER LOGS & TRAJECTORY',
    expTitle: 'Work Experience',
    expSub: 'Chronological telemetry of technical roles, production deployments, and systems development.',
    pendingSlot: {
      period: 'CURRENT',
      role: 'Generating new employment role',
      status: 'BUFFER // ALLOCATING',
      desc: 'Actively exploring forward-looking software engineering, distributed systems, and applied AI opportunities. Primed for immediate deployment and onboarding.',
      stack: ['Software Engineering', 'Systems Architecture', 'Applied AI', 'Inference Pipelines']
    },
    experiences: [
      {
        period: 'FEB 2026 — JUL 2026',
        role: 'Project Manager — Cyber & Cloud Housing',
        company: 'Telefónica Tech · Talentum Program · Intern',
        status: 'COMPLETED',
        isCurrent: false,
        desc: 'End-to-end technical lifecycle management of Cloud Housing infrastructure deployments and agile operational governance.',
        achievements: [
          'Supervised end-to-end Cloud Housing rollouts: tracking datacenter hardware locations, TAS dispatching, and enforcing strict SLA targets.',
          'Drove operational leadership and technical cross-functional alignment using Agile frameworks (Scrum and Kanban).',
          'Monitored critical infrastructure timelines and eliminated bottlenecks across Telefónica Tech internal management systems.'
        ],
        stack: ['Cloud Housing', 'Scrum / Kanban', 'SLA Governance', 'Cloud Infrastructure', 'Jira']
      },
      {
        period: 'OCT 2025 — JAN 2026',
        role: 'IT Operations',
        company: 'Telefónica España · Architecture & Operations Directorate (Network & IT) · Intern',
        status: 'COMPLETED',
        isCurrent: false,
        desc: 'Applied AI systems engineering and technical operational support within enterprise carrier-grade Network & IT architectures.',
        achievements: [
          'Engineered and delivered in under 30 days a production PoC chatbot utilizing local RAG (Ollama, ChromaDB, Python, TypeScript) to accelerate data migration workflows.',
          'Resolved technical incidents and optimized support pipelines under Agile methodologies in high-throughput enterprise infrastructure.',
          'Awarded an official Letter of Recommendation by the Architecture & Operations executive leadership for engineering impact.'
        ],
        stack: ['Python', 'TypeScript', 'Ollama (LLMs)', 'ChromaDB (RAG)', 'Linux', 'Network & IT']
      }
    ],
    principlesTag: 'MOD:03 // TECHNICAL CRITERIA',
    principlesTitle: 'How I Approach Software',
    principlesSub: 'Practical heuristics guiding my design, debugging, and architectural decisions.',
    principles: [
      {
        code: 'CRIT_01',
        title: 'Understand the Underlying Layer',
        mantra: 'Abstractions solve problems, but they never eliminate hardware costs.',
        desc: 'Before adopting third-party tools or frameworks, I make sure to understand their footprint on memory, threading, and I/O. Grounding my logic in low-level behavior leads to more predictable high-level architectures.'
      },
      {
        code: 'CRIT_02',
        title: 'Solve the Problem in Front of You',
        mantra: 'The most maintainable code solves the actual constraint cleanly.',
        desc: 'I avoid overengineering and speculative architectures designed for hypothetical scale. I focus on clean interfaces and direct implementations that remain effortless to adapt as requirements evolve.'
      },
      {
        code: 'CRIT_03',
        title: 'Fail Fast and Explicitly',
        mantra: 'An immediate crash at the boundary saves hours of silent debugging.',
        desc: 'I rely on strict typing, explicit boundary checks, and transparent error handling. If a state becomes invalid, the system must halt and expose the root cause immediately rather than corrupting downstream operations.'
      },
      {
        code: 'CRIT_04',
        title: 'Measure Before Optimizing',
        mantra: 'Intuition formulates hypotheses; telemetries and profilers provide proof.',
        desc: 'I never optimize on gut feeling. Whether fine-tuning an inference pipeline or trimming API latencies, I first isolate bottlenecks using metrics and logs, intervening only where the empirical gain is evident.'
      }
    ],
    lifeTag: 'MOD:04 // OFF-SCREEN INTERESTS',
    lifeTitle: 'Outside the Terminal',
    lifeSub: 'Personal pursuits beyond the monitor that clear my head, sustain focus, and feed curiosity.',
    lifeCards: [
      {
        status: 'SIGNAL // DYNAMICS',
        title: 'Padel & Racket Sports',
        desc: 'Fast trajectory reads, tactical team coordination, and split-second decisions. The ideal physical outlet to reset mental focus after intensive engineering sessions.'
      },
      {
        status: 'STATUS // READING',
        title: 'Fiction, Sci-Fi & Systems',
        desc: 'Sci-fi literature alongside foundational architecture and software design books. A deliberate habit to foster sustained focus and explore ideas away from screens.'
      },
      {
        status: 'MODE // WORKSHOP',
        title: 'Robotics & Hardware DIY',
        desc: 'Circuit assembly, hardware diagnostics, and maker projects. Code is abstract; building physical circuits grounds engineering intuition in the tangible world.'
      },
      {
        status: 'MODE // OFFLINE',
        title: 'Trails & Outdoors',
        desc: 'Hiking and outdoor trails with zero screens or notifications. Stepping away from urban tech environments to recover stamina and let complex ideas settle.'
      }
    ]
  }
};

export const PROJECTS_CONTENT = {
  es: {
    tag: 'MOD:03 // PORTAFOLIO',
    title: 'Proyectos Destacados',
    subtitle: 'Arquitecturas de software, sistemas autónomos e investigación aplicada.',
    viewCode: 'GitHub',
    viewDemo: 'En Vivo',
    projects: [
      {
        id: 'PRJ:01',
        title: 'HYDRON - Driver',
        status: 'ACTIVO',
        statusType: 'active',
        desc: 'Vehículo submarino autónomo (AUV) biomimético propulsado por pila de hidrógeno y aislamiento de aerogel, diseñado para exploración oceanográfica de alta autonomía y cero emisiones.',
        tags: ['AUV', 'Biomimética', 'Pila de Hidrógeno', 'Sistemas Autónomos'],
        repoUrl: null,
        demoUrl: null,
      },
      {
        id: 'PRJ:02',
        title: 'RV-MAP (TFG)',
        status: 'ACTIVO',
        statusType: 'active',
        desc: 'Sistema de visión artificial con YOLOv8 para evaluación de daños y detección de rutas de rescate en tiempo real.',
        tags: ['Python', 'YOLOv8', 'Computer Vision', 'Instance Segmentation', 'Spatial Analysis'],
        repoUrl: 'https://github.com/anuixdev/RV-MAP', 
        demoUrl: null,
      },
      {
        id: 'PRJ:03',
        title: 'CAFRE',
        status: 'FINALIZADO',
        statusType: 'completed',
        desc: 'Sistema de aerofrenado activo y recuperación de energía cinética para transporte pesado, optimizado para reducir el consumo de combustible y generar energía auxiliar.',
        tags: ['Aerodinámica', 'Regeneración Cinética', 'Vehículos Pesados', 'Eficiencia Energética'],
        repoUrl: null,
        demoUrl: null,
      }
    ]
  },
  en: {
    tag: 'MOD:03 // PORTFOLIO',
    title: 'Featured Projects',
    subtitle: 'Software architectures, autonomous systems, and applied research.',
    viewCode: 'GitHub',
    viewDemo: 'Live Demo',
    projects: [
      {
        id: 'PRJ:01',
        title: 'HYDRON - Driver',
        status: 'ACTIVE',
        statusType: 'active',
        desc: 'Biomimetic autonomous underwater vehicle (AUV) powered by hydrogen fuel cells and aerogel insulation for zero-emission, long-range marine exploration.',
        tags: ['AUV', 'Biomimicry', 'Hydrogen Fuel Cells', 'Autonomous Systems'],
        repoUrl: null,
        demoUrl: null,
      },
      {
        id: 'PRJ:02',
        title: "RV-MAP (Bachelor's Thesis)",
        status: 'ACTIVE',
        statusType: 'active',
        desc: 'Computer vision system powered by YOLOv8 to assess disaster damage and detect accessible rescue routes in real time.',
        tags: ['Python', 'YOLOv8', 'Computer Vision', 'Instance Segmentation', 'Spatial Analysis'],
        repoUrl: 'https://github.com/anuixdev/RV-MAP',
        demoUrl: null,
      },
      {
        id: 'PRJ:03',
        title: 'CAFRE',
        status: 'COMPLETED',
        statusType: 'completed',
        desc: 'Active aerobraking and kinetic energy recovery system for heavy-duty vehicles, engineered to minimize fuel consumption and generate auxiliary power.',
        tags: ['Aerodynamics', 'Kinetic Energy Recovery', 'Heavy Duty', 'Energy Efficiency'],
        repoUrl: null,
        demoUrl: null,
      }
    ]
  }
};

export const TECH_STACK_CONTENT = {
  es: {
    tag: 'MOD:04 // ARQUITECTURA TÉCNICA',
    title: 'Stack de Tecnologías',
    subtitle: 'Herramientas, frameworks y lenguajes adquiridos.',
    categories: [
      {
        code: '01',
        name: 'LENGUAJES BASE',
        items: ['Bash', 'C / C++', 'HTML5 & CSS3', 'Java', 'JavaScript', 'Python', 'Scala', 'SQL', 'TypeScript']
      },
      {
        code: '02',
        name: 'BACKEND & WEB',
        items: ['MySQL', 'React', 'REST APIs', 'Spring Boot', 'Vite']
      },
      {
        code: '03',
        name: 'DEVOPS & SISTEMAS',
        items: ['CI/CD', 'Docker', 'Git / GitHub', 'Jenkins', 'Kubernetes', 'Linux', 'MacOS', 'Windows', 'Máquinas Virtuales', 'BitBucket', 'Markdown']
      }, 
      {
        code: '04',
        name: 'IA & CIENCIA DE DATOS',
        items: ['ChromaDB', 'Hugging Face', 'LLM Integration', 'Ollama', 'OpenCode', 'OpenCV', 'Pandas', 'RAG', 'Machine Learning', 'Deep Learning']
      }
    ]
  },
  en: {
    tag: 'MOD:04 // TECHNICAL ARCHITECTURE',
    title: 'Technology Stack',
    subtitle: 'Tools, frameworks, and languages aquired.',
    categories: [
      {
        code: '01',
        name: 'CORE LANGUAGES',
        items: ['Bash', 'C / C++', 'HTML5 & CSS3', 'Java', 'JavaScript', 'Python', 'Scala', 'SQL', 'TypeScript', 'Markdown']
      },
      {
        code: '02',
        name: 'BACKEND & WEB',
        items: ['MySQL', 'React', 'REST APIs', 'Spring Boot', 'Vite']
      },
      {
        code: '03',
        name: 'DEVOPS & SYSTEMS',
        items: ['CI/CD', 'Docker', 'Git / GitHub', 'Jenkins', 'Kubernetes', 'Linux', 'MacOS', 'Windows', 'Virtual Machines', 'BitBucket', 'Markdown']
      },
      {
        code: '04',
        name: 'AI & DATA SCIENCE',
        items: ['ChromaDB', 'Hugging Face', 'LLM Integration', 'Ollama', 'OpenCode', 'OpenCV', 'Pandas', 'RAG']
      }
    ]
  }
};

export const FOOTER_CONTENT = {
  es: {
    brandDesc: 'Ingeniero Informático enfocado en arquitecturas escalables, sistemas concurrentes y modelos de IA aplicados.',
    navTitle: 'NAVEGACIÓN',
    socialTitle: 'CONEXIÓN & REDES',
    home: 'Inicio',
    about: 'Sobre mí',
    portfolio: 'Portafolio',
    contact: 'Contacto',
    cv: 'Descargar CV',
    signature: '© 2026 Alexandru Untaru · Diseñado y construido desde cero con React y CSS modular. Sin plantillas, con criterio de ingeniería · Código bajo licencia MIT · v2.5',
    core: 'NODO_CENTRAL: EN LÍNEA // ESPAÑA',
    mail: 'Correo Directo'
  },
  en: {
    brandDesc: 'Computer Engineer focused on scalable architectures, concurrent backends, and applied AI models.',
    navTitle: 'NAVIGATION',
    socialTitle: 'CONNECT & SOCIAL',
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    contact: 'Contact',
    cv: 'Download CV',
    signature: '© 2026 Alexandru Untaru · Designed and engineered from scratch with React and modular CSS. No templates, strictly engineering-driven · Code licensed under MIT · v2.3',
    core: 'CORE_NODE: ONLINE // SPAIN',
    mail: 'Direct Mail'
  }
};