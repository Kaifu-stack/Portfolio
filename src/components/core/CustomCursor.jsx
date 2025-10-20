import React from 'react'

const CustomCursor = ({ mousePosition, activeSection }) => {
    return (
        <div
            className="fixed w-5 h-5 border-2 border-white rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
            style={{
                left: `${mousePosition.x - 15}px`,
                top: `${mousePosition.y - 15}px`,
                transform: activeSection !== 'hero' ? 'scale(1.5)' : 'scale(1)'
            }}
        />
    );
};

export default CustomCursor;