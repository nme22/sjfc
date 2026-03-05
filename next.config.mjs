/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://clerk.southjerseyfootballclub.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://clerk.southjerseyfootballclub.com https://img.clerk.com https://se-images-blob-prod.s3.amazonaws.com",
              "font-src 'self' data:",
              "connect-src 'self' https://clerk.southjerseyfootballclub.com",
              "frame-src 'self' https://season-microsites.ui.sportsengine.com https://challenges.cloudflare.com https://clerk.southjerseyfootballclub.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
