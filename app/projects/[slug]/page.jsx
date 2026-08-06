import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects, getProject } from '@/data/projects';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Fatema Akter Mim`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-content mx-auto px-5 md:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-mono text-muted hover:text-signal transition-colors"
          >
            <FiArrowLeft size={14} /> back to projects
          </Link>

          <div className="mt-8 rounded-2xl overflow-hidden bg-gradient-to-br from-signal-light to-amber-light aspect-[21/9] flex items-center justify-center">
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={`${project.name} banner`}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="font-display text-4xl text-signal-dark/70">
                {project.name}
              </span>
            )}
          </div>

          <div className="mt-10 grid md:grid-cols-[1.4fr_1fr] gap-14">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                {project.name}
              </h1>
              <p className="text-signal-dark font-mono text-sm mt-2">
                {project.tagline}
              </p>

              <div className="mt-8">
                <h2 className="font-mono text-xs text-signal mb-2">// overview</h2>
                <p className="text-muted leading-relaxed">{project.description}</p>
              </div>

              <div className="mt-8">
                <h2 className="font-mono text-xs text-signal mb-2">// challenges</h2>
                <p className="text-muted leading-relaxed">{project.challenges}</p>
              </div>

              <div className="mt-8">
                <h2 className="font-mono text-xs text-signal mb-2">
                  // future improvements
                </h2>
                <p className="text-muted leading-relaxed">{project.improvements}</p>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="p-6 rounded-2xl bg-panel border border-line">
                <h2 className="font-mono text-xs text-signal mb-4">// tech stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-signal-light text-signal-dark"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-panel border border-line space-y-3">
                <h2 className="font-mono text-xs text-signal mb-1">// links</h2>
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-ink hover:text-signal"
                  >
                    <FiExternalLink size={15} /> Live Project
                  </a>
                ) : (
                  <p className="flex items-center gap-2 text-sm text-muted/70">
                    <FiExternalLink size={15} /> Live link coming soon
                  </p>
                )}
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-ink hover:text-signal"
                  >
                    <FiGithub size={15} /> GitHub Repository
                  </a>
                ) : (
                  <p className="flex items-center gap-2 text-sm text-muted/70">
                    <FiGithub size={15} /> Repository link coming soon
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
