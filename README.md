# React DnD Board 组件库

基于 @hello-pangea/dnd 的 React 拖拽组件库，提供开箱即用的面板和列表组件。

## 项目结构

本项目采用 monorepo 结构，使用 Yarn Workspaces 管理：

```
react-dnd-board/
├── packages/
│   └── react-dnd-board/     # 组件库包
│       ├── src/             # 库源代码
│       ├── dist/            # 构建输出
│       └── package.json     # 库包配置
│
├── apps/
│   └── home/                # 主页应用（文档、教程、示例）
│       ├── src/             # 应用源代码
│       ├── dist/            # 构建输出
│       └── package.json     # 应用配置
│
├── package.json             # 根配置（workspace）
└── yarn.lock                # 依赖锁定
```

## 快速开始

### 安装依赖

```bash
yarn install
```

### 开发

启动主页应用（包含文档和示例）：

```bash
yarn dev
```

### 构建

构建所有包：

```bash
yarn build
```

仅构建库包：

```bash
yarn build:lib
```

仅构建主页应用：

```bash
yarn build:home
```

### 测试

运行所有测试：

```bash
yarn test:run
```

运行测试（watch 模式）：

```bash
yarn test
```

### 代码检查

```bash
yarn lint
```

## Workspace 命令

在特定包中运行命令：

```bash
# 在库包中运行命令
yarn workspace react-dnd-board <command>

# 在主页应用中运行命令
yarn workspace @react-dnd-board/home <command>
```

示例：

```bash
# 在库包中构建
yarn workspace react-dnd-board build

# 在主页应用中启动开发服务器
yarn workspace @react-dnd-board/home dev
```

## 添加新的 Workspace 包

1. 在 `packages/` 或 `apps/` 目录下创建新目录
2. 创建 `package.json` 文件
3. 运行 `yarn install` 更新依赖链接

## 发布库包

1. 进入库包目录：

   ```bash
   cd packages/react-dnd-board
   ```

2. 构建库包：

   ```bash
   yarn build
   ```

3. 更新版本号：

   ```bash
   yarn version --new-version <version>
   ```

4. 发布到 npm：
   ```bash
   npm publish
   ```

详细发布流程请参考 [NPM_PUBLISH_CHECKLIST.md](./NPM_PUBLISH_CHECKLIST.md)。

## 库包使用文档

完整的 API 文档和使用示例请查看：

- [库包 README](./packages/react-dnd-board/README.md)
- 在线文档：运行 `yarn dev` 查看主页应用

## 许可证

MIT
