"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { artistInfo, featuredWorks } from "./data/content";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 to-emerald-900 text-white">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/Kama 4.png"
          alt="Kama artistic background"
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-bold mb-8 font-playfair tracking-tight"
            >
              {artistInfo.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-emerald-100 mb-12"
            >
              Nigerian Afro-pop Artist & Producer
            </motion.p>
          </div>
        </section>

        {/* Featured Works */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 text-center font-playfair"
            >
              Featured Works
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-indigo-800/30 backdrop-blur-sm rounded-lg overflow-hidden"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                    <p className="text-emerald-200 mb-4">{work.type} • {work.date}</p>
                    <div className="flex space-x-4">
                      <a
                        href={work.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        Spotify
                      </a>
                      {work.appleMusic && (
                        <a
                          href={work.appleMusic}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          Apple Music
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-indigo-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 font-playfair"
            >
              Get in Touch
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <a
                  href={`mailto:${artistInfo.email}`}
                  className="block text-emerald-200 hover:text-emerald-300 transition-colors"
                >
                  {artistInfo.email}
                </a>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Follow</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={artistInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-emerald-300 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href={artistInfo.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-emerald-300 transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href={artistInfo.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-emerald-300 transition-colors"
                  >
                    YouTube
                  </a>
                  <a
                    href={artistInfo.socials.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-emerald-300 transition-colors"
                  >
                    Spotify
                  </a>
                  <a
                    href={artistInfo.socials.soundcloud}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-emerald-300 transition-colors"
                  >
                    SoundCloud
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
