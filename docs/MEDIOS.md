# Banco visual de la beta

Se entregan los recursos que utiliza la web aprobada: ocho fotografías en tres tamaños, tres videos y tres imágenes de portada. Los originales HEIC/MOV y la documentación privada del proyecto no se incluyen en este repositorio.

## Correspondencias

| Nombre web       | Original seleccionado | Uso                         |
| ---------------- | --------------------- | --------------------------- |
| paisaje          | IMG_4873.HEIC         | Portada y paisaje           |
| capilla          | IMG_4858.HEIC         | Exterior de la capilla      |
| interior-capilla | IMG_4860.HEIC         | Vista frontal de la capilla |
| bancas           | IMG_4863.HEIC         | Galería interior            |
| caballo          | IMG_4869.HEIC         | Capítulo ecuestre           |
| caballerizas     | IMG_4870.HEIC         | Galería de instalaciones    |
| pista            | IMG_4875.HEIC         | Galería ecuestre            |
| horizonte        | IMG_4895.HEIC         | Paisaje secundario          |
| el-umbral        | IMG_4859.MOV, 0–16 s  | Recorrido de entrada        |
| ritmo-ecuestre   | IMG_4874.MOV, 6–16 s  | Caballo en la pista         |
| entre-pinos      | IMG_4879.MOV, 5–11 s  | Recorrido de bosque         |

Las fotos WebP llevan sufijos `-640`, `-1200` y `-2000` para selección adaptable. La portada se recortó levemente por abajo durante la preparación inicial. Los MP4 son verticales, de 540 × 960, con conversión de color desde los originales HDR, sin audio y preparados para comenzar a reproducirse antes de terminar la descarga.

## Integridad

`media-manifest.json` registra tamaño y SHA-256 de cada recurso entregado. `npm run check:media` comprueba archivos faltantes, adicionales o modificados. La revisión no vuelve a comprimir los recursos.

Si se reemplaza o incorpora un archivo deliberadamente, actualizar el catálogo en `content/site.ts` y el manifiesto junto con el cambio. La huella se puede obtener con:

```bash
shasum -a 256 public/media/nombre-del-archivo.webp
```

La galería usa índices numéricos desde `app/page.tsx`: antes de reordenar `photos`, revisar las referencias de cada sección. Mantener los nombres actuales evita romper vínculos.

## Criterios de sustitución

Conservar orientaciones y dimensiones reservadas, revisar encuadres en móvil, mantener textos alternativos y generar los tres tamaños de cada fotografía. No sustituir archivos por imágenes simuladas de bodas, alojamientos o servicios no documentados.

Para añadir videos, revisar cortes, orientación y color; publicar audio solo cuando su contenido y autorización se hayan validado. Los videos de esta beta se abren por decisión del visitante.

El equipo debe conservar los originales maestros en el banco de trabajo del proyecto. GitHub contiene derivados para web, no una copia del archivo audiovisual completo.
