"use client";

import Image from "next/image";
import { pressQuotes, pressPhotos } from "../data/content";
import AnimatedText from "../../components/AnimatedText";
import AnimatedSection from "../../components/AnimatedSection";
import Navbar from "../components/Navbar";

export default function PressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-emerald-900 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-24">
        <AnimatedText
          type="heading"
          className="text-4xl md:text-6xl font-bold mb-12 text-center"
        >
          Press
        </AnimatedText>

        {/* Press Quotes */}
        <div className="mb-20">
          <AnimatedText type="heading" className="text-2xl md:text-3xl font-bold mb-8">
            What People Are Saying
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

        {/* Press Photos */}
        <div>
          <AnimatedText type="heading" className="text-2xl md:text-3xl font-bold mb-8">
            Press Photos
          </AnimatedText>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pressPhotos.map((photo, index) => (
              <AnimatedSection key={photo.id} delay={0.1 * index}>
                <div className="group relative overflow-hidden rounded-lg bg-indigo-800/30 backdrop-blur-sm hover:bg-indigo-800/50 transition-all duration-300">
                  <div className="aspect-w-1 aspect-h-1">
                    <Image
                      src={photo.image}
                      alt={photo.caption}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm">{photo.caption}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 