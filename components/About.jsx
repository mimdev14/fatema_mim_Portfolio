'use client';

import { motion } from 'framer-motion';

const currently = [
  {
    title: 'Building',
    text: 'Full-stack applications with React, Next.js, Node.js, Express.js, and MongoDB while applying real-world development patterns.',
  },
  {
    title: 'Strengthening',
    text: 'Backend development, API design, authentication, database integration, and broader software engineering fundamentals.',
  },
  {
    title: 'Exploring',
    text: 'Practical AI integration and how intelligent features can make software more useful, efficient, and capable.',
  },
];

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: '2026', label: 'CSE Graduate' },
  { value: '1', label: 'Professional Certification' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-5 md:px-8">

        {/* Section Label */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="section-eyebrow"
        >
          // about
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 max-w-2xl"
        >
          Building Software, Exploring What&apos;s Next
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-[1.4fr_1fr] gap-14">

          {/* Left Column */}
          <div>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-muted text-base md:text-lg leading-relaxed"
            >
              I have a strong foundation in frontend development and hands-on
              experience building full-stack applications with React, Next.js,
              Node.js, Express.js, and MongoDB. I enjoy working across different
              parts of an application—from creating intuitive interfaces to
              building APIs, handling authentication, and connecting data.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.08 }}
              className="mt-5 text-muted text-base md:text-lg leading-relaxed"
            >
              My goal is to grow into a well-rounded software engineer who
              understands systems as a whole and can turn real-world problems
              into reliable, practical software solutions.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.16 }}
              className="mt-5 text-muted text-base md:text-lg leading-relaxed"
            >
              I&apos;m also exploring AI integration—particularly how AI can be
              thoughtfully incorporated into software to create smarter,
              more useful, and more efficient applications.
            </motion.p>

            {/* Stats */}
            <div className="mt-10 p-6 rounded-2xl bg-panel border border-line shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <p className="font-display text-3xl font-semibold text-signal">
                    {s.value}
                  </p>

                  <p className="text-xs font-mono text-muted mt-1">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>

            {/* Currently */}
            <p className="font-mono text-xs text-signal mb-6">
              // currently
            </p>

            <div className="commit-rail pl-8 space-y-6">
              {currently.map(({ title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-paper border-2 border-signal flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                  </span>

                  <div className="text-ink font-medium">
                    {title}
                  </div>

                  <p className="text-sm text-muted mt-1 leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Beyond Coding */}
            <p className="font-mono text-xs text-muted mt-10 mb-3">
              // beyond coding
            </p>

            <p className="text-sm text-muted leading-relaxed">
              Reading, writing, taking care of my plants, spending time in
              nature, and enjoying good stories through movies and books.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}