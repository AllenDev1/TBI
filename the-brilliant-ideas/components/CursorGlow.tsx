'use client';

import React, { useState, useEffect } from 'react';

export default function CursorGlow() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 w-96 h-96 rounded-full opacity-30 transition-opacity duration-300"
      style={{
        left: cursorPos.x - 192,
        top: cursorPos.y - 192,
        background: 'radial-gradient(circle, rgba(249,115,22,0.3) 0%, rgba(253,186,116,0.1) 40%, transparent 70%)',
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform',
      }}
    />
  );
}
