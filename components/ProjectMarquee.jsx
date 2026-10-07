'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProjectMarquee({ projects }) {
  const [paused, setPaused] = useState(false);
  const items = [...projects, ...projects]; // doubled for a seamless loop

  return (
    <div
      className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-6 w-max animate-marquee"
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        {items.map((project, i) => (
          <Link
            key={`${project.slug}-${i}`}
            href={`/projects/${project.slug}`}
            className="group relative w-[280px] shrink-0 aspect-video rounded-xl overflow-hidden border border-line bg-gradient-to-br from-signal-light to-amber-light"
          >
            {project.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="font-display text-base font-semibold text-paper">
                {project.name}
              </span>
              <span className="text-xs text-paper/80 mt-0.5">{project.tagline}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}