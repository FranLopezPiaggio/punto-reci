# PuntoReci - Aplicación de Reciclaje

Esta es una aplicación SPA tipo landing page para una aplicación de reciclaje, desarrollada con Next.js. La aplicación tiene un diseño moderno con una paleta de colores verdes pálidos y beige.

## Estructura del Proyecto

El proyecto sigue la siguiente estructura:

```
my-recycling-app/
  ├── app/
  │   ├── page.tsx         # Página principal
  │   ├── layout.tsx       # Layout principal
  │   ├── globals.css      # Estilos globales
  │   └── page.module.css  # Estilos específicos de la página
  ├── components/          # Componentes reutilizables
  │   ├── Header.tsx
  │   ├── HeroSection.tsx
  │   ├── BlogSection.tsx
  │   └── Footer.tsx
  ├── styles/              # Estilos CSS Modules
  │   ├── Header.module.css
  │   ├── HeroSection.module.css
  │   ├── BlogSection.module.css
  │   └── Footer.module.css
  └── public/              # Imágenes y assets
      ├── logo.svg
      ├── logo-white.svg
      ├── hero-image.svg
      └── blog/
          ├── post-1.jpg
          ├── post-2.jpg
          └── post-3.jpg
```

## Pasos para Implementar

1. Clonar el repositorio
2. Instalar dependencias con `npm install`
3. Ejecutar el servidor de desarrollo con `npm run dev`
4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Secciones de la Aplicación

1. **Header**: Barra de navegación con logo, menú y botón de llamado a la acción.
2. **HeroSection**: Sección principal con título, descripción, botones de acción e imagen ilustrativa.
3. **BlogSection**: Sección de blog con artículos relacionados con reciclaje y sostenibilidad.
4. **Footer**: Pie de página con información de contacto, enlaces rápidos, recursos y formulario de suscripción.

## Imágenes

- Las imágenes de ejemplo se encuentran en la carpeta `public/`.
- Para un proyecto real, reemplaza los placeholders con imágenes reales.

## Paleta de Colores

La aplicación utiliza una paleta de colores verdes pálidos y beige:

- Verde pálido: #e6f0e6, #c8e0c8, #a9d0a9, #8bc08b
- Beige: #f5f3e9, #ebe7d3, #e0dbbd, #d5cfa7

## Licencia

Este proyecto está bajo la Licencia MIT.