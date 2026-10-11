'use client';

import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '@/data/projects';
import FeaturedProjectCard from './FeaturedProjectCard';
import ProjectMarquee from './ProjectMarquee';

const EASE = [0.22, 1, 0.36, 1];

// Words slide up out of a clipping mask. The mask element owns the viewport trigger
// (a translated child would sit outside it and never count as "in view").
function Words({ text, reduce, delay = 0 }) {
  const words = text.split(' ');
  return words.map((word, i) => (
    <Fragment key={`${word}-${i}`}>
      <motion.span
        className="inline-block overflow-hidden pb-[0.15em] align-bottom"
        initial={reduce ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.span
          className="inline-block"
          variants={{
            hidden: { y: '110%', opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.7, delay: delay + i * 0.08, ease: EASE },
            },
          }}
        >
          {word}
        </motion.span>
      </motion.span>
      {i < words.length - 1 ? ' ' : null}
    </Fragment>
  ));
}

export default function Projects() {
  const reduce = useReducedMotion();

  // The data file stays the source of truth: the featured project (Namaa) first,
  // everything else, in data order, goes into the gallery.
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const gallery = projects.filter((p) => p.slug !== featured?.slug);

  const reveal = (delay = 0, y = 24) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.65, delay, ease: EASE },
  });

  if (!featured) return null;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-x-clip bg-[#0F172A] py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_20%_0%,rgba(16,185,129,0.08),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-content px-5 md:px-8">
        {/* A. Editorial introduction */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <motion.p
              {...reveal(0, 12)}
              className="font-mono text-xs uppercase tracking-[0.25em] text-[#10B981]"
            >
              SELECTED WORK / 2026
            </motion.p>
            <h2
              id="projects-heading"
              className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              <Words text="Built to solve real problems." reduce={reduce} delay={0.1} />
            </h2>
          </div>
          <motion.p
            {...reveal(0.45, 16)}
            className="max-w-sm text-base leading-relaxed text-[#94A3B8] md:text-lg lg:justify-self-end lg:pb-3"
          >
            Full-stack applications, product experiments, and ongoing work.
          </motion.p>
        </div>

        {/* B. Featured project label */}
        <motion.p
          {...reveal(0, 12)}
          className="mt-20 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#94A3B8] md:mt-28"
        >
          <span aria-hidden="true" className="h-px w-8 bg-[#10B981]" />
          01 / FEATURED PROJECT
        </motion.p>

        {/* C. Featured project */}
        <div className="mt-6">
          <FeaturedProjectCard project={featured} />
        </div>

        {/* D. More projects transition */}
        <div className="mt-24 flex flex-col gap-4 border-t border-[#334155] pt-10 md:mt-32 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
              <Words text="More projects" reduce={reduce} />
            </h3>
            <motion.p {...reveal(0.2, 12)} className="mt-3 text-[#94A3B8]">
              A closer look at other things I&apos;ve built.
            </motion.p>
          </div>
          <motion.p
            {...reveal(0.3, 12)}
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#94A3B8]"
          >
            02 — 05 / SCROLL
          </motion.p>
        </div>
      </div>

      {/* E. Gallery — full-bleed so it moves edge to edge */}
      <motion.div {...reveal(0.15, 28)} className="mt-8">
        <ProjectMarquee projects={gallery} />
      </motion.div>

    </section>
  );
}