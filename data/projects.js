export const projects = [
  {
    slug: 'recipehub',
    name: 'RecipeHub',
    tagline: 'Full-stack recipe sharing platform',
    description:
      "A full-stack recipe sharing app where home cooks can publish, discover, and save recipes. Built with a Next.js frontend and a Node.js/Express API backed by MongoDB, with authentication handled through Better Auth.",
    techStack: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Better Auth', 'Tailwind CSS'],
    image: null,
    liveLink: '',
    githubLink: '',
    hasDetails: true,
    challenges:
      'Wiring up authentication end-to-end between the Next.js client and an Express API required careful session handling, including a Node.js/OpenSSL compatibility issue with MongoDB Atlas that had to be worked around by pinning the Node runtime.',
    improvements:
      'Planned next steps include recipe rating and review threads, ingredient-based search, and a "cook mode" view optimized for following steps hands-free in the kitchen.',
  },
  {
    slug: 'hireloop',
    name: 'HireLoop',
    tagline: 'Details coming soon',
    description:
      "Project details for HireLoop are being finalized and will be added shortly — check back soon for the full write-up.",
    techStack: ['Coming soon'],
    image: null,
    liveLink: '',
    githubLink: '',
    hasDetails: false,
    challenges: 'Details coming soon.',
    improvements: 'Details coming soon.',
  },
  {
    slug: 'nexwallet',
    name: 'NexWallet',
    tagline: 'Details coming soon',
    description:
      "Project details for NexWallet are being finalized and will be added shortly — check back soon for the full write-up.",
    techStack: ['Coming soon'],
    image: null,
    liveLink: '',
    githubLink: '',
    hasDetails: false,
    challenges: 'Details coming soon.',
    improvements: 'Details coming soon.',
  },
  {
    slug: 'keenkeeper',
    name: 'KeenKeeper',
    tagline: 'Friendship management app',
    description:
      "A friendship management platform that helps people stay intentional about their relationships — tracking interactions, relationship goals, and status over time.",
    techStack: ['Next.js', 'Tailwind CSS', 'Recharts'],
    image: null,
    liveLink: '',
    githubLink: '',
    hasDetails: true,
    challenges:
      'Modeling relationship "health" in a way that felt useful rather than gimmicky took a few iterations — landing on status-based tracking plus a visual interaction history struck the right balance.',
    improvements:
      'Future plans include reminders for check-ins that have gone quiet, and shared/collaborative tracking for two-way relationships.',
  },
  {
    slug: 'qurbanihat',
    name: 'QurbaniHat',
    tagline: 'Details coming soon',
    description:
      "Project details for QurbaniHat are being finalized and will be added shortly — check back soon for the full write-up.",
    techStack: ['Coming soon'],
    image: null,
    liveLink: '',
    githubLink: '',
    hasDetails: false,
    challenges: 'Details coming soon.',
    improvements: 'Details coming soon.',
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
