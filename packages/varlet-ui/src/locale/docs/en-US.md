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

Use `Locale.use` to switch languages.

```js
// playground-ignore
Locale.use('en-US')
```

Use `Locale.merge` to merge languages.

```js
// playground-ignore
Locale.merge('en-US', {
  dialogTitle: 'Hello'
})
```

### Currently Supported Languages

| Language Name | Language Code | Language Pack | Supported Version |
| --- | --- | --- | --- |
| `简体中文` | zh-CN | _Locale.zhCN_ | `v2.0.0` |
| `美式英语` | en-US`| _Locale.enUS_ | `v2.0.0` |
| `繁体中文(台)` | zh-TW | _Locale.zhTW_ | `v2.7.0` |
| `繁体中文(港)` | zh-HK | _Locale.zhHK_ | `v2.7.0` |

