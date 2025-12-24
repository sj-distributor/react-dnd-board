import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FeatureDescription } from "./components/feature-description";
import { SectionWrapper } from "./components/section-wrapper";
import { TableOfContents } from "./components/table-of-contents";
import { BoardCustomRender, BoardExample, ConditionalDrag, DisabledItemDrag, DisabledListDrag, EmptyList, HorizontalListExample, InvalidData, LargeData, ListCustomRender, ListExample, ReadonlyMode, VerticalBoardExample, } from "./examples";
const tocItems = [
    { id: "board-example", label: "看板模式", category: "基础用法" },
    { id: "list-example", label: "垂直列表", category: "基础用法" },
    { id: "horizontal-list", label: "水平列表", category: "基础用法" },
    { id: "vertical-board", label: "垂直看板", category: "基础用法" },
    { id: "board-custom", label: "自定义看板", category: "自定义渲染" },
    { id: "list-custom", label: "自定义列表", category: "自定义渲染" },
    { id: "disabled-list", label: "禁用列表拖拽", category: "拖拽控制" },
    { id: "disabled-item", label: "禁用项目拖拽", category: "拖拽控制" },
    { id: "conditional", label: "条件拖拽", category: "拖拽控制" },
    { id: "readonly", label: "只读模式", category: "拖拽控制" },
    { id: "empty-list", label: "空列表", category: "边界处理" },
    { id: "large-data", label: "大数据量", category: "边界处理" },
    { id: "invalid-data", label: "无效数据", category: "边界处理" },
];
function App() {
    return (_jsx("div", { className: "rdb:min-h-screen rdb:bg-linear-to-br rdb:from-slate-50 rdb:to-slate-100", children: _jsxs("div", { className: "rdb:flex rdb:gap-6 rdb:p-6", children: [_jsxs("aside", { className: "rdb:sticky rdb:top-6 rdb:h-fit rdb:w-64 rdb:shrink-0 rdb:space-y-4", children: [_jsxs("div", { className: "rdb:rounded-lg rdb:bg-white rdb:p-4 rdb:shadow-sm", children: [_jsx("h2", { className: "rdb:mb-3 rdb:text-sm rdb:font-semibold rdb:text-slate-800", children: "\u7EC4\u4EF6\u76EE\u5F55" }), _jsx(TableOfContents, { items: tocItems })] }), _jsx(FeatureDescription, {})] }), _jsxs("main", { className: "rdb:min-w-0 rdb:flex-1 rdb:space-y-8", children: [_jsxs("header", { className: "rdb:rounded-lg rdb:bg-white rdb:p-6 rdb:shadow-sm", children: [_jsx("h1", { className: "rdb:mb-1 rdb:text-2xl rdb:font-bold rdb:text-slate-800", children: "\u62D6\u62FD\u7EC4\u4EF6\u5E93\u793A\u4F8B" }), _jsx("p", { className: "rdb:text-sm rdb:text-slate-600", children: "\u5C55\u793A DndBoard \u548C DndList \u7EC4\u4EF6\u7684\u5404\u79CD\u529F\u80FD\u7279\u6027" })] }), _jsxs(SectionWrapper, { id: "basic", title: "\u57FA\u7840\u7528\u6CD5", children: [_jsx("div", { id: "board-example", children: _jsx(BoardExample, {}) }), _jsx("div", { id: "list-example", children: _jsx(ListExample, {}) }), _jsx("div", { id: "horizontal-list", children: _jsx(HorizontalListExample, {}) }), _jsx("div", { id: "vertical-board", children: _jsx(VerticalBoardExample, {}) })] }), _jsxs(SectionWrapper, { id: "custom", title: "\u81EA\u5B9A\u4E49\u6E32\u67D3", children: [_jsx("div", { id: "board-custom", children: _jsx(BoardCustomRender, {}) }), _jsx("div", { id: "list-custom", children: _jsx(ListCustomRender, {}) })] }), _jsxs(SectionWrapper, { id: "drag-control", title: "\u62D6\u62FD\u63A7\u5236", children: [_jsx("div", { id: "disabled-list", children: _jsx(DisabledListDrag, {}) }), _jsx("div", { id: "disabled-item", children: _jsx(DisabledItemDrag, {}) }), _jsx("div", { id: "conditional", children: _jsx(ConditionalDrag, {}) }), _jsx("div", { id: "readonly", children: _jsx(ReadonlyMode, {}) })] }), _jsxs(SectionWrapper, { id: "edge", title: "\u8FB9\u754C\u5904\u7406", children: [_jsx("div", { id: "empty-list", children: _jsx(EmptyList, {}) }), _jsx("div", { id: "large-data", children: _jsx(LargeData, {}) }), _jsx("div", { id: "invalid-data", children: _jsx(InvalidData, {}) })] })] })] }) }));
}
export default App;
