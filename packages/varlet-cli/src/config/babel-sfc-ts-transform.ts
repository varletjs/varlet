import { readFileSync } from 'fs'
import { declare } from '@babel/helper-plugin-utils'

module.exports = declare(() => ({
  overrides: [
    {
      test: (file: string) => {
        if (/\.vue$/.test(file)) {
          const code = readFileSync(file, { encoding: 'utf8' })
          return code.includes('lang="ts"') || code.includes("lang='ts'")
        }

        return false
      },
      plugins: ['@babel/plugin-transform-typescript'],
    },
  ],
}))
