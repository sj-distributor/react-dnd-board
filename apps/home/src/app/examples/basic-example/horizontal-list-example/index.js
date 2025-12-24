import { jsx as _jsx } from "react/jsx-runtime";
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
  horizontal
  renderHeader={false}
  classNames={{ content: "items-center" }}
  itemProps={{ className: "mr-2" }}
  renderItem={(item) => (
    <div>{item.text}</div>
  )}
/>`;
export function HorizontalListExample() {
    const [items, setItems] = useState(basicListData.items);
    return (_jsx(ExampleSection, { title: "\u6C34\u5E73\u5217\u8868 (horizontal=true)", description: "\u5217\u8868\u652F\u6301\u6C34\u5E73\u5E03\u5C40\u65B9\u5411", code: CODE, codePath: "examples/basic-example/horizontal-list-example", children: _jsx(DndList, { data: basicListData, items: items, onItemsChange: setItems, horizontal: true, renderHeader: false, classNames: { content: "rdb:items-center" }, itemProps: { className: "rdb:mr-2" }, renderItem: (item) => (_jsx("div", { className: "rdb:text-sm rdb:whitespace-nowrap rdb:text-slate-700", children: item.text })) }) }));
}
