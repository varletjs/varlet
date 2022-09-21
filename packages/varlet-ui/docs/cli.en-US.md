# Varlet Cli

### Intro

The out-of-the-box `Vue3 component library` rapid prototyping tool provides a series of commands and tools to solve the problem of component library development

### 特性

- 📦 &nbsp;Out-of-the-box component library development environment
- 📦 &nbsp;An out-of-the-box component library compilation tool that supports exporting `esm`, `cjs`, `umd` module codes
- 🛠️ &nbsp;Configuration file-based component library documentation site, support Baidu statistics and theme customization
- 🛠️ &nbsp;Supports both `sfc` and `tsx` styles for writing component libraries
- 📦 &nbsp;Out-of-the-box code inspection tool
- 📦 &nbsp;Out-of-the-box unit testing tools
- 📦 &nbsp;Out-of-the-box code publishing tool, publishes to both `npm` and `github`, and automatically generates changelogs
- 💪 &nbsp;Support for `Typescript`
- 💪 &nbsp;Support `Dark Mode`
- 🌍 &nbsp;Support `Internationalization`
- 🚀 &nbsp;Based on `pnpm`

### Quickstart

`@varlet/cli` has built-in `sfc` and `tsx` style component library project templates, which can be generated directly by the `gen` command.
It is convenient for you to directly enter the component library development.

```shell
# playground-ignore
pnpm add @varlet/cli -g
varlet-cli gen
cd project name
pnpm install
pnpm dev
```

## Advanced customization

### Configuration file

The `varlet.config.js` in the project root directory is used to manage the specific details of the entire component library project.
The default configuration can be viewed [varlet.default.config.js](https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/varlet.default.config.js)。
Also refer to `@varlet/ui` [varlet.config.js](https://github.com/varletjs/varlet/blob/dev/packages/varlet-ui/varlet.config.js)

| Parameter | Description | Type | Default |
| -- | -------------- | -------- | ---------- |
| `name` | The full name of the component library, which will be used as the package name | _string_ | `Varlet` |
| `namespace` | Component library namespace, which will be used as a component prefix | _string_ | `var` |
| `host` | Development server host | _number_ | `localhost` |
| `port` | Development server port | _number_ | `8080` |
| `title` | The title of the component library in the documentation | _string_ | `VARLET` |
| `logo` | The logo of the component library in the documentation | _string_ | `-` |
| `defaultLanguage` | Documentation default language | _string_ | `zh-CN` |
| `useMobile` | Whether to show the preview of the right mobile phone | _boolean_ | `false` |
| `lightTheme` | Light Mode Documentation Theme | _Record<string, any>_ | `-` |
| `darkTheme` | Dark Mode Documentation Theme | _Record<string, any>_ | `-` |
| `highlight` | Documentation snippet style related | _{ style: string }_ | `-` |
| `analysis` | Document statistics related | _{ baidu: string }_ | `-` |
| `pc` | PC-side document structure configuration | _Record<string, any>_ | `-` |
| `mobile` | Mobile side document structure configuration | _Record<string, any>_ | `-` |
| `moduleCompatible` | Module Compatible Configurations | _Record<string, string>_ | `-` |

### Custom pages

If you want to insert other pages into the component library, you can create a `pages` folder in the project root directory to write a vue component to generate other pages.
The directory structure is as follows...

```js
// playground-ignore
|-- varlet-ui
  |-- src
  |-- docs
  |-- pages
    |-- sponsor
      |-- index.vue
    |-- contributor
      |-- locale
        |-- en-US.ts
      |-- index.vue
    |-- changelog
      |-- locale
        |-- zh-CN.ts
        |-- en-US.ts
      |-- index.vue
      
```

The resulting route is as follows...

```text
// playground-ignore
/zh-CN/sponsor
/en-US/contributor
/zh-CN/changelog
/en-US/changelog
```

### Command related

#### Start the development server

```shell
# playground-ignore
varlet-cli dev
```

#### Build a documentation site

```shell
# playground-ignore
varlet-cli build
```

#### Preview documentation site

```shell
# playground-ignore
varlet-cli preview
```

#### Compile component library

```shell
# playground-ignore
varlet-cli compile
```

#### Execute all unit tests

```shell
# playground-ignore
varlet-cli test
```

#### Execute unit tests in watch mode

```shell
# playground-ignore
varlet-cli test -w
or
varlet-cli test -wa
```

#### Lint the code

```shell
# playground-ignore
varlet-cli lint
```

#### Lint git commit message

```shell
# playground-ignore
varlet-cli commit-lint
```

#### Generate changelog

```shell
# playground-ignore
varlet-cli changelog
```

#### Release component library

```shell
# playground-ignore
varlet-cli release
```

#### Generate a project template

```shell
# playground-ignore
varlet-cli gen

# Options
-n
--name
  project name
-s
--sfc
  Generate sfc-style project templates
-t
--tsx
  Generate tsx-style project templates
-l
--locale
  Need to support internationalization
```

#### Create a component template file

```shell
# playground-ignore
varlet-cli create

# Options
-n
--name
  组件名
-s
--sfc
  Generate sfc-style component
-t
--tsx
  Generate tsx-style component
-l
--locale
  Need to support internationalization
```

### Note before publish

- 1.`npm` repository registry must set to `npm` official mirror
- 2.Execute `npm login` to log in

### Module Compatible

Some external dependencies may need to be compatible with module syntax to achieve the purpose of compiling correctly to `commonjs` and `esmodule`. For example, the wording of `esmodule` of `dayjs` is

```js
// playground-ignore
import dayjs from 'dayjs/esm'
```

In order to build `commonjs`, the writing method is

```js
// playground-ignore
import * as dayjs from 'dayjs'
```

In the project, we embrace the first way of writing the `esmodule` module, and make the following configuration for adaptation

```js
// playground-ignore
// varlet.config.js
module.exports = {
  moduleCompatible: {
    "import dayjs from 'dayjs/esm'\n": "import * as dayjs from 'dayjs'\n"
  }
}
```
