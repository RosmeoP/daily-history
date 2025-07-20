export interface DailyTopicContent {
  topic: string;
  title: string;
  content: string;
  keyPoints: string[];
  funFact: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readingTime: number;
}

export interface DailyEphemeris {
  date: string;
  dayOfYear: number;
  daily: DailyTopicContent;
  dailyQuote: string;
  isLoading: boolean;
  error?: string;
}