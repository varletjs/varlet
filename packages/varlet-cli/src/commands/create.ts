import logger from '../shared/logger'
import { bigCamelize, camelize } from '../shared/fsUtils'
import { mkdirs, pathExistsSync, writeFile } from 'fs-extra'
import { resolve } from 'path'
import { DOCS_DIR_NAME, EXAMPLE_DIR_NAME, SRC_DIR, TESTS_DIR_NAME } from '../shared/constant'
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
import type { App } from 'vue'
import ${bigCamelize(name)} from './${bigCamelize(name)}.vue'

${bigCamelize(name)}.install = function(app: App) {
  app.component(${bigCamelize(name)}.name, ${bigCamelize(name)})
}

export const _${bigCamelize(name)}Component = ${bigCamelize(name)}

export default ${bigCamelize(name)}
`

  const testsTemplate = `\
import example from '../example'
import ${bigCamelize(name)} from '..'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test ${camelize(name)} example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test ${camelize(name)} plugin', () => {
  const app = createApp({}).use(${bigCamelize(name)})
  expect(app.component(${bigCamelize(name)}.name)).toBeTruthy()
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

  const componentDir = resolve(SRC_DIR, name)
  const testsDir = resolve(SRC_DIR, name, TESTS_DIR_NAME)
  const exampleDir = resolve(SRC_DIR, name, EXAMPLE_DIR_NAME)
  const docsDir = resolve(SRC_DIR, name, DOCS_DIR_NAME)

  if (pathExistsSync(componentDir)) {
    logger.error('component directory is existed')
    return
  }

  await Promise.all([mkdirs(componentDir), mkdirs(testsDir), mkdirs(exampleDir), mkdirs(docsDir)])

  await Promise.all([
    writeFile(resolve(componentDir, `${bigCamelize(name)}.vue`), vueTemplate),
    writeFile(resolve(componentDir, 'index.ts'), indexTemplate),
    writeFile(resolve(testsDir, 'index.spec.js'), testsTemplate),
    writeFile(resolve(exampleDir, 'index.vue'), exampleTemplate),
    writeFile(resolve(docsDir, 'zh-CN.md'), ''),
    writeFile(resolve(docsDir, 'en-US.md'), ''),
  ])

  logger.success('create success!')
}
