"use client";

import { artistInfo } from "../data/content";
import AnimatedText from "../../components/AnimatedText";
import AnimatedSection from "../../components/AnimatedSection";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-emerald-900 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-24">
        <AnimatedText
          type="heading"
          className="text-4xl md:text-6xl font-bold mb-8 text-center"
        >
          Contact
        </AnimatedText>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg text-emerald-100">Booking Inquiries</h3>
              <a href={`mailto:${artistInfo.email}`} className="text-emerald-200 hover:text-emerald-300">
                {artistInfo.email}
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-emerald-100">Press Inquiries</h3>
              <a href={`mailto:${artistInfo.email}`} className="text-emerald-200 hover:text-emerald-300">
                {artistInfo.email}
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-emerald-100">Management</h3>
              <a href={`mailto:${artistInfo.email}`} className="text-emerald-200 hover:text-emerald-300">
                {artistInfo.email}
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-emerald-100 mb-4">Social Media</h3>
              <div className="flex gap-4">
                {Object.entries(artistInfo.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-emerald-200 hover:text-emerald-300 transition-colors"
                  >
                    {platform === 'twitter' ? '𝕏' : platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
} 