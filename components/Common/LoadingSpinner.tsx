import React from "react";

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="border-t-8 border-b-8 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;
