'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const EASE = [0.22, 1, 0.36, 1];
const MAX_BADGES = 6;
const TILT_DEGREES = 1.5; // keep this small: the card is very wide

const container = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: EASE,
      when: 'beforeChildren',
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function FeaturedProjectCard({ project }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [canTilt, setCanTilt] = useState(false);

  // Pointer position lives in motion values, so moving the mouse never re-renders React.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 90, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [TILT_DEGREES, -TILT_DEGREES]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-TILT_DEGREES, TILT_DEGREES]), spring);

  // Tilt only for a fine pointer with hover (desktop) and never for reduced motion.
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setCanTilt(mq.matches && !reduce);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [reduce]);

  // Always return to centre: when the page scrolls (the card moves under a still cursor,
  // so no pointer event fires) or the window loses focus. Passive, never blocks scrolling.
  useEffect(() => {
    if (!canTilt) {
      px.set(0);
      py.set(0);
      return undefined;
    }
    const recentre = () => {
      px.set(0);
      py.set(0);
    };
    window.addEventListener('scroll', recentre, { passive: true });
    window.addEventListener('blur', recentre);
    return () => {
      window.removeEventListener('scroll', recentre);
      window.removeEventListener('blur', recentre);
    };
  }, [canTilt, px, py]);

  function handlePointerMove(e) {
    if (!canTilt || e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    px.set(0);
    py.set(0);
  }

  const stack = project.techStack ?? [];
  const badges = stack.slice(0, MAX_BADGES);
  const extra = stack.length - badges.length;
  const titleId = `featured-${project.slug}-title`;

  return (
    // The wrapper never moves, so measuring the pointer against it is stable.
    // (Measuring the rotating card itself made the tilt feed back on itself.)
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
      className="[perspective:1400px]"
    >
    <motion.article
      aria-labelledby={titleId}
      variants={container}
      initial={reduce ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      style={canTilt ? { rotateX, rotateY } : undefined}
      className="group relative grid overflow-hidden rounded-3xl border border-[#334155] bg-[#1E293B] transition-[border-color,box-shadow] duration-500 focus-within:border-[#10B981]/50 hover:border-[#10B981]/40 hover:shadow-[0_40px_90px_-50px_rgba(16,185,129,0.45)] lg:grid-cols-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_90%_0%,rgba(16,185,129,0.10),transparent_70%)]"
      />

      {/* Text */}
      <motion.div
        variants={item}
        className="relative z-10 order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:col-span-5 lg:p-12"
      >
        {project.status && (
          <p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#10B981]">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
            </span>
            {project.status}
          </p>
        )}

        <h3
          id={titleId}
          className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          {project.name}
        </h3>

        {project.tagline && (
          <p className="mt-3 text-base text-[#94A3B8] md:text-lg">{project.tagline}</p>
        )}
        {project.description && (
          <p className="mt-5 text-sm leading-7 text-[#94A3B8]">{project.description}</p>
        )}

        {badges.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
            {badges.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-[#334155] bg-[#0F172A]/60 px-3 py-1 font-mono text-[11px] text-[#94A3B8]"
              >
                {tech}
              </li>
            ))}
            {extra > 0 && (
              <li className="rounded-full px-2 py-1 font-mono text-[11px] text-[#94A3B8]">
                +{extra} more
              </li>
            )}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-2 rounded-full border border-[#10B981]/60 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#10B981] hover:text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10B981]"
          >
            Explore project
            <span className="sr-only">: {project.name}</span>
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none"
            />
          </Link>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#94A3B8] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10B981]"
            >
              Live demo ↗
            </a>
          )}
          {project.clientRepo && (
            <a
              href={project.clientRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#94A3B8] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10B981]"
            >
              Source code ↗
            </a>
          )}
        </div>
      </motion.div>

      {/* Preview */}
      <motion.div
        variants={item}
        className="relative order-1 p-3 sm:p-4 lg:order-2 lg:col-span-7 lg:p-5"
      >
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-[#334155] bg-[#0F172A]">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} project overview`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          ) : (
            <div className="grid h-full place-items-center font-display text-3xl text-[#94A3B8]">
              {project.name}
            </div>
          )}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#10B981]/0 transition duration-500 group-hover:ring-[#10B981]/30"
          />
        </div>
      </motion.div>
    </motion.article>
    </div>
  );
}