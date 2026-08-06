import { projects } from '@/data/projects';

export default function sitemap() {
  const base = 'https://fatemaaktermim.dev';
  const routes = ['', ...projects.map((p) => `/projects/${p.slug}`)];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
