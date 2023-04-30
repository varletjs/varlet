const { readFileSync } = require('fs')
const { declare } = require('@babel/helper-plugin-utils')

module.exports = declare(() => ({
  overrides: [
    {
      test: (file) => {
        if (/\.vue$/.test(file)) {
          const code = readFileSync(file, 'utf8')
          return code.includes('lang="ts"') || code.includes("lang='ts'")
        }

        return false
      },
      plugins: [require.resolve('@babel/plugin-transform-typescript')],
    },
  ],
}))
