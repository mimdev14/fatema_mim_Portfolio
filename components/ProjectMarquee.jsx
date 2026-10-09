'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion, useReducedMotion } from 'framer-motion';

function ProjectCard({ project, duplicate = false, index = 0 }) {
  return (
    <motion.div
      whileHover={duplicate ? undefined : { y: -7, scale: 1.005 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="project-marquee__card-wrap"
    >
      <Link
        href={`/projects/${project.slug}`}
        tabIndex={duplicate ? -1 : undefined}
        aria-hidden={duplicate ? 'true' : undefined}
        className="project-marquee__card group"
      >
        <div className="project-marquee__image-wrap">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={duplicate ? '' : `${project.name} project preview`}
              className="project-marquee__image"
              loading="lazy"
              draggable="false"
            />
          ) : (
            <div className="project-marquee__image-placeholder">Preview coming soon</div>
          )}
          <div className="project-marquee__image-overlay" />
          <span className="project-marquee__number">{String(index + 2).padStart(2, '0')}</span>
          <span className="project-marquee__arrow" aria-hidden="true">
            <FiArrowUpRight size={18} />
          </span>
        </div>
        <div className="project-marquee__content">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="font-display text-xl font-semibold tracking-[-0.035em] text-white">{project.name}</h4>
              <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-[#94A3B8]">{project.tagline}</p>
            </div>
            <span className="project-marquee__mini-arrow" aria-hidden="true">
              <FiArrowUpRight size={16} />
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="rounded border border-[#334155] px-2 py-1 font-mono text-[9px] tracking-wide text-[#94A3B8]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectMarquee({ projects }) {
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const repeatedProjects = [...projects, ...projects];

  if (!projects?.length) return null;

  return (
    <div
      className={`project-marquee ${paused ? 'is-paused' : ''} ${reduceMotion ? 'is-reduced-motion' : ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="project-marquee__viewport" aria-label="More projects">
        <div className="project-marquee__track">
          {repeatedProjects.map((project, index) => {
            const duplicate = index >= projects.length;
            return (
              <ProjectCard
                key={`${project.slug}-${index}`}
                project={project}
                duplicate={duplicate}
                index={index % projects.length}
              />
            );
          })}
        </div>
      </div>
      <div className="project-marquee__progress" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}
