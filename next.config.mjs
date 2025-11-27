/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "http", // Required for HTTP images
                hostname: "**", // Matches any hostname
            },
            {
                protocol: "https", // Required for HTTPS images
                hostname: "**", // Matches any hostname
            },
        ],
    },
};

export default nextConfig;
