# Sebastian Sanchez — Web Portafolio

Web personal construida con Next.js, pensada como un sistema escalable de casos de estudio: cada proyecto se agrega como datos, no como código nuevo.

**🔴 En vivo:** [web-sebastian.vercel.app](https://web-sebastian.vercel.app)

## Qué incluye

- **Inicio**: presentación personal y cuadrícula de proyectos.
- **Sobre mí**: historia personal, habilidades técnicas categorizadas, línea de tiempo, y CV descargable.
- **Contacto**: email, LinkedIn, GitHub, Instagram y WhatsApp (con mensaje predeterminado), como tarjetas visuales.
- **Caso de estudio por proyecto** (`/proyectos/[slug]`): página dedicada y generada dinámicamente para cada proyecto — el problema, cómo funciona, resultados medibles, y limitaciones conocidas.

## Proyectos mostrados actualmente

1. **[Analizador de Técnica — Tenis de Mesa](https://github.com/Sebastian21sa/analizador-tenis-mesa)** — visión por computador (MediaPipe) + deep learning (TensorFlow) para evaluar la técnica de drive y revés. [Demo](https://pongiq-murex.vercel.app)
2. **[Simulador de Compostaje](https://github.com/Sebastian21sa/simulador-compostaje)** — modelo de ML tabular (RandomForest) + CNN de visión por computador para evaluar calidad de compost. [Demo](https://v0-composting-simulator.vercel.app)

## Arquitectura: agregar un proyecto nuevo sin tocar código

Toda la información de cada proyecto (resumen, stack, resultados, limitaciones, links) vive en `data/proyectos.ts`. La página de caso de estudio (`app/proyectos/[slug]/page.tsx`) es genérica — lee esos datos y genera la página automáticamente, tanto en la cuadrícula de inicio como en su propia URL. Agregar un proyecto futuro es sumar una entrada más a ese archivo, nada más.

## Stack tecnológico

| Categoría | Tecnologías |
|---|---|
| Framework | Next.js (App Router), TypeScript |
| Estilos | CSS Modules, fuentes vía `next/font` (Fraunces + Inter) |
| Iconos | react-icons (con colores de marca reales por tecnología) |
| Animaciones | IntersectionObserver (aparición al hacer scroll), transiciones entre páginas |
| SEO | Metadata por página, imagen Open Graph generada dinámicamente (`next/og`), favicon dinámico |
| Despliegue | Vercel |

## Características técnicas destacadas

- **Metadata dinámica por proyecto**: cada página de caso de estudio genera su propio `<title>` y descripción para SEO, usando `generateMetadata`.
- **Imagen de vista previa para redes sociales**: generada automáticamente por Next.js (`app/opengraph-image.tsx`), sin necesidad de mantener un archivo de imagen estático.
- **Diseño responsivo**: verificado en simulación de dispositivos móviles.
- **Página 404 personalizada**, en vez de la genérica de Next.js.
- **Componentes reutilizables**: `Nav`, `Footer`, `FadeIn` y `ScrollTop` se usan en las 4 páginas sin duplicar código.

## Cómo correrlo localmente

```bash
git clone https://github.com/Sebastian21sa/web-sebastian.git
cd web-sebastian
npm install
npm run dev
```

La web queda disponible en `http://localhost:3000`.

## Estructura del repositorio

```
web-sebastian/
├── app/
│   ├── page.tsx                    # Inicio
│   ├── sobre-mi/page.tsx           # Sobre mí
│   ├── contacto/page.tsx           # Contacto
│   ├── proyectos/[slug]/page.tsx   # Caso de estudio (dinámico)
│   ├── not-found.tsx               # Página 404 personalizada
│   ├── template.tsx                # Transición entre páginas
│   ├── icon.tsx                    # Favicon dinámico
│   ├── opengraph-image.tsx         # Imagen de vista previa (redes sociales)
│   └── globals.css                 # Variables de diseño y estilos globales
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── FadeIn.tsx
│   └── ScrollTop.tsx
├── data/
│   ├── proyectos.ts                # Fuente de verdad de todos los proyectos
│   └── habilidades.ts
├── lib/
│   ├── fonts.ts                    # Fuentes (Fraunces, Inter)
│   └── icons.tsx                   # Mapeo de tecnologías a íconos y colores de marca
└── public/
    └── CV-Sebastian-Sanchez.pdf
```

## Autor

**Joan Sebastian Sanchez Acuña** — Ingeniero de Sistemas y Computación | Especialización en IA
[LinkedIn](https://www.linkedin.com/in/sebasti%C3%A1n-s%C3%A1nchez-0ab0b6314/) · [GitHub](https://github.com/Sebastian21sa)
