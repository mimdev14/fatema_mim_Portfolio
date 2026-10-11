import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

function GalleryCard({ project, duplicate = false }) {
  return (
    <li className="projects-marquee-item w-[280px] shrink-0 sm:w-[340px] lg:w-[380px]">
      <Link
        href={`/projects/${project.slug}`}
        tabIndex={duplicate ? -1 : undefined}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#334155] bg-[#1E293B] transition duration-300 hover:-translate-y-1 hover:border-[#10B981]/50 hover:shadow-[0_20px_45px_-28px_rgba(16,185,129,0.5)] focus-visible:-translate-y-1 focus-visible:border-[#10B981] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10B981] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0F172A]">
          {project.image ? (
            <Image
              src={project.image}
              alt={duplicate ? '' : `${project.name} project preview`}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 340px, 280px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
            />
          ) : (
            <div className="grid h-full place-items-center px-4 text-center font-display text-xl text-[#94A3B8]">
              {project.name}
            </div>
          )}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 -translate-x-1 translate-y-1 place-items-center rounded-full border border-[#334155] bg-[#0F172A]/85 text-[#10B981] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
          >
            <FiArrowUpRight size={16} />
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-1.5 p-5">
          <h4 className="font-display text-lg font-semibold text-white">{project.name}</h4>
          {project.tagline && (
            <p className="line-clamp-2 text-sm leading-6 text-[#94A3B8]">{project.tagline}</p>
          )}
        </div>
      </Link>
    </li>
  );
}

export default function ProjectMarquee({ projects }) {
  if (!projects?.length) return null;

  return (
    <div role="region" aria-label="More projects gallery" className="projects-marquee py-6">
      <div className="projects-marquee-track flex w-max">
        <ul className="projects-marquee-group flex min-w-[100vw] shrink-0 gap-6 pr-6">
          {projects.map((project) => (
            <GalleryCard key={project.slug} project={project} />
          ))}
        </ul>
        {/* Visual-only copy that makes the loop seamless; hidden from keyboard and screen readers */}
        <ul
          aria-hidden="true"
          data-duplicate="true"
          className="projects-marquee-group flex min-w-[100vw] shrink-0 gap-6 pr-6"
        >
          {projects.map((project) => (
            <GalleryCard key={`${project.slug}-copy`} project={project} duplicate />
          ))}
        </ul>
      </div>
    </div>
  );
}