const phases = [
  { label: "Assessment & Survey", weeks: "Weeks 1–3", pct: 100 },
  { label: "Design & Costing", weeks: "Weeks 3–6", pct: 82 },
  { label: "Demolition & Earthworks", weeks: "Weeks 6–14", pct: 58 },
  { label: "Reconstruction", weeks: "Weeks 14–34", pct: 34 },
  { label: "Handover & Maintenance", weeks: "Weeks 34–40", pct: 12 },
];

export function PhaseChart() {
  return (
    <ul className="space-y-5">
      {phases.map((p) => (
        <li key={p.label}>
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-display text-lg tracking-wide">{p.label}</span>
            <span className="font-mono text-xs text-muted-foreground">{p.weeks}</span>
          </div>
          <div className="mt-2 h-2 w-full bg-secondary">
            <div
              className="h-full bg-primary"
              style={{ width: `${p.pct}%` }}
              aria-hidden="true"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

const budget = [
  { label: "Civil works & materials", value: 46, color: "var(--chart-1)" },
  { label: "Plant & machinery", value: 22, color: "var(--chart-2)" },
  { label: "Skilled labour", value: 18, color: "var(--chart-3)" },
  { label: "Survey, safety & PPE", value: 9, color: "var(--chart-4)" },
  { label: "Contingency", value: 5, color: "var(--chart-5)" },
];

export function BudgetDonut() {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row">
      <svg viewBox="0 0 180 180" className="h-44 w-44 shrink-0 -rotate-90">
        <circle cx="90" cy="90" r={radius} fill="none" stroke="var(--secondary)" strokeWidth="22" />
        {budget.map((b) => {
          const len = (b.value / 100) * circumference;
          const dash = `${len} ${circumference - len}`;
          const el = (
            <circle
              key={b.label}
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke={b.color}
              strokeWidth="22"
              strokeDasharray={dash}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return el;
        })}
      </svg>
      <ul className="w-full space-y-3">
        {budget.map((b) => (
          <li key={b.label} className="flex items-center gap-3 text-sm">
            <span
              className="h-3 w-3 shrink-0"
              style={{ backgroundColor: b.color }}
              aria-hidden="true"
            />
            <span className="flex-1 text-muted-foreground">{b.label}</span>
            <span className="font-display text-base">{b.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BlueprintGrid() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.13]"
      aria-hidden="true"
    >
      <defs>
        <pattern id="bp" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M44 0H0v44" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bp)" />
    </svg>
  );
}
