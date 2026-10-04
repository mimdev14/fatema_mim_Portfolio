'use client';

import { motion } from 'framer-motion';

const YOUTUBE_VIDEO_ID = 'XXXXXXXXXXX'; // replace with your video ID

export default function VideoIntro() {
  return (
    <section className="py-24 md:py-32">
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
          className="mt-10 rounded-2xl overflow-hidden border border-line shadow-lg aspect-video max-w-3xl mx-auto"
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
            title="Fatema Akter Mim — Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}