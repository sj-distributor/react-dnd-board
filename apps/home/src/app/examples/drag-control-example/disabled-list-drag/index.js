import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DndBoard } from "@/lib/components/dnd-board";
import { useState } from "react";
import { ExampleSection } from "../../../components/example-section";
import { basicBoardData } from "../../../data/mock-data";
const CODE = `import { DndBoard } from "@/lib";
import { useState } from "react";

const [lists, setLists] = useState(basicBoardData);

// 禁用列表拖拽，项目仍可拖动
<DndBoard
  lists={lists}
  onListsChange={setLists}
  listProps={{ isDragDisabled: true }}
/>`;
export function DisabledListDrag() {
    const [lists, setLists] = useState(basicBoardData.slice(0, 2));
    return (_jsx(ExampleSection, { title: "\u7981\u7528\u5217\u8868\u62D6\u62FD", description: "\u5217\u8868\u4E0D\u53EF\u62D6\u52A8\uFF0C\u4F46\u9879\u76EE\u53EF\u4EE5\u5728\u5217\u8868\u95F4\u62D6\u52A8", codePath: "examples/drag-control-example/disabled-list-drag", code: CODE, children: _jsx(DndBoard, { lists: lists, onListsChange: setLists, listProps: (list) => ({
                isDragDisabled: true,
                renderHeader: (dragHandleProps) => (_jsxs("div", { ...dragHandleProps, className: "rdb:flex rdb:items-center rdb:justify-between rdb:rounded-t-lg rdb:px-4 rdb:py-3 rdb:font-semibold rdb:text-white rdb:opacity-70", style: { backgroundColor: list.color }, children: [_jsx("span", { children: list.title }), _jsx("span", { className: "rdb:text-xs", children: "\uD83D\uDD12" })] })),
            }) }) }));
}
