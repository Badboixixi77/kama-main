"use client";

import { motion } from "framer-motion";
import { PressVideo } from "../app/data/content";

interface PressVideosProps {
  videos: PressVideo[];
}

export default function PressVideos({ videos }: PressVideosProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center font-playfair"
        >
          Press Videos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-indigo-800/30 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <div className="relative aspect-video">
                <video
                  src={video.url}
                  className="w-full h-full object-cover"
                  controls
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-emerald-200 mb-2">{video.date}</p>
                <p className="text-gray-300">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 