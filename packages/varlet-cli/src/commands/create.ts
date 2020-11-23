import logger from '../shared/logger'
import { accessProperty, bigCamelize, camelize } from '../shared/fsUtils'
import { mkdirs, pathExistsSync, writeFile } from 'fs-extra'
import { resolve } from 'path'
import { EXAMPLE_DIR_NAME, SRC_DIR, TESTS_DIR_NAME } from '../shared/constant'
import { getVarletConfig } from '../config/varlet.config'

export async function create(name: string) {
  const varletConfig = getVarletConfig()
  const namespace = accessProperty(varletConfig, 'namespace')
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
import ${bigCamelize(name)} from './${bigCamelize(name)}.vue'

${bigCamelize(name)}.install = function(app: any) {
  app.component(${bigCamelize(name)}.name, ${bigCamelize(name)})
}

export default ${bigCamelize(name)}
`
  const testsTemplate = `\
const ${bigCamelize(name)} = require('../../../cjs/${name}').default
const { render } = require('@testing-library/vue')

test('test ${camelize(name)}', async () => {
  const wrapper = render(${bigCamelize(name)})
  console.log(wrapper)
})
`
  const exampleTemplate = `\
<template>
  <${namespace}-${name}/>
</template>

<script lang="ts">
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
.example-container {
  background: antiquewhite;
}
</style>
`
  const componentDir = resolve(SRC_DIR, name)
  const testsDir = resolve(SRC_DIR, name, TESTS_DIR_NAME)
  const exampleDir = resolve(SRC_DIR, name, EXAMPLE_DIR_NAME)

  if (pathExistsSync(componentDir)) {
    logger.error('component directory is existed')
    return
  }
  await Promise.all([
    mkdirs(componentDir),
    mkdirs(testsDir),
    mkdirs(exampleDir),
  ])
  await Promise.all([
    writeFile(resolve(componentDir, `${bigCamelize(name)}.vue`), vueTemplate),
    writeFile(resolve(componentDir, 'index.ts'), indexTemplate),
    writeFile(resolve(testsDir, 'index.spec.js'), testsTemplate),
    writeFile(resolve(exampleDir, 'index.vue'), exampleTemplate)
  ])

  logger.success('create success!')
}
