import type { NextConfig } from 'next';

const nextConfig: NextConfig =
  process.env.RANCHO_HOSTINGER_BUILD === '1' ? { output: 'export' } : {};

export default nextConfig;
