import React from 'react';

interface HeaderProps {
  activeFilter: 'today' | 'week' | 'month';
  onFilterChange: (filter: 'today' | 'week' | 'month') => void;
  lastUpdate: string;
}

const Header: React.FC<HeaderProps> = ({ activeFilter, onFilterChange, lastUpdate }) => {
  return (
    <header className="text-center mb-8">
      {/* Back Button */}
      <div className="flex justify-start mb-6">
        <a
          href="https://www.carpfishingitalia.com"
          className="btn-back"
        >
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Torna alla Home
        </a>
      </div>

      {/* Logo */}
      <img
        src="https://i.postimg.cc/K86Jy6mZ/homecarp-logo.png"
        alt="HomeCarp Logo"
        className="max-w-[280px] md:max-w-[280px] max-w-[200px] h-auto mx-auto mb-4 transition-all duration-300 hover:scale-[1.02]"
        style={{ 
          filter: 'drop-shadow(0 0 30px rgba(0, 255, 102, 0.5))'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = 'drop-shadow(0 0 50px rgba(0, 255, 102, 0.8))';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = 'drop-shadow(0 0 30px rgba(0, 255, 102, 0.5))';
        }}
      />

      {/* Main Title */}
      <h1 
        className="text-lg md:text-[1.8rem] font-extrabold uppercase tracking-[2px] md:tracking-[3px] my-4 gradient-text animate-pulse-glow"
      >
        🔥 Pesca. Competi. Domina. 🔥
      </h1>

      {/* Subtitle */}
      <p className="text-xs md:text-[0.95rem] font-medium uppercase tracking-[1px] md:tracking-[2px] text-[var(--text-muted)] mb-2">
        La Community #1 dei Carpisti Italiani
      </p>

      {/* Last Update */}
      <p className="text-xs text-[var(--text-muted)] mb-6">
        Ultimo aggiornamento: {lastUpdate}
      </p>

      {/* Filter Buttons */}
      <div className="flex gap-2 justify-center flex-wrap">
        {(['today', 'week', 'month'] as const).map((filter) => (
          <button
            key={filter}
            className={`btn-glass ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => onFilterChange(filter)}
          >
            {filter === 'today' ? 'Today' : filter === 'week' ? 'Week' : 'Month'}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
