import React from 'react';
import { races } from './data/races';
import { RaceCard } from './components/RaceCard';
import { Trophy } from 'lucide-react';

function App() {
  const upcomingRaces = races
    .filter(race => new Date() < race.date)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Trophy size={32} className="text-red-600" />
          <h1 className="text-4xl font-bold text-gray-800">F1 Race Countdown</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingRaces.map((race) => (
            <RaceCard key={race.name} race={race} />
          ))}
        </div>

        {upcomingRaces.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            No upcoming races scheduled at the moment.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;