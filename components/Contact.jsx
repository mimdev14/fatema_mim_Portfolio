'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi';

const cards = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'fatemaaktermim1031@gmail.com',
    href: 'mailto:fatemaaktermim1031@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+880 1955-390163',
    href: 'tel:+8801955390163',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Barisal, Bangladesh',
    href: null,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/mimdev14',
    href: 'https://github.com/mimdev14',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-panel/60">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="section-eyebrow">// contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-muted">
            Whether you&apos;re looking for a developer, have a project idea, or
            simply want to connect, I&apos;d love to hear from you. Let&apos;s create
            something meaningful together.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full bg-signal-light text-signal-dark">
            <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
            Available for internships &amp; entry-level roles
          </span>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {cards.map(({ icon: Icon, label, value, href }, i) => {
            const Wrapper = href ? motion.a : motion.div;
            return (
              <Wrapper
                key={label}
                href={href || undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl bg-paper border border-line hover:border-signal transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-signal-light text-signal flex items-center justify-center">
                  <Icon size={17} />
                </div>
                <p className="font-mono text-xs text-muted mt-1">{label}</p>
                <p className="text-sm font-medium text-ink break-all">{value}</p>
              </Wrapper>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:fatemaaktermim1031@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper font-medium text-sm hover:bg-signal transition-colors"
          >
            <FiSend size={16} /> Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/fatemaaktermim/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink text-ink font-medium text-sm hover:border-signal hover:text-signal transition-colors"
          >
            <FiLinkedin size={16} /> Connect on LinkedIn
          </a>
          <a
            href="https://github.com/mimdev14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink text-ink font-medium text-sm hover:border-signal hover:text-signal transition-colors"
          >
            <FiGithub size={16} /> View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
