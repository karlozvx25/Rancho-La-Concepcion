# Publicación en Hostinger

Dominio previsto: https://rancholaconcepcion.mx

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

Desde una revisión confirmada del repositorio:

```bash
git archive --format=zip --output=rancho-hostinger.zip HEAD
```

Subir ese ZIP en **Añadir sitio web → Desplegar app web → Sube los archivos**. Contiene código fuente, lockfile y recursos. No incluir node_modules, dist, .git, .env, credenciales ni documentos privados. Configurar el comando y la salida anteriores antes de desplegar.

## GitHub

La fuente sigue siendo `karlozvx25/Rancho-La-Concepcion`. Al preparar el alta, el plan de Hostinger tenía vinculada otra cuenta de GitHub (`7gutes7`). Se eligió cargar archivos para conservar las conexiones de otros sitios. Esta modalidad no sincroniza nuevos commits automáticamente; las próximas actualizaciones requieren un nuevo ZIP y despliegue hasta configurar expresamente la integración correcta.

## Verificación tras publicar

Comprobar dominio y HTTPS, imágenes, los tres videos, galería, menú móvil y formulario. Este último sigue siendo una demostración: no envía solicitudes ni confirma reservas. Mantener esos avisos hasta conectar el contacto oficial.

Los metadatos incluyen el dominio canónico y permiten indexación. La identidad provisional sigue siendo la de la beta aprobada. Esta guía documenta el proceso; el estado final se debe comprobar en hPanel y en el dominio.
