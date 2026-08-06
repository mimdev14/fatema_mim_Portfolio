import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Logo from './Logo';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const socials = [
  { icon: FiGithub, href: 'https://github.com/mimdev14', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/fatemaaktermim/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:fatemaaktermim1031@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-content mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" aria-label="Fatema Akter Mim, home">
          <Logo className="text-lg" />
        </a>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted hover:text-signal transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-line text-ink flex items-center justify-center hover:bg-signal hover:text-paper hover:border-signal transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-xs font-mono text-muted mt-8">
        © 2026 Fatema Akter Mim. All rights reserved.
      </p>
    </footer>
  );
}
