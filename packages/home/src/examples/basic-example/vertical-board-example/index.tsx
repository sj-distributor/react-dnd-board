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
  horizontal={false}
  className="gap-4"
  listProps={(list) => ({
    className: "w-full",
    renderHeader: (dragHandleProps) => (
      <div {...dragHandleProps} style={{ backgroundColor: list.color }}>
        <span>{list.title}</span>
        <span>{list.items?.length || 0}</span>
      </div>
    ),
  })}
/>`;

export function VerticalBoardExample() {
  const [lists, setLists] = useState(basicBoardData.slice(0, 2));

  return (
    <ExampleSection
      title="垂直看板布局 (horizontal=false)"
      description="看板支持垂直布局方向"
      code={CODE}
      codePath="examples/basic-example/vertical-board-example"
    >
      <DndBoard
        lists={lists}
        onListsChange={setLists}
        horizontal={false}
        className="gap-4"
        listProps={(list) => ({
          className: "w-full",
          renderHeader: (dragHandleProps) => (
            <div
              {...dragHandleProps}
              className="flex items-center justify-between rounded-t-lg px-4 py-3 font-semibold text-white"
              style={{ backgroundColor: list.color }}
            >
              <span>{list.title}</span>
              <span className="rounded bg-white/20 px-2 py-1 text-sm">
                {list.items?.length || 0}
              </span>
            </div>
          ),
        })}
      />
    </ExampleSection>
  );
}
