import React from "react";

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    disabled = false,
    className = "",
    children,
}) => {
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
            } ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
