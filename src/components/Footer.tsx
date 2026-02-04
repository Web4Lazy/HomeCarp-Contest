import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer 
      className="text-center mt-12 py-6"
      style={{
        color: 'var(--text-muted)',
        fontSize: '0.8rem',
        borderTop: '1px solid rgba(0, 255, 68, 0.08)'
      }}
    >
      © 2025 HomeCarp - Dati aggiornati al 23 Dicembre 2025, 14:30
    </footer>
  );
};

export default Footer;
