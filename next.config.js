/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Allow images to be loaded from all domains
                source: "/(.*)", // Match all paths
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*",
                    },
                ],
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

module.exports = nextConfig
