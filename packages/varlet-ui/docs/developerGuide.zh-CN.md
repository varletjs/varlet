# 开发指南

### 介绍
首先感谢您有兴趣加入我们的开发，以下介绍一些注意事项。

### 快速开始
项目基于yarn的`workspace`特性和`lerna`作为monorepo的基本架构。
首先fork仓库，基于dev分支进行开发，在项目根目录下。

```shell
yarn bootstrap
cd packages/varlet-ui
yarn dev
```

### Todo list
- 1.提供`jsx`、`tsx`语法高亮支持(完成)。
- 2.完善文档阅读体验，修复存在的问题。
- 3.全组件单元测试，并出测试报告(完成)。
- 4.全组件样式细节优化，动画曲线优化。
- 5.计划兼容Vue2.7