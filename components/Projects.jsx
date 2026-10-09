'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectMarquee from './ProjectMarquee';
import FeaturedProjectCard from './FeaturedProjectCard';

const headline = ['Built to solve', 'real problems.'];

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const safeProjects = Array.isArray(projects) ? projects : [];

  if (!safeProjects.length) return null;

  const featured = safeProjects.find((project) => project.featured) || safeProjects[0];
  const rest = safeProjects.filter((project) => project.slug !== featured.slug);

  const reveal = reduceMotion
    ? { initial: false, whileInView: undefined }
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.35 },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section id="projects" className="projects-section relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="projects-section__ambient" />
      <div className="relative z-10 mx-auto max-w-content px-5 md:px-8">
        <motion.div {...reveal}>
          <p className="projects-eyebrow">
            <span className="projects-eyebrow__line" />
            Selected Work <span className="projects-eyebrow__slash">/</span> 2026
          </p>
          <h2 className="projects-heading mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl md:text-7xl text-center">
            {headline.map((line, lineIndex) => (
              <span className="projects-heading__line" key={line}>
                {line.split(' ').map((word, wordIndex) => (
                  <motion.span
                    key={`${lineIndex}-${word}`}
                    className={word === 'problems.' ? 'projects-heading__accent' : undefined}
                    initial={reduceMotion ? false : { opacity: 0, y: 28, filter: 'blur(7px)' }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{
                      duration: 0.68,
                      delay: reduceMotion ? 0 : lineIndex * 0.13 + wordIndex * 0.075,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                    {wordIndex < line.split(' ').length - 1 ? '\u00a0' : ''}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#94A3B8] md:text-lg">
            Full-stack applications, product experiments, and ongoing work.
          </p>
        </motion.div>

        <motion.div
          {...reveal}
          transition={reduceMotion ? undefined : { duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-24"
        >
          <div className="projects-section-label mb-5">
            <span>01 / Featured Project</span>
            <span className="projects-section-label__rule" />
          </div>
          <FeaturedProjectCard project={featured} />
        </motion.div>

        <motion.div
          {...reveal}
          transition={reduceMotion ? undefined : { duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-28"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="projects-eyebrow projects-eyebrow--small">The rest of the collection</p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                More projects<span className="text-[#10B981]">.</span>
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#94A3B8] md:text-base">
                A closer look at other things I’ve built.
              </p>
            </div>
            <p className="projects-section-label projects-section-label--right">
              <span>02 — {String(rest.length + 1).padStart(2, '0')} / Scroll</span>
              <span className="projects-section-label__rule" />
            </p>
          </div>
          <div className="mt-8 md:mt-10">
            <ProjectMarquee projects={rest} />
          </div>
          <p className="mt-4 text-xs text-[#64748B]">
            A horizontally moving project gallery. Hover or focus a card to pause on desktop.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
