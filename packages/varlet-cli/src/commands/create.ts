import logger from '../shared/logger'
import { bigCamelize } from '../shared/fsUtils'
import { outputFile, pathExistsSync } from 'fs-extra'
import { resolve } from 'path'
import { DOCS_DIR_NAME, EXAMPLE_DIR_NAME, LOCALE_DIR_NAME, SRC_DIR, TESTS_DIR_NAME } from '../shared/constant'
import { getVarletConfig } from '../config/varlet.config'
import { get } from 'lodash'

export async function create(name: string, cmd: { disableI18n?: boolean }) {
  let i18nFiles: Array<Promise<void>> = []
  const namespace = get(getVarletConfig(), 'namespace')
  const bigCamelizeName = bigCamelize(name)
  const vueTemplate = `\
<template>
  <div class="${namespace}-${name}"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '${bigCamelize(namespace)}${bigCamelizeName}'
})
</script>

<style lang="less">
.${namespace}-${name} {
  display: flex;
}
</style>
`
  const indexTemplate = `\
import ${bigCamelizeName} from './${bigCamelizeName}.vue'
import type { App } from 'vue'

${bigCamelizeName}.install = function(app: App) {
  app.component(${bigCamelizeName}.name, ${bigCamelizeName})
}

export const _${bigCamelizeName}Component = ${bigCamelizeName}

export default ${bigCamelizeName}
`

  const testsTemplate = `\
import ${bigCamelizeName} from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test ${name} use', () => {
  const app = createApp({}).use(${bigCamelizeName})
  expect(app.component(${bigCamelizeName}.name)).toBeTruthy()
})
`

  let exampleTemplate = `\
<script setup>
import ${bigCamelizeName} from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type></app-type>
  <${namespace}-${name}/>
</template>
`

  const localeIndexTemplate = `\
// lib
import _zhCN from '../../../locale/zh-CN'
import _enCN from '../../../locale/en-US'
// mobile example doc
import zhCN from './zh-CN'
import enUS from './en-US'
import { useLocale, add as _add, use as _use } from '../../../locale'

const { add, use: exampleUse, pack, packs, merge } = useLocale()

const use = (lang: string) => {
  _use(lang)
  exampleUse(lang)
}

export { add, pack, packs, merge, use }

// lib
_add('zh-CN', _zhCN)
_add('en-US', _enCN)
// mobile example doc
add('zh-CN', zhCN as any)
add('en-US', enUS as any)
`

  const localTemplate = `\
export default {

}
`

  const componentDir = resolve(SRC_DIR, name)
  const testsDir = resolve(SRC_DIR, name, TESTS_DIR_NAME)
  const exampleDir = resolve(SRC_DIR, name, EXAMPLE_DIR_NAME)
  const exampleLocalDir = resolve(SRC_DIR, name, EXAMPLE_DIR_NAME, LOCALE_DIR_NAME)
  const docsDir = resolve(SRC_DIR, name, DOCS_DIR_NAME)

  if (pathExistsSync(componentDir)) {
    logger.error('component directory is existed')
    return
  }

  i18nFiles = [
    outputFile(resolve(exampleLocalDir, 'index.ts'), localeIndexTemplate),
    outputFile(resolve(exampleLocalDir, 'en-US.ts'), localTemplate),
    outputFile(resolve(exampleLocalDir, 'zh-CN.ts'), localTemplate),
    outputFile(resolve(docsDir, 'en-US.md'), ''),
  ]

  if (cmd.disableI18n) {
    exampleTemplate = `\
<script setup>
import ${bigCamelizeName} from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
</script>

<template>
  <app-type></app-type>
  <${namespace}-${name}/>
</template>
`
    i18nFiles = []
  }

  await Promise.all([
    outputFile(resolve(componentDir, `${bigCamelizeName}.vue`), vueTemplate),
    outputFile(resolve(componentDir, 'index.ts'), indexTemplate),
    outputFile(resolve(testsDir, 'index.spec.js'), testsTemplate),
    outputFile(resolve(exampleDir, 'index.vue'), exampleTemplate),
    ...i18nFiles,
    outputFile(resolve(docsDir, 'zh-CN.md'), ''),
  ])

  logger.success(`Create ${name} success!`)
  logger.success(`----------------------------`)
  logger.success(`${name}/`)
  logger.success(`|- __tests__/ # Unit test folder`)
  logger.success(`|- docs/ # Internationalized document folder`)
  logger.success(`|- example/ # Mobile phone example code`)
  logger.success(`|- example/locale # Example locale`)
  logger.success(`|- ${bigCamelizeName}.vue # Sfc component, You can also use jsx or tsx`)
  logger.success(`|- index.ts # Component entry, the folder where the file exists will be exposed to the user`)
}
