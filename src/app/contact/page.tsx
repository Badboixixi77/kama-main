"use client";

import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import { artistInfo } from "../data/content";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-emerald-900 text-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-emerald-200 mb-6">
                For booking inquiries, press requests, or general information, please use the contact form or reach out directly to the appropriate contact below.
              </p>
            </div>

            <div className="space-y-6">
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
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-emerald-100">Social Media</h3>
              <div className="flex flex-wrap gap-4">
                <a href={artistInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-emerald-200 hover:text-emerald-300">
                  Instagram
                </a>
                <a href={artistInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-emerald-200 hover:text-emerald-300">
                  Twitter
                </a>
                <a href={artistInfo.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-emerald-200 hover:text-emerald-300">
                  YouTube
                </a>
                <a href={artistInfo.socials.spotify} target="_blank" rel="noopener noreferrer" className="text-emerald-200 hover:text-emerald-300">
                  Spotify
                </a>
                <a href={artistInfo.socials.soundcloud} target="_blank" rel="noopener noreferrer" className="text-emerald-200 hover:text-emerald-300">
                  SoundCloud
                </a>
              </div>
            </div>
          </div>

          <div className="bg-indigo-800/30 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
} 