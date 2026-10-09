
'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project, index = 0 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [5, -5]),
    { stiffness: 220, damping: 24 }
  );

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-5, 5]),
    { stiffness: 220, damping: 24 }
  );

  function handleMouseMove(event) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.45 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ y: -5 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-800/70 transition-colors hover:border-emerald-400/40"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400"
        aria-label={`View ${project.name} project details`}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-xl font-semibold text-white">
              {project.name}
            </span>
          </div>
        )}

        {project.status && (
          <span className="absolute right-3 top-3 rounded-full border border-emerald-400/30 bg-slate-950/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
            {project.status}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-white">
          {project.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-slate-700 bg-slate-900/60 px-2 py-1 font-mono text-[10px] text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
          >
            View Details
            <FiArrowUpRight
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>

          {project.clientRepo && (
            <a
              href={project.clientRepo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} GitHub repository`}
              className="rounded-md p-2 text-slate-400 transition-colors hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <FiGithub size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}