import './globals.css';
import Providers from '@/components/Providers';

export const metadata = {
  metadataBase: new URL('https://fatemaaktermim.dev'),
  title: 'Fatema Akter Mim — Web Developer',
  description:
    'Portfolio of Fatema Akter Mim, a Web Developer specializing in React and Next.js, building modern, scalable, and user-focused web applications.',
  keywords: [
    'Fatema Akter Mim',
    'Web Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Full Stack Developer Bangladesh',
  ],
  authors: [{ name: 'Fatema Akter Mim' }],
  openGraph: {
    title: 'Fatema Akter Mim — Web Developer',
    description:
      'Portfolio of Fatema Akter Mim, a Web Developer specializing in React and Next.js.',
    type: 'website',
    images: ['/portfolio.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatema Akter Mim — Web Developer',
    description:
      'Portfolio of Fatema Akter Mim, a Web Developer specializing in React and Next.js.',
    images: ['/portfolio.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fatema Akter Mim',
  jobTitle: 'Web Developer',
  url: 'https://fatemaaktermim.dev',
  email: 'mailto:fatemaaktermim1031@gmail.com',
  sameAs: [
    'https://github.com/mimdev14',
    'https://www.linkedin.com/in/fatemaaktermim/',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barisal',
    addressCountry: 'Bangladesh',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
