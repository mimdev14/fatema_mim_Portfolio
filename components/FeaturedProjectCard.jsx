'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export default function FeaturedProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden border border-line bg-panel shadow-sm grid md:grid-cols-[1.1fr_1fr] hover:shadow-xl transition-shadow"
    >
      <div className="p-7 md:p-9 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-4">
          {project.status && (
            <span className="font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-amber-light text-amber-dark">
              {project.status}
            </span>
          )}
          <span className="font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-signal-light text-signal-dark">
            Featured
          </span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
          {project.name}
        </h3>
        <p className="text-sm text-muted mt-2 leading-relaxed">{project.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2 py-1 rounded-full bg-signal-light text-signal-dark"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-signal transition-colors w-fit"
        >
          View Details
          <FiArrowUpRight />
        </Link>
      </div>

      <div className="relative aspect-[4/3] md:aspect-auto bg-gradient-to-br from-signal-light to-amber-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.name} overview`}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
}