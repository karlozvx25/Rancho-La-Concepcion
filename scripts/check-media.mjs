import { createHash } from 'node:crypto';
import { readdir, readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const manifest = JSON.parse(
  await readFile(path.join(root, 'docs/media-manifest.json'), 'utf8'),
);
const expected = new Set(manifest.files.map((entry) => entry.path));
const errors = [];
for (const entry of manifest.files) {
  try {
    const file = path.join(root, entry.path);
    const data = await readFile(file);
    if ((await stat(file)).size !== entry.bytes)
      errors.push(entry.path + ': tamaño diferente');
    if (createHash('sha256').update(data).digest('hex') !== entry.sha256)
      errors.push(entry.path + ': contenido diferente');
  } catch {
    errors.push(entry.path + ': archivo no disponible');
  }
}
for (const name of await readdir(path.join(root, 'public/media'))) {
  if (!expected.has('public/media/' + name))
    errors.push(name + ': falta en el manifiesto');
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    manifest.files.length +
      ' recursos verificados: inventario, tamaño y SHA-256 correctos.',
  );
}
