import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-5 bg-paper">
      <p className="font-mono text-signal text-sm">// 404</p>
      <h1 className="font-display text-3xl font-semibold text-ink mt-3">
        Page not found
      </h1>
      <p className="text-muted mt-2 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-full bg-ink text-paper font-medium text-sm hover:bg-signal transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
