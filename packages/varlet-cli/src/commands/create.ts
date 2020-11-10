import { accessProperty, bigCamelize } from '../shared/fsUtils'
import { mkdirsSync, pathExistsSync, writeFile } from 'fs-extra'
import { resolve } from 'path'
import { SRC_DIR } from '../shared/constant'
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
.${namespace} {
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
  const componentDir = resolve(SRC_DIR, name)
  if (pathExistsSync(componentDir)) {
    logger.error('component directory existed')
    return
  }
  mkdirsSync(componentDir)
  await Promise.all([
    writeFile(resolve(componentDir, `${bigCamelize(name)}.vue`), vueTemplate),
    writeFile(resolve(componentDir, 'index.ts'), indexTemplate)
  ])
}
