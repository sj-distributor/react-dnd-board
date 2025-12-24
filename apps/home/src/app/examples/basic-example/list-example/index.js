import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { DndList } from "react-dnd-board";
import { ExampleSection } from "../../../components/example-section";
import { basicListData } from "../../../data/mock-data";
const CODE = `import { DndList } from "react-dnd-board";
import { useState } from "react";

const [items, setItems] = useState(basicListData.items);

const handleToggle = (id: string | number) => {
  setItems((prev) =>
    prev?.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    ),
  );
};

<DndList
  data={basicListData}
  items={items}
  onItemsChange={setItems}
  renderHeader={() => (
    <div>
      <h3>{basicListData.name}</h3>
      <p>{basicListData.description}</p>
    </div>
  )}
  renderItem={(item, _index, isDragging) => (
    <div className={isDragging ? "opacity-80" : ""}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleToggle(item.id)}
      />
      <span className={item.completed ? "line-through" : ""}>
        {item.text}
      </span>
    </div>
  )}
/>`;
export function ListExample() {
    const [items, setItems] = useState(basicListData.items);
    const handleToggle = (id) => {
        setItems((prev) => prev?.map((item) => item.id === id ? { ...item, completed: !item.completed } : item));
    };
    return (_jsx(ExampleSection, { title: "\u5782\u76F4\u5217\u8868 (DndList)", description: "\u5355\u72EC\u4F7F\u7528 DndList \u7EC4\u4EF6\uFF0C\u652F\u6301\u9879\u76EE\u62D6\u62FD\u6392\u5E8F", code: CODE, codePath: "examples/basic-example/list-example", children: _jsx("div", { className: "rdb:max-w-md", children: _jsx(DndList, { data: basicListData, items: items, onItemsChange: setItems, renderHeader: () => (_jsxs("div", { className: "rdb:space-y-1 rdb:border-b rdb:border-slate-200 rdb:p-4", children: [_jsx("h3", { className: "rdb:text-lg rdb:font-semibold rdb:text-slate-800", children: basicListData.name }), _jsx("p", { className: "rdb:text-sm rdb:text-slate-500", children: basicListData.description })] })), renderItem: (item, _index, isDragging) => (_jsxs("div", { className: `rdb:flex rdb:items-center rdb:gap-3 ${isDragging ? "rdb:opacity-80" : ""}`, children: [_jsx("input", { type: "checkbox", checked: item.completed, onChange: () => handleToggle(item.id), className: "rdb:h-4 rdb:w-4 rdb:cursor-pointer" }), _jsx("span", { className: `rdb:flex-1 ${item.completed
                                ? "rdb:text-slate-400 rdb:line-through"
                                : "rdb:text-slate-800"}`, children: item.text })] })), itemProps: { className: "rdb:mb-2" } }) }) }));
}
