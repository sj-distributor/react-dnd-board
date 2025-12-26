import { useState } from "react";
import type { BoardList } from "react-dnd-board";
import { DndBoard } from "react-dnd-board";
import { ExampleSection } from "../../../components/example-section";
import type { Priority } from "../../../data/types";
import { getPriorityColor, getPriorityLabel } from "../../../data/utils";

interface ListData {
  id: string;
  title: string;
  color: string;
}

interface ItemData {
  id: string;
  content: string;
  priority: Priority;
}

const generateLargeData = (): BoardList<ListData, ItemData>[] => [
  {
    id: "large-list-1",
    title: "大量数据 1",
    color: "#6366f1",
    items: Array.from({ length: 30 }, (_, i) => ({
      id: `task-1-${i}`,
      content: `任务 ${i + 1}`,
      priority: (["high", "medium", "low"] as Priority[])[i % 3],
    })),
  },
  {
    id: "large-list-2",
    title: "大量数据 2",
    color: "#f59e0b",
    items: Array.from({ length: 20 }, (_, i) => ({
      id: `task-2-${i}`,
      content: `任务 ${i + 31}`,
      priority: (["high", "medium", "low"] as Priority[])[i % 3],
    })),
  },
];

const CODE = `import { DndBoard } from "react-dnd-board";
import { useState } from "react";

// 生成大量数据
const generateLargeData = () => [
  {
    id: "large-list",
    title: "大量数据测试",
    color: "#6366f1",
    items: Array.from({ length: 50 }, (_, i) => ({
      id: \`task-\${i}\`,
      content: \`任务 \${i + 1}\`,
      priority: ["high", "medium", "low"][i % 3],
    })),
  },
];

const [lists, setLists] = useState(generateLargeData());

<DndBoard
  lists={lists}
  onListsChange={setLists}
  listProps={{
    classNames: {
      content: "max-h-[400px] overflow-y-auto",
    },
  }}
/>`;

export function LargeData() {
  const [lists, setLists] = useState(generateLargeData);

  return (
    <ExampleSection
      title="大数据量性能测试"
      description="测试组件在处理大量数据时的性能表现（50 个项目），列表内容支持滚动"
      codePath="examples/edge-cases-example/large-data"
      code={CODE}
    >
      <DndBoard
        lists={lists}
        onListsChange={setLists}
        listProps={(list) => ({
          classNames: {
            content: "max-h-[400px] overflow-y-auto",
          },
          renderHeader: (dragHandleProps) => (
            <div
              {...dragHandleProps}
              className="flex items-center justify-between rounded-t-lg px-4 py-3 font-semibold text-white"
              style={{ backgroundColor: list.color }}
            >
              <span>{list.title}</span>
              <span className="rounded bg-white/20 px-2 py-1 text-sm">
                {list.items?.length || 0} 项
              </span>
            </div>
          ),
          renderItem: (item) => (
            <div className="flex items-center justify-between gap-2">
              <span className="flex-1 text-sm text-slate-700">
                {item.content}
              </span>
              <span
                className={`rounded px-2 py-1 text-xs ${getPriorityColor(item.priority)}`}
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
