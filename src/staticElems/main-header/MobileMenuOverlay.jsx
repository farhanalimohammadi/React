import React, { useEffect } from 'react';

const MobileMenuOverlay = ({ isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.pointerEvents = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.pointerEvents = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-[998] ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    />
  );
};

export default MobileMenuOverlay; 