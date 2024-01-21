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
| `Chinese` | zh-CN | _Locale.zhCN_ | `v2.0.0` |
| `English` | en-US | _Locale.enUS_ | `v2.0.0` |
| `Traditional Chinese (TW)` | zh-TW | _Locale.zhTW_ | `v2.17.0` |
| `Traditional Chinese (HK)` | zh-HK | _Locale.zhHK_ | `v2.17.0` |
| `Farsi` | fa-IR | _Locale.faIR_ | `v2.22.0` |
