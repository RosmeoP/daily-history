'use client';

import { DailyTopicContent } from '@/types/ephemeris';
import SequentialTypewriter from './SequentialTypewriter';

interface TopicCardProps {
  content: DailyTopicContent;
  index?: number;
}

export default function TopicCard({ content }: TopicCardProps) {
  const topicEmoji: { [key: string]: string } = {
    science: '🔬',
    history: '📚',
    technology: '💻',
    nature: '🌿',
    culture: '🎭'
  };

  const topicColors: { [key: string]: string } = {
    science: 'from-blue-400 to-cyan-500',
    history: 'from-amber-400 to-orange-500',
    technology: 'from-purple-400 to-indigo-500',
    nature: 'from-green-400 to-emerald-500',
    culture: 'from-pink-400 to-rose-500'
  };

  const difficultyColors: { [key: string]: string } = {
    beginner: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
    intermediate: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    advanced: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300'
  };

  if (content.title === 'Loading...') {
    return (
      <div className="group backdrop-blur-2xl bg-white/5 dark:bg-violet-950/20 rounded-3xl shadow-2xl border border-violet-200/30 dark:border-violet-700/30 p-12 animate-pulse">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 bg-violet-200 dark:bg-violet-700 rounded-full"></div>
          <div className="flex-1">
            <div className="h-8 bg-violet-200 dark:bg-violet-700 rounded mb-3"></div>
            <div className="h-5 bg-violet-200 dark:bg-violet-700 rounded w-3/4"></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-5 bg-violet-200 dark:bg-violet-700 rounded"></div>
          <div className="h-5 bg-violet-200 dark:bg-violet-700 rounded"></div>
          <div className="h-5 bg-violet-200 dark:bg-violet-700 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  // Split content into sentences for sequential animation
  const sentences = content.content.split('. ').filter(sentence => sentence.trim());

  return (
    <div className="group backdrop-blur-2xl bg-white/5 dark:bg-violet-950/20 rounded-3xl shadow-2xl border border-violet-200/30 dark:border-violet-700/30 p-12 hover:shadow-3xl hover:scale-105 transition-all duration-700 hover:bg-white/10 dark:hover:bg-violet-950/30">
      <div className="flex items-center gap-6 mb-10">
        <div className={`text-5xl p-6 rounded-2xl bg-gradient-to-br ${topicColors[content.topic]} shadow-2xl group-hover:scale-110 transition-transform duration-500 backdrop-blur-lg`}>
          <span className="filter drop-shadow-lg text-white">{topicEmoji[content.topic]}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-light text-violet-900 dark:text-violet-100 group-hover:text-violet-800 dark:group-hover:text-white transition-colors duration-300 mb-4">
            {content.title}
          </h3>
          <div className="flex items-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${difficultyColors[content.difficulty]} backdrop-blur-lg`}>
              {content.difficulty}
            </span>
            <span className="text-sm text-violet-600 dark:text-violet-300">
              {content.readingTime} min read
            </span>
          </div>
        </div>
      </div>
      
      <div className="space-y-8">
        <div className="text-lg text-violet-800 dark:text-violet-200 leading-relaxed">
          <SequentialTypewriter
            sentences={sentences}
            delay={1000}
            speed={25}
          />
        </div>
        
        {content.keyPoints.length > 0 && (
          <div className="space-y-5 opacity-0 animate-fade-in-up" style={{ animationDelay: '8000ms' }}>
            <h4 className="text-xl font-medium text-violet-900 dark:text-violet-100 flex items-center gap-3">
              <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
              Key Insights
            </h4>
            <ul className="space-y-4 ml-6">
              {content.keyPoints.map((point, pointIndex) => (
                <li key={pointIndex} className="text-base text-violet-700 dark:text-violet-200 flex items-start gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: `${8500 + pointIndex * 600}ms` }}>
                  <span className="w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex-shrink-0 mt-1.5"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {content.funFact && (
          <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-100/30 to-purple-100/30 dark:from-violet-900/30 dark:to-purple-900/30 backdrop-blur-xl border border-violet-300/40 dark:border-violet-600/40 opacity-0 animate-fade-in-up" style={{ animationDelay: '12000ms' }}>
            <h4 className="text-xl font-medium text-violet-900 dark:text-violet-100 mb-4 flex items-center gap-3">
              <span className="text-2xl">💡</span>
              Did You Know?
            </h4>
            <p className="text-base text-violet-700 dark:text-violet-200 leading-relaxed">
              {content.funFact}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}