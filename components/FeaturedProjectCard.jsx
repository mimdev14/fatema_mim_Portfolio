'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export default function FeaturedProjectCard({ project }) {
  const cardRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateXRaw = useTransform(pointerY, [-0.5, 0.5], [2.8, -2.8]);
  const rotateYRaw = useTransform(pointerX, [-0.5, 0.5], [-3.2, 3.2]);
  const rotateX = useSpring(rotateXRaw, { stiffness: 180, damping: 22, mass: 0.35 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 180, damping: 22, mass: 0.35 });

  function handlePointerMove(event) {
    if (reduceMotion || !cardRef.current || event.pointerType === 'touch') return;
    const bounds = cardRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
    cardRef.current.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
    cardRef.current.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="featured-project group relative grid overflow-hidden rounded-[1.5rem] border border-[#334155] bg-[#1E293B] md:grid-cols-[0.9fr_1.1fr]"
    >
      <div aria-hidden="true" className="featured-project__pointer-glow" />
      <div className="relative z-10 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="mb-7 flex flex-wrap items-center gap-2.5">
          {project.status && (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.13em] text-[#6EE7B7]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-50 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              </span>
              {project.status}
            </span>
          )}
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#94A3B8]">Featured / 01</span>
        </div>

        <h3 className="font-display text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
          {project.name}<span className="text-[#10B981]">.</span>
        </h3>
        <p className="mt-3 max-w-md text-base leading-7 text-[#CBD5E1] md:text-lg">
          {project.tagline}
        </p>
        <p className="mt-5 max-w-md text-sm leading-7 text-[#94A3B8]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#334155] bg-[#0F172A]/50 px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-[#CBD5E1] transition-colors duration-300 group-hover:border-[#10B981]/25"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="featured-project__link mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-[#10B981]/40 bg-[#10B981]/10 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-[#10B981] hover:bg-[#10B981]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E293B]"
        >
          Explore project
          <FiArrowUpRight className="text-base text-[#10B981] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Explore ${project.name} project details`}
        className="featured-project__visual relative block min-h-[260px] overflow-hidden border-t border-[#334155] bg-[#0F172A] md:min-h-[540px] md:border-l md:border-t-0"
      >
        <div aria-hidden="true" className="featured-project__visual-grid" />
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className="featured-project__image absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center font-mono text-sm text-[#94A3B8]">
            Project preview coming soon
          </div>
        )}
        <div className="featured-project__image-shade absolute inset-0" />
        <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
          <span className="rounded-full border border-white/15 bg-[#0F172A]/75 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur-md">
            Product in progress
          </span>
          <span className="featured-project__visual-arrow flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0F172A]/75 text-white backdrop-blur-md">
            <FiArrowUpRight size={20} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
