'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const roles = [
  'Full-Stack Developer',
  'Frontend Developer',
  'React Developer',
  'Next.js Developer',
];

const pills = ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'];

function useTypewriter(words, speed = 55, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? speed / 2 : speed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-grid bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-5 md:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow mb-4">// hi, i&apos;m</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <span className="text-ink">Fatema Akter </span>
            <span className="bg-gradient-to-r from-signal via-amber to-signal bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              Mim
            </span>
          </h1>

          <div className="mt-4 h-9 md:h-10">
            <span className="font-mono text-lg md:text-xl text-signal">
              {typed}
              <span className="inline-block w-[2px] h-5 md:h-6 bg-signal ml-1 align-middle animate-blink" />
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base md:text-lg text-muted leading-relaxed">
            I&apos;m a Web Developer with strong expertise in frontend development,
            specializing in React and Next.js. Currently expanding my backend skills
            and exploring AI integration to build modern, scalable, and user-focused
            web applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span
                key={pill}
                className="font-mono text-xs px-3 py-1.5 rounded-full bg-signal-light text-signal-dark border border-signal/20"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-full bg-ink text-paper font-medium text-sm hover:bg-signal transition-colors shadow-sm"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full border border-ink text-ink font-medium text-sm hover:border-signal hover:text-signal transition-colors"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-64 sm:w-72 md:w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-signal-light via-amber-light to-transparent opacity-70 blur-3xl scale-110" />

          <motion.svg
            className="absolute inset-0 w-full h-full -z-10"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              stroke="rgb(var(--c-signal))"
              strokeOpacity="0.25"
              strokeWidth="0.6"
              strokeDasharray="1 5"
            />
          </motion.svg>

          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="hidden sm:flex absolute -left-8 top-8 items-center gap-1.5 font-mono text-[11px] px-3 py-1.5 rounded-full bg-panel border border-line shadow-md animate-floaty"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal" /> React
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            style={{ animationDelay: '1.5s' }}
            className="hidden sm:flex absolute -right-6 top-1/3 items-center gap-1.5 font-mono text-[11px] px-3 py-1.5 rounded-full bg-panel border border-line shadow-md animate-floaty"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber" /> Next.js
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            style={{ animationDelay: '3s' }}
            className="hidden sm:flex absolute -left-4 bottom-6 items-center gap-1.5 font-mono text-[11px] px-3 py-1.5 rounded-full bg-panel border border-line shadow-md animate-floaty"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal" /> Node.js
          </motion.span>

          <div className="relative animate-floaty">
            <Image
              src="/portfolio.png"
              alt="Portrait of Fatema Akter Mim"
              width={432}
              height={578}
              className="relative z-10 w-full h-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
