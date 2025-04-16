"use client";

import { artistInfo } from "../data/content";
import AnimatedText from "../../components/AnimatedText";
import AnimatedSection from "../../components/AnimatedSection";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-emerald-900 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-24">
        <AnimatedText
          type="heading"
          className="text-4xl md:text-6xl font-bold mb-8 text-center"
        >
          About Kama
        </AnimatedText>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedText type="paragraph" className="text-lg leading-relaxed">
              {artistInfo.bio}
            </AnimatedText>
          </div>
          <div className="relative">
            <img
              src="/images/Kama 1.png"
              alt="Kama"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
} 