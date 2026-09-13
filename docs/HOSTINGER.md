# Publicación en Hostinger

Dominio: https://rancholaconcepcion.mx

Modalidad elegida: archivos estáticos en `public_html`, dentro de Business Web Hosting. Node.js se utiliza para compilar localmente o en CI; no se necesita un proceso Node.js en el alojamiento.

## Configuración

- Tipo de aplicación: Vite / frontend estático.
- Node.js: 22.
- Gestor: npm; instalar con el lockfile incluido.
- Directorio raíz: raíz del repositorio.
- Comando: `npm run build:hostinger`.
- Salida: `dist/client`.
- No requiere variables secretas, base de datos ni servidor Worker.

Este comando activa `output: 'export'` y omite los complementos de Cloudflare y Sites solamente durante esa compilación. Genera HTML y conserva React para galería, menú, videos y formulario. Los comandos originales de desarrollo y de compilación para Workers permanecen disponibles.

## Carga desde archivo

Desde una revisión confirmada del repositorio, instalar dependencias y generar los archivos públicos:

```bash
npm ci
npm run check
npm run build:hostinger
```

Comprimir **el contenido** de `dist/client` como `rancho-public.zip`. `index.html` debe quedar en la raíz del ZIP, junto con `_next/`, `media/` y los demás archivos generados. Se pueden excluir `.vite/` y los archivos README. No comprimir la carpeta contenedora `dist/client`.

1. En hPanel, abrir el sitio **rancholaconcepcion.mx → Administrador de archivos → public_html**.
2. Antes de actualizar una publicación existente, guardar una copia recuperable fuera de `public_html`.
3. Subir `rancho-public.zip` y extraer su contenido directamente en `public_html`. Confirmar que existe `public_html/index.html`, sin una carpeta intermedia.
4. Mover el ZIP fuera de la carpeta pública después de extraerlo. Si la página de bienvenida `default.php` interfiere, conservarla como respaldo fuera de `public_html`.
5. Revisar el dominio con HTTPS y los controles de la página antes de dar por terminado el despliegue.

No subir el código fuente, `node_modules`, `.git`, `.env`, credenciales ni documentos privados a `public_html`. Un ZIP generado con `git archive` contiene fuentes y **no sirve como publicación directa** en esta modalidad.

## GitHub

La fuente sigue siendo `karlozvx25/Rancho-La-Concepcion`. Al preparar el alta, el plan de Hostinger tenía vinculada otra cuenta de GitHub (`7gutes7`). Se eligió cargar archivos para conservar las conexiones de otros sitios. Esta modalidad no sincroniza nuevos commits automáticamente; las próximas actualizaciones requieren un nuevo ZIP y despliegue hasta configurar expresamente la integración correcta.

## Verificación tras publicar

Comprobar dominio y HTTPS, imágenes, los tres videos, galería, menú móvil y formulario. Este último sigue siendo una demostración: no envía solicitudes ni confirma reservas. Mantener esos avisos hasta conectar el contacto oficial.

Los metadatos incluyen el dominio canónico y permiten indexación. La identidad provisional sigue siendo la de la beta aprobada. Esta guía documenta el proceso; el estado final se debe comprobar en hPanel y en el dominio.

## Estado al 13 de septiembre de 2026

La compilación estática y las verificaciones de tipos y medios se completaron correctamente. El dominio responde con HTTPS, pero aún muestra la bienvenida de Hostinger. El paquete público está preparado; siguen pendientes la carga, extracción y verificación de la página publicada. No confundir la respuesta HTTPS del alojamiento con la publicación del diseño aprobado.
