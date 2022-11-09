# 迁移指南

### 介绍

本节主要介绍 `2.x` 版本相对于 `1.x` 版本的主要变化以及迁移的注意事项

## 组件库(@varlet/ui)

### 组件重构

- Menu 组件进行了重做，优化了 api 使其变得更易使用，在桌面端也有更优秀的边界检测能力和性能。具体使用方式参考 [Menu 文档](./zh-CN/menu)， 
- Select 组件的下拉菜单替换成了新版 Menu 组件
- Pagination 组件的下拉菜单替换成了新版 Menu 组件
- Loading 组件的默认颜色从 `currentColor` 更改为 `var(--color-primary)`
- Loading 组件暴露出 `var(--loading-color)`
- Button 组件新增 `loadingColor` 属性
- Snackbar 组件新增 `loadingColor` 属性
- Progress 组件新增 `labelClass` 属性
- StyleProvider 组件新增 `tag` 属性，允许自定义容器标签
- Cell 组件重命名了部分 api `desc` -> `description`， `descClass` -> `descriptionClass`
- DatePicker 组件重命名了部分 api  `shadow` -> `elevation`
- TimePicker 组件重命名了部分 api  `shadow` -> `elevation`
- Card 组件重命名了部分 api  `height` -> `image-height`，`content` -> `floating-content`
- Col 组件新增 `direction` 属性
- Dialog 组件新增 `width` 属性
- Form 组件新增 `useForm` 和 `useValidation` 静态方法以提供自定义表单组件的能力

### 组件样式变量变更

- Menu 组件变量新增 `--menu-background-color`
- Select 组件变量新增 `--select-select-min-height`，`--select-menu-margin-top`
- Pagination 组件变量新增 `--pagination-simple-padding`
- Loading 组件变量新增 `--loading-color`
- Rate 组件变量新增 `--rate-color`
- Counter 组件变量新增 `--counter-disabled-opacity`
- Slider 组件变量新增 `--slider-disabled-opacity`
- Switch 组件变量新增 `--switch-disabled-opacity`
- Cell 组件变量重命名 `--cell-desc-font-size` -> `--cell-description-font-size`，`--cell-desc-color` -> `--cell-description-color`
- Form 组件变量重命名 `--form-details-error-color` -> `--form-details-error-message-color`， `--form-details-length-color` -> `--form-details-extra-message-color`

### UMD 模块导出中英文语言包

在 `1.x` 版本中，UMD 模块不导出中英文语言包，在 `2.x` 版本中，我们将中英文语言包进行了导出，
非 UMD 模块现在有两种使用语言包的方式

```ts
// playground-ignore
import { Locale } from '@varlet/ui'
import enUS from '@varlet/ui/es/locale/en-US'

Locale.add('en-US', enUS)
```

或

```ts
// playground-ignore
import { Locale } from '@varlet/ui'

Locale.add('en-US', Locale.enUS)
```

### UMD 模块导出暗黑模式主题

在 `1.x` 版本中，UMD 模块不导出暗黑模式主题包，在 `2.x` 版本中，我们将暗黑模式主题包进行了导出，
非 UMD 模块现在有两种使用暗黑模式主题的方式

```ts
// playground-ignore
import { StyleProvider } from '@varlet/ui'
import dark from '@varlet/ui/es/themes/dark'

StyleProvider(dark)
```

或

```ts
// playground-ignore
import { StyleProvider, Themes } from '@varlet/ui'

StyleProvider(Themes.dark)
```

### 移除 less 主题变量的支持

如今 `css variable` 方案已经十分成熟，在 `2.x` 版本中不再支持 `less` 主题变量，这有利于减小包的发布体积。
如果您使用了在构建时替换 `less` 主题变量的方案，需要替换成 `css variable` 方案

### Typescript 类型优化

我们对组件内部类型进行了重构，抽象了更多的类型并且暴露了出来，组件的类型规范依照`组件名` + `类型名`的形式。使用方式如下所示

```ts
// playground-ignore
import type { ButtonProps, ButtonType, ButtonSize } from '@varlet/ui'
```

### 支持自动引入函数组件

在 1.x 中，组件库只支持自动引入在模板中的声明式组件，函数组件 `(例如: Snackbar)` 仍然需要手动引入样式文件。
在 2.x 中，通过 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 插件支持了函数组件的自动引入。
详情见[按需引入](#/zh-CN/importOnDemand)

## 组件库快速成型工具(@varlet/cli)

### 命令重构

- 重构了 `gen` 和 `create` 命令，增加了 `sfc` 和 `tsx` 两种风格的模板选择，增加了国际化的选项，优化了命令行交互体验
- 重构了 `compile` 命令，编译后的包不再支持 `less` 变量
- 新增 `vite:dev` 和 `vite:build` 命令，对 `vite` 进行了基本的封装

### 文档相关

- 新的文档首页
- 优化了文档视觉
- 文档样式变量进行了一些重命名

### 其他改变

- `Node.js` 版本锁定为 `^14.18.0 || >=16.0.0`
- 文档配置文件从 `varlet.config.js` -> `varlet.config.mjs`
- 内置方法引入方式改变

```js
// 1.x
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
```

```js
// 2.x
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
```