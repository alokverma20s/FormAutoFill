/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/addUser',
                permanent: false,
            }
        ];
    },
};

export default nextConfig;
