'use client';

import { motion } from 'framer-motion';
import { FiBookOpen, FiEdit3, FiFilm } from 'react-icons/fi';

const highlights = [
  'Responsive Web Design',
  'Modern React Development',
  'Scalable Full-Stack Learning',
  'Clean & Maintainable Code',
];

const beyond = [
  {
    icon: FiBookOpen,
    title: 'Reading',
    text: 'I enjoy reading books that expand my knowledge, inspire creativity, and help me grow both personally and professionally.',
  },
  {
    icon: FiEdit3,
    title: 'Writing',
    text: 'I love writing to organize my thoughts, express ideas clearly, and continuously improve my communication skills.',
  },
  {
    icon: FiFilm,
    title: 'Movies',
    text: 'I enjoy watching movies to relax, appreciate storytelling, and explore different perspectives and creative ideas.',
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
          Building Modern, Scalable &amp; User-Focused Web Applications
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-[1.4fr_1fr] gap-14">
          <div>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-muted text-base md:text-lg leading-relaxed"
            >
              I&apos;m a Web Developer with strong expertise in frontend development,
              specializing in React and Next.js. I enjoy building clean, responsive,
              and user-friendly web applications that transform ideas into engaging
              digital experiences.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="mt-5 text-muted text-base md:text-lg leading-relaxed"
            >
              Currently, I&apos;m expanding my backend skills with Node.js, Express.js,
              and MongoDB while exploring AI integration to become a well-rounded
              Full-Stack Developer. I&apos;m passionate about learning new technologies,
              solving real-world problems, and continuously improving my skills through
              real-world projects.
            </motion.p>

            <div className="mt-10 p-6 rounded-2xl bg-panel border border-line shadow-sm">
              <p className="font-mono text-xs text-signal mb-4">// highlights</p>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-2 text-sm text-ink"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                    {h}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-panel border border-line shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-6">
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
            <p className="font-mono text-xs text-muted mb-6">// beyond coding</p>
            <div className="commit-rail pl-8 space-y-8">
              {beyond.map(({ icon: Icon, title, text }, i) => (
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
                  <div className="flex items-center gap-2 text-ink font-medium">
                    <Icon className="text-signal" size={16} />
                    {title}
                  </div>
                  <p className="text-sm text-muted mt-1.5 leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
