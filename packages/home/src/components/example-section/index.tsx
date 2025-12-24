import type { ReactNode } from "react";
import { useState } from "react";

interface ExampleSectionProps {
  title: string;
  description: ReactNode;
  children: ReactNode;
  variant?: "default" | "error";
  code?: string;
  codePath?: string;
}

export function ExampleSection({
  title,
  description,
  children,
  variant = "default",
  code,
  codePath,
}: ExampleSectionProps) {
  const [showCode, setShowCode] = useState(false);

  const headerClasses =
    variant === "error"
      ? "rounded-lg border-2 border-red-200 bg-red-50 p-4"
      : "rounded-lg bg-white p-4 shadow-sm";

  const titleClasses =
    variant === "error"
      ? "mb-1 text-base font-semibold text-red-800"
      : "mb-1 text-base font-semibold text-slate-800";

  const descriptionClasses =
    variant === "error"
      ? "text-sm text-red-700"
      : "text-sm text-slate-600";

  return (
    <section className="space-y-3">
      <div className={headerClasses}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className={titleClasses}>{title}</h3>
            <p className={descriptionClasses}>{description}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {codePath && (
              <code className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
                {codePath}
              </code>
            )}
            {code && (
              <button
                onClick={() => setShowCode(!showCode)}
                className="hover:bg-slate-800 active:bg-slate-900 rounded bg-slate-700 px-3 py-1 text-xs font-medium text-white"
              >
                {showCode ? "隐藏代码" : "显示代码"}
              </button>
            )}
          </div>
        </div>
      </div>
      {children}
      {code && showCode && (
        <div className="rounded-lg border border-slate-200 bg-slate-900 p-4 shadow-sm">
          <pre className="overflow-x-auto text-xs text-slate-100">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
