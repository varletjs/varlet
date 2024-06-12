# 国际化

### 介绍

组件库使用中文作为默认语言，支持多语言切换。

### 多语言切换 (函数式)

引入 `Locale` 组件实现多语言切换，使用 `Locale.add` 进行语言扩展。

```js
// playground-ignore
import { Locale } from '@varlet/ui'

Locale.add('en-US', Locale.enUS)
```

使用 `Locale.merge` 进行语言合并。

```js
// playground-ignore
Locale.merge('en-US', {
  dialogTitle: 'Hello'
})
```

使用 `Locale.use` 切换语言。

```js
// playground-ignore
Locale.use('en-US')
```

### 多语言切换 (组件声明式)

```html
<script setup>
import { ref } from 'vue'
import { Locale } from '@varlet/ui'

const date = ref('2021-04-08')
const locale = ref('zh-CN')
const messages = {
  'zh-CN': Locale.zhCN,
  'en-US': Locale.enUS
}

function switchLocale() {
  locale.value = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
}
</script>

<template>
  <var-locale-provider :locale="locale" :messages="messages">
    <var-date-picker v-model="date" />
    <var-button type="primary" @click="switchLocale">切换</var-button>
  </var-locale-provider>
</template>
```

### 注意事项

- `LocaleProvider` 仅对其包裹的子孙组件有效，对组件的函数式调用无效，推荐用于服务端渲染的场景。
- `Locale.use` 操作的是单例的语言实例，不要在服务端调用，推荐用于客户端渲染的场景。

### 目前支持的语言

| 语言名称 | 语言编码 | 语言包 | 支持版本 |
| --- | --- | --- | --- |
| `简体中文` | zh-CN | _Locale.zhCN_ | `v2.0.0` |
| `英语` | en-US| _Locale.enUS_ | `v2.0.0` |
| `繁体中文(台)` | zh-TW | _Locale.zhTW_ | `v2.17.0` |
| `繁体中文(港)` | zh-HK | _Locale.zhHK_ | `v2.17.0` |
| `波斯语` | fa-IR | _Locale.faIR_ | `v2.22.0` |

## API

### 属性

#### LocaleProvider Props

| 参数         | 说明   | 类型                     | 默认值 | 
|--------------|---------------|--------------------------|---------| 
| `locale` | 当前语言 | _string_ | `zh-CN`    |
| `messages`    | 语言包      | _Record<string, Record<string, string>>_                 | `-`   |
| `tag`    | 自定义标签名      | _string_                 | `div`   |

### 插槽

#### LocaleProvider Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 组件内容 | `-` |