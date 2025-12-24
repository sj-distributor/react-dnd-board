import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { DndBoard } from "react-dnd-board";
import { ExampleSection } from "../../../components/example-section";
const CODE = `import { DndBoard } from "react-dnd-board";
import { useState } from "react";

const [lists, setLists] = useState([
  {
    id: "list-1",
    name: "可拖拽列表",
    locked: false,
    items: [
      { id: "task-1", title: "普通任务" },
      { id: "task-2", title: "锁定任务", locked: true },
    ],
  },
  {
    id: "list-2",
    name: "锁定列表",
    locked: true,
    items: [{ id: "task-3", title: "任务 3" }],
  },
]);

// 根据数据动态控制拖拽
<DndBoard
  lists={lists}
  onListsChange={setLists}
  listProps={(list) => ({
    isDragDisabled: list.locked,
    itemProps: (item) => ({
      isDragDisabled: item.locked,
    }),
  })}
/>`;
export function ConditionalDrag() {
    const [lists, setLists] = useState([
        {
            id: "list-1",
            name: "可拖拽列表",
            locked: false,
            items: [
                { id: "task-1", title: "普通任务 1" },
                { id: "task-2", title: "锁定任务", locked: true },
                { id: "task-3", title: "普通任务 2" },
            ],
        },
        {
            id: "list-2",
            name: "锁定列表",
            locked: true,
            items: [
                { id: "task-4", title: "任务 4" },
                { id: "task-5", title: "任务 5" },
            ],
        },
        {
            id: "list-3",
            name: "混合列表",
            locked: false,
            items: [
                { id: "task-6", title: "可拖拽任务" },
                { id: "task-7", title: "锁定任务", locked: true },
            ],
        },
    ]);
    return (_jsx(ExampleSection, { title: "\u6761\u4EF6\u62D6\u62FD", description: "\u6839\u636E\u6570\u636E\u52A8\u6001\u63A7\u5236\u62D6\u62FD\u884C\u4E3A\uFF0C\u9501\u5B9A\u7684\u5217\u8868\u548C\u4EFB\u52A1\u65E0\u6CD5\u62D6\u62FD", codePath: "examples/drag-control-example/conditional-drag", code: CODE, children: _jsx(DndBoard, { lists: lists, onListsChange: setLists, listProps: (list) => ({
                isDragDisabled: list.locked,
                itemProps: (item) => ({
                    isDragDisabled: item.locked,
                }),
                renderHeader: (dragHandleProps) => (_jsxs("div", { ...dragHandleProps, className: `rdb:flex rdb:items-center rdb:justify-between rdb:border-b rdb:border-slate-200 rdb:p-4 ${list.locked ? "rdb:bg-slate-100" : ""}`, children: [_jsx("span", { className: "rdb:text-base rdb:font-semibold rdb:text-slate-800", children: list.name }), list.locked && (_jsx("span", { className: "rdb:rounded rdb:bg-red-100 rdb:px-2 rdb:py-1 rdb:text-xs rdb:text-red-700", children: "\uD83D\uDD12 \u9501\u5B9A" }))] })),
                renderItem: (item) => (_jsxs("div", { className: "rdb:flex rdb:items-center rdb:justify-between", children: [_jsx("span", { className: `rdb:text-sm ${item.locked ? "rdb:text-slate-400" : "rdb:text-slate-700"}`, children: item.title }), item.locked && (_jsx("span", { className: "rdb:text-xs rdb:text-red-600", children: "\uD83D\uDD12" }))] })),
            }) }) }));
}
