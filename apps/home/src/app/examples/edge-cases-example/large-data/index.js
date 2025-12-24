import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { DndBoard } from "react-dnd-board";
import { ExampleSection } from "../../../components/example-section";
import { getPriorityColor, getPriorityLabel } from "../../../data/utils";
const generateLargeData = () => [
    {
        id: "large-list-1",
        title: "大量数据 1",
        color: "#6366f1",
        items: Array.from({ length: 30 }, (_, i) => ({
            id: `task-1-${i}`,
            content: `任务 ${i + 1}`,
            priority: ["high", "medium", "low"][i % 3],
        })),
    },
    {
        id: "large-list-2",
        title: "大量数据 2",
        color: "#f59e0b",
        items: Array.from({ length: 20 }, (_, i) => ({
            id: `task-2-${i}`,
            content: `任务 ${i + 31}`,
            priority: ["high", "medium", "low"][i % 3],
        })),
    },
];
const CODE = `import { DndBoard } from "react-dnd-board";
import { useState } from "react";

// 生成大量数据
const generateLargeData = () => [
  {
    id: "large-list",
    title: "大量数据测试",
    color: "#6366f1",
    items: Array.from({ length: 50 }, (_, i) => ({
      id: \`task-\${i}\`,
      content: \`任务 \${i + 1}\`,
      priority: ["high", "medium", "low"][i % 3],
    })),
  },
];

const [lists, setLists] = useState(generateLargeData());

<DndBoard
  lists={lists}
  onListsChange={setLists}
  listProps={{
    classNames: {
      content: "max-h-[400px] overflow-y-auto",
    },
  }}
/>`;
export function LargeData() {
    const [lists, setLists] = useState(generateLargeData);
    return (_jsx(ExampleSection, { title: "\u5927\u6570\u636E\u91CF\u6027\u80FD\u6D4B\u8BD5", description: "\u6D4B\u8BD5\u7EC4\u4EF6\u5728\u5904\u7406\u5927\u91CF\u6570\u636E\u65F6\u7684\u6027\u80FD\u8868\u73B0\uFF0850 \u4E2A\u9879\u76EE\uFF09\uFF0C\u5217\u8868\u5185\u5BB9\u652F\u6301\u6EDA\u52A8", codePath: "examples/edge-cases-example/large-data", code: CODE, children: _jsx(DndBoard, { lists: lists, onListsChange: setLists, listProps: (list) => ({
                classNames: {
                    content: "rdb:max-h-[400px] rdb:overflow-y-auto",
                },
                renderHeader: (dragHandleProps) => (_jsxs("div", { ...dragHandleProps, className: "rdb:flex rdb:items-center rdb:justify-between rdb:rounded-t-lg rdb:px-4 rdb:py-3 rdb:font-semibold rdb:text-white", style: { backgroundColor: list.color }, children: [_jsx("span", { children: list.title }), _jsxs("span", { className: "rdb:rounded rdb:bg-white/20 rdb:px-2 rdb:py-1 rdb:text-sm", children: [list.items?.length || 0, " \u9879"] })] })),
                renderItem: (item) => (_jsxs("div", { className: "rdb:flex rdb:items-center rdb:justify-between rdb:gap-2", children: [_jsx("span", { className: "rdb:flex-1 rdb:text-sm rdb:text-slate-700", children: item.content }), _jsx("span", { className: `rdb:rounded rdb:px-2 rdb:py-1 rdb:text-xs ${getPriorityColor(item.priority)}`, children: getPriorityLabel(item.priority) })] })),
            }) }) }));
}
