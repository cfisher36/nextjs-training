/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
};

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default nextConfig;
