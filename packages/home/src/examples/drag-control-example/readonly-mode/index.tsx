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

  return (
    <ExampleSection
      title="只读模式"
      description="完全禁用拖拽功能，适用于展示场景"
      codePath="examples/drag-control-example/readonly-mode"
      code={CODE}
    >
      <div className="max-w-md">
        <DndList
          data={basicListData}
          items={items}
          onItemsChange={setItems}
          itemProps={{ isDragDisabled: true }}
          renderHeader={() => (
            <div className="border-b border-slate-200 bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-600">
                {basicListData.name} (只读)
              </h3>
            </div>
          )}
          renderItem={(item) => (
            <div className="text-sm text-slate-400">{item.text}</div>
          )}
        />
      </div>
    </ExampleSection>
  );
}
