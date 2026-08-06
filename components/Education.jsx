'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const timeline = [
  {
  
    title: 'Bachelor of Science in Computer Science & Engineering',
    org: 'National University, Bangladesh',
    period: 'Graduated 2026',
    text: null,
    link: null,
  },
  {
  
    title: 'AI-Powered Full Stack Web Development',
    org: 'Programming Hero — Batch 13',
    period: 'Ongoing',
    text: 'Hands-on training in React, Next.js, Node.js, Express.js, MongoDB, Firebase Authentication, Git, deployment, and modern web development practices.',
    link: null,
  },
  {
  
    title: 'Continuous Learning',
    org: 'Self-directed',
    period: 'Present',
    text: 'Continuously improving backend development skills, exploring AI integration, and building real-world full-stack applications.',
    link: null,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <p className="section-eyebrow">// education</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 max-w-2xl">
          Education &amp; Certifications
        </h2>
        <p className="mt-4 text-muted max-w-xl">
          From academic foundations to continuous learning, every step has
          strengthened my skills and prepared me to build modern web applications.
        </p>

        <div className="mt-14 commit-rail pl-10 space-y-12 max-w-2xl">
          {timeline.map((item, i) => (
            <motion.div
              key={item.hash}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-10 top-1 w-5 h-5 rounded-full bg-signal-light border-2 border-signal flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
              </span>
              <p className="font-mono text-xs text-muted mb-1">
                {item.hash} · {item.period}
              </p>
              <h3 className="font-display text-lg md:text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="text-sm text-signal-dark mt-0.5">{item.org}</p>
              {item.text && (
                <p className="text-sm text-muted mt-2 leading-relaxed">{item.text}</p>
              )}
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-signal"
                >
                  View Credential <FiExternalLink size={14} />
                </a>
              ) : (
                i === 1 && (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-mono text-muted/70">
                    Credential link coming soon
                  </span>
                )
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
