import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { DndBoard } from "react-dnd-board";
import { ExampleSection } from "../../../components/example-section";
const CODE = `import { DndBoard } from "react-dnd-board";
import { useState } from "react";

const [lists, setLists] = useState([
  { id: "empty-1", title: "空列表 1", color: "#6b7280", items: [] },
  { id: "empty-2", title: "空列表 2", color: "#3b82f6", items: [] },
  {
    id: "with-items",
    title: "有项目的列表",
    color: "#10b981",
    items: [
      { id: "item-1", content: "可以拖到空列表" },
      { id: "item-2", content: "试试拖拽我" },
    ],
  },
]);

<DndBoard lists={lists} onListsChange={setLists} />`;
export function EmptyList() {
    const [lists, setLists] = useState([
        { id: "empty-1", title: "空列表 1", color: "#6b7280", items: [] },
        { id: "empty-2", title: "空列表 2", color: "#3b82f6", items: [] },
        {
            id: "with-items",
            title: "有项目的列表",
            color: "#10b981",
            items: [
                { id: "item-1", content: "可以拖到空列表" },
                { id: "item-2", content: "试试拖拽我" },
            ],
        },
    ]);
    return (_jsx(ExampleSection, { title: "\u7A7A\u5217\u8868\u5904\u7406", description: "\u7A7A\u5217\u8868\u53EF\u4F5C\u4E3A\u62D6\u653E\u76EE\u6807\uFF0C\u652F\u6301\u4ECE\u5176\u4ED6\u5217\u8868\u62D6\u5165\u9879\u76EE", codePath: "examples/edge-cases-example/empty-list", code: CODE, children: _jsx(DndBoard, { lists: lists, onListsChange: setLists, listProps: (list) => ({
                renderHeader: (dragHandleProps) => (_jsxs("div", { ...dragHandleProps, className: "rdb:flex rdb:items-center rdb:justify-between rdb:rounded-t-lg rdb:px-4 rdb:py-3 rdb:font-semibold rdb:text-white", style: { backgroundColor: list.color }, children: [_jsx("span", { children: list.title }), _jsx("span", { className: "rdb:rounded rdb:bg-white/20 rdb:px-2 rdb:py-1 rdb:text-sm", children: list.items?.length || 0 })] })),
                renderItem: (item) => (_jsx("div", { className: "rdb:text-sm rdb:text-slate-700", children: item.content })),
            }) }) }));
}
