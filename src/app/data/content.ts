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

interface ArtistInfo {
  name: string;
  bio: string;
  email: string;
  pressEmail: string;
  socialMedia: {
    instagram: string;
    twitter: string;
    facebook: string;
    youtube: string;
    spotify: string;
  };
}

interface PressQuote {
  id: number;
  quote: string;
  source: string;
  date: string;
}

export const artistInfo = {
  name: "Kama",
  bio: "Hailing from the vibrant streets of Lagos, Kama is a rising star in the Afro-pop scene, blending traditional Nigerian rhythms with contemporary sounds. With roots deeply embedded in Igbo culture and a modern twist that resonates globally, Kama's music is a celebration of African heritage and contemporary expression. His unique sound fuses Afrobeat, Highlife, and modern pop elements, creating a musical experience that bridges generations and cultures.",
  email: "officialkamap@gmail.com",
  phone: "09043165615",
  pressEmail: "officialkamap@gmail.com",
  socialMedia: {
    instagram: "https://instagram.com/kamaofficial",
    twitter: "https://twitter.com/kamaofficial",
    facebook: "https://facebook.com/kamaofficial",
    youtube: "https://youtube.com/@kamaofficial"
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

export const featuredWorks = [
  {
    id: 1,
    title: "The Fisherman",
    type: "EP",
    date: "2024",
    image: "/images/The Fisherman.png",
    spotify: "https://open.spotify.com/artist/2HU1ekoHx4Jqb5kEGLZIgT?si=6lt7FpZxTLKmc80RtKGMyQ",
    appleMusic: "https://music.apple.com/album/the-fisherman",
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
    title: "Single Release",
    type: "Single",
    date: "2023",
    image: "/images/single-cover.jpg",
    spotify: "https://open.spotify.com/artist/your-spotify-id",
    appleMusic: "https://music.apple.com/artist/your-apple-music-id",
    tracks: [
      {
        title: "Track Name",
        duration: "3:30",
        description: "Description of the track"
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
  },
  {
    id: 4,
    image: "/images/Kama 4.png",
    alt: "Kama artistic shot",
  },
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