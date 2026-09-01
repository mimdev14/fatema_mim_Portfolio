export const projects = [
  {
    slug: 'recipehub',
    name: 'RecipeHub',
    tagline: 'Full-stack recipe sharing platform',
    description:
      "A recipe sharing platform where home cooks can discover, save, and share their own recipes with a community of food lovers — built with a Next.js frontend and an Express/MongoDB API, with authentication handled through Better Auth.",
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Better Auth', 'Tailwind CSS'],
    image: '/recipehub-preview.png',
    liveLink: 'https://recipehub-client-gilt.vercel.app',
    serverLiveLink: 'https://recipehub-server-eight.vercel.app',
    clientRepo: 'https://github.com/mimdev14/recipehub-client-.git',
    serverRepo: 'https://github.com/mimdev14/recipehub_server.git',
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
      "A booking platform for browsing and reserving quiet, private study rooms — built for focused learning and productive collaboration, with real-time room availability and easy booking.",
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Better Auth', 'Tailwind CSS'],
    image: '/studynook-preview.png',
    liveLink: 'https://studynook-client-zeta.vercel.app',
    serverLiveLink: 'https://study-nook-server-theta.vercel.app',
    clientRepo: 'https://github.com/mimdev14/studynook-client.git',
    serverRepo: 'https://github.com/mimdev14/studyNook_server.git',
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
      "A job platform connecting seekers with verified opportunities — search by title, skill, or company, filter by location, and apply directly, all backed by a Next.js and Express/MongoDB stack with Stripe for premium listings.",
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Better Auth', 'Stripe', 'Tailwind CSS'],
    image: '/jobnest-preview.png',
    liveLink: 'https://vercel.com/fatema-akter-mim-s-projects/job-nest',
    serverLiveLink: '',
    clientRepo: 'https://github.com/mimdev14/JobNest.git',
    serverRepo: 'https://github.com/mimdev14/JobNest-server.git',
    hasDetails: true,
    challenges:
      'Integrating Stripe for paid listings while keeping the free job-search flow simple required a clean separation between the public browsing experience and the gated employer features.',
    improvements:
      'Planned improvements include saved searches with email alerts, an employer dashboard for tracking applicants, and resume upload/parsing.',
  },
  {
    slug: 'tourdot',
    name: 'TourDot',
    tagline: 'Tour booking & travel discovery platform',
    description:
      "A travel platform for discovering handpicked tours and destinations and booking experiences directly — from guided escapes to cultural adventures, all in one place.",
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    image: '/tourdot-preview.png',
    liveLink: 'https://tour-dot.vercel.app',
    serverLiveLink: '',
    clientRepo: 'https://github.com/mimdev14/TourDot.git',
    serverRepo: 'https://github.com/mimdev14/tour_dot-server.git',
    hasDetails: true,
    challenges:
      'Structuring tour and destination data so it stayed flexible for different trip types (guided, cultural, beach) while keeping the browsing UI consistent was an ongoing design challenge.',
    improvements:
      'Future plans include user reviews per tour, wishlist/saved trips, and multi-currency pricing for international travelers.',
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}gi