# 国际化

### 介绍

组件库使用中文作为默认语言，支持多语言切换。

### 多语言切换

引入 `Locale` 组件实现多语言切换，使用 `Locale.add` 进行语言扩展。

```js
// playground-ignore
import { Locale } from '@varlet/ui'

Locale.add('en-US', Locale.enUS)
```

使用 `Locale.use` 进行切换语言。

```js
// playground-ignore
Locale.use('en-US')
```

使用 `Locale.merge` 进行语言合并。

```js
// playground-ignore
Locale.merge('en-US', {
  dialogTitle: 'Hello'
})
```

### 目前支持的语言

| 语言名称 | 语言编码 | 语言包 | 支持版本 |
| --- | --- | --- | --- |
| `简体中文` | zh-CN | _Locale.zhCN_ | `v2.0.0` |
| `英语` | en-US| _Locale.enUS_ | `v2.0.0` |
| `繁体中文(台)` | zh-TW | _Locale.zhTW_ | `v2.17.0` |
| `繁体中文(港)` | zh-HK | _Locale.zhHK_ | `v2.17.0` |
| `波斯语` | fa-IR | _Locale.faIR_ | `v2.22.0` |
