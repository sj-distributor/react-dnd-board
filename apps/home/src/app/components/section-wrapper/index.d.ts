import type { ReactNode } from "react";
interface SectionWrapperProps {
    id: string;
    title: string;
    children: ReactNode;
}
export declare function SectionWrapper({ id, title, children }: SectionWrapperProps): import("react/jsx-runtime").JSX.Element;
export {};
