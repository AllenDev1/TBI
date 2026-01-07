'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-24 lg:right-8 z-40 w-20 h-20 hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <Image
            src="/tbi-mascot/move-to-top.png"
            alt="Scroll to top"
            width={80}
            height={80}
            className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
          />
        </button>
      )}
    </>
  );
}
