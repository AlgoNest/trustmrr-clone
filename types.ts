export interface Startup {
  id: string;
  rank: number;
  name: string;
  description: string;
  logo: string;
  founderName?: string;
  founderAvatar?: string;
  mrr: number;
  growth: number; // Percentage
  isVerified: boolean;
}

export interface SideCardData {
  id: string;
  name: string;
  description: string;
  logo: string;
  bgColor: string; // Tailwind class for background color
}

export type SortOption = 'MRR' | 'Growth' | 'Newest';
export type DateRange = 'All time' | 'Last 30 days' | 'Last 12 months';
