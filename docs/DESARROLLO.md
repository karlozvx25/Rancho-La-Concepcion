# Guía de desarrollo

## Base técnica

React 19, TypeScript, Vinext sobre Vite 8, Tailwind CSS 4 y componentes Shadcn basados en Base UI. La convención de rutas se parece a Next.js App Router; el runtime de esta entrega es **Vinext**, no el servidor estándar de Next.js.

El lockfile de npm es la referencia para instalar dependencias. No es necesario actualizar versiones para abrir la beta. Cualquier actualización del runtime debe validarse como cambio separado.

## Mapa de edición

| Cambio                                             | Archivo o lugar               |
| -------------------------------------------------- | ----------------------------- |
| Orden de secciones y textos narrativos             | `app/page.tsx`                |
| Nombres, textos alternativos y orden de la galería | `content/site.ts`             |
| Recorridos, títulos y duración mostrada            | `content/site.ts`             |
| Navegación y tipos de encuentro                    | `content/site.ts`             |
| Identidad visual, espaciado y tamaños de pantalla  | `app/globals.css`             |
| Carga de imágenes y selección de tamaños           | `components/rancho/photo.tsx` |
| Idioma, título, descripción e indexación           | `app/layout.tsx`              |
| Archivos de logotipo                               | `public/brand/`               |
| Favicon                                            | `public/favicon.svg`          |
| Entorno de desarrollo y Workers                    | `vite.config.ts`              |

Los componentes en `components/ui/` son primitivas del catálogo instalado. Preferir componerlos y personalizarlos desde los componentes propios. No hace falta modificar el catálogo completo para cambiar el diseño.

## Página e interacciones

`app/page.tsx` mantiene la secuencia aprobada en una única ruta. Sus anclas son `inicio`, `el-rancho`, `celebraciones`, `ecuestre`, `recorridos`, `galeria` y `visita`.

El estado de menú, galería, video y formulario se maneja con React. Los diálogos utilizan las primitivas accesibles instaladas. La galería permite anterior/siguiente con botones y flechas del teclado; Escape cierra los diálogos mediante Base UI.

`openVisit` abre la demostración y selecciona la ocasión. `prepare` construye un mensaje en memoria. `copy` copia ese mensaje al portapapeles con aviso de éxito o error. No hay solicitudes de red, persistencia, agenda ni backend de reservas.

## Identidad y movimiento

La paleta se define en `:root` de `app/globals.css`: verde pino, blanco cálido y tierra. La tipografía de titulares utiliza Georgia; la información y los controles usan Arial/Helvetica. No hay descargas de fuentes externas.

La beta ya contiene una entrada suave de portada, acercamientos discretos de imagen, transiciones de botones y desplazamiento suave. La regla `prefers-reduced-motion` desactiva las animaciones y transiciones. Mantener ese comportamiento al incorporar nuevos efectos.

Los tamaños de imagen y sus encuadres están definidos para cada sección; cambiar una fotografía sin revisar su orientación puede alterar el diseño.

## Forma de trabajar

Crear una rama por cambio y revisar mediante pull request. Separar integración del logo, nuevas animaciones y conexión comercial para que cada revisión sea concreta.

Antes de fusionar, ejecutar `npm run check`. El flujo de GitHub Actions ejecuta las mismas verificaciones. El flujo no despliega ni necesita secretos.

Verificar manualmente móvil y escritorio, teclado, foco visible, cierre de diálogos, portapapeles, reproducción de cada video, movimiento reducido y texto ampliado. Estas pruebas quedan para el equipo; no están automatizadas en esta entrega.
