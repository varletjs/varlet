import logger from '../shared/logger'
import { bigCamelize, camelize } from '../shared/fsUtils'
import { mkdirs, pathExistsSync, writeFile } from 'fs-extra'
import { resolve } from 'path'
import { DOCS_DIR_NAME, EXAMPLE_DIR_NAME, LOCALE_DIR_NAME, SRC_DIR, TESTS_DIR_NAME } from '../shared/constant'
import { varletConfig } from '../config/varlet.config'
import { get } from 'lodash'

export async function create(name: string) {
  const namespace = get(varletConfig, 'namespace')
  const vueTemplate = `\
<template>
  <div class="${namespace}-${name}"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '${bigCamelize(namespace)}${bigCamelize(name)}'
})
</script>

<style lang="less">
.${namespace}-${name} {
  display: flex;
}
</style>
`
  const indexTemplate = `\
import { App } from 'vue'
import ${bigCamelize(name)} from './${bigCamelize(name)}.vue'

${bigCamelize(name)}.install = function(app: App) {
  app.component(${bigCamelize(name)}.name, ${bigCamelize(name)})
}

export default ${bigCamelize(name)}
`

  const testsTemplate = `\
import example from '../example'
import { render } from '@testing-library/vue'

test('test ${camelize(name)} example', async () => {
  const wrapper = render(example)
  console.log(wrapper)
})
`

  const exampleTemplate = `\
<template>
  <${namespace}-${name}/>
</template>

<script>
import { defineComponent } from 'vue'
import ${bigCamelize(name)} from '..'

export default defineComponent({
  name: '${bigCamelize(name)}Example',
  components: {
    [${bigCamelize(name)}.name]: ${bigCamelize(name)}
  }
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
`

  const localeTemplate = `\
import zhCN from './zh-CN'
import enUS from './en-US'
import { ref, Ref } from 'vue'

export const packs: Record<string, any> = {
  'zh-CN': zhCN,
  'en-US': enUS
}

export const pack: Ref<Record<string, any>> = ref({})

export function use(lang: string) {
  if (!packs[lang]) {
    return
  }

  pack.value = packs[lang]
}

use('zh-CN')
`
  const componentDir = resolve(SRC_DIR, name)
  const testsDir = resolve(SRC_DIR, name, TESTS_DIR_NAME)
  const exampleDir = resolve(SRC_DIR, name, EXAMPLE_DIR_NAME)
  const docsDir = resolve(SRC_DIR, name, DOCS_DIR_NAME)
  const localeDir = resolve(exampleDir, LOCALE_DIR_NAME)

  if (pathExistsSync(componentDir)) {
    logger.error('component directory is existed')
    return
  }

  await Promise.all([
    mkdirs(componentDir),
    mkdirs(testsDir),
    mkdirs(exampleDir),
    mkdirs(docsDir),
    mkdirs(localeDir)
  ])

  await Promise.all([
    writeFile(resolve(componentDir, `${bigCamelize(name)}.vue`), vueTemplate),
    writeFile(resolve(componentDir, 'index.ts'), indexTemplate),
    writeFile(resolve(testsDir, 'index.spec.js'), testsTemplate),
    writeFile(resolve(exampleDir, 'index.vue'), exampleTemplate),
    writeFile(resolve(localeDir, 'index.ts'), localeTemplate),
    writeFile(resolve(docsDir, 'zh-CN.md'), ''),
    writeFile(resolve(docsDir, 'en-US.md'), ''),
    writeFile(resolve(localeDir, 'zh-CN.ts'), 'export default {}'),
    writeFile(resolve(localeDir, 'en-US.ts'), 'export default {}'),
  ])

  logger.success('create success!')
}
