export const PROJECTS_DATA = {
  es: {
    tag: 'MOD:03 // REGISTRO DE SISTEMAS',
    title: 'Proyectos & Despliegues',
    subtitle: 'Arquitecturas de software, sistemas autónomos, visión artificial e investigación aplicada.',
    viewCode: 'Código',
    viewInspect: 'Inspeccionar',
    projects: [
     {
        id: 'rv-map',
        title: 'RV-MAP • TFG (2026)',
        desc: 'Pipeline de visión artificial con YOLOv8 y segmentación de instancias para evaluar daños estructurales y calcular rutas seguras de movibilidad en tiempo real.',
        status: 'Activo',
        statusType: 'active',
        tags: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Spatial Analysis'],
        repoUrl: 'https://github.com/anuixdev/RV-MAP',
        tabs: [
          {
            id: 'resumen',
            label: '01 // ARQUITECTURA',
            content: [
              { 
                type: 'text', 
                value: 'Desarrollo de un pipeline integral de visión artificial optimizado para escenarios de catástrofe y apoyo a equipos de rescate. Basado en modelos de segmentación de instancias (YOLOv8-seg), el sistema procesa ortofotos y capturas aéreas de alta resolución en tiempo real para detectar, perfilar y clasificar amenazas sobre el terreno: vías obstruidas, derrumbes estructurales, escombros transitables y fallos de infraestructura.' 
              },
              { 
                type: 'text', 
                value: 'Transformación directa de las máscaras de segmentación en matrices de coste y fricción espacial. El núcleo algorítmico discretiza el entorno en grafos ponderados de transitabilidad, aplicando búsqueda heurística de caminos para calcular rutas seguras de evacuación y penetración de unidades de emergencia con baja latencia de inferencia y soporte para ejecución desconectada en el borde (Edge AI).' 
              }
            ]
          },
          {
            id: 'media',
            label: '02 // INFERENCIA',
            content: [
              { 
                type: 'comparison', 
                beforeUrl: 'src/assets/images/projects/RV-MAP/11046.jpg', 
                afterUrl: 'src/assets/images/projects/RV-MAP/mapchart_11046.jpg',
                beforeLabel: 'RAW_INPUT',
                afterLabel: 'PROCESSED_OUTPUT',
                caption: 'Segmentación de instancias sobre zona de desastre natural y trazado de instancias.' 
              }
            ]
          },
          {
              id: 'resultados',
              label: '03 // EVALUACIÓN & MEMORIA',
              content: [
                {
                  type: 'grade',
                  label: 'CALIFICACIÓN DEL TRIBUNAL',
                  value: '10.0 / 10.0',
                  badge: 'SOBRESALIENTE + CANDIDATURA A MATRÍCULA DE HONOR'
                },
                {
                  type: 'quote',
                  title: 'AUTHOR_LOG // COMENTARIO',
                  value: 'Este proyecto representó el cierre de mi etapa académica uniendo dos áreas críticas: visión por computador y análisis de grafos en tiempo real. Más allá de entrenar un modelo o ajustar hiperparámetros, el verdadero reto de ingeniería fue diseñar el puente algorítmico entre la inferencia visual y la toma de decisiones: transformar píxeles detectados en vectores de movimiento seguros y deterministas sobre los que un equipo de rescate pueda confiar en una situación crítica.'
                },
                {
                  type: 'document',
                  url: 'public/Memoria del TFG.pdf',
                  label: 'Memoria Técnica Completa',
                  format: 'PDF_DOCUMENT'
                }
              ]
            }
        ]
      },
      {
        id: 'hydron',
        title: 'HYDRON • Mentor (2026)',
        desc: 'Arquitectura de control y telemetría para un AUV biomimético propulsado por pila de hidrógeno y aislamiento de aerogel, concebido para misiones de exploración profunda, entre otras funciones adicionales.',
        status: 'Galardonado',
        statusType: 'completed',
        tags: ['Sistemas Autónomos', 'Pila de Hidrógeno', 'Biomimética', 'Telemetría'],
        repoUrl: null,
        tabs: [
          {
            id: 'resumen',
            label: '01 // INGENIERÍA',
            content: [
                { 
                    type: 'text', 
                    value: 'Vehículo submarino autónomo (AUV) biomimético concebido para la inspección no invasiva de cables de telecomunicaciones y parques eólicos marinos. Su arquitectura adopta la hidrodinámica de una mantarraya para planear en silencio acústico total, eliminando el impacto sonoro y la turbulencia que generan los ROVs convencionales sobre los ecosistemas marinos.' 
                },
                { 
                    type: 'text', 
                    value: 'Sustitución de acumuladores químicos tradicionales de litio por un sistema miniaturizado de pila de combustible de hidrógeno con aislamiento térmico de grado aeroespacial. La integración permite generar energía eléctrica continua bajo el agua, multiplicando la autonomía de patrulla oceanográfica con cero emisiones (subproducto exclusivo de agua pura).' 
                },
                { 
                    type: 'text', 
                    value: 'Defensa técnica del prototipo ante jurado en la Gran Final del certamen de innovación, validando la viabilidad operativa de la sensorización embarcada, el balance de potencia y el modelo Robotics-as-a-Service (RaaS) para la protección de infraestructuras críticas.' 
                }
            ]
          },
          {
            id: 'video',
            label: '02 // EXPERIENCIA',
            content: [
              { 
                type: 'video', 
                url: 'https://www.youtube.com/embed/c_XJ5MuGpME' 
              }
            ]
          },
          {
            id: 'galeria',
            label: '03 // REGISTRO VISUAL',
            content: [
              {
                type: 'gallery',
                data: 'BANCO DE DATOS',
                images: [
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_021.JPG', caption: 'COMIENZO_EVENTO' },
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_114.JPG', caption: 'PRACTICA_1' },
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_121.JPG', caption: 'PRACTICA_2' },
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_139.JPG', caption: 'MENTORES' },
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_167.JPG', caption: 'DIA_FINAL' },
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_301.JPG', caption: 'PRESENTACIÓN' },
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_445.JPG', caption: 'PREMIACIÓN' },

                ]
              }
            ]
          }
        ]
      },
      {
        id: 'cafre',
        title: 'CAFRE • Miembro (2022)',
        desc: 'Sistema mecatrónico para transporte pesado diseñado para desplegar superficies aerodinámicas activas y recuperar energía cinética durante fases de deceleración sostenida.',
        status: 'Galardonado',
        statusType: 'completed',
        inspectTag: 'AERODYNAMICS // ENERGY_HARVESTING',
        tags: ['Mecatrónica', 'Simulación CFD', 'Eficiencia Energética', 'Vehículos Pesados'],
        repoUrl: null,
        tabs: [
          {
            id: 'resumen',
            label: '01 // MODELO TÉCNICO',
            content: [
                { 
                    type: 'text', 
                    value: 'Diseño de un subsistema mecatrónico de aerofrenado activo para vehículos pesados articulados. Mediante superficies de geometría variable que se despliegan de forma dinámica según la velocidad y la tasa de deceleración, el sistema genera resistencia aerodinámica inducida controlada para asistir en la retención, preservando en todo momento la estabilidad direccional y el control del remolque.' 
                },
                { 
                    type: 'text', 
                    value: 'Integración de una etapa de recuperación de energía cinética para canalizar la potencia de retención hacia acumuladores eléctricos auxiliares. Esta disipación aerodinámica combinada mitiga el sobrecalentamiento y la fatiga térmica en zapatas y discos de fricción (evitando el fenómeno de *brake fade* en descensos prolongados) y recorta el consumo de combustible al reducir la demanda del motor y el alternador.' 
                }
            ]
          },
          {
            id: 'video',
            label: '02 // PRESENTACIÓN',
            content: [
              { 
                type: 'video', 
                url: 'https://www.youtube.com/embed/a2TDTsMsywo', 
                caption: 'Presentación del proyecto CAFRE en la 7ª Edición de Audi Creativity Challenge' 
              }
            ]
          },
          {
            id: 'docs',
            label: '03 // RECONOCIMIENTO',
            content: [
              { 
                type: 'document',
                url: 'public/Audi Creativity Challenge _ Carta de reconocimiento Alexandru Nicolas Untaru.pdf', 
                label: 'Visualizar Reconocimiento obtenido' 
              }
            ]
          }
        ]
      }
    ]
  },
  en: {
    tag: 'MOD:03 // SYSTEM REGISTRY',
    title: 'Projects & Deployments',
    subtitle: 'Software architectures, autonomous systems, computer vision, and applied engineering.',
    viewCode: 'Source',
    viewInspect: 'Inspect',
    projects: [
      {
        id: 'rv-map',
        title: 'RV-MAP • BSc Thesis (2026)',
        desc: 'Computer vision pipeline utilizing YOLOv8 and instance segmentation to assess structural disaster damage and compute safe movibility routes in real time.',
        status: 'Active',
        statusType: 'active',
        inspectTag: 'CV_INFERENCE // EDGE_AI',
        tags: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Spatial Analysis'],
        repoUrl: 'https://github.com/anuixdev/RV-MAP',
        tabs: [
          {
            id: 'resumen',
            label: '01 // ARCHITECTURE',
            content: [
              { 
                type: 'text', 
                value: 'Full-stack computer vision pipeline engineered for post-disaster assessment and tactical rescue operations. Leveraging instance segmentation architectures (YOLOv8-seg), the system processes high-resolution aerial orthophotos in real time to isolate, delineate, and classify environmental hazards: road obstructions, structural debris, compromised passages, and collapsed infrastructure.' 
              },
              { 
                type: 'text', 
                value: 'Direct conversion of raw inference masks into spatial cost and friction matrices. The core algorithmic engine maps the terrain into weighted traversability graphs, applying heuristic pathfinding routines to compute optimal, low-risk evacuation and entry vectors for first responders with low inference latency and edge-deployment readiness.' 
              }
            ]
          },
          {
            id: 'media',
            label: '02 // INFERENCE',
            content: [
              { 
                type: 'comparison', 
                beforeUrl: 'src/assets/images/projects/RV-MAP/11046.jpg', 
                afterUrl: 'src/assets/images/projects/RV-MAP/mapchart_11046.jpg',
                beforeLabel: 'RAW_INPUT',
                afterLabel: 'PROCESSED_OUTPUT',
                caption: 'Segmentation of instances over natural disaster area and layout of instances.' 
              }
            ]
          },
          {
            id: 'resultados',
            label: '03 // EVALUATION & THESIS',
            content: [
              {
                type: 'grade',
                label: 'EXAMINATION BOARD GRADE',
                value: '10.0 / 10.0',
                badge: 'MAXIMUM DISTINCTION + APPLICATION FOR ENROLMENT OF HONOUR'
              },
              {
                type: 'quote',
                title: 'AUTHOR_LOG // STATEMENT',
                value: 'This project marked the capstone of my academic degree, bridging two critical domains: computer vision and real-time graph pathfinding. Beyond training a model or tuning hyperparameters, the true engineering challenge lay in architecting the algorithmic bridge between visual inference and decision-making: transforming detected pixels into safe, deterministic motion vectors that a rescue unit can rely on in mission-critical scenarios.'
              },
              {
                type: 'document',
                url: 'public/Memoria del TFG.pdf',
                label: 'Full Technical Thesis Report',
                format: 'PDF_DOCUMENT'
              }
            ]
          }
        ]
      },
      {
        id: 'hydron',
        title: 'HYDRON • Driver (2026)',
        desc: 'Control architecture and telemetry stack for a biomimetic AUV powered by hydrogen fuel cells and aerogel insulation for prolonged oceanic exploration, among other additional functions',
        status: 'Awarded',
        statusType: 'completed',
        inspectTag: 'EMBEDDED_SYS // AUV_CORE',
        tags: ['Autonomous Systems', 'Fuel Cells', 'Biomimicry', 'Telemetry'],
        repoUrl: null,
        tabs: [
          {
            id: 'resumen',
            label: '01 // ENGINEERING',
            content: [
                { 
                    type: 'text', 
                    value: 'Biomimetic autonomous underwater vehicle (AUV) designed for non-invasive inspection of subsea fiber-optic cables and offshore wind farms. Inspired by the hydrodynamics of a manta ray, its gliding propulsion operates in near-total acoustic silence, eliminating the destructive noise pollution and turbulence that conventional ROVs inflict on marine life.' 
                },
                { 
                    type: 'text', 
                    value: 'Replaces limited lithium-ion battery packs with a miniaturized hydrogen fuel cell system protected by aerospace-grade thermal insulation. This architecture generates continuous onboard electricity underwater, drastically extending oceanic patrol endurance while operating with zero emissions (pure water byproduct).' 
                },
                { 
                    type: 'text', 
                    value: 'Live technical demonstration and defense before an expert jury at the innovation finals, validating embedded telemetry, onboard power management, and the operational viability of a Robotics-as-a-Service (RaaS) model for critical subsea infrastructure.' 
                }
            ]
          },
          {
            id: 'video',
            label: '02 // EXPERIENCE',
            content: [
              { 
                type: 'video', 
                url: 'https://www.youtube.com/embed/c_XJ5MuGpME' 
              }
            ]
          }, 
          {
            id: 'galeria',
            label: '03 // VISUAL REGISTER',
            content: [
              {
                type: 'gallery',
                data: 'DATA BANK',
                images: [
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_021.JPG', caption: 'START' },
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_114.JPG', caption: 'PRACTICE_1' },
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_121.JPG', caption: 'PRACTICE_2' },
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_139.JPG', caption: 'DRIVERS' },
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_167.JPG', caption: 'FINAL_DAY' },
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_301.JPG', caption: 'PRESENTATION' },
                  { url: 'src/assets/images/projects/hydron/Audicrea 2026_445.JPG', caption: 'AWARDS' },

                ]
              }
            ]
          }
        ]
      },
      {
        id: 'cafre',
        title: 'CAFRE • Member (2026)',
        desc: 'Mechatronic system for heavy-duty freight vehicles designed to deploy active aerodynamic surfaces and harvest kinetic energy during sustained deceleration.',
        status: 'Awarded',
        statusType: 'completed',
        inspectTag: 'AERODYNAMICS // ENERGY_HARVESTING',
        tags: ['Mechatronics', 'CFD Simulation', 'Energy Efficiency', 'Heavy Freight'],
        repoUrl: null,
        tabs: [
          {
            id: 'resumen',
            label: '01 // TECHNICAL MODEL',
            content: [
                { 
                    type: 'text', 
                    value: 'Design of an active mechatronic aerobraking subsystem for heavy-duty articulated transport. Utilizing variable-geometry surfaces deployed dynamically according to vehicle velocity and deceleration rates, the system introduces controlled aerodynamic drag to assist braking while preserving trailer articulation and directional stability.' 
                },
                { 
                    type: 'text', 
                    value: 'Integration of a kinetic energy harvesting stage to route deceleration power into auxiliary onboard electrical storage. This hybrid aerodynamic mitigation strategy prevents thermal saturation and brake fade on friction discs during sustained descents, extending component lifecycle and trimming fuel consumption by reducing parasitic engine load.' 
                }
            ]
          },
           {
            id: 'video',
            label: '02 // PRESENTATION',
            content: [
              { 
                type: 'video', 
                url: 'https://www.youtube.com/embed/a2TDTsMsywo', 
                caption: 'Presentation of the CAFRE project in the 7th Edition of the Audi Creativity Challenge' 
              }
            ]
          },
          {
            id: 'docs',
            label: '03 // RECOGNITION',
            content: [
              { 
                type: 'link',
                url: 'public/Audi Creativity Challenge _ Carta de reconocimiento Alexandru Nicolas Untaru.pdf', 
                label: 'View Recognition obtained' 
              }
            ]
          }
        ]
      }
    ]
  }
};