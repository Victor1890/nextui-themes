/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "nextui.org",
            },
            {
                hostname: "avatars.githubusercontent.com",
            },
            {
                hostname: "i.pravatar.cc",
            },
        ]
    }
};

export default nextConfig;
