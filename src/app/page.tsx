'use client';

import { useState, useEffect } from 'react';
import { getDailyEphemeris } from '@/utils/ephemeris';
import { DailyEphemeris } from '@/types/ephemeris';
import TopicCard from '@/components/EphemerisCard';
import DatePicker from '@/components/DatePicker';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [ephemerisData, setEphemerisData] = useState<DailyEphemeris | null>(null);
  useEffect(() => {
    const data = getDailyEphemeris(selectedDate);
    setEphemerisData(data);
  }, [selectedDate]);

  if (!ephemerisData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-zinc-100 dark:from-stone-900 dark:via-neutral-900 dark:to-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-600 mx-auto mb-4"></div>
          <p className="text-stone-600 dark:text-stone-300">Loading your daily learning content...</p>
        </div>
      </div>
    );
  }

  const dailyContent = ephemerisData.daily;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 dark:from-violet-950 dark:via-purple-950 dark:to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-violet-300/20 to-purple-400/20 dark:from-violet-600/20 dark:to-purple-700/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-300/20 to-blue-400/20 dark:from-indigo-600/20 dark:to-blue-700/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-300/15 to-pink-400/15 dark:from-purple-600/15 dark:to-pink-700/15 rounded-full filter blur-3xl animate-bounce"></div>
      </div>

      <div className="relative z-10 p-4 sm:p-8">
        <div className="max-w-8xl mx-auto">
          <header className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl sm:text-7xl font-extralight text-violet-900 dark:text-violet-100 mb-6 tracking-wider">
              Daily Ephemeris
            </h1>
            <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-violet-400 dark:via-violet-500 to-transparent mx-auto mb-6"></div>
            <p className="text-violet-700 dark:text-violet-200 font-light text-xl mb-3">
              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-violet-600 dark:text-violet-300 text-base">
              Day {ephemerisData.dayOfYear} of {selectedDate.getFullYear()} • Your daily learning moment
            </p>
          </header>

          <div className="mb-12 animate-slide-up animation-delay-200">
            <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
          </div>

          {/* Daily Quote */}
          <div className="mb-16 animate-fade-in-up animation-delay-300">
            <div className="backdrop-blur-xl bg-white/10 dark:bg-violet-900/20 rounded-3xl shadow-2xl border border-violet-200/30 dark:border-violet-700/30 p-10 text-center">
              <h2 className="text-3xl font-light text-violet-800 dark:text-violet-100 mb-6 flex items-center justify-center gap-3">
                <span className="text-4xl">✨</span>
                Inspiration of the Day
              </h2>
              <blockquote className="text-xl italic text-violet-700 dark:text-violet-200 leading-relaxed max-w-3xl mx-auto">
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
            <div className="backdrop-blur-lg bg-violet-100/20 dark:bg-violet-900/20 rounded-3xl shadow-lg border border-violet-200/30 dark:border-violet-700/30 p-8">
              <p className="text-base text-violet-700 dark:text-violet-200 mb-3">
                ✨ One daily learning experience • Curated educational content
              </p>
              <p className="text-sm text-violet-600 dark:text-violet-300">
                Frontend-only • Navigate dates for new topics • Expand your knowledge daily
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
