<template>
  <div class="space"></div>

  <var-cell v-for="component in components" :key="component.text">
    <template #extra>
      <var-icon name="chevron-right" size="14" />
    </template>
    <template #default>
      {{ component.text['zh-CN'] }}
    </template>
  </var-cell>

  <div class="space"></div>
</template>

<script>
import Cell from '../../cell'
import Icon from '../../icon'
import Ripple from '../../ripple'
import { reactive, ref } from 'vue'
import { watchLang, watchPlatform } from '../../utils/components'

const varletConfig = require('../../../varlet.config')

export default {
  name: 'HomeExample',
  directives: { Ripple },
  components: {
    [Cell.name]: Cell,
    [Icon.name]: Icon,
  },
  setup() {
    const configComponents = varletConfig.pc.menu.filter((item) => !item.isTitle && !item.nonComponent)
    const components = reactive(configComponents)
    const lang = ref('zh-CN')
    const platform = ref('mobile')

    watchLang((newValue) => {
      lang.value = newValue

      console.log(lang.value)
    })

    watchPlatform((newValue) => {
      platform.value = newValue

      console.log(platform.value)
    })

    return {
      components,
      platform,
      lang,
    }
  }
}
</script>

<style scoped lang="less">
.space {
  height: 5px;
}

.var-cell {
  cursor: pointer;
}
</style>
