import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { DndList } from "react-dnd-board";
import { ExampleSection } from "../../../components/example-section";
import { basicListData } from "../../../data/mock-data";
const CODE = `import { DndList } from "react-dnd-board";
import { useState } from "react";

const [items, setItems] = useState(basicListData.items);

<DndList
  data={basicListData}
  items={items}
  onItemsChange={setItems}
  className="rounded-xl border-2 border-emerald-200 bg-emerald-50"
  renderHeader={() => (
    <div className="bg-emerald-500 text-white">
      <h3>✨ {basicListData.name}</h3>
      <p>{basicListData.description}</p>
    </div>
  )}
  renderItem={(item, _index, isDragging) => (
    <div className={isDragging ? "ring-2 ring-emerald-400" : ""}>
      <span className={item.completed ? "bg-emerald-500" : "bg-slate-300"} />
      <span className={item.completed ? "line-through" : ""}>
        {item.text}
      </span>
    </div>
  )}
/>`;
export function ListCustomRender() {
    const [items, setItems] = useState(basicListData.items);
    return (_jsx(ExampleSection, { title: "\u81EA\u5B9A\u4E49\u5217\u8868\u6837\u5F0F", description: "\u901A\u8FC7 renderHeader \u548C renderItem \u5B8C\u5168\u81EA\u5B9A\u4E49\u5217\u8868\u5916\u89C2", codePath: "examples/custom-render-example/list-custom-render", code: CODE, children: _jsx("div", { className: "rdb:max-w-md", children: _jsx(DndList, { data: basicListData, items: items, onItemsChange: setItems, className: "rdb:rounded-xl rdb:border-2 rdb:border-emerald-200 rdb:bg-emerald-50", renderHeader: () => (_jsxs("div", { className: "rdb:border-b rdb:border-emerald-200 rdb:bg-emerald-500 rdb:p-4 rdb:text-white", children: [_jsxs("h3", { className: "rdb:text-lg rdb:font-bold", children: ["\u2728 ", basicListData.name] }), _jsx("p", { className: "rdb:text-sm rdb:text-emerald-100", children: basicListData.description })] })), renderItem: (item, _index, isDragging) => (_jsxs("div", { className: `rdb:flex rdb:items-center rdb:gap-3 rdb:rounded-lg rdb:bg-white rdb:p-3 rdb:shadow-sm ${isDragging ? "rdb:ring-2 rdb:ring-emerald-400" : ""}`, children: [_jsx("span", { className: `rdb:h-3 rdb:w-3 rdb:rounded-full ${item.completed ? "rdb:bg-emerald-500" : "rdb:bg-slate-300"}` }), _jsx("span", { className: `rdb:flex-1 ${item.completed
                                ? "rdb:text-slate-400 rdb:line-through"
                                : "rdb:text-slate-700"}`, children: item.text })] })), itemProps: { className: "rdb:mb-2 rdb:px-2" } }) }) }));
}
