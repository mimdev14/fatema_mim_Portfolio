export const projects = [
  {
    slug: 'recipehub',
    name: 'RecipeHub',
    tagline: 'Full-stack recipe sharing platform',
    description:
      "A full-stack platform where users discover, save, and share recipes with a community of food lovers. Built with a Next.js frontend and an Express/MongoDB API, with secure authentication handled through Better Auth.",
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Better Auth', 'Stripe', 'Tailwind CSS'],
    image: '/recipehub-preview.png',
    liveLink: 'https://recipehub-client-gilt.vercel.app',
    serverLiveLink: 'https://recipehub-server-eight.vercel.app',
    clientRepo: 'https://github.com/mimdev14/recipehub-client-',
    serverRepo: 'https://github.com/mimdev14/recipehub_server',
    hasDetails: true,
    challenges:
      'Wiring up authentication end-to-end between the Next.js client and an Express API required careful session handling, including a Node.js/OpenSSL compatibility issue with MongoDB Atlas that had to be worked around by pinning the Node runtime.',
    improvements:
      'Planned next steps include recipe rating and review threads, ingredient-based search, and a "cook mode" view optimized for following steps hands-free in the kitchen.',
  },
  {
    slug: 'studynook',
    name: 'StudyNook',
    tagline: 'Library study room booking platform',
    description:
      "A booking platform for discovering and reserving quiet, private study rooms in real time. Built for focused learning and productive collaboration, with conflict-free scheduling on the backend.",
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Better Auth', 'Stripe', 'Tailwind CSS'],
    image: '/studynook-preview.png',
    liveLink: 'https://studynook-client-zeta.vercel.app',
    serverLiveLink: 'https://study-nook-server-theta.vercel.app',
    clientRepo: 'https://github.com/mimdev14/studynook-client',
    serverRepo: 'https://github.com/mimdev14/studyNook_server',
    hasDetails: true,
    challenges:
      'Preventing double-bookings on the same room and time slot required careful availability logic on the backend, especially once concurrent booking requests came into play.',
    improvements:
      'Future plans include calendar sync, recurring bookings for regular study groups, and admin tools for managing room inventory.',
  },
  {
    slug: 'jobnest',
    name: 'JobNest',
    tagline: 'Job hiring & discovery platform',
    description:
      "A job platform connecting seekers with verified opportunities — searchable by title, skill, or company, filterable by location, with direct applications. Built on Next.js and an Express/MongoDB API, with Stripe powering premium listings.",
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Better Auth', 'Stripe', 'Tailwind CSS'],
    image: '/jobnest-preview.png',
    liveLink: 'https://job-nest-rosy.vercel.app',
    serverLiveLink: 'https://job-nest-server.vercel.app',
    clientRepo: 'https://github.com/mimdev14/JobNest',
    serverRepo: 'https://github.com/mimdev14/JobNest-server',
    hasDetails: true,
    challenges:
      'Integrating Stripe for paid listings while keeping the free job-search flow simple required a clean separation between the public browsing experience and the gated employer features.',
    improvements:
      'Planned improvements include saved searches with email alerts, an employer dashboard for tracking applicants, and resume upload/parsing.',
  },
  // {
  //   slug: 'tourdot',
  //   name: 'TourDot',
  //   tagline: 'Tour booking & travel discovery platform',
  //   description:
  //     "A travel platform for discovering handpicked tours and booking experiences directly — from guided escapes to cultural adventures, all browsable in one place.",
  //   techStack: ['Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  //   image: '/tourdot-preview.png',
  //   liveLink: 'https://tour-dot.vercel.app',
  //   serverLiveLink: '',
  //   clientRepo: 'https://github.com/mimdev14/TourDot.git',
  //   serverRepo: 'https://github.com/mimdev14/tour_dot-server.git',
  //   hasDetails: true,
  //   challenges:
  //     'Structuring tour and destination data to stay flexible across trip types (guided, cultural, beach) while keeping the browsing UI consistent was an ongoing design challenge.',
  //   improvements:
  //     'Future plans include user reviews per tour, wishlist/saved trips, and multi-currency pricing for international travelers.',
  // },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}