import { useState } from "react";
import { DndBoard } from "react-dnd-board";
import { ExampleSection } from "../../../components/example-section";
import { basicBoardData } from "../../../data/mock-data";
import { getPriorityColor, getPriorityLabel } from "../../../data/utils";

const CODE = `import { DndBoard } from "react-dnd-board";
import { useState } from "react";

const [lists, setLists] = useState(basicBoardData);

<DndBoard
  lists={lists}
  onListsChange={setLists}
  listProps={(list) => ({
    style: { backgroundColor: list.color + "10" },
    renderHeader: (dragHandleProps) => (
      <div {...dragHandleProps} style={{ backgroundColor: list.color }}>
        <span>{list.title}</span>
        <span>{list.items?.length || 0}</span>
      </div>
    ),
    renderItem: (item) => (
      <div>
        <p>{item.content}</p>
        <span>{getPriorityLabel(item.priority)}</span>
      </div>
    ),
  })}
/>`;

export function BoardExample() {
  const [lists, setLists] = useState(basicBoardData);

  return (
    <ExampleSection
      title="看板模式 (DndBoard)"
      description="支持列表拖拽排序和跨列表项目移动"
      code={CODE}
      codePath="examples/basic-example/board-example"
    >
      <DndBoard
        lists={lists}
        onListsChange={setLists}
        listProps={(list) => ({
          style: { backgroundColor: list.color + "10" },
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
          renderItem: (item) => (
            <div className="space-y-2">
              <p className="text-slate-800">{item.content}</p>
              <span
                className={`inline-block rounded px-2 py-1 text-xs font-medium ${getPriorityColor(item.priority)}`}
              >
                {getPriorityLabel(item.priority)}
              </span>
            </div>
          ),
        })}
      />
    </ExampleSection>
  );
}
