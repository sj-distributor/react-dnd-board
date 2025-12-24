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
  listProps={(list) => ({
    renderHeader: (dragHandleProps) => (
      <div {...dragHandleProps} className="gradient-header">
        <h3>{list.title}</h3>
        <span>{list.items?.length || 0} 项</span>
      </div>
    ),
    renderItem: (item) => (
      <div className="custom-item">
        <p>{item.content}</p>
        <span>
          {item.priority === "high" ? "🔴" : 
           item.priority === "medium" ? "🟡" : "🟢"}
        </span>
      </div>
    ),
  })}
/>`;

export function BoardCustomRender() {
  const [lists, setLists] = useState(basicBoardData);

  return (
    <ExampleSection
      title="自定义看板样式"
      description="通过 renderHeader 和 renderItem 完全自定义看板外观"
      codePath="examples/custom-render-example/board-custom-render"
      code={CODE}
    >
      <DndBoard
        lists={lists}
        onListsChange={setLists}
        listProps={(list) => ({
          renderHeader: (dragHandleProps) => (
            <div
              {...dragHandleProps}
              className="space-y-2 rounded-t-lg bg-linear-to-r from-indigo-500 to-purple-500 p-4 text-white"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{list.title}</h3>
                <span className="rounded-full bg-white/30 px-3 py-1 text-xs font-semibold">
                  {list.items?.length || 0} 项
                </span>
              </div>
              <div className="h-1 w-full rounded-full bg-white/20" />
            </div>
          ),
          renderItem: (item) => (
            <div className="space-y-3 rounded-lg border-l-4 border-indigo-500 bg-linear-to-r from-slate-50 to-white p-3">
              <div className="flex items-start justify-between">
                <p className="flex-1 font-medium text-slate-800">
                  {item.content}
                </p>
                <span className="text-2xl">
                  {item.priority === "high"
                    ? "🔴"
                    : item.priority === "medium"
                      ? "🟡"
                      : "🟢"}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-700">
                  优先级: {item.priority}
                </span>
              </div>
            </div>
          ),
        })}
      />
    </ExampleSection>
  );
}
