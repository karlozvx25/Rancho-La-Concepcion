# Rancho La Concepción

Beta editorial del sitio web de Rancho La Concepción, Villa Victoria, Estado de México. Entrega para continuar el desarrollo a partir de la versión visual aprobada.

## Empezar

Requisitos: Node.js 22 (mínimo 22.13) y npm. El proyecto incluye `.nvmrc` y un archivo de dependencias bloqueadas.

```bash
git clone https://github.com/karlozvx25/Rancho-La-Concepcion.git
cd Rancho-La-Concepcion
nvm use
npm ci
npm run dev
```

Si no usas nvm, instala Node.js 22 antes de ejecutar los comandos de npm. Abre la dirección **Local** que indique la consola: normalmente es `http://localhost:3000/`. El puerto puede cambiar si está ocupado.

**No se necesitan claves de API, base de datos ni archivo .env para esta beta.**

## Qué incluye

- Portada con fotografía real del jardín y la pista.
- Historia del rancho, celebraciones, identidad ecuestre y visión de futuras cabañas.
- Ocho fotografías, cada una en tres tamaños WebP.
- Tres recorridos verticales MP4, con reproducción voluntaria y sin audio original.
- Galería ampliable, menú móvil y formulario de demostración.
- Adaptación a distintas pantallas, navegación por teclado y respeto a movimiento reducido.

El formulario **no envía datos, no confirma reservas y no consulta disponibilidad**. La copia de la solicitud ocurre únicamente cuando el visitante pulsa el botón correspondiente. El nombre tipográfico y el favicon son provisionales. Los logotipos oficiales aún no están integrados.

## Comandos

| Comando                                                          | Función                                                               |
| ---------------------------------------------------------------- | --------------------------------------------------------------------- |
| `npm run dev`                                                    | Vista previa con actualización durante la edición.                    |
| `npm run typecheck`                                              | Revisa TypeScript sin crear archivos de caché.                        |
| `npm run check:media`                                            | Comprueba integridad e inventario de imágenes y videos.               |
| `npm run build`                                                  | Genera la compilación para el entorno Cloudflare Workers.             |
| `npm run start`                                                  | Sirve localmente la compilación con Wrangler; ejecutar build primero. |
| `npm run check`                                                  | Ejecuta TypeScript, revisión de medios y compilación.                 |
| `npm run lint`                                                   | Analizador de código incluido con el proyecto.                        |
| `npm run format -- app content components/rancho docs README.md` | Formatea los archivos propios indicados.                              |

## Estructura

```text
app/
  page.tsx                 Composición de la página, secciones e interacciones
  layout.tsx               Idioma y metadatos
  globals.css              Identidad visual, estilos y puntos de adaptación
content/
  site.ts                  Catálogo de fotos, videos, navegación y ocasiones
components/
  rancho/photo.tsx         Imagen adaptable reutilizable
  ui/                      Componentes base instalados (Shadcn / Base UI)
public/
  media/                   Fotos WebP, videos MP4 y sus imágenes de portada
  brand/                   Lugar previsto para los logotipos oficiales
  favicon.svg              Identificador provisional
docs/
  DESARROLLO.md            Arquitectura y mapa de edición
  PENDIENTES.md             Hoja de ruta y criterios de aceptación
  DESPLIEGUE.md            Compilación, alojamiento y límites del entorno
  MEDIOS.md                Procedencia y tratamiento del material
  media-manifest.json      Inventario, tamaños e integridad SHA-256
scripts/
  check-media.mjs          Validación del banco visual entregado
.github/workflows/ci.yml   Validaciones al subir cambios y abrir PR
.openai/hosting.json       Configuración existente de Sites (sin credenciales)
```

## Continuar el trabajo

1. Lee [la guía de desarrollo](docs/DESARROLLO.md).
2. Integra identidad y efectos siguiendo [los pendientes](docs/PENDIENTES.md).
3. Conserva las fotografías y videos según [la guía de medios](docs/MEDIOS.md).
4. Ejecuta `npm run check` y revisa los cambios en escritorio y móvil.
5. Consulta [despliegue](docs/DESPLIEGUE.md) antes de elegir alojamiento.

## Estado de entrega

La apariencia, textos y comportamiento de la beta aprobada se conservan. La entrega organiza datos, componente de imagen, documentación y validaciones. Los archivos visuales mantienen sus bytes originales de la beta.

La compilación y TypeScript se validaron en la entrega. La verificación automática de medios compara el inventario y las huellas SHA-256. No se han realizado pruebas automatizadas de interacción ni una certificación de accesibilidad.

Este repositorio entrega **código y recursos**; subirlo a GitHub no publica una web comercial. La publicación anterior de Sites quedó pendiente por problemas de conexión. Los metadatos mantienen `noindex` hasta la aprobación de lanzamiento.

El material visual fue proporcionado para este proyecto. No se concede una licencia de reutilización independiente de fotografías, videos o identidad.
