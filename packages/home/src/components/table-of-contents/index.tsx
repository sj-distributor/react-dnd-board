import { cn } from "@react-dnd-board/shared";
import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
  category?: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: 0,
      },
    );

    // 观察所有目标元素
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  // 按类别分组
  const groupedItems = items.reduce(
    (acc, item) => {
      const category = item.category || "其他";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    },
    {} as Record<string, TocItem[]>,
  );

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="space-y-1 text-sm">
      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <div key={category}>
          <div className="mb-2 text-xs font-medium text-slate-500">
            {category}
          </div>
          {categoryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={cn(
                "block w-full rounded px-2 py-1 text-left transition-colors",
                activeId === item.id
                  ? "bg-blue-100 font-medium text-blue-900"
                  : "hover:bg-slate-50 hover:text-slate-900 text-slate-600",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      ))}
    </nav>
  );
}
