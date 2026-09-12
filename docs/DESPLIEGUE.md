# Compilación y alojamiento

## Comprobar la entrega

```bash
npm ci
npm run check
npm run start
```

`npm run start` utiliza Wrangler para servir la compilación local. No equivale a publicar en Internet. Usa la URL que indique la consola; no depende de un puerto fijo.

## Salida actual

La configuración genera un Worker compatible con Cloudflare y recursos de cliente:

- `dist/server/index.js`: entrada del Worker.
- `dist/server/wrangler.json`: configuración generada utilizada por la vista previa de producción.
- `dist/client/`: recursos estáticos de cliente cuando los emite la compilación.

`dist/` es salida generada y no se versiona. Tampoco se versionan `node_modules/`, estados de Wrangler, archivos .env, claves, cachés o compilaciones incrementales.

## Sites

`.openai/hosting.json` conserva la inscripción de Sites existente. Su identificador no es una credencial. Las vinculaciones D1 y R2 son nulas porque la beta no necesita base de datos ni almacenamiento de cargas.

La publicación inicial de Sites no se completó por problemas de conexión. No hay un despliegue operativo verificado que se deba asumir a partir de esa configuración. Si se retoma Sites, reutilizar la inscripción y verificar su acceso antes de publicar. Las credenciales temporales deben permanecer fuera del repositorio.

## Otros alojamientos

**Actualización para Hostinger:** ya existe una exportación estática dedicada. Ejecutar `npm run build:hostinger` y publicar `dist/client`; consultar [HOSTINGER.md](HOSTINGER.md). Las notas siguientes describen la compilación original para Workers.

Esta entrega no es un sitio de archivos estáticos listo para GitHub Pages, ni incluye una configuración de despliegue para Vercel, Netlify u otro proveedor. La presencia de imports desde `next` no convierte el runtime en Next.js estándar.

Para otro alojamiento, el equipo debe adaptar la configuración y validar la compatibilidad del runtime. Una exportación estática es un cambio futuro que requiere su propia comprobación. No subir la carpeta fuente a un alojamiento estático esperando que ejecute React por sí sola.

## Automatización

`.github/workflows/ci.yml` instala las dependencias bloqueadas, comprueba TypeScript y el banco de medios y compila la página. Tiene permisos de lectura y no contiene ningún paso de publicación.

Antes de lanzar: confirmar dominio, configuración del canal de contacto, indexación y acceso previsto. El repositorio de código y el alojamiento de la página son entregables diferentes.
