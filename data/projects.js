export const projects = [
  {
    slug: 'namaa',
    name: 'Namaa',
    featured: true,
    tagline: 'Learn. Grow. Progress. — AI-powered learning management system',
    description:
      "Namaa is an AI-powered LMS designed to help learners build consistent learning habits, track their progress, and grow through personalized learning experiences — including a real-time AI voice tutor for conversational, hands-free learning.",
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Vapi', 'Clerk', 'Stripe', 'Sentry'],
    image: '/namaa-overview.png',
    liveLink: '',
    clientRepo: '',
    status: 'Ongoing',
    hasDetails: true,
    challenges:
      'Namaa is still in active development. The core architecture — Next.js and React on the frontend, Supabase for backend and data, Vapi powering the real-time AI voice tutor, and Clerk handling authentication and billing — is in place, with features being built out from there.',
    improvements:
      'Planned: a full course catalog, AI-personalized study plans based on learner progress, and expanded voice tutor capabilities for more subjects.',
  },
  {
    slug: 'jobnest',
    name: 'JobNest',
    tagline: 'Job hiring & discovery platform',
    description:
      "A full-stack recruitment platform with three roles — Job Seeker, Recruiter, and Admin. Seekers search and apply for jobs, recruiters post jobs and manage candidates through a hiring pipeline, and admins monitor platform activity. Includes Stripe subscriptions and AI-powered job matching.",
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Better Auth', 'Stripe'],
    image: '/jobnest-preview.png',
    liveLink: 'https://job-nest-rosy.vercel.app',
    clientRepo: 'https://github.com/mimdev14/JobNest',
    hasDetails: true,
    challenges:
      'Designing role-based access and dashboards for three different user types, integrating Stripe subscriptions with reliable webhook handling, building the AI job-matching features, and keeping a large codebase organized across a Next.js frontend and an Express backend.',
    improvements:
      'Planned: real-time chat between recruiters and seekers, resume parsing for smarter AI matching, advanced analytics for recruiters, and automated test coverage with email notification enhancements.',
  },
  {
    slug: 'cookbook',
    name: 'CookBook',
    tagline: 'Full-stack recipe sharing platform',
    description:
      "A full-stack recipe sharing app where users can post, browse, and explore recipes, with secure login and a clean, responsive interface.",
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Better Auth', 'Stripe', 'Tailwind CSS'],
    image: '/recipehub-preview.png',
    liveLink: 'https://recipehub-client-gilt.vercel.app',
    clientRepo: 'https://github.com/mimdev14/cookbook-client',
    hasDetails: true,
    challenges:
      'Fixing a Node.js and OpenSSL compatibility issue with MongoDB Atlas by switching to Node.js v20 LTS, implementing authentication and protected routes, managing recipe data (ingredients, steps, images) with a clean structure, and deploying the client and server separately on Vercel.',
    improvements:
      'Planned: favorites, comments and ratings, recipe search by ingredients and categories, AI recipe suggestions based on available ingredients, and a meal planner with shopping list.',
  },
  {
    slug: 'classroom',
    name: 'ClassRoom',
    tagline: 'Library study room booking platform',
    description:
      "A library study room booking platform. Users browse, search, and filter rooms, then book by date and time slot. Room owners manage their listings, and each user has a booking dashboard. Authentication uses Better Auth with Google login and JWT stored in HTTP-only cookies.",
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Better Auth', 'Stripe', 'Tailwind CSS'],
    image: '/studynook-preview.png',
    liveLink: 'https://studynook-client-zeta.vercel.app',
    clientRepo: 'https://github.com/mimdev14/studynook-client',
    hasDetails: true,
    challenges:
      'Preventing double bookings with time-conflict detection, setting up secure JWT cookie authentication across client and server, hosting auth on the Express server while the frontend runs on Next.js, and handling date and time-slot logic correctly.',
    improvements:
      'Planned: online payments for premium rooms, email or SMS booking reminders, a calendar view with recurring bookings, and ratings and reviews for study rooms.',
  },
  {
    slug: 'tourdot',
    name: 'TourDot BD',
    tagline: 'Tour booking & travel discovery platform',
    description:
      "A tourism platform that helps users discover travel destinations in Bangladesh, view details, and plan trips, with a fully responsive interface.",
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    image: '/tourdot-preview.png',
    liveLink: 'https://tour-dot.vercel.app',
    clientRepo: 'https://github.com/mimdev14/TourDot',
    hasDetails: true,
    challenges:
      'Presenting destination data in a clear, searchable layout, making the UI fully responsive across devices, and structuring the frontend around clean data fetching.',
    improvements:
      'Planned: online booking for tours and hotels, an interactive map with route guidance, user reviews and photo sharing, and an AI-based trip planner by budget and days.',
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}