<template>
  <div class="collapse-demo">
    <!-- <div>
      <app-type>{{ pack.basicUsage }}</app-type>
    </div>

    <div>
      <app-type>{{ pack.expanded }}</app-type>
    </div>

    <div>
      <app-type>{{ pack.disabled }}</app-type>
      <var-button @click="disabled = !disabled" style="margin-bottom: 8px">
        {{ disabled ? pack.enable : pack.disabled }}
      </var-button>
    </div> -->
  </div>
</template>

<script>
// import AppType from '@varlet/cli/site/mobile/components/AppType'
// import VarCollapseMenuGroup from '..'
// import VarCollapseMenuItem from '../../collapse-menu-item'
// import VarButton from '../../button'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { reactive, toRefs } from 'vue'

export default {
  name: 'CollapseMenuExample',
  components: {
    // VarCollapseMenuGroup,
    // VarCollapseMenuItem,
    // VarButton,
    // AppType,
  },
  setup() {
    const values = reactive({
      disabled: false,
    })
    watchLang(use)
    watchDarkMode(dark)

    return {
      ...toRefs(values),
      pack,
    }
  },
}
</script>
