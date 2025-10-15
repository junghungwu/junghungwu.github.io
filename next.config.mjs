/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',          // <-- replaces `next export`
  images: { unoptimized: true }, // needed if you use next/image on static hosts
  trailingSlash: true,    

}

export default nextConfig


/**
 * Deployment notes (2025-10-02):
 * - Default: server mode (`next start`) for typical hosting.
 * - GitHub Pages (static): uncomment the block below and run `pnpm export`, then publish `out/`.
 */

// ----- GitHub Pages (static export) example -----
// const repoName = process.env.NEXT_PUBLIC_BASEPATH || '/REPO_NAME';
// export default {
//   output: 'export',
#   basePath: repoName,
//   images: { unoptimized: true }
// };
