import React from 'react';

const LoadingSkeleton: React.FC = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
        <div className="bg-gray-600 w-full h-64 sm:h-48 md:h-64 rounded-md animate-pulse"></div>
        <div className="flex flex-col justify-start space-y-4">
            <div className="bg-gray-600 w-1/2 sm:w-2/3 h-6 rounded-md animate-pulse"></div>
            <div className="bg-gray-600 w-full h-6 rounded-md animate-pulse"></div>
        </div>
    </div>
);

export default LoadingSkeleton;
