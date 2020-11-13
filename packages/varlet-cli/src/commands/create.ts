import { accessProperty, bigCamelize, camelize } from '../shared/fsUtils'
import { mkdirsSync, pathExistsSync, writeFile } from 'fs-extra'
import { resolve } from 'path'
import { SRC_DIR, TESTS_DIR_NAME } from '../shared/constant'
import { getVarletConfig } from '../config/varlet.config'
import logger from '../shared/logger'

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

${bigCamelize(name)}.install = function(app) {
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
  const componentDir = resolve(SRC_DIR, name)
  const testsDir = resolve(SRC_DIR, name, TESTS_DIR_NAME)
  if (pathExistsSync(componentDir)) {
    logger.error('component directory is existed')
    return
  }
  mkdirsSync(componentDir)
  mkdirsSync(testsDir)
  await Promise.all([
    writeFile(resolve(componentDir, `${bigCamelize(name)}.vue`), vueTemplate),
    writeFile(resolve(componentDir, 'index.ts'), indexTemplate),
    writeFile(resolve(testsDir, 'index.spec.js'), testsTemplate)
  ])

  logger.success('create success!')
}
