import React from 'react';
import { Race } from '../types/race';
import { CountdownTimer } from './CountdownTimer';
import { Flag, MapPin } from 'lucide-react';

interface RaceCardProps {
  race: Race;
}

export const RaceCard: React.FC<RaceCardProps> = ({ race }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{race.name}</h2>
        <img
          src={`https://flagcdn.com/w40/${race.flagCode}.png`}
          alt={`${race.location} flag`}
          className="h-6 rounded"
        />
      </div>
      
      <div className="flex items-center gap-2 text-gray-600 mb-6">
        <MapPin size={18} />
        <span>{race.circuit}, {race.location}</span>
      </div>

      <div className="mb-6">
        <div className="text-sm text-gray-500 mb-2">Race starts at:</div>
        <div className="text-lg font-semibold">
          {race.date.toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>

      <CountdownTimer raceDate={race.date} />
    </div>
  );
};