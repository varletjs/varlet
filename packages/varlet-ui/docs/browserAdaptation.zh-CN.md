# 浏览器适配

### 介绍

组件库提供移动端和桌面端适配方案，
移动端使用 [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 方案进行适配，
桌面端使用 `@varlet/touch-emulator` 方案进行适配。

### 移动端适配

#### CSS 单位适配

组件库设计基于 `375px` 宽度设计稿，推荐使用 postcss 插件将 `px` 单位转换成 `vmin` 单位从而实现移动端适配。
在 `webpack/vite` 项目根路径下创建 `postcss.config.js` 并做如下配置之后 `375px -> 100vmin`。

```shell
# playground-ignore
# npm
npm i postcss-px-to-viewport -D

# yarn
yarn add postcss-px-to-viewport -D

# pnpm
pnpm add postcss-px-to-viewport -D
```

```js
// playground-ignore
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      unitPrecision: 6,
      unitToConvert: 'px',
      viewportUnit: 'vmin',
      fontViewportUnit: 'vmin',
      propList: ['*'],
    }
  }
}
```

#### 主题包单位适配 (Viewport)

因为主题包是运行时挂载的，不受 postcss 影响，组件库提供了实用工具 `Themes.toViewport` 进行适配，函数返回的主题将默认使用 `375px -> 100vmin` 的规则。

```js
import { Themes } from '@varlet/ui'

const viewportTheme = Themes.toViewport(Themes.md3Dark)
```

也可以对转换规则进行更改

```js
import { Themes } from '@varlet/ui'

const viewportTheme = Themes.toViewport(Themes.md3Dark, {
  // 默认值为 375
  viewportWidth: 750,
  // 默认值为 'vmin'
  viewportUnit: 'vw',
  // 默认值为 6
  unitPrecision: 4,
})
```

####  主题包单位适配 (Rem)

与 `Viewport` 方案类似

```js
import { Themes } from '@varlet/ui'

const remTheme = Themes.toRem(Themes.md3Dark)
```

也支持自定义

```js
import { Themes } from '@varlet/ui'

const viewportTheme = Themes.toRem(Themes.md3Dark, {
  // 默认值为 16
  rootFontSize: 32,
  // 默认值为 6
  unitPrecision: 4,
})
```

### 桌面端适配

由于组件库交互事件使用 `touch` 事件进行开发，不支持桌面端的 `mouse` 事件，
推荐使用 `@varlet/touch-emulator` 将 `touch -> mouse` 从而实现桌面端适配。

```shell
# playground-ignore
# npm
npm i @varlet/touch-emulator
# yarn
yarn add @varlet/touch-emulator
# pnpm
pnpm add @varlet/touch-emulator
```

```js
// playground-ignore
import '@varlet/touch-emulator'
```