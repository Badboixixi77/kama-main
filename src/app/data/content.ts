interface Track {
  title: string;
  duration: string;
  description: string;
  audioUrl: string;
}

export interface Work {
  id: number;
  title: string;
  type: string;
  date: string;
  image: string;
  spotify: string;
  appleMusic?: string;
  ep: string;
  tracks?: Track[];
}

interface PressQuote {
  id: number;
  quote: string;
  source: string;
  date: string;
}

interface PressVideo {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
  date: string;
  description: string;
}

export const artistInfo = {
  name: "KAMA",
  email: "officialkamap@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/kama_pizy/",
    twitter: "https://x.com/kama_pizy?s=21",
    spotify: "https://open.spotify.com/artist/0q5YQpXQHqQqQqQqQqQqQq",
    youtube: "https://www.youtube.com/@kama_pizy",
    soundcloud: "https://soundcloud.com/kama_pizy",
  },
};

export const pressQuotes: PressQuote[] = [
  {
    id: 1,
    quote: "Kama's fusion of Igbo cultural elements with contemporary Afro-pop is nothing short of revolutionary.",
    source: "Afrobeat Magazine",
    date: "2024",
  },
  {
    id: 2,
    quote: "A fresh voice in African music, Kama brings the rich traditions of Igbo culture to the global stage.",
    source: "The Guardian Nigeria",
    date: "2024",
  },
  {
    id: 3,
    quote: "Kama's music is a beautiful bridge between traditional Igbo rhythms and modern pop sensibilities.",
    source: "Music In Africa",
    date: "2024",
  },
];

export const pressVideos: PressVideo[] = [
  {
    id: 1,
    title: "No Love Video",
    url: "/videos/kama 1.mp4",
    thumbnail: "/images/Kama 1.png",
    date: "2024",
    description: "Official music video for 'No Love'"
  },
  {
    id: 2,
    title: "Behind the Scenes",
    url: "/videos/kama 2.mp4",
    thumbnail: "/images/Kama 2.png",
    date: "2024",
    description: "Exclusive behind the scenes footage"
  }
];

export const featuredWorks = [
  {
    id: 1,
    title: "The Fisherman",
    type: "EP",
    date: "2024",
    image: "/images/The Fisherman.png",
    spotify: "https://open.spotify.com/artist/2HU1ekoHx4Jqb5kEGLZIgT?si=6lt7FpZxTLKmc80RtKGMyQ",
    appleMusic: "https://music.apple.com/album/the-fisherman",
    ep: "The Fisherman",
    tracks: [
      {
        title: "No Love",
        duration: "3:45",
        description: "A soulful exploration of love and loss",
        audioUrl: "/audio/no-love.mp3"
      },
      {
        title: "Lose You",
        duration: "3:20",
        description: "Emotional ballad about heartbreak and moving on",
        audioUrl: "/audio/lose-you.mp3"
      },
      {
        title: "Fugazi",
        duration: "3:15",
        description: "Upbeat track with traditional Nigerian influences",
        audioUrl: "/audio/fugazi.mp3"
      },
      {
        title: "Sope",
        duration: "3:30",
        description: "Celebration of Igbo culture and traditions",
        audioUrl: "/audio/sope.mp3"
      },
      {
        title: "Maya",
        duration: "3:55",
        description: "Smooth Afro-pop fusion with modern beats",
        audioUrl: "/audio/maya.mp3"
      },
      {
        title: "Idi Mma",
        duration: "3:40",
        description: "Powerful closing track with cultural significance",
        audioUrl: "/audio/idi-mma.mp3"
      }
    ]
  },
  {
    id: 2,
    title: "Whine",
    type: "Single",
    date: "2024",
    image: "/images/Whine.png",
    spotify: "https://open.spotify.com/album/0hJ2rVAGmWvfLwJqfcPgvg",
    ep: "Whine",
    tracks: [
      {
        title: "Whine",
        duration: "3:11",
        description: "A vibrant Afro-pop single showcasing Kama's dynamic style",
        audioUrl: "/audio/whine.mp3"
      }
    ]
  },
  {
    id: 3,
    title: "Maya",
    type: "Single",
    date: "2023",
    image: "/images/Maya.png",
    spotify: "https://open.spotify.com/album/5kxjFivxZf2XjyuGmraZPG",
    ep: "Maya",
    tracks: [
      {
        title: "Maya",
        duration: "2:15",
        description: "A melodic fusion of contemporary Afrobeats",
        audioUrl: "/audio/maya-single.mp3"
      }
    ]
  },
  {
    id: 4,
    title: "African Woman",
    type: "Single",
    date: "2024",
    image: "/images/African Woman.png",
    spotify: "https://open.spotify.com/album/2g9KZq7lM0lrEFcxPAUzvm",
    ep: "African Woman",
    tracks: [
      {
        title: "African Woman",
        duration: "3:23",
        description: "A celebration of African beauty and culture",
        audioUrl: "/audio/african-woman.mp3"
      }
    ]
  },
  {
    id: 5,
    title: "Switch",
    type: "Single",
    date: "2024",
    image: "/images/Switch.png",
    spotify: "https://open.spotify.com/album/588pdpnP1UH4Bqyi8vH4KD",
    ep: "Switch",
    tracks: [
      {
        title: "Switch",
        duration: "2:46",
        description: "An energetic Afro-pop track with infectious rhythms",
        audioUrl: "/audio/switch.mp3"
      }
    ]
  }
];

export const pressPhotos = [
  {
    id: 1,
    image: "/images/Kama 1.png",
    alt: "Kama performing live",
  },
  {
    id: 2,
    image: "/images/Kama 2.png",
    alt: "Kama in the studio",
  },
  {
    id: 3,
    image: "/images/Kama 3.png",
    alt: "Kama portrait",
  }
];

export const downloads = [
  {
    id: 1,
    title: "Press Kit",
    description: "Complete press kit with biography, photos, and contact information",
    url: "/downloads/press-kit.zip",
  },
  {
    id: 2,
    title: "High Resolution Photos",
    description: "Collection of high-quality press photos in various formats",
    url: "/downloads/photos.zip",
  },
  {
    id: 3,
    title: "Biography",
    description: "Detailed artist biography and career highlights",
    url: "/downloads/biography.docx",
  },
]; 