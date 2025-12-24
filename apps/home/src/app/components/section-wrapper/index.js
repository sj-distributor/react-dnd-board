import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function SectionWrapper({ id, title, children }) {
    return (_jsxs("section", { className: "rdb:space-y-6", children: [_jsx("h2", { id: `section-${id}`, className: "rdb:text-lg rdb:font-semibold rdb:text-slate-700", children: title }), children] }));
}
