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

  return (
    <ExampleSection
      title="自定义列表样式"
      description="通过 renderHeader 和 renderItem 完全自定义列表外观"
      codePath="examples/custom-render-example/list-custom-render"
      code={CODE}
    >
      <div className="max-w-md">
        <DndList
          data={basicListData}
          items={items}
          onItemsChange={setItems}
          className="rounded-xl border-2 border-emerald-200 bg-emerald-50"
          renderHeader={() => (
            <div className="border-b border-emerald-200 bg-emerald-500 p-4 text-white">
              <h3 className="text-lg font-bold">
                ✨ {basicListData.name}
              </h3>
              <p className="text-sm text-emerald-100">
                {basicListData.description}
              </p>
            </div>
          )}
          renderItem={(item, _index, isDragging) => (
            <div
              className={`flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm ${
                isDragging ? "ring-2 ring-emerald-400" : ""
              }`}
            >
              <span
                className={`h-3 w-3 rounded-full ${
                  item.completed ? "bg-emerald-500" : "bg-slate-300"
                }`}
              />
              <span
                className={`flex-1 ${
                  item.completed
                    ? "text-slate-400 line-through"
                    : "text-slate-700"
                }`}
              >
                {item.text}
              </span>
            </div>
          )}
          itemProps={{ className: "mb-2 px-2" }}
        />
      </div>
    </ExampleSection>
  );
}
