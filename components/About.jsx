'use client';

import { motion } from 'framer-motion';
import { FiCompass, FiCode, FiZap } from 'react-icons/fi';

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

const whatIBring = [
  'Strong Frontend Development',
  'Full-Stack Application Development',
  'REST APIs & Authentication',
  'Problem Solving & Debugging',
];

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: '2026', label: 'CSE Graduate' },
  { value: '100%', label: 'Continuous Learning' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="section-eyebrow"
        >
          // about
        </motion.p>
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
          <div>
            <div className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-signal-light text-signal flex items-center justify-center shrink-0">
                  <FiCompass size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs text-signal mb-1.5">WHY</p>
                  <p className="text-muted text-base leading-relaxed">
                    My goal goes beyond web development. I&apos;m working toward
                    becoming a software engineer who understands how systems work
                    as a whole and can build reliable solutions to real-world
                    problems.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: 0.08 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-signal-light text-signal flex items-center justify-center shrink-0">
                  <FiCode size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs text-signal mb-1.5">WHAT</p>
                  <p className="text-muted text-base leading-relaxed">
                    I have a strong foundation in frontend development and
                    hands-on experience building full-stack applications with
                    React, Next.js, Node.js, Express.js, and MongoDB. I enjoy
                    working across different parts of an application—from
                    creating intuitive interfaces to building APIs, handling
                    authentication, and connecting data.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: 0.16 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-signal-light text-signal flex items-center justify-center shrink-0">
                  <FiZap size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs text-signal mb-1.5">HOW</p>
                  <p className="text-muted text-base leading-relaxed">
                    I&apos;m exploring AI integration, especially how AI can be
                    thoughtfully used inside software to make applications
                    smarter and more useful. I&apos;m still learning, still
                    building, and always looking for better ways to solve
                    problems.
                  </p>
                </div>
              </motion.div>
            </div>

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
                  <p className="text-xs font-mono text-muted mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-signal mb-6">// currently</p>
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
                  <div className="text-ink font-medium">{title}</div>
                  <p className="text-sm text-muted mt-1 leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>

            <p className="font-mono text-xs text-muted mt-10 mb-3">// beyond coding</p>
            <p className="text-sm text-muted leading-relaxed">
              Reading, writing, taking care of my plants, spending time with
              nature, and enjoying good stories through movies and books.
            </p>

            <p className="font-mono text-xs text-signal mt-10 mb-4">// what I bring</p>
            <div className="flex flex-wrap gap-2">
              {whatIBring.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-signal-light text-signal-dark"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}