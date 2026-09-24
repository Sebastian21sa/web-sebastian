export const proyectos = [
  {
    slug: "analizador-tenis-mesa",
    numero: "01",
    titulo: "Analizador de Tecnica - Tenis de Mesa",
    resumen:
      "Sistema de vision por computador y deep learning que analiza la tecnica del drive y el reves a partir de un video, entrenado con un dataset propio.",
    stack: ["Python", "TensorFlow", "MediaPipe", "Flask", "React", "Docker"],
    anio: "2026",
    repo: "https://github.com/Sebastian21sa/analizador-tenis-mesa",
    demo: "https://pongiq-murex.vercel.app",
    elProblema:
      "Jugue tenis de mesa competitivamente durante buena parte de mi vida. Al cursar una especializacion en Inteligencia Artificial, quise construir algo que combinara ambas cosas: aplicar vision por computador y deep learning a un problema donde mi criterio como jugador realmente importa.",
    comoFunciona:
      "El usuario sube un video (o graba en vivo) ejecutando un drive o un reves. El sistema extrae los puntos clave del cuerpo con MediaPipe Pose, calcula angulos articulares (codo, cadera, altura de muneca) definidos a partir de criterios tecnicos reales de tenis de mesa, y un modelo de red neuronal (TensorFlow), entrenado con un dataset propio de 538 repeticiones grabadas y etiquetadas , este predice si la ejecucion fue correcta o incorrecta.",
    resultados: [
      { label: 'Drive (accuracy)', valor: '89.2% +/- 4.7%' },
      { label: 'Reves (accuracy)', valor: '94.4% +/- 2.7%' },
      { label: 'Identificador de golpe (accuracy)', valor: '89.2% +/- 5.3%' },
      { label: 'Dataset total', valor: '538 repeticiones (4 angulos, ambas manos)' },
    ],
    limitaciones: [
      'El identificador de tipo de golpe que construi(drive vs reves) tiene ~89% de accuracy, no es perfecto: en aproximadamente 1 de cada 9 casos puede confundir el tipo de golpe, especialmente en repeticiones incorrectas de reves.',
      'Los datos del jugador zurdo (normalizados con espejo de lateralidad) no se han validado aun con accuracy por separado del resto del dataset - el numero general mezcla diestro y zurdo sin desglosar.',
      'El angulo del lado opuesto que tome para el dataset tiene una limitacion de visibilidad conocida: en ciertos frames el brazo dominante queda oculto detras del torso, y MediaPipe puede inferir una posicion poco confiable en vez de reportarla como no visible.',
      'Los criterios de "correcto" e "incorrecto" se basan en mi experiencia propia como jugador, por lo que podria inferir entre un jugador u otro.',
      'El plan gratuito de hosting impone limites practicos: tamano maximo de video por peticion, y el servicio puede tardar en responder tras periodos de inactividad.',
    ],
    imagenes: [
      { src: '/landmarks-drive.png', alt: 'Landmarks de MediaPipe sobre un drive' },
      { src: '/landmarks-reves.png', alt: 'Landmarks de MediaPipe sobre un reves' },
      { src: '/landmarks-frontal.png', alt: 'Landmarks de MediaPipe desde angulo frontal' },
    ],
    estadisticas: [ 
      { valor: 538, sufijo: '', label: 'Repeticiones en el dataset' }, 
      { valor: 95, sufijo: '%', label: 'Accuracy maximo validado' }, 
      { valor: 4, sufijo: '', label: 'Angulos de camara' }, 
      { valor: 89, sufijo: '%', label: 'Identificador de golpe' }, 
    ],
  },
  {
    slug: "simulador-compostaje",
    numero: "02",
    titulo: "Simulador de Compostaje",
    resumen:
      "Aplicacion web que evalua la calidad del compost combinando un modelo de Machine Learning entrenado con datos reales de sensores y un modulo de vision por computador que detecta contaminantes en fotos.",
    stack: ["Next.js", "TypeScript", "Python", "Computer Vision"],
    anio: "2026",
    repo: "https://github.com/Sebastian21sa/simulador-compostaje",
    demo: "https://v0-composting-simulator.vercel.app",
    elProblema:
      "El proyecto nacio como una demo con calculo heuristico (no entrenado) presentada como si fuera Machine Learning. Lo evolucione a un sistema con modelos realmente entrenados, agregando ademas un modulo de vision por computador para evaluar contaminacion visual del compost a partir de fotos.",
    comoFunciona:
      "Un RandomForestRegressor predice el Score de calidad del compost (0-100) a partir de parametros como temperatura y humedad, entrenado con 452 muestras reales tomadas con sensores (Arduino Mega + ESP-32) durante procesos de compostaje reales (dataset publico de hafsa-kibria, CC BY 4.0). En paralelo, un RandomForestClassifier categoriza esa prediccion en niveles de calidad. Para la deteccion de contaminantes, entrene una CNN compacta desde cero (sin transfer learning, por restricciones del entorno de entrenamiento) sobre un dataset publico de Johns Hopkins University (Roboflow, CC BY 4.0), reagrupando 38 clases originales en 2 (compostable / contaminante).",
    resultados: [
      { label: "Regresor (R2)", valor: "0.828" },
      { label: "Regresor (RMSE)", valor: "7.18" },
      { label: "Regresor (MAE)", valor: "4.57" },
      { label: "Clasificador (accuracy)", valor: "76.6%" },
      { label: "Detector de contaminantes (accuracy)", valor: "71.6%" },
    ],
    limitaciones: [
      "El detector de contaminantes entrena una CNN desde cero sin transfer learning (por restricciones del entorno), lo cual limita su accuracy (71.6%) frente a lo que lograria una arquitectura preentrenada.",
      "Los datasets usados son publicos, no propios: utiles para validar el enfoque, pero no reflejan necesariamente las condiciones especificas de cada usuario real.",
      "Todo el sistema vive dentro de un unico proyecto Next.js, sin backend separado — decision consciente de simplicidad de despliegue.",
    ],
    estadisticas: [ 
      { valor: 452, sufijo: '', label: 'Muestras de sensores reales' }, 
      { valor: 76, sufijo: '%', label: 'Accuracy del clasificador' }, 
      { valor: 72, sufijo: '%', label: 'Accuracy detector de contaminantes' }, 
      { valor: 2, sufijo: '', label: 'Modulos de ML combinados' }, 
    ],
  },
];
