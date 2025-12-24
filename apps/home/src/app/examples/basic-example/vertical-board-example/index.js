import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { DndBoard } from "react-dnd-board";
import { ExampleSection } from "../../../components/example-section";
import { basicBoardData } from "../../../data/mock-data";
const CODE = `import { DndBoard } from "react-dnd-board";
import { useState } from "react";

const [lists, setLists] = useState(basicBoardData);

<DndBoard
  lists={lists}
  onListsChange={setLists}
  horizontal={false}
  className="gap-4"
  listProps={(list) => ({
    className: "w-full",
    renderHeader: (dragHandleProps) => (
      <div {...dragHandleProps} style={{ backgroundColor: list.color }}>
        <span>{list.title}</span>
        <span>{list.items?.length || 0}</span>
      </div>
    ),
  })}
/>`;
export function VerticalBoardExample() {
    const [lists, setLists] = useState(basicBoardData.slice(0, 2));
    return (_jsx(ExampleSection, { title: "\u5782\u76F4\u770B\u677F\u5E03\u5C40 (horizontal=false)", description: "\u770B\u677F\u652F\u6301\u5782\u76F4\u5E03\u5C40\u65B9\u5411", code: CODE, codePath: "examples/basic-example/vertical-board-example", children: _jsx(DndBoard, { lists: lists, onListsChange: setLists, horizontal: false, className: "rdb:gap-4", listProps: (list) => ({
                className: "rdb:w-full",
                renderHeader: (dragHandleProps) => (_jsxs("div", { ...dragHandleProps, className: "rdb:flex rdb:items-center rdb:justify-between rdb:rounded-t-lg rdb:px-4 rdb:py-3 rdb:font-semibold rdb:text-white", style: { backgroundColor: list.color }, children: [_jsx("span", { children: list.title }), _jsx("span", { className: "rdb:rounded rdb:bg-white/20 rdb:px-2 rdb:py-1 rdb:text-sm", children: list.items?.length || 0 })] })),
            }) }) }));
}
