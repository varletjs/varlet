# Custom Theme

### Intro
The component library uses `Less` as the CSS preprocessor and defines a number of `Less` variables in the component library
Themes can be customized through plugins that modify variables at build time.

### Common Variables
The following are the common variables used throughout the component library. 
Each component has its own set of variables to replace.

```less
// text
@font-size-xs: 10px;
@font-size-sm: 12px;
@font-size-md: 14px;
@font-size-lg: 16px;

// icon
@icon-size-xs: 16px;
@icon-size-sm: 18px;
@icon-size-md: 20px;
@icon-size-lg: 22px;

// color
@color-primary: #2979ff;
@color-info: #00bcd4;
@color-success: #4caf50;
@color-warning: #ff9800;
@color-danger: #f44336;
@color-disabled: #e0e0e0;

// animation
@cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);
```

### Custom methods

First, make sure your build tools support `less`, different ways of introducing components require different customizations,
The customization methods of `Full import`，`Plugin based import`，`ES module based manual import` are described below.

### Full import

```js
import '@varlet/ui/es/less'
```

### Plugin based import

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@varlet/ui',
        libraryDirectory: 'es',
        style: name => `${name}/style/less`,
      },
      '@varlet/ui',
    ]
  ]
}
```

### ES module based manual import

```js
import '@varlet/ui/es/button/style/less'
```

### Modify Variables

Use the `modifyVars` provided by `less` for variable substitution at build time. 
The following is the configuration for different scenarios.

### Webpack

Here `less-loader` is used for version `< 6`

```js
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: 'less-loader',
          options: {
            modifyVars: {
              'color-primary': '#009688',
            }
          }
        }
      ]
    }
  ]
}
```

### Vue cli
```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'color-primary': '#009688',
        }
      }
    }
  }
}
```

### Vite
Vite do not support `~` syntax and need to override `~`

```js
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'color-primary': '#009688',
        }
      }
    }
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' }
    ],
  }
})
```