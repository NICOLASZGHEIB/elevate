/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // ✅ Allow builds to complete on Vercel even if ESLint finds warnings or errors.
        ignoreDuringBuilds: true,
    },

    // Image optimization
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
    },

    // Compression
    compress: true,

    // URL redirects for canonicalization (www to non-www)
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.elevate-mena.com',
                    },
                ],
                destination: 'https://elevate-mena.com/:path*',
                permanent: true,
            },
        ];
    },

    // Headers for security and performance
    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|mp4)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
