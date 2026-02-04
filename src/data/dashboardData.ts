// ═══════════════════════════════════════════════════════════
// HOMECARP DATA LAYER - AIRTABLE INTEGRATION READY
// ═══════════════════════════════════════════════════════════

// Configuration (to be filled with real API keys later)
export const CONFIG = {
  AIRTABLE_API_KEY: '', // TODO: Add Airtable API key
  AIRTABLE_BASE_ID: '', // TODO: Add Airtable Base ID
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
};

// Type definitions
export interface Stats {
  totalPlayers: number;
  activeThisWeek: number;
  newMembers: number;
  totalCatches: number;
}

export interface LeaderboardPlayer {
  rank: number;
  avatar: string;
  name: string;
  pesoTot: number;
  catture: number;
  biggest: number;
  trend: string;
}

export interface Highlights {
  mostActive: { player: string; detail: string };
  record: { player: string; detail: string };
  rising: { player: string; detail: string };
}

export interface ChartData {
  labels: string[];
  data: number[];
}

export interface ChartsData {
  bait: ChartData;
  type: ChartData;
  time: ChartData;
  month: ChartData;
  region: ChartData;
}

export interface Prize {
  image: string;
  title: string;
  name: string;
  description: string;
}

export interface BrandSpotlight {
  name: string;
  catches: number;
}

export interface DashboardData {
  stats: Stats;
  leaderboard: LeaderboardPlayer[];
  highlights: Highlights;
  charts: ChartsData;
  prize: Prize;
  brandSpotlight: BrandSpotlight;
}

// Mock data structure (mirrors Airtable structure)
export const MOCK_DATA: DashboardData = {
  stats: {
    totalPlayers: 1247,
    activeThisWeek: 384,
    newMembers: 67,
    totalCatches: 8923
  },
  
  leaderboard: [
    { rank: 1, avatar: "MK", name: "Marco_Korda", pesoTot: 847.5, catture: 124, biggest: 28.4, trend: "▲ 2" },
    { rank: 2, avatar: "LM", name: "Luca_Monster", pesoTot: 723.0, catture: 98, biggest: 26.8, trend: "—" },
    { rank: 3, avatar: "AC", name: "Andrea_CP", pesoTot: 691.5, catture: 87, biggest: 25.1, trend: "▲ 1" },
    { rank: 4, avatar: "GF", name: "Giovanni_Fish", pesoTot: 623.2, catture: 76, biggest: 24.2, trend: "▼ 2" },
    { rank: 5, avatar: "SB", name: "Stefano_Big", pesoTot: 589.7, catture: 71, biggest: 23.5, trend: "▲ 3" },
    { rank: 6, avatar: "PT", name: "Paolo_Tackle", pesoTot: 534.8, catture: 68, biggest: 22.1, trend: "▲ 1" },
    { rank: 7, avatar: "DN", name: "Davide_Nash", pesoTot: 498.3, catture: 62, biggest: 21.8, trend: "▼ 3" },
    { rank: 8, avatar: "RL", name: "Roberto_Lake", pesoTot: 467.1, catture: 58, biggest: 20.5, trend: "▲ 2" },
    { rank: 9, avatar: "FC", name: "Fabio_Carper", pesoTot: 445.6, catture: 54, biggest: 19.8, trend: "▼ 1" },
    { rank: 10, avatar: "AE", name: "Alessandro_E", pesoTot: 412.0, catture: 47, biggest: 18.5, trend: "▲ 5" }
  ],
  
  highlights: {
    mostActive: { player: "Marco_Korda", detail: "124 catture questo mese" },
    record: { player: "Giovanni_Fish", detail: "28.4 kg - Lago Trasimeno" },
    rising: { player: "Alessandro_E", detail: "+5 posizioni ↑" }
  },
  
  charts: {
    bait: {
      labels: ['Monster Crab', 'Scopex Squid', 'Strawberry', 'Tutti Frutti', 'Tigernuts'],
      data: [847, 623, 512, 398, 287]
    },
    type: {
      labels: ['Boilie', 'Naturali', 'Artificiali'],
      data: [68, 24, 8]
    },
    time: {
      labels: ['00-06', '06-12', '12-18', '18-24'],
      data: [1247, 3156, 1834, 2686]
    },
    month: {
      labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
      data: [423, 387, 512, 689, 834, 945, 1023, 1156, 987, 756, 634, 577]
    },
    region: {
      labels: ['Lombardia', 'Emilia-Romagna', 'Veneto', 'Piemonte', 'Toscana', 'Lazio', 'Trentino', 'Umbria', 'Campania', 'Puglia'],
      data: [2847, 1923, 1654, 1287, 1012, 892, 456, 387, 287, 234]
    }
  },
  
  prize: {
    image: "https://i.postimg.cc/tTS696F4/dc2c0b11-9e33-4629-99d6-8008d03d24b6.jpg",
    title: "Classifica Mensile",
    name: "Kit Boilies Mainline 5kg",
    description: "I migliori 3 pescatori della classifica totale mensile vinceranno un fantastico kit di boilies Mainline da 5kg! Scala la classifica e porta a casa il premio! 🎣"
  },
  
  brandSpotlight: {
    name: "Nome Brand",
    catches: 1247
  }
};

// ═══════════════════════════════════════════════════════════
// DATA FETCHING (AIRTABLE INTEGRATION POINT)
// ═══════════════════════════════════════════════════════════

/**
 * Fetch dashboard data
 * TODO: Replace with Airtable API call
 * @param filter - 'today', 'week', or 'month'
 * @returns Promise<DashboardData> Dashboard data
 */
export async function fetchDashboardData(filter: 'today' | 'week' | 'month' = 'week'): Promise<DashboardData> {
  // TODO: Replace this with actual Airtable fetch
  // Example:
  // const response = await fetch(`https://api.airtable.com/v0/${CONFIG.AIRTABLE_BASE_ID}/Pescatori`, {
  //   headers: { 'Authorization': `Bearer ${CONFIG.AIRTABLE_API_KEY}` }
  // });
  // const data = await response.json();
  // return transformAirtableData(data, filter);
  
  // For now, return mock data with simulated delay
  return new Promise(resolve => {
    setTimeout(() => resolve(MOCK_DATA), 300);
  });
}

/**
 * Transform Airtable response to dashboard format
 * TODO: Implement when connecting to Airtable
 */
// function transformAirtableData(airtableData: any, filter: string): DashboardData {
//   // Transform Airtable records to DashboardData format
//   return MOCK_DATA;
// }
