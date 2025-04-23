'use client';

import Image from 'next/image';
import { pressQuotes, pressPhotos, pressVideos, downloads } from '../data/content';
import Navbar from '../components/Navbar';

export default function Press() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-emerald-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Press & Media
          </h1>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
            Discover Kama&apos;s journey through the eyes of the media and access press materials.
          </p>
        </div>

        {/* Press Quotes Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Press</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressQuotes.map((quote) => (
              <div
                key={quote.id}
                className="p-8 bg-indigo-800/30 backdrop-blur-sm rounded-lg hover:bg-indigo-800/50 transition-all duration-300"
              >
                <p className="text-lg italic text-white mb-4">&ldquo;{quote.quote}&rdquo;</p>
                <p className="text-emerald-200 font-semibold">{quote.source}</p>
                <p className="text-emerald-300">{quote.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Press Photos Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Press Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressPhotos.map((photo) => (
              <div
                key={photo.id}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Videos Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Press Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressVideos.map((video) => (
              <div
                key={video.id}
                className="relative group overflow-hidden rounded-lg bg-indigo-800/30 backdrop-blur-sm"
              >
                <div className="relative aspect-video">
                  <video
                    src={video.url}
                    className="w-full h-full object-cover"
                    controls
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                  <p className="text-emerald-200 mb-2">{video.date}</p>
                  <p className="text-gray-300">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Press Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-indigo-800/30 backdrop-blur-sm rounded-lg hover:bg-indigo-800/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-emerald-200 mb-4">{item.description}</p>
                <a
                  href={item.url}
                  download
                  className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 