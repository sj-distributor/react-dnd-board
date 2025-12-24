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

  const handleToggle = (id: string | number) => {
    setItems((prev) =>
      prev?.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  return (
    <ExampleSection
      title="垂直列表 (DndList)"
      description="单独使用 DndList 组件，支持项目拖拽排序"
      code={CODE}
      codePath="examples/basic-example/list-example"
    >
      <div className="max-w-md">
        <DndList
          data={basicListData}
          items={items}
          onItemsChange={setItems}
          renderHeader={() => (
            <div className="space-y-1 border-b border-slate-200 p-4">
              <h3 className="text-lg font-semibold text-slate-800">
                {basicListData.name}
              </h3>
              <p className="text-sm text-slate-500">
                {basicListData.description}
              </p>
            </div>
          )}
          renderItem={(item, _index, isDragging) => (
            <div
              className={`flex items-center gap-3 ${isDragging ? "opacity-80" : ""}`}
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleToggle(item.id)}
                className="h-4 w-4 cursor-pointer"
              />
              <span
                className={`flex-1 ${
                  item.completed
                    ? "text-slate-400 line-through"
                    : "text-slate-800"
                }`}
              >
                {item.text}
              </span>
            </div>
          )}
          itemProps={{ className: "mb-2" }}
        />
      </div>
    </ExampleSection>
  );
}
