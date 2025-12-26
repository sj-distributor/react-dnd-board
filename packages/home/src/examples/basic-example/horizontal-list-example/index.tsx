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

  return (
    <ExampleSection
      title="水平列表 (horizontal=true)"
      description="列表支持水平布局方向"
      code={CODE}
      codePath="examples/basic-example/horizontal-list-example"
    >
      <DndList
        data={basicListData}
        items={items}
        onItemsChange={setItems}
        horizontal
        renderHeader={false}
        classNames={{ content: "items-center" }}
        itemProps={{ className: "mr-2" }}
        renderItem={(item) => (
          <div className="text-sm whitespace-nowrap text-slate-700">
            {item.text}
          </div>
        )}
      />
    </ExampleSection>
  );
}
