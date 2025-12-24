import { FeatureDescription } from "./components/feature-description";
import { SectionWrapper } from "./components/section-wrapper";
import { TableOfContents } from "./components/table-of-contents";
import {
    BoardCustomRender,
    BoardExample,
    ConditionalDrag,
    DisabledItemDrag,
    DisabledListDrag,
    EmptyList,
    HorizontalListExample,
    InvalidData,
    LargeData,
    ListCustomRender,
    ListExample,
    ReadonlyMode,
    VerticalBoardExample,
} from "./examples";

const tocItems = [
  { id: "board-example", label: "看板模式", category: "基础用法" },
  { id: "list-example", label: "垂直列表", category: "基础用法" },
  { id: "horizontal-list", label: "水平列表", category: "基础用法" },
  { id: "vertical-board", label: "垂直看板", category: "基础用法" },
  { id: "board-custom", label: "自定义看板", category: "自定义渲染" },
  { id: "list-custom", label: "自定义列表", category: "自定义渲染" },
  { id: "disabled-list", label: "禁用列表拖拽", category: "拖拽控制" },
  { id: "disabled-item", label: "禁用项目拖拽", category: "拖拽控制" },
  { id: "conditional", label: "条件拖拽", category: "拖拽控制" },
  { id: "readonly", label: "只读模式", category: "拖拽控制" },
  { id: "empty-list", label: "空列表", category: "边界处理" },
  { id: "large-data", label: "大数据量", category: "边界处理" },
  { id: "invalid-data", label: "无效数据", category: "边界处理" },
];

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="flex gap-6 p-6">
        {/* 侧边栏 */}
        <aside className="sticky top-6 h-fit w-64 shrink-0 space-y-4">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h2 className="mb-3 text-sm font-semibold text-slate-800">
              组件目录
            </h2>
            <TableOfContents items={tocItems} />
          </div>
          <FeatureDescription />
        </aside>

        {/* 主内容区 */}
        <main className="min-w-0 flex-1 space-y-8">
          {/* 页面标题 */}
          <header className="rounded-lg bg-white p-6 shadow-sm">
            <h1 className="mb-1 text-2xl font-bold text-slate-800">
              拖拽组件库示例
            </h1>
            <p className="text-sm text-slate-600">
              展示 DndBoard 和 DndList 组件的各种功能特性
            </p>
          </header>

          {/* 基础用法 */}
          <SectionWrapper id="basic" title="基础用法">
            <div id="board-example">
              <BoardExample />
            </div>
            <div id="list-example">
              <ListExample />
            </div>
            <div id="horizontal-list">
              <HorizontalListExample />
            </div>
            <div id="vertical-board">
              <VerticalBoardExample />
            </div>
          </SectionWrapper>

          {/* 自定义渲染 */}
          <SectionWrapper id="custom" title="自定义渲染">
            <div id="board-custom">
              <BoardCustomRender />
            </div>
            <div id="list-custom">
              <ListCustomRender />
            </div>
          </SectionWrapper>

          {/* 拖拽控制 */}
          <SectionWrapper id="drag-control" title="拖拽控制">
            <div id="disabled-list">
              <DisabledListDrag />
            </div>
            <div id="disabled-item">
              <DisabledItemDrag />
            </div>
            <div id="conditional">
              <ConditionalDrag />
            </div>
            <div id="readonly">
              <ReadonlyMode />
            </div>
          </SectionWrapper>

          {/* 边界处理 */}
          <SectionWrapper id="edge" title="边界处理">
            <div id="empty-list">
              <EmptyList />
            </div>
            <div id="large-data">
              <LargeData />
            </div>
            <div id="invalid-data">
              <InvalidData />
            </div>
          </SectionWrapper>
        </main>
      </div>
    </div>
  );
}

export default App;
