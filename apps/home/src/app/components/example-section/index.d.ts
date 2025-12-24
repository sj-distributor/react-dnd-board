import type { ReactNode } from "react";
interface ExampleSectionProps {
    title: string;
    description: ReactNode;
    children: ReactNode;
    variant?: "default" | "error";
    code?: string;
    codePath?: string;
}
export declare function ExampleSection({ title, description, children, variant, code, codePath, }: ExampleSectionProps): import("react/jsx-runtime").JSX.Element;
export {};
