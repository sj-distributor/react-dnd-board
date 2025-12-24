interface TocItem {
    id: string;
    label: string;
    category?: string;
}
interface TableOfContentsProps {
    items: TocItem[];
}
export declare function TableOfContents({ items }: TableOfContentsProps): import("react/jsx-runtime").JSX.Element;
export {};
