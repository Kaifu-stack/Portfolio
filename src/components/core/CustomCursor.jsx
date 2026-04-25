import React from "react";

const CustomCursor = ({ mousePosition, activeSection }) => {
    return (
        <>
            {/* Outer Cursor */}
            <div
                className="fixed w-8 h-8 border border-purple-400 rounded-full pointer-events-none z-50 transition-all duration-150 ease-out"
                style={{
                    left: `${mousePosition.x - 16}px`,
                    top: `${mousePosition.y - 16}px`,
                    transform:
                        activeSection !== "hero"
                            ? "scale(1.5)"
                            : "scale(1)",
                }}
            />

            {/* Inner Dot */}
            <div
                className="fixed w-2 h-2 bg-purple-400 rounded-full pointer-events-none z-50 transition-all duration-75"
                style={{
                    left: `${mousePosition.x - 4}px`,
                    top: `${mousePosition.y - 4}px`,
                }}
            />
        </>
    );
};

export default CustomCursor;