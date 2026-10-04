import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import FeaturedProjectCard from './FeaturedProjectCard';

export default function Projects() {
  const featured = projects.find((p) => p.featured) || projects[0];
  const rest = projects.filter((p) => p.slug !== featured.slug);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <p className="section-eyebrow">// projects</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 max-w-2xl">
          Featured Work
        </h2>
        <p className="mt-4 text-muted max-w-xl">
          Five full-stack applications I&apos;ve designed and built — from a
          growing AI-powered SaaS product to deployed client projects, each
          with a live demo and source code.
        </p>

        <div className="mt-14">
          <FeaturedProjectCard project={featured} />
        </div>

        <p className="font-mono text-xs text-muted mt-14 mb-6">// client projects</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}