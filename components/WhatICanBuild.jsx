'use client';

import { motion } from 'framer-motion';
import { FiLayout, FiServer, FiCpu } from 'react-icons/fi';

const items = [
  {
    icon: FiLayout,
    title: 'Responsive Websites',
    text: 'Clean, responsive, and accessible websites that provide an excellent user experience across all devices.',
  },
  {
    icon: FiServer,
    title: 'Full-Stack Web Applications',
    text: 'Modern web applications built with React, Next.js, Node.js, Express.js, and MongoDB using scalable architecture.',
  },
  {
    icon: FiCpu,
    title: 'AI-Ready Solutions',
    text: 'Exploring AI integration to create smarter web applications and improve user experiences with modern technologies.',
  },
];

export default function WhatICanBuild() {
  return (
    <section className="py-24 md:py-32 bg-panel/60">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <p className="section-eyebrow">// capabilities</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 max-w-2xl">
          What I Can Build
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-7 rounded-2xl bg-paper border border-line hover:border-signal transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-signal-light text-signal flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink mt-5">
                {title}
              </h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
