import React from 'react';
import { SideCardData } from '../types';

interface SideCardProps {
  data: SideCardData;
}

const SideCard: React.FC<SideCardProps> = ({ data }) => {
  return (
    <div className={`mb-4 w-full rounded-2xl p-5 transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer ${data.bgColor}`}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-3 h-12 w-12 overflow-hidden rounded-md shadow-sm">
          <img src={data.logo} alt={data.name} className="h-full w-full object-cover" />
        </div>
        <h3 className="mb-1 font-bold text-gray-900">{data.name}</h3>
        <p className="text-xs leading-relaxed text-gray-600 font-medium">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default SideCard;
