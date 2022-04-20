# 国际化

### 介绍
组件库使用中文作为默认语言，支持多语言切换，内置支持 `中文`，`英文`。

### 多语言切换
引入 `Locale` 组件实现多语言切换，使用 `Locale.add` 进行语言扩展。

```js
// playground-ignore
import { Locale } from '@varlet/ui'
import enUS from '@varlet/ui/es/locale/en-US'

Locale.add('en-US', enUS)
```

使用 `Locale.use` 进行切换语言

```js
// playground-ignore
Locale.use('en-US')
```

使用 `Locale.merge` 进行语言合并

```js
// playground-ignore
Locale.merge('en-US', {
  dialogTitle: 'Hello'
})
```
