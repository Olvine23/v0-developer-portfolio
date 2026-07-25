import { fileURLToPath } from 'node:url'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    // A stray lockfile outside this project (C:\Users\ADMIN\package-lock.json)
    // makes Next.js's workspace-root inference ambiguous, which has
    // intermittently caused Turbopack to resolve modules from the wrong
    // directory. Pin the root explicitly to this project.
    root: fileURLToPath(new URL('.', import.meta.url)),
  },
}

export default nextConfig
