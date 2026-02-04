import React from 'react';
import Bubbles from './Bubbles';

const BackgroundElements: React.FC = () => {
  return (
    <>
      {/* Background Carp Images */}
      <img
        src="https://i.postimg.cc/tJgQhTRs/2.png"
        alt=""
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1920px] max-w-none opacity-50 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <img
        src="https://i.postimg.cc/431SBgSM/3.png"
        alt=""
        className="absolute left-1/2 -translate-x-1/2 w-[1920px] max-w-none opacity-50 pointer-events-none"
        style={{ top: '2800px', zIndex: 0 }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(3, 8, 3, 0.3) 0%, rgba(3, 5, 3, 0.5) 50%, rgba(2, 3, 2, 0.7) 100%)',
          zIndex: 1
        }}
      />
      
      {/* Bubbles Animation */}
      <Bubbles />
      
      {/* Wave Animation */}
      <div className="wave-container">
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
      </div>
    </>
  );
};

export default BackgroundElements;
