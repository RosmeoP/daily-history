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
    science: 'from-gray-400 to-gray-600',
    history: 'from-gray-500 to-gray-700',
    technology: 'from-gray-600 to-gray-800',
    nature: 'from-gray-400 to-gray-500',
    culture: 'from-gray-500 to-gray-600'
  };

  const difficultyColors: { [key: string]: string } = {
    beginner: 'bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-200',
    intermediate: 'bg-gray-200 text-gray-900 dark:bg-gray-700/50 dark:text-gray-100',
    advanced: 'bg-gray-300 text-black dark:bg-gray-600/50 dark:text-white'
  };

  if (content.title === 'Loading...') {
    return (
      <div className="group backdrop-blur-2xl bg-white/10 dark:bg-gray-950/40 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-12 animate-pulse">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="flex-1">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  // Split content into sentences for sequential animation
  const sentences = content.content.split('. ').filter(sentence => sentence.trim());

  return (
    <div className="backdrop-blur-2xl bg-white/10 dark:bg-gray-950/40 rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-12">
      <div className="flex items-center gap-6 mb-10">
        <div className={`text-5xl p-6 rounded-2xl bg-gradient-to-br ${topicColors[content.topic]} shadow-xl backdrop-blur-lg`}>
          <span className="filter drop-shadow-lg text-white">{topicEmoji[content.topic]}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-light text-black dark:text-white mb-4">
            {content.title}
          </h3>
          <div className="flex items-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${difficultyColors[content.difficulty]} backdrop-blur-lg`}>
              {content.difficulty}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {content.readingTime} min read
            </span>
          </div>
        </div>
      </div>
      
      <div className="space-y-8">
        <div className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
          <SequentialTypewriter
            sentences={sentences}
            delay={1000}
            speed={25}
          />
        </div>
        
        {content.keyPoints.length > 0 && (
          <div className="space-y-5 opacity-0 animate-fade-in-up" style={{ animationDelay: '8000ms' }}>
            <h4 className="text-xl font-medium text-black dark:text-white flex items-center gap-3">
              <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full"></span>
              Key Insights
            </h4>
            <ul className="space-y-4 ml-6">
              {content.keyPoints.map((point, pointIndex) => (
                <li key={pointIndex} className="text-base text-gray-700 dark:text-gray-200 flex items-start gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: `${8500 + pointIndex * 600}ms` }}>
                  <span className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full flex-shrink-0 mt-1.5"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {content.funFact && (
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-100/40 to-gray-200/40 dark:from-gray-800/40 dark:to-gray-900/40 backdrop-blur-xl border border-gray-300/50 dark:border-gray-600/50 opacity-0 animate-fade-in-up" style={{ animationDelay: '12000ms' }}>
            <h4 className="text-xl font-medium text-black dark:text-white mb-4 flex items-center gap-3">
              <span className="text-2xl">💡</span>
              Did You Know?
            </h4>
            <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">
              {content.funFact}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}