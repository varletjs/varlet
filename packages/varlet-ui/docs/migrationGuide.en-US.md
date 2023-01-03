# Migration Guide

### Introduce
This section mainly introduces the main changes of the `2.x` version compared to the `1.x` version and the considerations for migration.

## Components Library(@varlet/ui)

### Component refactoring

- The Menu component has been reworked, the api has been optimized to make it easier to use, and it has better boundary detection capabilities and performance on the desktop side. For specific usage, please refer to [Menu documentation](./zh-CN/menu),
- The drop-down menu of the Select component is replaced by the new Menu component
- The drop-down menu of the Pagination component is replaced by the new Menu component
- Default color of Loading component changed from `currentColor` to `var(--color-primary)`
- The Loading component exposes `var(--loading-color)`
- Added `loadingColor` property to Button component
- Added `loadingColor` property to Snackbar component
- Added `labelClass` property to Progress component
- Added `tag` property to StyleProvider component to allow custom container tags
- Cell component renamed part of api `desc` -> `description`, `descClass` -> `descriptionClass`
- DatePicker component renamed part of api `shadow` -> `elevation`
- TimePicker component renamed part of api `shadow` -> `elevation`
- Card component renamed parts of api `height` -> `image-height`, `content` -> `floating-content`
- Added `direction` property to Col component
- Added `width` property to Dialog component
- Added `useForm` and `useValidation` static methods to the Form component to provide the ability to customize form components

### Component style variable changes

- Menu component variable added `--menu-background-color`
- Select component variable added `--select-select-min-height`, `--select-menu-margin-top`
- Pagination component variable added `--pagination-simple-padding`
- Loading component variable added `--loading-color`
- Rate component variable added `--rate-color`
- Counter component variable added `--counter-disabled-opacity`
- Slider component variable added `--slider-disabled-opacity`
- Switch component variable added `--switch-disabled-opacity`
- Cell component variable renamed `--cell-desc-font-size` -> `--cell-description-font-size`, `--cell-desc-color` -> `--cell-description-color`
- Form component variable renamed `--form-details-error-color` -> `--form-details-error-message-color`， `--form-details-length-color` -> `--form-details-extra-message-color`

### UMD module exports Chinese and English language packages

In the `1.x` version, the UMD module did not export the Chinese and English language packs. In the `2.x` version, we exported the Chinese and English language packs by default.
Non-UMD modules now have two ways to use language packs.

```ts
// playground-ignore
import { Locale } from '@varlet/ui'
import enUS from '@varlet/ui/es/locale/en-US'

Locale.add('en-US', enUS)
````

OR

```ts
// playground-ignore
import { Locale } from '@varlet/ui'

Locale.add('en-US', Locale.enUS)
````

### UMD module export dark mode theme

In `1.x` version, UMD module is not exported for dark mode theme package, in `2.x` version, we export dark mode theme package,
Non-UMD modules now have two ways to use the dark mode theme

```ts
// playground-ignore
import { StyleProvider } from '@varlet/ui'
import dark from '@varlet/ui/es/themes/dark'

StyleProvider(dark)
````

OR

```ts
// playground-ignore
import { StyleProvider, Themes } from '@varlet/ui'

StyleProvider(Themes.dark)
````

### Remove less theme variable support

Now that the `css variable` solution is very mature, the `less` theme variable is no longer supported in the `2.x` version, which is conducive to reducing the release size of the package.
If you use a scheme that replaces the `less` theme variable at build time, you need to replace it with the `css variable` scheme.

### Typescript type optimization

We refactored the internal types of components, abstracting more types and exposing them. The type specification of components is in the form of `component name` + `type name`. Use as follows:

```ts
// playground-ignore
import type { ButtonProps, ButtonType, ButtonSize } from '@varlet/ui'
````

### Supports automatic introduction of function components

In 1.x, the component library only supports declarative components that are automatically imported into templates, and functional components `(eg: Snackbar)` still need to manually import style files.
In 2.x, the automatic import of function components is supported through the [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) plugin.
For details, see [Import On Demand](#/en-US/importOnDemand).

## Components Library Tools(@varlet/cli)

### Command refactoring

- Refactored `gen` and `create` commands, added `sfc` and `tsx` template options, added internationalization options, and optimized the command line interactive experience
- Refactored `compile` command, compiled package no longer supports `less` variable
- Added `vite:dev` and `vite:build` commands to basically encapsulate `vite`

### Documentation related

- New documentation home page
- Optimized document visual
- Some renaming of document style variables

### Other changes

- Node.js `^14.18.0 || >=16.0.0` is now required.
- Site config file `varlet.config.js` -> `varlet.config.mjs`
- Built-in method import method changed

```js
// 1.x
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
```

```js
// 2.x
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
```