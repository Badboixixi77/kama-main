"use client";

import Image from "next/image";
import { featuredWorks } from "../data/content";
import AnimatedText from "../../components/AnimatedText";
import AnimatedSection from "../../components/AnimatedSection";
import Navbar from "../components/Navbar";

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-emerald-900 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-24">
        <AnimatedText
          type="heading"
          className="text-4xl md:text-6xl font-bold mb-12 text-center"
        >
          Works
        </AnimatedText>

        <div className="grid grid-cols-1 gap-12">
          {featuredWorks.map((work, index) => (
            <AnimatedSection key={work.id} delay={0.1 * index}>
              <div className="group relative overflow-hidden rounded-lg bg-indigo-800/30 backdrop-blur-sm hover:bg-indigo-800/50 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Image Section */}
                  <div className="relative h-[400px] md:h-[500px]">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-4 font-playfair">{work.title}</h2>
                    <p className="text-emerald-200 mb-6">{work.description}</p>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Tracks</h3>
                      <div className="space-y-4">
                        {work.tracks?.map((track, trackIndex) => (
                          <div
                            key={trackIndex}
                            className="flex items-center justify-between p-4 bg-indigo-900/50 rounded-lg"
                          >
                            <div>
                              <h4 className="font-medium">{track.title}</h4>
                              <span className="text-emerald-200">{track.duration}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <a
                                href={track.spotify}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-400 hover:text-emerald-300 transition-colors"
                              >
                                Spotify
                              </a>
                              {track.appleMusic && (
                                <a
                                  href={track.appleMusic}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                                >
                                  Apple Music
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={work.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
                      >
                        Listen on Spotify
                      </a>
                      {work.appleMusic && (
                        <a
                          href={work.appleMusic}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                        >
                          Listen on Apple Music
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
} 