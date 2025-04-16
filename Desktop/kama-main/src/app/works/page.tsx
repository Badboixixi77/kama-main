"use client";

import { useState } from "react";
import Image from "next/image";
import { featuredWorks } from "../data/content";
import Navbar from "../components/Navbar";

export default function Works() {
  const latestEP = featuredWorks[0];
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (trackUrl: string) => {
    if (currentTrack === trackUrl) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(trackUrl);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-emerald-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/works/hero.jpg"
            alt="Kama performing"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-transparent to-emerald-900/90" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            Works
          </h1>
          <p className="text-xl md:text-2xl text-emerald-200 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Explore Kama&apos;s Music
          </p>
        </div>
      </section>

      {/* EP Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{latestEP.title}</h2>
            <p className="text-xl text-emerald-200">{latestEP.type} • {latestEP.date}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* EP Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={latestEP.image}
                alt={latestEP.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent flex items-end p-6">
                <div className="flex space-x-6">
                  <a href={latestEP.spotify} target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 transition-colors">
                    <span className="sr-only">Spotify</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02z"/>
                    </svg>
                  </a>
                  <a href={latestEP.appleMusic} target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 transition-colors">
                    <span className="sr-only">Apple Music</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm0 3c4.98 0 9 4.02 9 9s-4.02 9-9 9-9-4.02-9-9 4.02-9 9-9z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Track Listing */}
            <div className="space-y-6">
              {latestEP.tracks && latestEP.tracks.map((track, index) => (
                <div key={index} className="p-6 bg-indigo-800/30 backdrop-blur-sm rounded-lg hover:bg-indigo-800/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-semibold">{track.title}</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-emerald-200">{track.duration}</span>
                      <button
                        onClick={() => handlePlayPause(track.audioUrl)}
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        {currentTrack === track.audioUrl && isPlaying ? (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="text-emerald-200">{track.description}</p>
                  {currentTrack === track.audioUrl && (
                    <audio
                      src={track.audioUrl}
                      autoPlay={isPlaying}
                      controls
                      className="w-full mt-4"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 