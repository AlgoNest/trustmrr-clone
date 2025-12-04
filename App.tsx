import React, { useState } from 'react';
import { INITIAL_STARTUPS, LEFT_SIDE_CARDS, RIGHT_SIDE_CARDS } from './constants';
import SideCard from './components/SideCard';
import { Startup, SortOption, DateRange } from './types';
import { SearchIcon, PlusIcon, TrophyIcon, CheckBadgeIcon, MegaphoneIcon } from './components/Icons';
import AddStartupModal from './components/AddStartupModal';

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(val);
};

export default function App() {
  const [startups, setStartups] = useState<Startup[]>(INITIAL_STARTUPS);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Sort/Filter states (visual only for this demo mostly)
  const [sortOption, setSortOption] = useState<SortOption>('MRR');
  const [dateRange, setDateRange] = useState<DateRange>('All time');

  const handleAddStartup = (newStartupData: any) => {
    const newStartup: Startup = {
      ...newStartupData,
      rank: startups.length + 1,
    };
    setStartups([...startups, newStartup]);
  };

  const filteredStartups = startups.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (s.founderName && s.founderName.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen font-sans text-slate-900">
      <AddStartupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={handleAddStartup} 
      />

      <main className="container mx-auto max-w-[1400px] px-4 py-8 lg:px-8">
        
        {/* Top Header Section */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-6 flex items-center justify-center space-x-2 text-xl font-bold text-blue-600">
             {/* Simple star icon for logo */}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
             </svg>
             <span className="text-gray-500 text-lg">TrustMRR</span>
          </div>
          
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl">
            The database of verified startup revenues
          </h1>

          {/* Search & Action Bar */}
          <div className="mb-6 flex w-full max-w-2xl flex-col items-center gap-4 sm:flex-row">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search startups, founders, categories..."
                className="w-full rounded-lg border-0 bg-white py-3 pl-11 pr-4 font-mono text-sm shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 sm:w-auto"
            >
              <PlusIcon className="mr-2 h-4 w-4" />
              Add startup
            </button>
          </div>

          {/* Nav Links */}
          <nav className="mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-sm text-gray-500">
            {['New', 'Search', 'Stats', 'Categories', 'Acquisition', '$1 vs $1,000,000'].map((item) => (
              <a key={item} href="#" className="hover:text-black transition-colors">{item}</a>
            ))}
          </nav>

          {/* Banner */}
          <div className="mb-12 inline-flex items-center rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-200 cursor-pointer">
            <span className="mr-2 flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            New: Buy & Sell Micro-SaaS <span className="ml-1">→</span>
          </div>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left Column (Startups) */}
          <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
            <div className="sticky top-8 space-y-4">
              {LEFT_SIDE_CARDS.map(card => (
                <SideCard key={card.id} data={card} />
              ))}
            </div>
          </div>

          {/* Center Column (Leaderboard) */}
          <div className="lg:col-span-6 xl:col-span-8">
            <div className="mb-6 flex items-center justify-between rounded-t-xl bg-white p-4">
              <h2 className="text-xl font-bold">Leaderboard</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <select 
                    className="appearance-none rounded-md border border-gray-200 bg-white py-1.5 pl-3 pr-8 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value as SortOption)}
                  >
                    <option>MRR</option>
                    <option>Growth</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                  </div>
                </div>

                <div className="relative">
                  <select 
                    className="appearance-none rounded-md border border-gray-200 bg-white py-1.5 pl-3 pr-8 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value as DateRange)}
                  >
                    <option>All time</option>
                    <option>Last 30 days</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                     <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-100 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                    <th className="px-6 py-4 text-center">#</th>
                    <th className="px-6 py-4">Startup</th>
                    <th className="px-6 py-4">Founder</th>
                    <th className="px-6 py-4 text-right">MRR</th>
                    <th className="px-6 py-4 text-right">MoM Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {filteredStartups.map((startup, index) => (
                    <tr key={startup.id} className="group transition-colors hover:bg-gray-50">
                      <td className="px-6 py-4 text-center font-medium text-gray-500">
                        <div className="flex flex-col items-center justify-center">
                          {index < 3 && (
                             <TrophyIcon className="h-5 w-5 mb-1" color={index === 0 ? 'text-yellow-400' : index === 1 ? 'text-gray-400' : 'text-orange-400'} />
                          )}
                          <span>{index + 1}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img 
                            src={startup.logo} 
                            alt={startup.name} 
                            className={`h-10 w-10 rounded-lg object-cover shadow-sm ${startup.rank === 3 ? 'blur-sm grayscale' : ''}`}
                          />
                          <div className="ml-4">
                            <div className="flex items-center font-bold text-gray-900">
                              {startup.rank === 3 ? <span className="blur-[4px] select-none">Hidden Name</span> : startup.name}
                              {startup.isVerified && startup.rank !== 3 && <CheckBadgeIcon className="ml-1 h-4 w-4 text-blue-500" />}
                            </div>
                            <div className="text-xs text-gray-500 max-w-[200px] truncate">
                               {startup.rank === 3 ? '' : startup.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {startup.founderName ? (
                          <div className="flex items-center">
                            <img src={startup.founderAvatar} alt={startup.founderName} className="h-6 w-6 rounded-full object-cover ring-2 ring-white" />
                            <span className="ml-2 font-medium text-gray-700">{startup.founderName}</span>
                          </div>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-gray-900 font-mono">
                        {formatCurrency(startup.mrr)}
                      </td>
                      <td className={`px-6 py-4 text-right font-medium font-mono ${startup.growth >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                        {startup.growth >= 0 ? '↑' : '↓'} {Math.abs(startup.growth)}%
                      </td>
                    </tr>
                  ))}
                  
                  {filteredStartups.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-gray-500">
                        No startups found matching "{searchQuery}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination / Load More fake */}
            <div className="mt-4 flex justify-center">
               <button className="text-sm font-medium text-gray-500 hover:text-black">
                  Page 1 of 4
               </button>
            </div>

          </div>

          {/* Right Column (Startups) */}
          <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
            <div className="sticky top-8 space-y-4">
              {RIGHT_SIDE_CARDS.map(card => (
                <SideCard key={card.id} data={card} />
              ))}
               <div className="mt-8 flex justify-center">
                 <button className="flex items-center text-xs font-semibold text-gray-400 hover:text-gray-600">
                    <MegaphoneIcon className="mr-1 h-3 w-3" />
                    Advertise
                 </button>
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
