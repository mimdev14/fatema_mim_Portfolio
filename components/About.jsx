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
    </section>
  );
}