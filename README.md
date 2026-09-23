# EnerAhorro España - Landing Page

Landing page para servicio de asesoramiento energético que ayuda a hogares y empresas en España a optimizar sus facturas de luz y gas.

## Tecnologías Utilizadas

### Framework y Runtime
- **Next.js 16.3.4** - Framework React con App Router
- **React 19.2.8** - Biblioteca de UI
- **TypeScript 5** - Tipado estático con configuración estricta

### Estilos y UI
- **Tailwind CSS v4** - Framework CSS utility-first con variables CSS nativas
- **shadcn/ui** - Componentes accesibles y personalizables (estilo "base-nova")
- **tw-animate-css** - Animaciones para Tailwind
- **lucide-react** - Iconos SVG
- **next-themes** - Soporte para modo oscuro/claro
- **class-variance-authority (cva)** - Variantes de componentes tipadas
- **cn** - Utilidad para combinar clases condicionalmente

### Formularios y Validación
- **react-hook-form 7.88** - Manejo de formularios performante
- **zod 4.6.5** - Validación de esquemas con inferencia de tipos
- **@hookform/resolvers** - Integración zod + react-hook-form

### Herramientas de Desarrollo
- **pnpm** - Gestor de paquetes
- **ESLint** - Linting con `eslint-config-next` (core-web-vitals + typescript)
- **Prettier** - Formateo de código con plugin Tailwind CSS
- **PostCSS** - Procesamiento CSS con plugin Tailwind

## Organización del Proyecto

```
ener-ahorro/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout raíz con providers y navegación
│   ├── page.tsx                 # Página principal (landing page)
│   ├── globals.css              # Estilos globales + variables CSS Tailwind
│   └── favicon.ico
├── components/
│   ├── ui/                      # Componentes shadcn/ui (button, card, input, etc.)
│   ├── shared/                  # Componentes compartidos
│   │   ├── nav-bar.tsx          # Navegación desktop
│   │   ├── mobile-nav.tsx       # Navegación móvil (Sheet)
│   │   └── footer.tsx           # Pie de página
│   ├── home/                    # Secciones de la landing page
│   │   ├── hero.tsx             # Sección principal con CTA
│   │   ├── customer-problems.tsx
│   │   ├── solution.tsx
│   │   ├── customer-benefits.tsx
│   │   ├── how-works-it.tsx
│   │   ├── contact.tsx
│   │   └── contact-form.tsx     # Formulario con validación zod
│   └── theme-provider.tsx       # Provider de tema (next-themes)
├── lib/
│   └── utils.ts                 # Utilidad cn() para classnames
├── hooks/                       # Custom hooks (vacío)
├── public/
│   └── images/                  # Assets estáticos
├── components.json              # Configuración shadcn/ui
├── tsconfig.json                # Configuración TypeScript estricta
├── next.config.ts               # Configuración Next.js
├── postcss.config.mjs           # Configuración PostCSS
├── eslint.config.mjs            # Configuración ESLint
├── .prettierrc                  # Configuración Prettier
└── package.json
```

## Diseño y Arquitectura

### Patrones de Componentes
- **Server Components por defecto** - Renderizado en servidor para mejor performance
- **Client Components solo cuando necesario** - `use client` en formularios, navegación móvil, theme provider
- **Componentes UI reutilizables** - Basados en shadcn/ui con Radix UI primitives
- **Composición sobre herencia** - Slots y props para flexibilidad

### Sistema de Estilos
- **CSS Variables (Custom Properties)** - Tokens de diseño en `:root` y `.dark`
- **OKLCH Color Space** - Colores perceptualmente uniformes
- **Responsive Design** - Mobile-first con breakpoints Tailwind (`md:`, `lg:`)
- **Dark Mode** - Soporte nativo con `next-themes` y `class` strategy

### Accesibilidad
- Componentes Radix UI (base de shadcn/ui) - ARIA implementado
- Semántica HTML correcta
- Focus visible states
- Contraste de colores WCAG AA

### SEO y Metadatos
- **Metadata API** de Next.js en `page.tsx`
- Open Graph y Twitter Cards configurados
- `robots` meta tags para indexación
- Imágenes optimizadas con `next/image`

### Formularios
- Validación en cliente con zod + react-hook-form
- Mensajes de error accesibles
- Toast notifications para feedback
- Tipado end-to-end (schema → form → submit)

## Scripts Disponibles

```bash
pnpm dev        # Servidor de desarrollo (Turbopack)
pnpm build      # Build de producción
pnpm start      # Servidor de producción
pnpm lint       # Ejecutar ESLint
pnpm format     # Formatear con Prettier
pnpm typecheck  # Verificar tipos TypeScript
```

## Convenciones de Código

- **TypeScript strict mode** habilitado
- **Path aliases**: `@/*` mapea a raíz del proyecto
- **ESLint** con reglas Next.js Core Web Vitals + TypeScript
- **Prettier** con plugin Tailwind (orden de clases automático)
- **LF line endings**, 2 espacios, trailing commas ES5
- **Semicolons** obligatorios

## Despliegue

Compatible con Vercel (recomendado), Docker, o cualquier plataforma que soporte Node.js 20+.

```bash
pnpm build && pnpm start
```