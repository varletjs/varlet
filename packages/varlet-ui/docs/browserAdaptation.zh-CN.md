# 浏览器适配

### 介绍
组件库提供移动端和桌面端适配方案,
移动端使用 `postcss-px-to-viewport` 方案进行适配,
桌面端使用 `@varlet/touch-emulator` 方案进行适配。

### 移动端适配
组件库设计基于 `375px` 宽度设计稿，推荐使用postcss插件将 `px` 单位转换成 `vw` 单位从而实现移动端适配。
在 `Webpack/Vite` 项目根路径下创建 `postcss.config.js` 并做如下配置之后 `375px -> 100vw`

```shell
# npm
npm i postcss-px-to-viewport -D

# yarn
yarn add postcss-px-to-viewport -D

# pnpm
pnpm add postcss-px-to-viewport -D
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      unitPrecision: 6,
      unitToConvert: 'px',
      propList: ['*'],
    }
  }
}
```

### 桌面端适配
由于组件库交互事件使用 `touch` 事件进行开发，不支持桌面端的 `mouse` 事件，
推荐使用 `@varlet/touch-emulator` 将 `touch -> mouse` 从而实现桌面端适配。

```shell
# npm
npm i @varlet/touch-emulator
# yarn
yarn add @varlet/touch-emulator
```

```js
import '@varlet/touch-emulator'
```