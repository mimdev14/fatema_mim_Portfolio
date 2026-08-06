export default function Logo({ className = '' }) {
  return (
    <span className={`font-mono font-semibold tracking-tight ${className}`}>
      <span className="text-ink">&lt;</span>
      <span className="text-signal">mim</span>
      <span className="text-ink">/&gt;</span>
    </span>
  );
}
