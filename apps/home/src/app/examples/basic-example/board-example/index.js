import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { DndBoard } from "react-dnd-board";
import { ExampleSection } from "../../../components/example-section";
import { basicBoardData } from "../../../data/mock-data";
import { getPriorityColor, getPriorityLabel } from "../../../data/utils";
const CODE = `import { DndBoard } from "react-dnd-board";
import { useState } from "react";

const [lists, setLists] = useState(basicBoardData);

<DndBoard
  lists={lists}
  onListsChange={setLists}
  listProps={(list) => ({
    style: { backgroundColor: list.color + "10" },
    renderHeader: (dragHandleProps) => (
      <div {...dragHandleProps} style={{ backgroundColor: list.color }}>
        <span>{list.title}</span>
        <span>{list.items?.length || 0}</span>
      </div>
    ),
    renderItem: (item) => (
      <div>
        <p>{item.content}</p>
        <span>{getPriorityLabel(item.priority)}</span>
      </div>
    ),
  })}
/>`;
export function BoardExample() {
    const [lists, setLists] = useState(basicBoardData);
    return (_jsx(ExampleSection, { title: "\u770B\u677F\u6A21\u5F0F (DndBoard)", description: "\u652F\u6301\u5217\u8868\u62D6\u62FD\u6392\u5E8F\u548C\u8DE8\u5217\u8868\u9879\u76EE\u79FB\u52A8", code: CODE, codePath: "examples/basic-example/board-example", children: _jsx(DndBoard, { lists: lists, onListsChange: setLists, listProps: (list) => ({
                style: { backgroundColor: list.color + "10" },
                renderHeader: (dragHandleProps) => (_jsxs("div", { ...dragHandleProps, className: "rdb:flex rdb:items-center rdb:justify-between rdb:rounded-t-lg rdb:px-4 rdb:py-3 rdb:font-semibold rdb:text-white", style: { backgroundColor: list.color }, children: [_jsx("span", { children: list.title }), _jsx("span", { className: "rdb:rounded rdb:bg-white/20 rdb:px-2 rdb:py-1 rdb:text-sm", children: list.items?.length || 0 })] })),
                renderItem: (item) => (_jsxs("div", { className: "rdb:space-y-2", children: [_jsx("p", { className: "rdb:text-slate-800", children: item.content }), _jsx("span", { className: `rdb:inline-block rdb:rounded rdb:px-2 rdb:py-1 rdb:text-xs rdb:font-medium ${getPriorityColor(item.priority)}`, children: getPriorityLabel(item.priority) })] })),
            }) }) }));
}
