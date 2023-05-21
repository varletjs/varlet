// 这段代码是一个 Node.js 模块。它使用了 Node.js 内置的 `fs` 模块和 `@babel/helper-plugin-utils` 模块。

// 首先，代码定义了一个对象，该对象是通过 `declare()` 函数返回的。此对象有一个属性 `overrides`，它是一个数组。数组中每个元素是一个包含两个属性的对象：

// 最后，代码将此对象作为模块的默认导出。

const { readFileSync } = require('fs')
const { declare } = require('@babel/helper-plugin-utils')

module.exports = declare(() => ({
  overrides: [
    {
      // 1. `test`：一个函数，用于测试文件是否应该使用此覆盖。在这个例子中，`test` 函数检查文件扩展名是否为 `.vue`，如果是则返回 true。然后它读取文件的内容，并检查文件中是否包含 `lang="ts"` 或 `lang='ts'` 的字符串。如果包含，它返回 true，否则返回 false。
      test: (file) => {
        if (/\.vue$/.test(file)) {
          const code = readFileSync(file, 'utf8')
          return code.includes('lang="ts"') || code.includes("lang='ts'")
        }

        return false
      },
      // 2. `plugins`：一个数组，其中包含应用于文件的 Babel 插件。在这个例子中，我们只使用了一个插件 `@babel/plugin-transform-typescript`，它将 TypeScript 代码转换为 JavaScript 代码。
      plugins: [require.resolve('@babel/plugin-transform-typescript')],
    },
  ],
}))
