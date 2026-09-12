import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const result = spawnSync(
  process.execPath,
  [fileURLToPath(new URL('../node_modules/vinext/dist/cli.js', import.meta.url)), 'build'],
  {
    cwd: root,
    env: { ...process.env, RANCHO_HOSTINGER_BUILD: '1' },
    stdio: 'inherit',
  },
);
if (result.error) throw result.error;
process.exit(result.status ?? 1);
