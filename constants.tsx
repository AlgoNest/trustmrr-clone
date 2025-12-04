import { Startup, SideCardData } from './types';
import React from 'react';

// Using functional component syntax for icons to avoid issues, 
// though strictly constants usually just hold data.
// We will use standard SVG strings or placeholder URLs for simplicity in data.

export const INITIAL_STARTUPS: Startup[] = [
  {
    id: '1',
    rank: 1,
    name: 'Arcads AI',
    description: 'Create winning AI Video Ads',
    logo: 'https://picsum.photos/seed/arcads/100/100',
    founderName: 'Romain Torres',
    founderAvatar: 'https://picsum.photos/seed/romain/100/100',
    mrr: 957907,
    growth: 37,
    isVerified: true,
  },
  {
    id: '2',
    rank: 2,
    name: 'TrimRx',
    description: 'TrimRx is a telehealth company that spec...',
    logo: 'https://picsum.photos/seed/trimrx/100/100',
    founderName: 'Cris',
    founderAvatar: 'https://picsum.photos/seed/cris/100/100',
    mrr: 888999,
    growth: -39,
    isVerified: true,
  },
  {
    id: '3',
    rank: 3,
    name: 'Unnamed Company',
    description: '',
    logo: 'https://picsum.photos/seed/hidden/100/100', // Blurred effect handled in UI
    founderName: undefined, // Hidden
    mrr: 809763,
    growth: 6,
    isVerified: true,
  },
  {
    id: '4',
    rank: 4,
    name: 'Cometly',
    description: 'Marketing attribution and analytics for ...',
    logo: 'https://picsum.photos/seed/cometly/100/100',
    founderName: 'Grant Cooper',
    founderAvatar: 'https://picsum.photos/seed/grant/100/100',
    mrr: 223087,
    growth: 2,
    isVerified: true,
  },
  {
    id: '5',
    rank: 5,
    name: 'ShipFast',
    description: 'NextJS boilerplate for startups',
    logo: 'https://picsum.photos/seed/shipfast/100/100',
    founderName: 'Marc Lou',
    founderAvatar: 'https://picsum.photos/seed/marc/100/100',
    mrr: 145000,
    growth: 12,
    isVerified: true,
  },
];

export const LEFT_SIDE_CARDS: SideCardData[] = [
  {
    id: 'l1',
    name: 'Newsletters.ai',
    description: 'Weekly AI catch-up for lazy readers.',
    logo: 'https://picsum.photos/seed/news/50/50',
    bgColor: 'bg-[#FFF6E5]', // Light Orange/Yellow
  },
  {
    id: 'l2',
    name: 'GojiberryAI',
    description: 'Find warm leads and book sales calls automatically',
    logo: 'https://picsum.photos/seed/goji/50/50',
    bgColor: 'bg-[#FFECEC]', // Light Pink
  },
  {
    id: 'l3',
    name: 'Linkie',
    description: 'Like Linktree, but sexier and unbranded. $30/lifetime!',
    logo: 'https://picsum.photos/seed/linkie/50/50',
    bgColor: 'bg-[#E0F7FA]', // Light Cyan
  },
  {
    id: 'l4',
    name: 'Ping Proxies',
    description: 'Ethical residential proxies for web-scraping and AI. No card...',
    logo: 'https://picsum.photos/seed/ping/50/50',
    bgColor: 'bg-[#EDE7F6]', // Light Purple
  },
  {
    id: 'l5',
    name: 'Baremetrics',
    description: 'Subscription metrics made simple. Beautiful dashboards an...',
    logo: 'https://picsum.photos/seed/bare/50/50',
    bgColor: 'bg-[#E8EAF6]', // Light Indigo
  },
];

export const RIGHT_SIDE_CARDS: SideCardData[] = [
  {
    id: 'r1',
    name: 'Postopus',
    description: 'Post everywhere, all at once. Become a Founding Tentacle.',
    logo: 'https://picsum.photos/seed/post/50/50',
    bgColor: 'bg-[#FCE4EC]', // Pinkish
  },
  {
    id: 'r2',
    name: 'Chargeback.io',
    description: 'Prevent chargebacks on autopilot',
    logo: 'https://picsum.photos/seed/charge/50/50',
    bgColor: 'bg-[#E3F2FD]', // Light Blue
  },
  {
    id: 'r3',
    name: 'WaitForIt',
    description: 'Build a waitlist for your idea in 3 minutes',
    logo: 'https://picsum.photos/seed/wait/50/50',
    bgColor: 'bg-[#F5F5F5]', // Light Gray
  },
  {
    id: 'r4',
    name: 'ADMN',
    description: '10x Linux Server Administration',
    logo: 'https://picsum.photos/seed/admn/50/50',
    bgColor: 'bg-[#E3F2FD]', // Light Blue
  },
  {
    id: 'r5',
    name: 'HypeProxies',
    description: 'Proxy infrastructure built for automating, scaling, and...',
    logo: 'https://picsum.photos/seed/hype/50/50',
    bgColor: 'bg-[#E8F5E9]', // Light Green
  },
];
