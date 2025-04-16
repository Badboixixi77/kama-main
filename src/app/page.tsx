"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { artistInfo, featuredWorks, pressQuotes, pressPhotos, downloads } from "./data/content";
import Navbar from "./components/Navbar";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedText from "../components/AnimatedText";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 to-emerald-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Kama 1.png"
            alt="Kama performing"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 font-playfair"
            animate={{
              color: [
                "#ffffff",  // white
                "#10b981",  // emerald-500
                "#3b82f6",  // blue-500
                "#10b981",  // emerald-500
                "#ffffff",  // white
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Kama
          </motion.h1>
          <AnimatedText type="paragraph" delay={0.2} className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Afro-pop sensation from Lagos, Nigeria
          </AnimatedText>
          <AnimatedSection delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/works"
              className="inline-flex items-center px-8 py-3 border border-emerald-200 text-emerald-200 rounded-full hover:bg-emerald-200 hover:text-emerald-900 transition-all duration-300 text-lg font-medium"
            >
              Explore Music
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white hover:bg-white hover:text-emerald-900 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Works */}
      <AnimatedSection delay={0.2}>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedText type="heading" className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Featured Works
            </AnimatedText>
            <div className="grid grid-cols-1 gap-8">
              {featuredWorks.map((work, index) => (
                <AnimatedSection key={work.id} delay={0.1 * index}>
                  <div className="group relative overflow-hidden rounded-lg bg-indigo-800/30 backdrop-blur-sm hover:bg-indigo-800/50 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Image Section */}
                      <div className="relative h-[500px] md:h-auto">
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
                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 font-playfair">{work.title}</h3>
                          <p className="text-emerald-200 mb-4">{work.type} • {work.date}</p>
                          <div className="grid grid-cols-1 gap-4 mb-4">
                            {work.tracks?.map((track, trackIndex) => (
                              <AnimatedSection key={trackIndex} delay={0.1 * trackIndex}>
                                <div className="bg-indigo-900/50 p-4 rounded-lg">
                                  <h4 className="text-lg font-semibold text-white">{track.title}</h4>
                                  <p className="text-emerald-200 text-sm">{track.duration}</p>
                                  <p className="text-emerald-300 text-sm mt-1">{track.description}</p>
                                </div>
                              </AnimatedSection>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                          <a
                            href={work.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-full transition-all duration-300 transform hover:scale-105"
                          >
                            Listen on Spotify
                          </a>
                          <a
                            href={work.appleMusic}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-105"
                          >
                            Listen on Apple Music
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Press Section */}
      <AnimatedSection delay={0.3}>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedText type="heading" className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Press
            </AnimatedText>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressQuotes.map((quote, index) => (
                <AnimatedSection key={quote.id} delay={0.1 * index}>
                  <div className="p-6 bg-indigo-800/30 backdrop-blur-sm rounded-lg hover:bg-indigo-800/50 transition-all duration-300">
                    <p className="text-lg italic mb-4">&ldquo;{quote.quote}&rdquo;</p>
                    <p className="text-emerald-200 font-semibold">{quote.source}</p>
                    <p className="text-emerald-300">{quote.date}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Media Section */}
      <AnimatedSection delay={0.4}>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedText type="heading" className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Media
            </AnimatedText>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pressPhotos.map((photo, index) => (
                <AnimatedSection key={photo.id} delay={0.1 * index}>
                  <div className="group relative overflow-hidden rounded-lg bg-indigo-800/30 backdrop-blur-sm hover:bg-indigo-800/50 transition-all duration-300">
                    <div className="aspect-w-1 aspect-h-1">
                      <Image
                        src={photo.image}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm">{photo.alt}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Downloads Section */}
      <AnimatedSection delay={0.5}>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedText type="heading" className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Downloads
            </AnimatedText>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {downloads.map((download, index) => (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <div className="p-6 bg-indigo-800/30 backdrop-blur-sm rounded-lg hover:bg-indigo-800/50 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2 font-playfair">{download.title}</h3>
                    <p className="text-emerald-200 mb-4">{download.description}</p>
                    <a
                      href={download.url}
                      download
                      className="inline-block px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      Download
                    </a>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection delay={0.6}>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedText type="heading" className="text-3xl md:text-4xl font-bold mb-8">
              Contact
            </AnimatedText>
            <div className="max-w-md mx-auto">
              <AnimatedText type="paragraph" delay={0.2} className="mb-8">
                For bookings, press inquiries, or general information, please contact:
              </AnimatedText>
              <div className="space-y-4">
                <a
                  href={`mailto:${artistInfo.email}`}
                  className="block text-emerald-200 hover:text-emerald-300 transition-colors"
                >
                  {artistInfo.email}
                </a>
                <a
                  href={`mailto:${artistInfo.pressEmail}`}
                  className="block text-emerald-200 hover:text-emerald-300 transition-colors"
                >
                  {artistInfo.pressEmail}
                </a>
              </div>
              <div className="flex justify-center gap-6 mt-8">
                {Object.entries(artistInfo.socialMedia).map(([platform, url], index) => (
                  <AnimatedSection key={platform} delay={0.1 * index}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-emerald-300 transition-colors"
                    >
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </a>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
