# NPM 发布检查清单

## 📦 Monorepo 结构说明

本项目采用 Monorepo 架构，组件库位于 `packages/react-dnd-board/` 目录。

**重要**: 所有发布操作都需要在 `packages/react-dnd-board/` 目录下执行。

## ✅ 已完成项

### 1. 代码质量

- [x] 所有测试通过（126 个测试全部通过）
- [x] TypeScript 构建成功（已排除测试文件）
- [x] 无 TypeScript 错误
- [x] 遵循命名规范（烤串命名法）
- [x] 无 any 类型使用

### 2. 构建配置

- [x] Vite 构建配置正确
- [x] 生成 ES 模块（index.es.js）
- [x] 生成 UMD 模块（index.umd.js）
- [x] 生成类型定义文件（.d.ts）
- [x] 生成样式文件（style.css）
- [x] 外部依赖配置正确（react, react-dom, @hello-pangea/dnd）

### 3. Package.json 配置

- [x] name: "react-dnd-board"
- [x] version: "0.0.3"
- [x] description: 完整描述
- [x] keywords: 包含相关关键词
- [x] author: "Nacho.L"
- [x] license: "MIT"
- [x] main: "./dist/index.umd.js"
- [x] module: "./dist/index.es.js"
- [x] types: "./dist/index.d.ts"
- [x] exports: 正确配置 ES/UMD/CSS 导出
- [x] files: 包含 dist 目录
- [x] peerDependencies: 正确声明

### 4. 文档

- [x] README.md 完整且准确
- [x] packages/react-dnd-board/README.md 与主 README 同步
- [x] API 文档完整
- [x] 类型导出文档正确
- [x] 使用示例清晰
- [x] LICENCE 文件存在

### 5. 文件过滤

- [x] files 字段配置正确
- [x] 排除源代码（仅包含 dist/）
- [x] 排除配置文件
- [x] 排除测试文件
- [x] 排除开发文件

## ⚠️ 需要手动完成

### 1. Repository 信息

当前 package.json 中的仓库地址：

```json
"repository": {
  "type": "git",
  "url": "https://github.com/sj-distributor/react-dnd-board"
},
"homepage": "https://github.com/sj-distributor/react-dnd-board#readme",
"bugs": {
  "url": "https://github.com/sj-distributor/react-dnd-board/issues"
}
```

### 2. NPM 账号准备

- [ ] 注册 NPM 账号（如果还没有）
- [ ] 登录 NPM：`npm login` 或 `yarn login`
- [ ] 验证登录状态：`npm whoami`

### 3. 版本管理

- [ ] 确认当前版本号（0.0.3）
- [ ] 后续发布使用语义化版本：
  - 补丁版本：`yarn version --patch`（0.0.4）
  - 次要版本：`yarn version --minor`（0.1.0）
  - 主要版本：`yarn version --major`（1.0.0）

### 4. 发布前最终检查

```bash
# 1. 在根目录构建库包
yarn build:lib

# 2. 进入库包目录
cd packages/react-dnd-board

# 3. 检查将要发布的文件
npm pack --dry-run

# 4. 查看打包内容
rm -f *.tgz && npm pack
tar -xvzf react-dnd-board-0.0.3.tgz
ls -la package/

# 5. 本地测试（可选）
npm link
# 在其他项目中测试
npm link react-dnd-board
```

### 5. 发布到 NPM

```bash
# 进入库包目录
cd packages/react-dnd-board

# 发布到 NPM（公开包）
npm publish --access public

# 或使用 yarn
yarn publish --access public
```

### 6. 发布后验证

```bash
# 检查包是否可用
npm view react-dnd-board

# 在新项目中安装测试
yarn add react-dnd-board @hello-pangea/dnd
```

## 📋 构建产物清单

```
packages/react-dnd-board/dist/
├── index.d.ts          # 类型定义入口
├── index.es.js         # ES 模块
├── index.umd.js        # UMD 模块
├── style.css           # 样式文件
└── [其他类型定义文件]
```

## 🎯 发布命令速查

```bash
# 完整发布流程（从根目录开始）
yarn build:lib                              # 构建库
cd packages/react-dnd-board                 # 进入库目录
npm publish --access public                 # 发布到 NPM

# 更新版本并发布
cd packages/react-dnd-board                 # 进入库目录
yarn version --patch                        # 更新补丁版本
cd ../..                                    # 返回根目录
yarn build:lib                              # 重新构建
cd packages/react-dnd-board                 # 再次进入库目录
npm publish                                 # 发布

# 发布 beta 版本
cd packages/react-dnd-board
yarn version --prerelease --preid beta
cd ../..
yarn build:lib
cd packages/react-dnd-board
npm publish --tag beta
```

## 📝 注意事项

1. **目录位置**：所有 npm 发布命令必须在 `packages/react-dnd-board/` 目录下执行
2. **构建命令**：使用根目录的 `yarn build:lib` 命令构建库包
3. **首次发布**：使用 `--access public` 确保包是公开的
4. **版本号**：遵循语义化版本规范
5. **Git 标签**：发布后记得推送 git 标签：`git push --tags`
6. **更新日志**：维护 CHANGELOG.md 记录版本变更
7. **Breaking Changes**：主版本更新时在文档中明确说明

## 🔍 质量指标

- ✅ 测试覆盖率：126 个测试全部通过
- ✅ TypeScript 严格模式：已启用
- ✅ 包大小：合理
- ✅ Tree-shaking：支持（ES 模块）
- ✅ 类型定义：完整
- ✅ 文档：完善

## 🚀 准备就绪

该库已经可以发布到 NPM！记得在 `packages/react-dnd-board/` 目录下执行发布命令。
