# @react-dnd-board/shared

共享工具库，包含项目中通用的工具函数。

## 工具函数

### cn

用于合并 Tailwind CSS 类名的工具函数，基于 `clsx` 和 `tailwind-merge`。

```typescript
import { cn } from "@react-dnd-board/shared";

const className = cn("px-4 py-2", "bg-blue-500", {
  "text-white": true,
  "font-bold": false,
});
```
