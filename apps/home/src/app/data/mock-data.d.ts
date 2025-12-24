import type { BaseDndData, BoardList } from "react-dnd-board";
import type { Priority } from "./types";
interface ListData extends BaseDndData {
    title: string;
    color: string;
}
interface TaskData extends BaseDndData {
    content: string;
    priority: Priority;
}
interface TodoListData extends BaseDndData {
    name: string;
    description: string;
}
interface TodoItemData extends BaseDndData {
    text: string;
    completed: boolean;
}
export declare const basicBoardData: BoardList<ListData, TaskData>[];
export declare const basicListData: TodoListData & {
    items: TodoItemData[];
};
export {};
