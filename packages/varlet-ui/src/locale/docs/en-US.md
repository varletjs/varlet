# Locale

### Intro

Component library uses Chinese as the default language, support multi-language switch.

### Multi-language Switch (Functional)

`Locale.add` is used for language mounted.

```js
// playground-ignore
import { Locale } from '@varlet/ui'

Locale.add('en-US', Locale.enUS)
```

Use `Locale.merge` to override languages.

```js
// playground-ignore
Locale.merge('en-US', {
  dialogTitle: 'Hello'
})
```

Use `Locale.use` to switch language.

```js
// playground-ignore
Locale.use('en-US')
```

### Multi-language Switch (Component declarative)

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
    <var-button type="primary" @click="switchLocale">Switch</var-button>
  </var-locale-provider>
</template>
```

### Notes

- `Locale.use` operates on a singleton language instance context. Do not call it on the server. It is recommended for client-side rendering scenarios.
- `LocaleProvider` is only valid for the sub-components it wraps, and is invalid for functional calls to components. It is recommended for server-side rendering scenarios.

### Currently Supported Languages

| Language Name | Language Code | Language Pack | Supported Version |
| --- | --- | --- | --- |
| `Chinese` | zh-CN | _Locale.zhCN_ | `v2.0.0` |
| `English` | en-US | _Locale.enUS_ | `v2.0.0` |
| `Traditional Chinese (TW)` | zh-TW | _Locale.zhTW_ | `v2.17.0` |
| `Traditional Chinese (HK)` | zh-HK | _Locale.zhHK_ | `v2.17.0` |
| `Farsi` | fa-IR | _Locale.faIR_ | `v2.22.0` |
| `Japanese` | ja-JP | _Locale.jaJP_ | `v3.9.0` |

## API

### Props

#### LocaleProvider Props

| Prop         | Description   | Type                     | Default | 
|--------------|---------------|--------------------------|---------| 
| `locale` | Current locale | _string_ | `zh-CN`    |
| `messages`    | Language messages      | _Record<string, Record<string, string>>_                 | `-`   |
| `tag`        | Tag name      | _string_                 | `div`   |

### Slots

#### LocaleProvider Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Component content | `-` |