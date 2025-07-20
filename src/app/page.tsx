'use client';

import { useState, useEffect } from 'react';
import { getDailyEphemeris } from '@/utils/ephemeris';
import { DailyEphemeris } from '@/types/ephemeris';
import TopicCard from '@/components/EphemerisCard';
import DatePicker from '@/components/DatePicker';
import { Globe, ExternalLink } from 'lucide-react';

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
      const time = Date.now() * 0.0003;
      setMousePosition({
        x: 50 + Math.sin(time) * 3,
        y: 50 + Math.cos(time) * 2,
      });
    };

    const interval = setInterval(animatePosition, 150);
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
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/15 to-gray-100/15 dark:from-gray-900/30 dark:to-gray-800/30 rounded-3xl shadow-2xl border border-gray-200/30 dark:border-gray-700/30 p-10">
              <div className="mb-8">
                <h3 className="text-lg font-light text-black dark:text-white mb-3">Daily Ephemeris</h3>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-500 to-transparent mx-auto mb-4"></div>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-light">
                  Curated educational content for daily learning
                </p>
              </div>
              
              <div className="mb-8">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 font-light tracking-wide uppercase">
                  Connect
                </p>
                <div className="flex justify-center items-center gap-8">
                  <a 
                    href="https://rmauricio-dev.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400/20 to-gray-600/20 dark:from-gray-500/20 dark:to-gray-300/20 border border-gray-300/40 dark:border-gray-600/40 flex items-center justify-center backdrop-blur-sm">
                      <Globe className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-light">Portfolio</span>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/rosmeoo/" 
                    target="https://www.instagram.com/rosmeoo/" 
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400/20 to-gray-600/20 dark:from-gray-500/20 dark:to-gray-300/20 border border-gray-300/40 dark:border-gray-600/40 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-light">Instagram</span>
                  </a>
                  
                  <a 
                    href="https://x.com/_rosmeo" 
                    target="https://x.com/_rosmeo" 
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400/20 to-gray-600/20 dark:from-gray-500/20 dark:to-gray-300/20 border border-gray-300/40 dark:border-gray-600/40 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-light">Twitter</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/mauricio-parada-a67470267/" 
                    target="https://www.linkedin.com/in/mauricio-parada-a67470267/" 
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400/20 to-gray-600/20 dark:from-gray-500/20 dark:to-gray-300/20 border border-gray-300/40 dark:border-gray-600/40 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-light">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://github.com/RosmeoP" 
                    target="https://github.com/RosmeoP" 
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400/20 to-gray-600/20 dark:from-gray-500/20 dark:to-gray-300/20 border border-gray-300/40 dark:border-gray-600/40 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-light">GitHub</span>
                  </a>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-300/20 dark:border-gray-600/20">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-light mb-2">
                  Frontend-only • Navigate dates for new topics • Expand your knowledge daily
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-light">
                  © 2025 Rosmeo Mauricio Villalobos Parada. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
