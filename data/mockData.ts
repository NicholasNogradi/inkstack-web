export const categories = [
  { id: 'all', name: 'All Categories'},
  { id: 'sci-fi', name: 'Science Fiction' },
  { id: 'fantasy', name: 'Fantasy' },
  { id: 'mystery', name: 'Mystery' },
  { id: 'thriller', name: 'Thriller' },
  { id: 'romance', name: 'Romance' },
  { id: 'historical', name: 'Historical Fiction' },
  { id: 'biography', name: 'Biography' },
  { id: 'self-help', name: 'Self-Help' },
  { id: 'business', name: 'Business' },
  { id: 'psychology', name: 'Psychology' },
  { id: 'philosophy', name: 'Philosophy' },
  { id: 'poetry', name: 'Poetry' },
  { id: 'horror', name: 'Horror' },
  { id: 'adventure', name: 'Adventure' },
  { id: 'dystopian', name: 'Dystopian' },
];


export const books = [
  // Science Fiction
  {
    id: '1',
    title: 'Neuromancer',
    author: 'William Gibson',
    description: 'A groundbreaking cyberpunk novel that defined a genre. Follow Case, a washed-up computer hacker, as he takes on one last job in cyberspace.',
    coverImageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
    price: 14.99,
    categories: [
      {id: 0, name: 'sci-fi'},
      {id: 1, name: 'dystopian'}
    ],
    popularity: 95,
    publishedYear: 1984,
  },
  {
    id: '2',
    title: 'The Three-Body Problem',
    author: 'Liu Cixin',
    description: 'A secret military project sends signals into space to establish contact with aliens. An alien civilization on the brink of destruction captures the signal.',
    coverImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
    price: 16.99,
    categories: [
      {id: 0, name: 'sci-fi'}
    ],
    popularity: 92,
    publishedYear: 2008,
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    description: 'Ryland Grace wakes up on a spaceship with no memory of why he\'s there. His mission could save Earth—but only if he can survive.',
    coverImageUrl: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400',
    price: 18.99,
    categories: [
      {id: 0, name: 'sci-fi'},
      {id: 1, name: 'adventure'}
    ],
    popularity: 98,
    publishedYear: 2021,
  },

  // Fantasy
  {
    id: '4',
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    description: 'The tale of Kvothe, a magically gifted young man who grows to be the most notorious wizard his world has ever seen.',
    coverImageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400',
    price: 17.99,
    categories: [
      {id: 0, name: 'fantasy'},
      {id: 1, name: 'adventure'}
    ],
    popularity: 96,
    publishedYear: 2007,
  },
  {
    id: '5',
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    description: 'An epic fantasy masterpiece. Roshar is a world of stone and storms with ancient magic and forgotten civilizations.',
    coverImageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400',
    price: 19.99,
    categories: [
      {id: 0, name: 'fantasy'},
      {id: 1, name: 'adventure'}
    ],
    popularity: 97,
    publishedYear: 2010,
  },
  {
    id: '6',
    title: 'Circe',
    author: 'Madeline Miller',
    description: 'The story of Circe, the goddess daughter of Helios, who discovers her power of witchcraft and is exiled to a remote island.',
    coverImageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    price: 15.99,
    categories: [
      {id: 0, name: 'fantasy'},
      {id: 1, name: 'historical'}
    ],
    popularity: 94,
    publishedYear: 2018,
  },

  // Mystery & Thriller
  {
    id: '7',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    description: 'Alicia Berenson shoots her husband and then never speaks again. A criminal psychotherapist becomes obsessed with uncovering her motive.',
    coverImageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    price: 14.99,
    categories: [
      {id: 0, name: 'mystery'}, 
      {id: 1, name: 'thriller'}
    ],
    popularity: 93,
    publishedYear: 2019,
  },
  {
    id: '8',
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    description: 'On the occasion of his fifth wedding anniversary, Nick Dunne reports that his wife, Amy, has gone missing.',
    coverImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    price: 13.99,
    categories: [
      {id: 0, name: 'mystery'},
      {id: 1, name: 'thriller'}
    ],
    popularity: 95,
    publishedYear: 2012,
  },
  {
    id: '9',
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    description: 'A journalist and a hacker join forces to investigate a wealthy family\'s dark secrets in this Swedish crime thriller.',
    coverImageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    price: 15.99,
    categories: [
      {id: 0, name: 'mystery'},
      {id: 1, name: 'thriller'}
    ],
    popularity: 91,
    publishedYear: 2005,
  },

  // Romance
  {
    id: '10',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    description: 'Aging Hollywood icon Evelyn Hugo finally reveals the truth about her glamorous and scandalous life.',
    coverImageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
    price: 16.99,
    categories: [
      {id: 0, name: 'romance'},
      {id: 1, name: 'historical'}
    ],
    popularity: 96,
    publishedYear: 2017,
  },
  {
    id: '11',
    title: 'Red, White & Royal Blue',
    author: 'Casey McQuiston',
    description: 'The son of the President falls in love with a British prince in this charming romantic comedy.',
    coverImageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    price: 14.99,
    categories: [
      {id: 0, name: 'romance'}
    ],
    popularity: 90,
    publishedYear: 2019,
  },

  // Historical Fiction
  {
    id: '12',
    title: 'All the Light We Cannot See',
    author: 'Anthony Doerr',
    description: 'The story of a blind French girl and a German boy whose paths collide in occupied France during World War II.',
    coverImageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    price: 17.99,
    categories: [
      {id: 0, name: 'historical'}
    ],
    popularity: 94,
    publishedYear: 2014,
  },
  {
    id: '13',
    title: 'The Nightingale',
    author: 'Kristin Hannah',
    description: 'Two sisters in France during World War II, whose courage is tested in different ways during the Nazi occupation.',
    coverImageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=400',
    price: 16.99,
    categories: [
      {id: 0, name: 'historical'}
    ],
    popularity: 92,
    publishedYear: 2015,
  },

  // Biography
  {
    id: '14',
    title: 'Educated',
    author: 'Tara Westover',
    description: 'A memoir about a young woman who leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
    coverImageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
    price: 15.99,
    categories: [
      {id: 0, name: 'biography'}
    ],
    popularity: 97,
    publishedYear: 2018,
  },
  {
    id: '15',
    title: 'Becoming',
    author: 'Michelle Obama',
    description: 'The former First Lady of the United States chronicles her life from childhood to her years in the White House.',
    coverImageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    price: 18.99,
    categories: [
      {id: 0, name: 'biography'}
    ],
    popularity: 95,
    publishedYear: 2018,
  },

  // Self-Help & Psychology
  {
    id: '16',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An easy and proven way to build good habits and break bad ones through tiny changes that deliver remarkable results.',
    coverImageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400',
    price: 16.99,
    categories: [
      {id: 0, name: 'self-help'},
      {id: 1, name: 'psychology'}
    ],
    popularity: 99,
    publishedYear: 2018,
  },
  {
    id: '17',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    description: 'A groundbreaking tour of the mind that explains the two systems that drive the way we think.',
    coverImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    price: 17.99,
    categories: [
      {id: 0, name: 'psychology'}
    ],
    popularity: 96,
    publishedYear: 2011,
  },
  {
    id: '18',
    title: 'The Body Keeps the Score',
    author: 'Bessel van der Kolk',
    description: 'A pioneering researcher transforms our understanding of trauma and offers a bold new paradigm for healing.',
    coverImageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    price: 18.99,
    categories: [
      {id: 0, name: 'psychology'}
    ],
    popularity: 94,
    publishedYear: 2014,
  },

  // Business
  {
    id: '19',
    title: 'Zero to One',
    author: 'Peter Thiel',
    description: 'Notes on startups and how to build the future, from PayPal cofounder and billionaire venture capitalist.',
    coverImageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    price: 15.99,
    categories: [
      {id: 0, name: 'business'}
    ],
    popularity: 91,
    publishedYear: 2014,
  },
  {
    id: '20',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    description: 'How today\'s entrepreneurs use continuous innovation to create radically successful businesses.',
    coverImageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    price: 16.99,
    categories: [
      {id: 0, name: 'business'}
    ],
    popularity: 93,
    publishedYear: 2011,
  },

  // Philosophy
  {
    id: '21',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    description: 'Personal writings by the Roman Emperor, a series of spiritual exercises filled with wisdom and practical guidance.',
    coverImageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400',
    price: 12.99,
    categories: [
      {id: 0, name: 'philosophy'}
    ],
    popularity: 89,
    publishedYear: 180,
  },
  {
    id: '22',
    title: 'Man\'s Search for Meaning',
    author: 'Viktor Frankl',
    description: 'A psychiatrist\'s memoir of life in Nazi death camps and its lessons for spiritual survival.',
    coverImageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    price: 13.99,
    categories: [
      {id: 0, name: 'philosophy'},
      {id: 1, name: 'biography'},
      {id: 2, name: 'psychology'}
    ],
    popularity: 97,
    publishedYear: 1946,
  },

  // Horror
  {
    id: '23',
    title: 'The Shining',
    author: 'Stephen King',
    description: 'Jack Torrance becomes winter caretaker at the isolated Overlook Hotel, where sinister forces threaten his family.',
    coverImageUrl: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=400',
    price: 14.99,
    categories: [
      {id: 0, name: 'horror'},
      {id: 1, name: 'thriller'}
    ],
    popularity: 92,
    publishedYear: 1977,
  },
  {
    id: '24',
    title: 'Mexican Gothic',
    author: 'Silvia Moreno-Garcia',
    description: 'A young socialite travels to a remote mansion in 1950s Mexico to check on her cousin and discovers terrifying secrets.',
    coverImageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    price: 15.99,
    categories: [
      {id: 0, name: 'horror'},
      {id: 1, name: 'mystery'}
    ],
    popularity: 88,
    publishedYear: 2020,
  },

  // Dystopian
  {
    id: '25',
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    description: 'A dystopian novel about a totalitarian society where women are subjugated and stripped of their rights.',
    coverImageUrl: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=400',
    price: 14.99,
    categories: [
      {id: 0, name: 'dystopian'},
      {id: 1, name: 'sci-fi'}
    ],
    popularity: 94,
    publishedYear: 1985,
  },
  {
    id: '26',
    title: '1984',
    author: 'George Orwell',
    description: 'A chilling prophecy about the future where society is under constant surveillance by Big Brother.',
    coverImageUrl: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=400',
    price: 13.99,
    categories: [
      {id: 0, name: 'dystopian'},
      {id: 1, name: 'sci-fi'}
    ],
    popularity: 98,
    publishedYear: 1949,
  },

  // Poetry
  {
    id: '27',
    title: 'Milk and Honey',
    author: 'Rupi Kaur',
    description: 'A collection of poetry and prose about survival, femininity, love, and heartache.',
    coverImageUrl: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400',
    price: 12.99,
    categories: [
      {id: 0, name: 'poetry'}
    ],
    popularity: 90,
    publishedYear: 2014,
  },
  {
    id: '28',
    title: 'The Sun and Her Flowers',
    author: 'Rupi Kaur',
    description: 'A journey through wilting, falling, rooting, rising, and blooming—a celebration of love in all its forms.',
    coverImageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
    price: 13.99,
    categories: [
      {id: 0, name: 'poetry'}
    ],
    popularity: 88,
    publishedYear: 2017,
  },

  // Additional Mixed Titles
  {
    id: '29',
    title: 'Dune',
    author: 'Frank Herbert',
    description: 'Set on the desert planet Arrakis, this epic tells of Paul Atreides and the struggle for the most valuable resource in the universe.',
    coverImageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400',
    price: 16.99,
    categories: [
      {id: 0, name: 'sci-fi'},
      {id: 1, name: 'adventure'}
    ],
    popularity: 99,
    publishedYear: 1965,
  },
  {
    id: '30',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'Bilbo Baggins, a hobbit, embarks on an unexpected journey to help dwarves reclaim their mountain home from a dragon.',
    coverImageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    price: 14.99,
    categories: [
      {id: 0, name: 'fantasy'},
      {id: 1, name: 'adventure'}
    ],
    popularity: 98,
    publishedYear: 1937,
  },
];