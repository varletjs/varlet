# Locale

### Intro
Component library uses Chinese as the default language, support multi-language switch,
built-in support for `Chinese`, `English`.

### Multi-language switch
The `Locale` component is introduced to realize multi-language switching, and `Locale.add` is used for language extension.

```js
// playground-ignore
import { Locale } from '@varlet/ui'
import enUS from '@varlet/ui/es/locale/en-US'

Locale.add('en-US', enUS)
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
