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
  listProps={(list) => ({
    renderHeader: (dragHandleProps) => (
      <div {...dragHandleProps} className="gradient-header">
        <h3>{list.title}</h3>
        <span>{list.items?.length || 0} 项</span>
      </div>
    ),
    renderItem: (item) => (
      <div className="custom-item">
        <p>{item.content}</p>
        <span>
          {item.priority === "high" ? "🔴" : 
           item.priority === "medium" ? "🟡" : "🟢"}
        </span>
      </div>
    ),
  })}
/>`;
export function BoardCustomRender() {
    const [lists, setLists] = useState(basicBoardData);
    return (_jsx(ExampleSection, { title: "\u81EA\u5B9A\u4E49\u770B\u677F\u6837\u5F0F", description: "\u901A\u8FC7 renderHeader \u548C renderItem \u5B8C\u5168\u81EA\u5B9A\u4E49\u770B\u677F\u5916\u89C2", codePath: "examples/custom-render-example/board-custom-render", code: CODE, children: _jsx(DndBoard, { lists: lists, onListsChange: setLists, listProps: (list) => ({
                renderHeader: (dragHandleProps) => (_jsxs("div", { ...dragHandleProps, className: "rdb:space-y-2 rdb:rounded-t-lg rdb:bg-linear-to-r rdb:from-indigo-500 rdb:to-purple-500 rdb:p-4 rdb:text-white", children: [_jsxs("div", { className: "rdb:flex rdb:items-center rdb:justify-between", children: [_jsx("h3", { className: "rdb:text-lg rdb:font-bold", children: list.title }), _jsxs("span", { className: "rdb:rounded-full rdb:bg-white/30 rdb:px-3 rdb:py-1 rdb:text-xs rdb:font-semibold", children: [list.items?.length || 0, " \u9879"] })] }), _jsx("div", { className: "rdb:h-1 rdb:w-full rdb:rounded-full rdb:bg-white/20" })] })),
                renderItem: (item) => (_jsxs("div", { className: "rdb:space-y-3 rdb:rounded-lg rdb:border-l-4 rdb:border-indigo-500 rdb:bg-linear-to-r rdb:from-slate-50 rdb:to-white rdb:p-3", children: [_jsxs("div", { className: "rdb:flex rdb:items-start rdb:justify-between", children: [_jsx("p", { className: "rdb:flex-1 rdb:font-medium rdb:text-slate-800", children: item.content }), _jsx("span", { className: "rdb:text-2xl", children: item.priority === "high"
                                        ? "🔴"
                                        : item.priority === "medium"
                                            ? "🟡"
                                            : "🟢" })] }), _jsx("div", { className: "rdb:flex rdb:gap-2", children: _jsxs("span", { className: "rdb:rounded-full rdb:bg-indigo-100 rdb:px-2 rdb:py-1 rdb:text-xs rdb:text-indigo-700", children: ["\u4F18\u5148\u7EA7: ", item.priority] }) })] })),
            }) }) }));
}
