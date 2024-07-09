/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "nextui.org",
            }
        ]
    }
};

export default nextConfig;
