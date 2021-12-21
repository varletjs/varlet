<template>
  <div class="collapse-demo">
    <div>
      <app-type>{{ pack.basicUsage }}</app-type>
      <var-collapse-menu-group :title="pack.title">
        <var-collapse-menu-item :label="pack.text" :key="1" />
        <var-collapse-menu-item :label="pack.text" :key="2" />
      </var-collapse-menu-group>
    </div>

    <div>
      <app-type>{{ pack.expanded }}</app-type>
      <var-collapse-menu-group :title="pack.title" :status="'open'">
        <var-collapse-menu-item :label="pack.text" :key="1" />
        <var-collapse-menu-item :label="pack.text" :key="2" />
      </var-collapse-menu-group>
    </div>

    <div>
      <app-type>{{ pack.disabled }}</app-type>
      <var-button @click="disabled = !disabled" style="margin-bottom: 8px">
        {{ disabled ? pack.enable : pack.disabled }}
      </var-button>
      <var-collapse-menu-group :title="pack.title" :disabled="disabled">
        <var-collapse-menu-item :label="pack.text" :key="1" />
        <var-collapse-menu-item :label="pack.text" :key="2" />
      </var-collapse-menu-group>
    </div>
  </div>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarCollapseMenuGroup from '..'
import VarCollapseMenuItem from '../../collapse-menu-item'
import VarButton from '../../button'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { reactive, toRefs } from 'vue'

export default {
  name: 'CollapseMenuExample',
  components: {
    VarCollapseMenuGroup,
    VarCollapseMenuItem,
    VarButton,
    AppType,
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
