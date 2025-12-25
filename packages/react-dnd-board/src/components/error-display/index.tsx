import { cn } from "@react-dnd-board/shared";
import { memo } from "react";

export interface ErrorDisplayProps {
  error: string;
  /** 错误标题，默认为 "数据验证" */
  title?: string;
  className?: string;
}

export const ErrorDisplay = memo(
  ({ error, title = "数据验证", className }: ErrorDisplayProps) => {
    return (
      <div className={cn("rdb-error-display", className)}>
        <div className="rdb-error-display-content">
          <div>
            <svg
              className="rdb-error-display-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="rdb-error-display-body">
            <h3 className="rdb-error-display-title">{title}错误</h3>
            <p className="rdb-error-display-message">{error}</p>
          </div>
        </div>
      </div>
    );
  },
);
