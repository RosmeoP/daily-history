'use client';

import { useState } from 'react';
import TypewriterText from './TypewriterText';

interface SequentialTypewriterProps {
  sentences: string[];
  delay?: number;
  speed?: number;
  className?: string;
}

export default function SequentialTypewriter({ sentences, delay = 0, speed = 30, className = '' }: SequentialTypewriterProps) {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const handleSentenceComplete = () => {
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {sentences.map((sentence, index) => (
        <div key={index} className={index > currentSentenceIndex ? 'opacity-0' : ''}>
          {index <= currentSentenceIndex && (
            <TypewriterText
              text={sentence + (index < sentences.length - 1 ? '.' : '')}
              delay={index === 0 ? delay : 0}
              speed={speed}
              onComplete={index === currentSentenceIndex ? handleSentenceComplete : undefined}
              className="block"
            />
          )}
        </div>
      ))}
    </div>
  );
}