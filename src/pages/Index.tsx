import React, { useState, useEffect } from 'react';
import BackgroundElements from '@/components/BackgroundElements';
import Header from '@/components/Header';
import StatsCard, { Users, Zap, Sparkles, Fish } from '@/components/StatsCard';
import PrizeSection from '@/components/PrizeSection';
import LeaderboardTable from '@/components/LeaderboardTable';
import HighlightCard, { Trophy, TrendingUp, Star } from '@/components/HighlightCard';
import { Fish as FishIcon, Target } from 'lucide-react';
import BaitChart from '@/components/charts/BaitChart';
import TypeChart from '@/components/charts/TypeChart';
import TimeChart from '@/components/charts/TimeChart';
import MonthChart from '@/components/charts/MonthChart';
import RegionChart from '@/components/charts/RegionChart';
import InsightsBox from '@/components/InsightsBox';
import CountdownTimer from '@/components/CountdownTimer';
import Footer from '@/components/Footer';
import { fetchDashboardData, type DashboardData } from '@/data/dashboardData';

const Index: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'today' | 'week' | 'month'>('week');
  const [data, setData] = useState<DashboardData | null>(null);
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const dashboardData = await fetchDashboardData(activeFilter);
      setData(dashboardData);
      
      const now = new Date();
      const formatted = now.toLocaleString('it-IT', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      setLastUpdate(formatted);
    };

    loadData();
  }, [activeFilter]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div 
            className="mb-4 animate-pulse flex justify-center"
            style={{
              filter: 'drop-shadow(0 0 12px rgba(0, 255, 102, 0.8)) drop-shadow(0 0 25px rgba(0, 255, 102, 0.5))'
            }}
          >
            <FishIcon size={48} strokeWidth={1.5} style={{ color: '#00FF66' }} />
          </div>
          <p className="green-text">Caricamento...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundElements />

      {/* Main Content */}
      <main 
        className="relative max-w-[1400px] mx-auto px-4 md:px-4 py-8 md:py-8"
        style={{ zIndex: 2 }}
      >
        <div className="glass-container">
          <Header 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter}
            lastUpdate={lastUpdate}
          />

          {/* Prize Section */}
          <PrizeSection prize={data.prize} />

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 my-8">
            <StatsCard icon={Users} value={data.stats.totalPlayers} label="Total Players" delay={0} />
            <StatsCard icon={Zap} value={data.stats.activeThisWeek} label="Active This Week" delay={100} />
            <StatsCard icon={Sparkles} value={data.stats.newMembers} label="New Members" delay={200} />
            <StatsCard icon={Fish} value={data.stats.totalCatches} label="Total Catches" delay={300} />
          </div>

          {/* Leaderboard */}
          <LeaderboardTable players={data.leaderboard} />

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <HighlightCard 
              icon={Trophy} 
              title="Most Active" 
              value={data.highlights.mostActive.player} 
              detail={data.highlights.mostActive.detail} 
            />
            <HighlightCard 
              icon={TrendingUp} 
              title="Record Month" 
              value={data.highlights.record.player} 
              detail={data.highlights.record.detail} 
            />
            <HighlightCard 
              icon={Star} 
              title="Rising Star" 
              value={data.highlights.rising.player} 
              detail={data.highlights.rising.detail} 
            />
          </div>

          {/* Divider 1 */}
          <img 
            src="https://i.postimg.cc/SsgtpbCT/1.png" 
            alt="" 
            className="section-divider"
          />

          {/* Pro Tips Section */}
          <section className="my-8 md:my-16">
            <h2 
              className="text-2xl md:text-[2rem] font-extrabold mb-6 md:mb-10 relative inline-flex items-center gap-2"
              style={{ textShadow: '0 0 30px rgba(0, 255, 68, 0.4)' }}
            >
              <span 
                className="inline-flex"
                style={{
                  filter: 'drop-shadow(0 0 12px rgba(0, 255, 102, 0.8)) drop-shadow(0 0 25px rgba(0, 255, 102, 0.5))'
                }}
              >
                <Target size={28} strokeWidth={1.5} style={{ color: '#00FF66' }} />
              </span>
              Pro Tips & Analytics
              <span 
                className="absolute bottom-0 left-0 h-[3px] rounded"
                style={{
                  width: 60,
                  background: 'linear-gradient(90deg, #00FF44, #00FF66)',
                  boxShadow: '0 0 25px rgba(0, 255, 68, 0.7)'
                }}
              />
            </h2>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <BaitChart data={data.charts.bait} brandSpotlight={data.brandSpotlight} />
              <TypeChart data={data.charts.type} />
              <TimeChart data={data.charts.time} />
              <MonthChart data={data.charts.month} />
            </div>

            <InsightsBox />
          </section>

          {/* Divider 2 */}
          <img 
            src="https://i.postimg.cc/VLxZwRrh/2.png" 
            alt="" 
            className="section-divider"
          />

          {/* Geography Section */}
          <section className="my-8 md:my-16">
            <RegionChart data={data.charts.region} />
          </section>

          <Footer />
        </div>
      </main>

      {/* Countdown Timer */}
      <CountdownTimer />
    </div>
  );
};

export default Index;
