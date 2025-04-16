export interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
  date: string;
  spotify: string;
  appleMusic?: string;
  ep: string;
  tracks?: Track[];
}

export interface Track {
  title: string;
  duration: string;
  spotify: string;
  appleMusic?: string;
}

export interface PressQuote {
  id: number;
  quote: string;
  source: string;
  date: string;
}

export interface PressPhoto {
  id: number;
  image: string;
  caption: string;
}

export const artistInfo = {
  name: "Kama",
  bio: "Kama is a rising artist known for their unique sound and captivating performances.",
  email: "officialkamap@gmail.com",
  social: {
    twitter: "https://x.com/kama_pizy?s=21",
    instagram: "https://instagram.com/kamaofficial",
    facebook: "https://facebook.com/kamaofficial",
    youtube: "https://youtube.com/kamaofficial"
  }
};

export const pressQuotes = [
  {
    id: 1,
    quote: "Kama's music is a breath of fresh air in the industry.",
    source: "Music Magazine",
    date: "2024"
  },
  {
    id: 2,
    quote: "A truly unique voice that stands out from the crowd.",
    source: "Entertainment Weekly",
    date: "2024"
  }
];

export const featuredWorks = [
  {
    id: 1,
    title: "Latest Single",
    description: "Check out Kama's newest release",
    image: "/images/featured-1.jpg",
    type: "single",
    date: "2024",
    spotify: "https://open.spotify.com/artist/kama",
    appleMusic: "https://music.apple.com/artist/kama",
    ep: "The Journey",
    tracks: [
      {
        title: "Track 1",
        duration: "3:45",
        spotify: "https://open.spotify.com/track/1",
        appleMusic: "https://music.apple.com/track/1"
      }
    ]
  },
  {
    id: 2,
    title: "Music Video",
    description: "Watch the official music video",
    image: "/images/featured-2.jpg",
    type: "video",
    date: "2024",
    spotify: "https://open.spotify.com/artist/kama",
    appleMusic: "https://music.apple.com/artist/kama",
    ep: "Visual Experience",
    tracks: [
      {
        title: "Track 1",
        duration: "4:20",
        spotify: "https://open.spotify.com/track/2",
        appleMusic: "https://music.apple.com/track/2"
      }
    ]
  }
];

export const pressPhotos = [
  {
    id: 1,
    image: "/images/Kama 1.png",
    caption: "Kama performing at the Lagos Music Festival",
  },
  {
    id: 2,
    image: "/images/Kama 2.png",
    caption: "Studio session for 'The Fisherman'",
  },
  {
    id: 3,
    image: "/images/Kama 3.png",
    caption: "Backstage at the Afro Nation Festival",
  },
  {
    id: 4,
    image: "/images/Kama 4.png",
    caption: "Press conference in London",
  },
];

export const downloads = {
  pressKit: {
    title: "Press Kit",
    description: "Download the complete press kit",
    url: "/downloads/press-kit.pdf"
  },
  highResPhotos: {
    title: "High Resolution Photos",
    description: "Download high quality press photos",
    url: "/downloads/photos.zip"
  },
  logo: {
    title: "Logo",
    description: "Download official logo files",
    url: "/downloads/logo.zip"
  }
}; 