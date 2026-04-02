import React from 'react';
import Button from '../components/ui/Button/Button';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 mt-16 md:mt-24">
            <span className="text-red-400 font-bold mb-2 tracking-widest uppercase text-sm">
                404 Error
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
                Page Not Found
            </h1>
            <p className="text-gray-400 max-w-xl text-lg mb-8">
                The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
            </p>
            <Button href="/" size="lg" className="px-8 font-black uppercase tracking-widest">
                Return to Home
            </Button>
        </div>
    );
};

export default NotFound;
