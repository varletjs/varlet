# Locale

### Intro
Component library uses Chinese as the default language, support multi-language switch.

### Multi-language Switch

The `Locale` component is introduced to realize multi-language switching, and `Locale.add` is used for language extension.

```js
// playground-ignore
import { Locale } from '@varlet/ui'

Locale.add('en-US', Locale.enUS)
```

Use `Locale.merge` to merge languages.

```js
// playground-ignore
Locale.merge('en-US', {
  dialogTitle: 'Hello'
})
```

Use `Locale.use` or `LocaleProvider` to switch language.

```js
// playground-ignore
Locale.use('en-US')
```

OR

```html
<!-- playground-ignore -->
<script setup>
import { ref } from 'vue'

const locale = ref('zh-CN')
const show = ref(true)

function switchLocale() {
  locale.value = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
}
</script>

<template>
  <var-locale-provider :locale="locale">
    <var-dialog v-model:show="show" />
  </var-locale-provider>
</template>
```

### Notes

- `LocaleProvider` is only valid for the sub-components it wraps, and is invalid for functional calls to components. It is recommended for server-side rendering scenarios.
- `Locale.use` operates on a singleton language instance. Do not call it on the server. It is recommended for client-side rendering scenarios.

### Currently Supported Languages

| Language Name | Language Code | Language Pack | Supported Version |
| --- | --- | --- | --- |
| `Chinese` | zh-CN | _Locale.zhCN_ | `v2.0.0` |
| `English` | en-US | _Locale.enUS_ | `v2.0.0` |
| `Traditional Chinese (TW)` | zh-TW | _Locale.zhTW_ | `v2.17.0` |
| `Traditional Chinese (HK)` | zh-HK | _Locale.zhHK_ | `v2.17.0` |
| `Farsi` | fa-IR | _Locale.faIR_ | `v2.22.0` |

## API

### Props

#### LocaleProvider Props

| Prop         | Description   | Type                     | Default | 
|--------------|---------------|--------------------------|---------| 
| `locale` | Current locale | _string_ | `zh-CN`    |
| `tag`        | Tag name      | _string_                 | `div`   |

### Slots

#### LocaleProvider Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| `default` | Component content | `-` |