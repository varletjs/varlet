# Browser Adaptation

### Intro

The component library provides mobile and desktop adaptations,
scheme `varlet-touch-emulator` is used for mobile terminal adaptation,
scheme `varlet-touch-emulator` is used for mobile terminal adaptation.

### Mobile Adaptation

#### CSS Unit Adaptation

The component library design is based on the `375px` width design draft. 
It is recommended to use [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) to convert `px` units into `vw` units to achieve mobile terminal adaptation.
Create `postcss.config.js` under the `Webpack/Vite` project root path And do the following configuration `375px -> 100vw`.

```shell
# playground-ignore
# npm
npm i postcss-px-to-viewport -D

# yarn
yarn add postcss-px-to-viewport -D

# pnpm
pnpm add postcss-px-to-viewport -D
```

```js
// playground-ignore
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      unitPrecision: 6,
      unitToConvert: 'px',
      viewportUnit: 'vmin',
      fontViewportUnit: 'vmin',
      propList: ['*'],
    }
  }
}
```

#### Theme Unit Adaptation

Because the theme is mounted at runtime and is not affected by postcss, the component library provides a utility tool `Themes.toViewport` for adaptation. The theme returned by the function will use the `375px -> 100vmin` rule by default.

```js
import { Themes } from '@varlet/ui'

const viewportTheme = Themes.toViewport(Themes.md3Dark)
```

You can also make changes to the conversion rules

```js
import { Themes } from '@varlet/ui'

const viewportTheme = Themes.toViewport(Themes.md3Dark, {
  // defaults 375
  viewportWidth: 750,
  // defaults 'vmin'
  viewportUnit: 'vw',
  // defaults 6
  unitPrecision: 4,
})
```

### Desktop Adaptation

Because component library interaction events are developed using `touch` events, `mouse` events on the desktop side are not supported.
It is recommended to use `@varlet/touch-emulator` to set `touch -> mouse` for desktop adaptation.

```shell
# playground-ignore
# npm
npm i @varlet/touch-emulator
# yarn
yarn add @varlet/touch-emulator
# pnpm
pnpm add @varlet/touch-emulator
```

```js
// playground-ignore
import '@varlet/touch-emulator'
```