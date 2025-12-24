import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { DndBoard, DndList } from "react-dnd-board";
import { ExampleSection } from "../../../components/example-section";
const CODE = `import { DndBoard, DndList } from "react-dnd-board";
import { useState } from "react";

// 包含重复 ID 的数据 - 会显示错误
const invalidLists = [
  {
    id: "list-1",
    name: "列表 1",
    items: [
      { id: "item-1", text: "项目 1" },
      { id: "item-1", text: "重复 ID 的项目" }, // 重复 ID
    ],
  },
];

// 包含空 ID 的数据 - 会显示错误
const invalidItems = [
  { id: "item-1", text: "正常项目" },
  { id: "", text: "空 ID 的项目" }, // 空 ID
];

<DndBoard lists={invalidLists} onListsChange={setLists} />
<DndList data={listData} items={invalidItems} onItemsChange={setItems} />`;
export function InvalidData() {
    // 包含重复 ID 的看板数据
    const [duplicateIdLists, setDuplicateIdLists] = useState([
        {
            id: "list-1",
            name: "列表 1",
            items: [
                { id: "item-1", text: "项目 1" },
                { id: "item-1", text: "重复 ID 的项目" },
            ],
        },
    ]);
    // 包含空 ID 的列表数据
    const [emptyIdItems, setEmptyIdItems] = useState([
        { id: "item-1", text: "正常项目 1" },
        { id: "", text: "空 ID 的项目" },
        { id: "item-2", text: "正常项目 2" },
    ]);
    return (_jsx(ExampleSection, { title: "\u9519\u8BEF\u5904\u7406 - \u65E0\u6548\u6570\u636E", description: "\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u9A8C\u8BC1\u6570\u636E\uFF0C\u5F53\u53D1\u73B0\u91CD\u590D ID \u6216\u7A7A ID \u65F6\u4F1A\u663E\u793A\u9519\u8BEF\u4FE1\u606F", variant: "error", codePath: "examples/edge-cases-example/invalid-data", code: CODE, children: _jsxs("div", { className: "md:rdb:grid-cols-2 rdb:grid rdb:gap-6", children: [_jsxs("div", { className: "rdb:space-y-2", children: [_jsx("p", { className: "rdb:text-xs rdb:text-red-600", children: "\u91CD\u590D ID \u9519\u8BEF (DndBoard)" }), _jsx(DndBoard, { lists: duplicateIdLists, onListsChange: setDuplicateIdLists })] }), _jsxs("div", { className: "rdb:space-y-2", children: [_jsx("p", { className: "rdb:text-xs rdb:text-red-600", children: "\u7A7A ID \u9519\u8BEF (DndList)" }), _jsx(DndList, { data: { id: "invalid-list", label: "包含无效项的列表" }, items: emptyIdItems, onItemsChange: setEmptyIdItems })] })] }) }));
}
