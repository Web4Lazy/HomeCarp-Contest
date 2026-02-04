import React from 'react';

const InsightsBox: React.FC = () => {
  return (
    <div className="insights-box mt-8">
      <h4 className="text-lg font-bold green-text mb-3">
        💡 Pro Tip del Periodo
      </h4>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        <strong className="green-text">Dicembre 2025:</strong> Le boilie alla frutta (Monster Crab, Scopex) stanno performando il{' '}
        <strong className="green-text">34% meglio</strong> rispetto al mese scorso. La fascia oraria più produttiva è l'alba (6:00-9:00) con il{' '}
        <strong className="green-text">42%</strong> delle catture sopra i 15kg.
      </p>
      <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
        🎯 <strong className="green-text">Consiglio:</strong> Concentra le sessioni nelle prime ore del mattino con esche fruttate per massimizzare le probabilità di catture trophy.
      </p>
    </div>
  );
};

export default InsightsBox;
