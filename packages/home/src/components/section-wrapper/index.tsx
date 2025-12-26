import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section className="space-y-6">
      <h2
        id={`section-${id}`}
        className="text-lg font-semibold text-slate-700"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
