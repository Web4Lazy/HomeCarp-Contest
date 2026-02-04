import React from 'react';
import type { LeaderboardPlayer } from '@/data/dashboardData';

interface LeaderboardTableProps {
  players: LeaderboardPlayer[];
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ players }) => {
  const getRankDisplay = (rank: number): string => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return rank.toString();
  };

  const getTrendClass = (trend: string): string => {
    if (trend.includes('▲')) return 'green-text font-bold';
    if (trend.includes('▼')) return 'text-red-400 font-bold';
    return 'text-[var(--text-muted)]';
  };

  return (
    <div className="leaderboard-table mb-8">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
          <thead>
            <tr 
              className="text-xs uppercase tracking-wider green-text font-semibold"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 255, 68, 0.12) 0%, rgba(0, 238, 85, 0.08) 100%)'
              }}
            >
              <th className="py-4 px-4 text-left">Rank</th>
              <th className="py-4 px-4 text-left">Avatar</th>
              <th className="py-4 px-4 text-left">Nome</th>
              <th className="py-4 px-4 text-left">Peso Tot</th>
              <th className="py-4 px-4 text-left">Catture</th>
              <th className="py-4 px-4 text-left">Biggest</th>
              <th className="py-4 px-4 text-left">Trend</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr
                key={player.rank}
                className="transition-all duration-300 hover:translate-x-1"
                style={{
                  background: 'rgba(255, 255, 255, 0.01)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 255, 68, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.01)';
                }}
              >
                <td className="py-4 px-4">
                  <span className={index < 3 ? 'text-lg' : 'text-[var(--text-secondary)]'}>
                    {getRankDisplay(player.rank)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="avatar-circle text-sm">
                    {player.avatar}
                  </span>
                </td>
                <td className="py-4 px-4 font-semibold text-white">
                  {player.name}
                </td>
                <td className="py-4 px-4 text-[var(--text-secondary)]">
                  {player.pesoTot}
                </td>
                <td className="py-4 px-4 text-[var(--text-secondary)]">
                  {player.catture}
                </td>
                <td className="py-4 px-4 text-[var(--text-secondary)]">
                  {player.biggest}
                </td>
                <td className={`py-4 px-4 ${getTrendClass(player.trend)}`}>
                  {player.trend}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
