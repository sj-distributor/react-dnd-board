import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/shared/utils/cn";
import { useEffect, useState } from "react";
export function TableOfContents({ items }) {
    const [activeId, setActiveId] = useState("");
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, {
            rootMargin: "-20% 0px -35% 0px",
            threshold: 0,
        });
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
    const groupedItems = items.reduce((acc, item) => {
        const category = item.category || "其他";
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});
    const handleClick = (id) => {
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
    return (_jsx("nav", { className: "rdb:space-y-1 rdb:text-sm", children: Object.entries(groupedItems).map(([category, categoryItems]) => (_jsxs("div", { children: [_jsx("div", { className: "rdb:mb-2 rdb:text-xs rdb:font-medium rdb:text-slate-500", children: category }), categoryItems.map((item) => (_jsx("button", { onClick: () => handleClick(item.id), className: cn("rdb:block rdb:w-full rdb:rounded rdb:px-2 rdb:py-1 rdb:text-left rdb:transition-colors", activeId === item.id
                        ? "rdb:bg-blue-100 rdb:font-medium rdb:text-blue-900"
                        : "hover:rdb:bg-slate-50 hover:rdb:text-slate-900 rdb:text-slate-600"), children: item.label }, item.id)))] }, category))) }));
}
