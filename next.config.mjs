import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        disableStaticImages: true,
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|webp|avif|svg)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'static/media/[hash][ext][query]',
                publicPath: '/_next/'
            }
        });
        
        // Setup alias for seamless react-router-dom migration
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-router-dom': path.resolve(process.cwd(), 'src/lib/react-router-dom-stub.tsx'),
        };
        
        return config;
    }
};

export default nextConfig;
