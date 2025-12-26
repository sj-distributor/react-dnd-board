import { Draggable } from "@hello-pangea/dnd";
import { cn } from "@react-dnd-board/shared";
import { memo } from "react";
import type { BaseDndData, DndClassName } from "../../types";

export interface DndItemProps<T extends BaseDndData> {
  data: T;
  index: number;
  /**
   * 不建议额外设置过渡：transition； 会和拖拽动画冲突
   */
  rootClassName?: DndClassName;
  className?: DndClassName;
  style?: React.CSSProperties;
  isDragDisabled?: boolean | ((item: T) => boolean);
  children?: React.ReactNode | ((isDragging: boolean) => React.ReactNode);
}

const DndItemInner = <T extends BaseDndData>({
  data,
  index,
  rootClassName,
  className,
  style,
  isDragDisabled: isDragDisabledProp,
  children,
}: DndItemProps<T>) => {
  const isDragDisabled =
    typeof isDragDisabledProp === "function"
      ? isDragDisabledProp(data)
      : isDragDisabledProp;

  return (
    <Draggable
      index={index}
      draggableId={data.id.toString()}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          aria-disabled={isDragDisabled}
          aria-label={data.label || "Draggable Item"}
          style={{
            ...provided.draggableProps.style,
            ...style,
          }}
          className={cn(
            typeof rootClassName === "function"
              ? rootClassName(snapshot.isDragging)
              : rootClassName,
          )}
        >
          <div
            className={cn(
              "rdb-item-content",
              isDragDisabled && "rdb-item-content-disabled",
              snapshot.isDragging && "rdb-item-content-dragging",
              typeof className === "function"
                ? className(snapshot.isDragging)
                : className,
            )}
          >
            {typeof children === "function"
              ? children(snapshot.isDragging)
              : children}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export const DndItem = memo(DndItemInner) as typeof DndItemInner;
