import React, { useState, useEffect } from 'react';

const CircleCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        border: '1px solid #000',
        opacity:"0.7",
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        transition: 'transform 0.4s ease-out',
      }}
    />
  );
};

export default CircleCursor;