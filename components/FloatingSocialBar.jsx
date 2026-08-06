'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, href: 'https://github.com/mimdev14', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/fatemaaktermim/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:fatemaaktermim1031@gmail.com', label: 'Email' },
];

export default function FloatingSocialBar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="hidden lg:flex fixed left-6 bottom-0 z-40 flex-col items-center"
    >
      <ul className="flex flex-col gap-5 mb-4">
        {socials.map(({ icon: Icon, href, label }) => (
          <li key={label} className="group relative">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-panel border border-line text-ink hover:text-paper hover:bg-signal hover:border-signal transition-all duration-200 hover:-translate-y-1"
            >
              <Icon size={17} />
            </a>
            <span className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs font-mono text-paper opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
          </li>
        ))}
      </ul>
      <span className="w-px h-24 bg-line" />
    </motion.div>
  );
}
