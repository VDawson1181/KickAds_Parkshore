/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    images: {
        remotePatterns: [{hostname: 'plus.unsplash.com'}],
    },
};

export default nextConfig;
