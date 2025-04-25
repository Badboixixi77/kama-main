"use client";

import Image from "next/image";
import { artistInfo } from "../data/content";
import AnimatedSection from "../../components/AnimatedSection";
import AnimatedText from "../../components/AnimatedText";
import Navbar from "../components/Navbar";

export default function About() {
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
        <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
              <AnimatedText type="heading" className="text-5xl md:text-7xl font-bold mb-8 text-center font-playfair tracking-tight">
                About Kama
              </AnimatedText>
            </div>
            <div className="relative">
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
              <AnimatedText type="paragraph" delay={0.2} className="text-xl md:text-2xl text-center mb-12 leading-relaxed text-emerald-100">
                Hailing from the vibrant streets of Lagos, Kama is a rising star in the Afro-pop scene, blending traditional Nigerian rhythms with contemporary sounds. With roots deeply embedded in Igbo culture and a modern twist that resonates globally, Kama&apos;s music is a celebration of African heritage and contemporary expression.
              </AnimatedText>
          </div>
        </div>
      </section>

        {/* Education Section */}
        <AnimatedSection delay={0.3}>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
              <div className="relative mb-12">
                <div className="absolute -top-4 left-0 w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
                <AnimatedText type="heading" className="text-4xl md:text-5xl font-bold font-playfair tracking-tight">
                  Education & Background
                </AnimatedText>
              </div>
              <div className="space-y-8">
                <AnimatedText type="paragraph" delay={0.2} className="text-lg leading-relaxed text-emerald-100">
                  Kama&apos;s musical journey began in the vibrant streets of Lagos, where he was exposed to a rich tapestry of Nigerian musical traditions. His formal education in music started at the prestigious MUSON School of Music, where he studied classical music theory and composition.
                </AnimatedText>
                <AnimatedText type="paragraph" delay={0.3} className="text-lg leading-relaxed text-emerald-100">
                  He later pursued a degree in Computer Science at Lagos State University, combining his technical knowledge with his passion for music. This unique educational background allows Kama to seamlessly blend traditional Nigerian rhythms with contemporary sounds.
                </AnimatedText>
                <AnimatedText type="paragraph" delay={0.4} className="text-lg leading-relaxed text-emerald-100">
                  His studies in both classical music and computer science have given him a unique perspective that shines through in his compositions, creating a bridge between generations and cultures.
                </AnimatedText>
          </div>
        </div>
      </section>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection delay={0.5}>
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative mb-12">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
                <AnimatedText type="heading" className="text-4xl md:text-5xl font-bold font-playfair tracking-tight">
                  Get in Touch
                </AnimatedText>
            </div>
              <div className="space-y-6">
                <AnimatedText type="paragraph" delay={0.2} className="text-lg text-emerald-100">
                  Email: {artistInfo.email}
                </AnimatedText>
          </div>
        </div>
      </section>
        </AnimatedSection>
    </div>
    </main>
  );
} 