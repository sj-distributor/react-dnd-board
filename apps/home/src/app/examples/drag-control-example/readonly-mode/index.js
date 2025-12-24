import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { DndList } from "react-dnd-board";
import { ExampleSection } from "../../../components/example-section";
import { basicListData } from "../../../data/mock-data";
const CODE = `import { DndList } from "react-dnd-board";
import { useState } from "react";

const [items, setItems] = useState(basicListData.items);

// 完全禁用拖拽（只读模式）
<DndList
  data={basicListData}
  items={items}
  onItemsChange={setItems}
  itemProps={{ isDragDisabled: true }}
/>`;
export function ReadonlyMode() {
    const [items, setItems] = useState(basicListData.items);
    return (_jsx(ExampleSection, { title: "\u53EA\u8BFB\u6A21\u5F0F", description: "\u5B8C\u5168\u7981\u7528\u62D6\u62FD\u529F\u80FD\uFF0C\u9002\u7528\u4E8E\u5C55\u793A\u573A\u666F", codePath: "examples/drag-control-example/readonly-mode", code: CODE, children: _jsx("div", { className: "rdb:max-w-md", children: _jsx(DndList, { data: basicListData, items: items, onItemsChange: setItems, itemProps: { isDragDisabled: true }, renderHeader: () => (_jsx("div", { className: "rdb:border-b rdb:border-slate-200 rdb:bg-slate-50 rdb:p-4", children: _jsxs("h3", { className: "rdb:font-semibold rdb:text-slate-600", children: [basicListData.name, " (\u53EA\u8BFB)"] }) })), renderItem: (item) => (_jsx("div", { className: "rdb:text-sm rdb:text-slate-400", children: item.text })) }) }) }));
}
