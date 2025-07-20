import { DailyEphemeris, DailyTopicContent } from '@/types/ephemeris';

const contentDatabase = {
  science: [
    {
      topic: 'science',
      title: 'The Wonder of Photosynthesis',
      content: 'Photosynthesis is one of the most important biological processes on Earth. Plants, algae, and some bacteria convert light energy into chemical energy, producing oxygen as a byproduct. This process involves two main stages: light-dependent reactions and the Calvin cycle. During light-dependent reactions, chlorophyll absorbs photons and converts them into ATP and NADPH. The Calvin cycle uses these energy carriers to fix carbon dioxide into glucose. This remarkable process not only feeds the plant but also produces the oxygen we breathe, making life as we know it possible.',
      keyPoints: ['Converts light to chemical energy', 'Produces oxygen we breathe', 'Two-stage process', 'Essential for life on Earth'],
      funFact: 'A single tree can produce enough oxygen for two people per day!',
      difficulty: 'beginner' as const,
      readingTime: 3
    },
    {
      topic: 'science',
      title: 'DNA: The Blueprint of Life',
      content: 'DNA, or deoxyribonucleic acid, is the molecular instruction manual for all living organisms. This double-helix structure contains genetic information encoded in sequences of four chemical bases: adenine, thymine, guanine, and cytosine. Each human cell contains approximately 3 billion base pairs, yet if stretched out, the DNA would measure about 2 meters long. DNA replication is incredibly precise, with error rates of only 1 in 10 billion base pairs. This genetic code determines everything from eye color to disease susceptibility, making each person genetically unique.',
      keyPoints: ['Double-helix molecular structure', 'Contains 3 billion base pairs', 'Incredibly precise replication', 'Determines physical traits'],
      funFact: 'Humans share about 60% of their DNA with bananas!',
      difficulty: 'intermediate' as const,
      readingTime: 3
    },
    {
      topic: 'science',
      title: 'The Physics of Black Holes',
      content: 'Black holes are among the most extreme objects in the universe, where gravity is so strong that nothing, not even light, can escape once it crosses the event horizon. They form when massive stars collapse under their own gravity, creating a singularity where space-time curves infinitely. Einstein\'s theory of general relativity predicted their existence decades before they were observed. The recent breakthroughs in gravitational wave detection and the first images of black holes have revolutionized our understanding of these cosmic phenomena, confirming many theoretical predictions.',
      keyPoints: ['Extreme gravitational objects', 'Nothing can escape event horizon', 'Form from collapsed massive stars', 'Confirmed by recent observations'],
      funFact: 'Time passes slower near a black hole due to gravitational time dilation!',
      difficulty: 'advanced' as const,
      readingTime: 4
    }
  ],
  history: [
    {
      topic: 'history',
      title: 'The Library of Alexandria',
      content: 'The Great Library of Alexandria was one of the largest and most significant libraries of the ancient world. Founded in the 3rd century BCE in Alexandria, Egypt, it was part of the larger research institution called the Mouseion. The library aimed to collect all human knowledge and housed hundreds of thousands of scrolls. Scholars from across the Mediterranean came to study there, making groundbreaking discoveries in mathematics, astronomy, medicine, and geography. Though its exact end is debated, the library\'s decline symbolizes the loss of ancient knowledge and the importance of preserving human learning.',
      keyPoints: ['Ancient world\'s greatest library', 'Part of the Mouseion research center', 'Attracted scholars worldwide', 'Symbol of knowledge preservation'],
      funFact: 'Ships entering Alexandria\'s harbor had their scrolls confiscated and copied for the library!',
      difficulty: 'intermediate' as const,
      readingTime: 3
    },
    {
      topic: 'history',
      title: 'The Silk Road Trading Network',
      content: 'The Silk Road was not a single road but a network of trade routes connecting East and West for over 1,400 years. Stretching from China to the Mediterranean, these routes facilitated the exchange of goods, ideas, religions, and technologies. Merchants traded silk, spices, precious stones, and other luxury items, but the routes also spread Buddhism, Islam, and Christianity across continents. The Silk Road fostered cultural exchange and innovation, contributing to the Renaissance in Europe and the Golden Age of Islam. Its legacy reminds us how interconnected our world has always been.',
      keyPoints: ['Network of trade routes for 1,400 years', 'Connected China to Mediterranean', 'Spread religions and ideas', 'Fostered cultural exchange'],
      funFact: 'The term "Silk Road" wasn\'t coined until 1877 by German geographer Ferdinand von Richthofen!',
      difficulty: 'beginner' as const,
      readingTime: 3
    },
    {
      topic: 'history',
      title: 'The Industrial Revolution',
      content: 'The Industrial Revolution, beginning in late 18th century Britain, fundamentally transformed human society from agricultural to industrial. Steam engines, mechanized textile production, and improved transportation created unprecedented economic growth. However, this transformation came with significant social costs: urbanization, poor working conditions, and environmental pollution. The revolution spread across Europe and North America, creating new social classes and changing family structures. Understanding this period helps us appreciate both the benefits and challenges of technological progress in our modern world.',
      keyPoints: ['Transformed agricultural to industrial society', 'Steam engines revolutionized production', 'Created new social classes', 'Lessons for modern technology'],
      funFact: 'The first industrial robot was installed in 1961, continuing the mechanization trend!',
      difficulty: 'intermediate' as const,
      readingTime: 4
    }
  ],
  technology: [
    {
      topic: 'technology',
      title: 'How Quantum Computing Works',
      content: 'Quantum computing represents a revolutionary approach to processing information. Unlike classical computers that use bits (0 or 1), quantum computers use quantum bits or "qubits" that can exist in multiple states simultaneously through superposition. This allows quantum computers to perform many calculations at once. Quantum entanglement, another key principle, enables qubits to be mysteriously connected regardless of distance. These properties give quantum computers the potential to solve certain complex problems exponentially faster than classical computers, particularly in cryptography, drug discovery, and optimization problems.',
      keyPoints: ['Uses qubits instead of bits', 'Leverages superposition principle', 'Quantum entanglement enables connection', 'Exponentially faster for some problems'],
      funFact: 'Google\'s quantum computer solved a problem in 200 seconds that would take classical computers 10,000 years!',
      difficulty: 'advanced' as const,
      readingTime: 4
    },
    {
      topic: 'technology',
      title: 'The Evolution of the Internet',
      content: 'The internet began as ARPANET in 1969, a project by the US Department of Defense to create a decentralized communication network. Tim Berners-Lee invented the World Wide Web in 1989, making the internet accessible to everyone. From dial-up connections to fiber optics, from static websites to social media, the internet has transformed how we communicate, learn, and conduct business. Today, over 4.6 billion people use the internet, creating a global digital society. Understanding this evolution helps us appreciate the rapid pace of technological change.',
      keyPoints: ['Started as ARPANET in 1969', 'World Wide Web created in 1989', 'Transformed global communication', '4.6 billion users today'],
      funFact: 'The first email was sent in 1971, and the "@" symbol was chosen because it was the only preposition on keyboards!',
      difficulty: 'beginner' as const,
      readingTime: 3
    },
    {
      topic: 'technology',
      title: 'Artificial Intelligence and Machine Learning',
      content: 'Artificial Intelligence aims to create machines that can perform tasks typically requiring human intelligence. Machine Learning, a subset of AI, enables computers to learn and improve from experience without explicit programming. Deep Learning uses neural networks inspired by the human brain to recognize patterns in vast amounts of data. From voice assistants to medical diagnosis, AI is increasingly integrated into our daily lives. As these technologies advance, they raise important questions about ethics, employment, and the future of human-machine collaboration.',
      keyPoints: ['AI mimics human intelligence', 'Machine Learning learns from data', 'Deep Learning uses neural networks', 'Raises ethical questions'],
      funFact: 'The term "Artificial Intelligence" was first coined in 1956 at a Dartmouth College conference!',
      difficulty: 'intermediate' as const,
      readingTime: 3
    }
  ],
  nature: [
    {
      topic: 'nature',
      title: 'The Secret Life of Mycorrhizal Networks',
      content: 'Beneath our feet lies an incredible network that connects plants across entire forests. Mycorrhizal fungi form symbiotic relationships with plant roots, creating vast underground networks often called the "wood wide web." Through these fungal networks, trees can share nutrients, water, and even information about environmental threats. Mother trees can nurture their offspring by sending them carbon and nutrients through these connections. This network helps forests maintain biodiversity and resilience, showing us that cooperation, not just competition, drives natural ecosystems.',
      keyPoints: ['Fungi connect plant roots underground', 'Trees share nutrients and information', 'Mother trees nurture offspring', 'Cooperation drives forest ecosystems'],
      funFact: 'A single handful of forest soil contains more microbial life than there are people on Earth!',
      difficulty: 'intermediate' as const,
      readingTime: 3
    },
    {
      topic: 'nature',
      title: 'Migration Mysteries',
      content: 'Animal migration is one of nature\'s most remarkable phenomena. Arctic terns travel roughly 44,000 miles annually from Arctic to Antarctic and back. Monarch butterflies navigate thousands of miles using the sun as a compass, with no individual completing the full journey. Salmon return to their birthplace using their sense of smell to recognize specific streams. These incredible journeys showcase the sophisticated navigation systems animals have evolved, from magnetic field detection to star navigation, demonstrating the intricate relationship between organisms and their environment.',
      keyPoints: ['Arctic terns travel 44,000 miles yearly', 'Monarchs use sun navigation', 'Salmon use smell recognition', 'Sophisticated navigation systems'],
      funFact: 'Some sea turtles navigate using Earth\'s magnetic field like a GPS system!',
      difficulty: 'beginner' as const,
      readingTime: 3
    },
    {
      topic: 'nature',
      title: 'The Chemistry of Fall Colors',
      content: 'Autumn\'s spectacular display results from complex chemical processes within leaves. During spring and summer, chlorophyll masks other pigments, giving leaves their green color. As daylight decreases and temperatures drop, chlorophyll production slows and breaks down, revealing carotenoids (yellows and oranges) that were always present. Red and purple colors come from anthocyanins, newly produced in response to bright light and cool temperatures. This chemical symphony creates the breathtaking fall foliage that signals seasonal change and prepares trees for winter survival.',
      keyPoints: ['Chlorophyll breakdown reveals hidden colors', 'Carotenoids create yellows and oranges', 'Anthocyanins produce reds and purples', 'Chemical response to environmental changes'],
      funFact: 'The same anthocyanins that create red fall leaves also give red color to cranberries and red apples!',
      difficulty: 'intermediate' as const,
      readingTime: 3
    }
  ],
  culture: [
    {
      topic: 'culture',
      title: 'The Art of Japanese Tea Ceremony',
      content: 'The Japanese tea ceremony, known as "chanoyu" or "sado," is far more than simply preparing and drinking tea. This traditional ritual embodies the principles of harmony (wa), respect (kei), purity (sei), and tranquility (jaku). Every movement is deliberate and meaningful, from the way the tea bowl is held to the arrangement of utensils. The ceremony represents a spiritual journey where host and guests create a moment of perfect mindfulness together. This ancient practice teaches us about mindfulness, appreciation of beauty in simplicity, and the importance of being fully present in each moment.',
      keyPoints: ['Embodies four key principles', 'Every movement has meaning', 'Creates mindful moments together', 'Celebrates beauty in simplicity'],
      funFact: 'A tea ceremony can last up to four hours, with each season having specific rituals and utensils!',
      difficulty: 'beginner' as const,
      readingTime: 3
    },
    {
      topic: 'culture',
      title: 'The Renaissance: Rebirth of Learning',
      content: 'The Renaissance (14th-17th centuries) marked a cultural rebirth in Europe, emphasizing humanism, scientific inquiry, and artistic achievement. This period saw the works of Leonardo da Vinci, who embodied the "Renaissance man" ideal by excelling in art, science, and engineering. The invention of the printing press democratized knowledge, while explorers expanded geographical understanding. Renaissance thinkers challenged medieval worldviews, laying foundations for modern science and philosophy. This cultural transformation reminds us how periods of learning and creativity can reshape entire civilizations.',
      keyPoints: ['Cultural rebirth in 14th-17th centuries', 'Emphasized humanism and inquiry', 'Leonardo da Vinci exemplified the era', 'Laid foundations for modern thought'],
      funFact: 'The Mona Lisa has no eyebrows because it was fashionable for Renaissance women to shave them off!',
      difficulty: 'intermediate' as const,
      readingTime: 3
    },
    {
      topic: 'culture',
      title: 'The Power of Storytelling',
      content: 'Storytelling is humanity\'s oldest form of knowledge transfer, predating written language by thousands of years. Every culture has developed unique narrative traditions that preserve history, teach values, and make sense of the world. From ancient oral epics to modern digital media, stories shape our understanding of identity, morality, and possibility. Neuroscience shows that stories activate multiple brain regions, making information more memorable and emotionally engaging than facts alone. Understanding storytelling helps us communicate more effectively and connect more deeply with others.',
      keyPoints: ['Humanity\'s oldest knowledge transfer', 'Preserves history and teaches values', 'Activates multiple brain regions', 'Enhances communication and connection'],
      funFact: 'The human brain is wired to remember stories 22 times more effectively than facts alone!',
      difficulty: 'beginner' as const,
      readingTime: 3
    }
  ]
};

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Life is what happens to you while you're busy making other plans. - John Lennon",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela"
];

function getContentForDay(topic: keyof typeof contentDatabase, dayOfYear: number): DailyTopicContent {
  const topicContent = contentDatabase[topic];
  const index = dayOfYear % topicContent.length;
  return topicContent[index];
}

function getQuoteForDay(dayOfYear: number): string {
  return quotes[dayOfYear % quotes.length];
}

const topicOrder = ['science', 'history', 'technology', 'nature', 'culture'] as const;

export function getDailyEphemeris(date: Date): DailyEphemeris {
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  
  // Select one topic for the day
  const topicIndex = dayOfYear % topicOrder.length;
  
  return {
    date: date.toISOString().split('T')[0],
    dayOfYear,
    daily: getContentForDay(topicOrder[topicIndex], dayOfYear),
    dailyQuote: getQuoteForDay(dayOfYear),
    isLoading: false
  };
}