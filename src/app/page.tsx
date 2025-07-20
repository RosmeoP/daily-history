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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-zinc-100 dark:from-stone-900 dark:via-neutral-900 dark:to-zinc-900 relative overflow-hidden">
      {/* Animated background blur orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-stone-200 dark:bg-stone-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-zinc-200 dark:bg-zinc-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-25 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-neutral-200 dark:bg-neutral-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-bounce"></div>
      </div>

      <div className="relative z-10 p-4 sm:p-8">
        <div className="max-w-8xl mx-auto">
          <header className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-thin text-stone-800 dark:text-stone-100 mb-4 tracking-wide">
              Daily Ephemeris
            </h1>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-stone-400 dark:via-stone-500 to-transparent mx-auto mb-4"></div>
            <p className="text-stone-600 dark:text-stone-300 font-light text-lg mb-2">
              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Day {ephemerisData.dayOfYear} of {selectedDate.getFullYear()} • Your daily dose of knowledge
            </p>
          </header>

          <div className="mb-12 animate-slide-up animation-delay-200">
            <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
          </div>

          {/* Daily Quote */}
          <div className="mb-12 animate-fade-in-up animation-delay-300">
            <div className="backdrop-blur-sm bg-white/20 dark:bg-stone-800/20 rounded-3xl shadow-lg border border-white/30 dark:border-stone-600/30 p-8 text-center">
              <h2 className="text-2xl font-light text-stone-800 dark:text-stone-100 mb-4">
                💫 Quote of the Day
              </h2>
              <blockquote className="text-lg italic text-stone-700 dark:text-stone-200 leading-relaxed">
                &ldquo;{ephemerisData.dailyQuote}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Daily Learning Content */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-4xl">
              <TopicCard content={dailyContent} index={0} />
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center animate-fade-in-up animation-delay-900">
            <div className="backdrop-blur-sm bg-white/15 dark:bg-stone-800/15 rounded-2xl shadow-md border border-white/20 dark:border-stone-600/20 p-6">
              <p className="text-sm text-stone-600 dark:text-stone-300 mb-2">
                ✨ One daily learning experience • Curated educational content
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Frontend-only • Navigate dates for new topics • Expand your knowledge daily
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
