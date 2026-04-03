import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        resolveAlias: {
            'react-router-dom': './src/lib/react-router-dom-stub.tsx',
        },
    },
    webpack: (config) => {
        // Setup alias for seamless react-router-dom migration
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-router-dom': path.resolve(process.cwd(), 'src/lib/react-router-dom-stub.tsx'),
        };
        
        return config;
    }
};

export default nextConfig;
