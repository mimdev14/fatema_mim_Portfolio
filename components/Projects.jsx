import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <p className="section-eyebrow">// projects</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 max-w-2xl">
          Featured Work
        </h2>
        <p className="mt-4 text-muted max-w-xl">
          A selection of projects I&apos;ve designed and built end to end. Live demos
          and repositories are being added as each project is finalized.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
