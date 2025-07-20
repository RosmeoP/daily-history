'use client';

import { DailyTopicContent } from '@/types/ephemeris';
import TypewriterText from './TypewriterText';

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
    science: 'from-blue-200 to-cyan-200',
    history: 'from-amber-200 to-orange-200',
    technology: 'from-purple-200 to-indigo-200',
    nature: 'from-green-200 to-emerald-200',
    culture: 'from-pink-200 to-rose-200'
  };

  const difficultyColors: { [key: string]: string } = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  if (content.title === 'Loading...') {
    return (
      <div className="group backdrop-blur-lg bg-white/10 dark:bg-stone-800/10 rounded-3xl shadow-xl border border-white/20 dark:border-stone-600/20 p-8 animate-pulse">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-stone-200 dark:bg-stone-700 rounded-full"></div>
          <div className="flex-1">
            <div className="h-6 bg-stone-200 dark:bg-stone-700 rounded mb-2"></div>
            <div className="h-4 bg-stone-200 dark:bg-stone-700 rounded w-3/4"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-stone-200 dark:bg-stone-700 rounded"></div>
          <div className="h-4 bg-stone-200 dark:bg-stone-700 rounded"></div>
          <div className="h-4 bg-stone-200 dark:bg-stone-700 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  // Split content into sentences for staggered animation
  const sentences = content.content.split('. ').filter(sentence => sentence.trim());

  return (
    <div className="group backdrop-blur-lg bg-white/10 dark:bg-stone-800/10 rounded-3xl shadow-xl border border-white/20 dark:border-stone-600/20 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white/15 dark:hover:bg-stone-800/15">
      <div className="flex items-center gap-4 mb-6">
        <div className={`text-4xl p-4 rounded-full bg-gradient-to-br ${topicColors[content.topic]} shadow-xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}>
          <span className="filter drop-shadow-sm">{topicEmoji[content.topic]}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-medium text-stone-800 dark:text-stone-100 group-hover:text-stone-900 dark:group-hover:text-white transition-colors duration-300 mb-3">
            {content.title}
          </h3>
          <div className="flex items-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[content.difficulty]} backdrop-blur-sm`}>
              {content.difficulty}
            </span>
            <span className="text-sm text-stone-500 dark:text-stone-400">
              {content.readingTime} min read
            </span>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="text-base text-stone-700 dark:text-stone-200 leading-relaxed space-y-3">
          {sentences.map((sentence, sentenceIndex) => (
            <div key={sentenceIndex}>
              <TypewriterText
                text={sentence + (sentenceIndex < sentences.length - 1 ? '. ' : '')}
                delay={1000 + sentenceIndex * 1000}
                speed={30}
                className="block"
              />
            </div>
          ))}
        </div>
        
        {content.keyPoints.length > 0 && (
          <div className="space-y-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '4000ms' }}>
            <h4 className="text-lg font-medium text-stone-800 dark:text-stone-100">Key Points:</h4>
            <ul className="space-y-3">
              {content.keyPoints.map((point, pointIndex) => (
                <li key={pointIndex} className="text-sm text-stone-600 dark:text-stone-300 flex items-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: `${4500 + pointIndex * 500}ms` }}>
                  <span className="w-2 h-2 bg-gradient-to-r from-stone-400 to-stone-500 rounded-full flex-shrink-0"></span>
                  <TypewriterText
                    text={point}
                    delay={4500 + pointIndex * 500}
                    speed={25}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {content.funFact && (
          <div className="p-6 rounded-2xl bg-white/20 dark:bg-stone-700/20 backdrop-blur-md border border-white/30 dark:border-stone-600/30 opacity-0 animate-fade-in-up" style={{ animationDelay: '6500ms' }}>
            <h4 className="text-lg font-medium text-stone-800 dark:text-stone-100 mb-3 flex items-center gap-2">
              <span className="text-xl">💡</span>
              Fun Fact
            </h4>
            <TypewriterText
              text={content.funFact}
              delay={7000}
              speed={35}
              className="text-sm text-stone-600 dark:text-stone-300"
            />
          </div>
        )}
      </div>
    </div>
  );
}