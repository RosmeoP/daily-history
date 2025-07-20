'use client';

import { useState, useEffect } from 'react';
import { getDailyEphemeris } from '@/utils/ephemeris';
import { DailyEphemeris } from '@/types/ephemeris';
import TopicCard from '@/components/EphemerisCard';
import DatePicker from '@/components/DatePicker';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [ephemerisData, setEphemerisData] = useState<DailyEphemeris | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const data = getDailyEphemeris(selectedDate);
    setEphemerisData(data);
  }, [selectedDate]);

  useEffect(() => {
    const animatePosition = () => {
      const time = Date.now() * 0.0005;
      setMousePosition({
        x: 50 + Math.sin(time) * 8 + Math.cos(time * 0.7) * 4,
        y: 50 + Math.cos(time * 0.8) * 6 + Math.sin(time * 1.2) * 3,
      });
    };

    const interval = setInterval(animatePosition, 100);
    return () => clearInterval(interval);
  }, []);

  if (!ephemerisData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-950 dark:to-gray-900 relative overflow-hidden flex items-center justify-center">
        {/* Blurred background overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-white/30 dark:bg-black/30"></div>
        
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 mx-auto mb-6">
            <div className="animate-pulse">
              <div className="w-4 h-4 bg-gray-400 dark:bg-gray-500 rounded-full mx-auto mb-2 opacity-75"></div>
              <div className="w-6 h-6 bg-gray-500 dark:bg-gray-400 rounded-full mx-auto mb-2 opacity-50"></div>
              <div className="w-8 h-8 bg-gray-600 dark:bg-gray-300 rounded-full mx-auto opacity-25"></div>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 font-light">Loading your daily learning content...</p>
        </div>
      </div>
    );
  }

  const dailyContent = ephemerisData.daily;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/20 dark:bg-gray-800/20"></div>
      
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-gray-200/20 to-gray-400/20 dark:from-gray-600/30 dark:to-gray-700/30 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-300/15 to-gray-500/15 dark:from-gray-500/25 dark:to-gray-600/25 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-gray-100/15 to-gray-300/15 dark:from-gray-700/25 dark:to-gray-800/25 rounded-full filter blur-3xl opacity-40"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-gray-400/40 to-gray-600/40 dark:from-gray-400/60 dark:to-gray-500/60 rounded-full filter blur-2xl opacity-80 transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>

      <div className="relative z-10 p-4 sm:p-8">
        <div className="max-w-8xl mx-auto">
          <header className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl sm:text-7xl font-extralight text-black dark:text-white mb-6 tracking-wider">
              Daily Ephemeris
            </h1>
            <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-500 to-transparent mx-auto mb-6"></div>
            <p className="text-gray-700 dark:text-gray-200 font-light text-xl mb-3">
              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              Day {ephemerisData.dayOfYear} of {selectedDate.getFullYear()} • Your daily learning moment
            </p>
          </header>

          <div className="mb-12 animate-slide-up animation-delay-200">
            <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
          </div>

          {/* Daily Quote */}
          <div className="mb-16 animate-fade-in-up animation-delay-300">
            <div className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/40 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-10 text-center">
              <h2 className="text-3xl font-light text-black dark:text-white mb-6 flex items-center justify-center gap-3">
                <span className="text-4xl">✨</span>
                Inspiration of the Day
              </h2>
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-200 leading-relaxed max-w-3xl mx-auto">
                &ldquo;{ephemerisData.dailyQuote}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Daily Learning Content */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-5xl">
              <TopicCard content={dailyContent} />
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center animate-fade-in-up animation-delay-900">
            <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-900/40 rounded-3xl shadow-lg border border-gray-200/40 dark:border-gray-700/40 p-8">
              <p className="text-base text-gray-700 dark:text-gray-200 mb-3">
                ✨ One daily learning experience • Curated educational content
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Frontend-only • Navigate dates for new topics • Expand your knowledge daily
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
