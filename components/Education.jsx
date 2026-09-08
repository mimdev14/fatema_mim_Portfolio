'use client';

import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const timeline = [
  {
    hash: 'EDU-01',
    title: 'Bachelor of Science in Computer Science & Engineering',
    org: 'National University, Bangladesh',
    period: 'Graduated · April 2026',
    text: 'Completed my undergraduate studies in Computer Science & Engineering, building a strong foundation in programming, software engineering, and computer science fundamentals.',
    type: 'education',
  },

  {
    hash: 'CERT-01',
    title: 'Complete Web Development Course With Programming Hero',
    org: 'Programming Hero · Batch 13',
    period: 'Completed · August 2026',
    text: 'Completed hands-on training in HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, and MongoDB, with exposure to AI-powered development practices.',
    type: 'certification',

    // Official Programming Hero credential verification URL
    verificationLink:
      'https://web.programming-hero.com/verification?validationNumber=PHbatch-13WEB13-03931813',

    // Certificate PDF stored inside the Next.js public folder
    certificateLink: '/certificates/programming-hero-certificate.pdf',
  },

  {
    hash: 'LEARN-01',
    title: 'Continuous Learning',
    org: 'Self-directed',
    period: 'Present',
    text: 'Continuously improving software engineering skills, strengthening backend development, exploring AI integration, and building real-world full-stack applications.',
    type: 'learning',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-5 md:px-8">
        {/* Section Label */}
        <p className="section-eyebrow">// education</p>

        {/* Section Heading */}
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 max-w-2xl">
          Education &amp; Certifications
        </h2>

        {/* Section Description */}
        <p className="mt-4 text-muted max-w-xl">
          From academic foundations to professional training and continuous
          learning, every step has strengthened my skills and prepared me to
          build modern software applications.
        </p>

        {/* Timeline */}
        <div className="mt-14 commit-rail pl-10 space-y-12 max-w-3xl">
          {timeline.map((item, i) => (
            <motion.div
              key={item.hash}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-10 top-1 w-5 h-5 rounded-full bg-signal-light border-2 border-signal flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
              </span>

              {/* Timeline Meta */}
              <p className="font-mono text-xs text-muted mb-1">
                {item.hash} · {item.period}
              </p>

              {/* Title */}
              <h3 className="font-display text-lg md:text-xl font-semibold text-ink">
                {item.title}
              </h3>

              {/* Organization */}
              <p className="text-sm text-signal-dark mt-0.5">
                {item.org}
              </p>

              {/* Description */}
              {item.text && (
                <p className="text-sm text-muted mt-2 leading-relaxed max-w-2xl">
                  {item.text}
                </p>
              )}

              {/* Certification Actions */}
              {item.type === 'certification' && (
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  {/* View Certificate */}
                  <a
                    href={item.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink border border-border px-3 py-2 rounded-md hover:border-signal hover:text-signal transition-colors"
                  >
                    <FiAward size={15} />
                    View Certificate
                  </a>

                  {/* Verify Credential */}
                  <a
                    href={item.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink border border-border px-3 py-2 rounded-md hover:border-signal hover:text-signal transition-colors"
                  >
                    Verify Credential
                    <FiExternalLink size={14} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}