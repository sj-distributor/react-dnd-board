import {
  Draggable,
  Droppable,
  type DraggableProvided,
  type DraggableProvidedDragHandleProps,
  type DraggableStateSnapshot,
} from "@hello-pangea/dnd";
import { cn } from "@react-dnd-board/shared";
import type { BaseDndData, DroppableClassName } from "../../types";
import { validateData, validateItems } from "../../utils/validation";
import { DndContext, type PickedDndContextProps } from "../dnd-context";
import { DndItem, type DndItemProps } from "../dnd-item";
import { ErrorDisplay } from "../error-display";
import { memo } from "react";

interface DndListClassNames {
  header?: DroppableClassName;
  /**
   * 不建议设置 backdrop-blur，否则会偏移
   */
  content?: DroppableClassName;
}

type ItemProps<T extends BaseDndData> = Omit<
  DndItemProps<T>,
  "index" | "data" | "children"
>;

export type DndListProps<T extends BaseDndData, S extends BaseDndData> = {
  data: T;
  items?: S[];
  index?: number;
  className?: DroppableClassName;
  classNames?: DndListClassNames;
  style?: React.CSSProperties;
  isDragDisabled?: boolean | ((data: T) => boolean);
  isDropDisabled?: boolean | ((data: T) => boolean);
  /** 横向布局 */
  horizontal?: boolean;
  itemProps?: ItemProps<S> | ((item: S, index: number) => ItemProps<S>);
  renderHeader?:
    | ((
        dragHandleProps?: DraggableProvidedDragHandleProps | null,
      ) => React.ReactNode)
    | boolean;
  renderItem?: (item: S, index: number, isDragging: boolean) => React.ReactNode;
  onItemsChange?: (items: S[]) => void;
} & PickedDndContextProps;

const DndListInner = <T extends BaseDndData, S extends BaseDndData>({
  data,
  items = [],
  index,
  className,
  classNames = {},
  style,
  isDragDisabled: isDragDisabledProp,
  isDropDisabled: isDropDisabledProp,
  itemProps,
  horizontal,
  renderHeader,
  renderItem,
  onItemsChange,
}: DndListProps<T, S>) => {
  const isDragDisabled =
    typeof isDragDisabledProp === "function"
      ? isDragDisabledProp(data)
      : isDragDisabledProp;

  const isDropDisabled =
    typeof isDropDisabledProp === "function"
      ? isDropDisabledProp(data)
      : isDropDisabledProp;

  // 是否为看板的列表
  const isBoardList = typeof index === "number";

  // 验证 data
  const dataError = validateData(data);
  if (dataError) {
    return <ErrorDisplay error={dataError} />;
  }

  // 验证 items
  const itemsError = validateItems(items, `List "${data.id}"`);
  if (itemsError) {
    return <ErrorDisplay error={itemsError} />;
  }

  const renderDefaultItem = (item: S) => {
    return <div className="rdb-item-text">{item.label || item.id}</div>;
  };

  const renderListContent = (
    provided?: DraggableProvided,
    snapshot?: DraggableStateSnapshot,
  ) => {
    return (
      <Droppable
        droppableId={String(data.id)}
        type="item"
        isDropDisabled={isDropDisabled}
        direction={horizontal ? "horizontal" : "vertical"}
      >
        {(dropProvided, dropSnapshot) => (
          <div
            {...dropProvided.droppableProps}
            className={cn(
              "rdb-list",
              snapshot?.isDragging && "rdb-list-dragging",
              typeof className === "function"
                ? className(
                    Boolean(dropSnapshot.isDraggingOver),
                    Boolean(snapshot?.isDragging),
                  )
                : className,
            )}
            style={style}
          >
            {/* Header */}
            {typeof renderHeader === "function" ? (
              renderHeader(provided?.dragHandleProps)
            ) : typeof renderHeader === "boolean" && !renderHeader ? null : (
              <div
                {...provided?.dragHandleProps}
                className={cn(
                  "rdb-list-header",
                  typeof classNames.header === "function"
                    ? classNames.header(
                        Boolean(dropSnapshot.isDraggingOver),
                        Boolean(snapshot?.isDragging),
                      )
                    : classNames.header,
                )}
              >
                {data.label ? data.label : data.id.toString()}
              </div>
            )}
            {/* Content */}
            <div
              ref={dropProvided.innerRef}
              className={cn(
                "rdb-list-content",
                horizontal
                  ? "rdb-list-content-horizontal"
                  : "rdb-list-content-vertical",
                typeof classNames.content === "function"
                  ? classNames.content(
                      Boolean(dropSnapshot.isDraggingOver),
                      Boolean(snapshot?.isDragging),
                    )
                  : classNames.content,
              )}
            >
              {items.map((item, idx) => {
                const extraItemProps =
                  typeof itemProps === "function"
                    ? itemProps(item, idx)
                    : itemProps;

                return (
                  <DndItem
                    key={item.id}
                    data={item}
                    index={idx}
                    {...extraItemProps}
                  >
                    {(isDragging) =>
                      renderItem
                        ? renderItem(item, idx, isDragging)
                        : renderDefaultItem(item)
                    }
                  </DndItem>
                );
              })}
              {dropProvided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    );
  };

  if (isBoardList) {
    return (
      <Draggable
        draggableId={String(data.id)}
        index={index}
        isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps}>
            {renderListContent(provided, snapshot)}
          </div>
        )}
      </Draggable>
    );
  }

  return (
    <DndContext type="list" data={items} onDataChange={onItemsChange}>
      {renderListContent()}
    </DndContext>
  );
};

export const DndList = memo(DndListInner) as typeof DndListInner;
