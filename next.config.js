/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  // Add permanent (301) redirects here as old URLs need to move, e.g.:
  // { source: '/old-path', destination: '/new-path', permanent: true }
  async redirects() {
    return [
      {
        source: '/return-policy',
        destination: '/refund-policy',
        permanent: true,
      },
    ];
  },
  // Sitewide X-Robots-Tag header, mirroring robots.ts. Per-page index/noindex
  // (e.g. a product marked noindex in Sanity) is controlled via the <meta
  // name="robots"> tag in src/lib/seo.ts instead, since that needs per-request
  // CMS data these static header rules don't have access to.
  async headers() {
    const noIndexPaths = ['/admin', '/api', '/my-account', '/checkout', '/cart'];

    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'index, follow' }],
      },
      ...noIndexPaths.map((path) => ({
        source: `${path}/:path*`,
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      })),
    ];
  },
};

module.exports = nextConfig;
