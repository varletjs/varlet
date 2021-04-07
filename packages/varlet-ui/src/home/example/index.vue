<template>
  <div class="space"></div>

  <var-cell v-for="component in components" :key="component.text" @click="toComponent(component)">
    <template #extra>
      <var-icon name="chevron-right" size="14" />
    </template>
    <template #default>
      {{ component.text[lang] }}
    </template>
  </var-cell>

  <div class="space"></div>
</template>

<script>
import Cell from '../../cell'
import Icon from '../../icon'
import Ripple from '../../ripple'
import { useRouter } from 'vue-router'
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
    const router = useRouter()

    watchLang((newValue) => {
      lang.value = newValue
    })

    watchPlatform((newValue) => {
      platform.value = newValue
    })

    const toComponent = (component) => {
      router.push({
        path: `/${component.doc}`,
        query: {
          language: lang.value,
          platform: platform.value,
          path: component.doc,
        },
      })
    }

    return {
      components,
      platform,
      lang,
      toComponent,
    }
  },
}
</script>

<style scoped lang="less">
@import '../../styles/var';
.space {
  height: 5px;
}

.var-cell {
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    background: #2b79fc21;
    color: @color-primary;
  }
}
</style>
