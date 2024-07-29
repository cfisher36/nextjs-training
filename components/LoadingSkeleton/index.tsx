import React from 'react';

const LoadingSkeleton: React.FC = () => (
    <main className="min-h-screen p-12 px-24">
        <h1 className="text-xl">The Daily Cat</h1>
        <div className="grid grid-cols-3 gap-8 pt-4">
            <div className="bg-gray-600 w-full h-64 rounded-md animate-pulse"></div>
            <div className="flex flex-col justify-begin">
                <div className="bg-gray-600 w-1/2 h-6 mb-4 rounded-md animate-pulse"></div>
                <div className="bg-gray-600 w-full h-6 rounded-md animate-pulse"></div>
            </div>
        </div>
    </main>
);

export default LoadingSkeleton;
