
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const YOUTUBE_VIDEO_ID = '41HjL41x-kk';

export default function VideoIntro() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="intro" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          // intro
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 max-w-2xl"
        >
          A Quick Hello, From Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 rounded-2xl overflow-hidden border border-line shadow-lg aspect-video max-w-3xl mx-auto relative"
        >
          {isPlaying ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
              title="Fatema Akter Mim — Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Play Mim's introduction video"
              className="group absolute inset-0 w-full h-full cursor-pointer"
            >
              <Image
                src="/video-intro-thumbnail.png"
                alt="Fatema Akter Mim — Video Introduction"
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />

              <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />

              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
