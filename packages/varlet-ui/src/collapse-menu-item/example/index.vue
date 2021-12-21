<template>
  <app-type>基本实现</app-type>
  <var-collapse-menu-item :icon="iconStr" :label="labelStr" />
  <app-type>icon使用插槽实现</app-type>
  <var-collapse-menu-item :label="labelStr">
    <template #icon>
      <var-icon :name="iconStr"></var-icon>
    </template>
  </var-collapse-menu-item>
  <app-type>label使用插槽实现</app-type>
  <var-collapse-menu-item :icon="iconStr">
    <template #label>{{ labelStr }}</template>
  </var-collapse-menu-item>
  <app-type>icon, label使用函数实现</app-type>
  <var-collapse-menu-item :icon="iconFn" :label="labelFn"></var-collapse-menu-item>

  <app-type>icon使用对象实现</app-type>
  <var-collapse-menu-item :icon="iconObj" :label="labelStr"></var-collapse-menu-item>
  <!-- <var-collapse-menu-item :icon="iconFn" :label="labelFn"></var-collapse-menu-item>
  <var-collapse-menu-item :icon="iconObj" :label="labelStr"></var-collapse-menu-item>
  <var-collapse-menu-item disabled="true" :icon="iconStr" :label="labelFn"></var-collapse-menu-item>-->
</template>

<script>
import { h } from 'vue'
import Icon from '../../icon'
import CollapseMenuItem from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'CollapseMenuItemExample',
  components: {
    [CollapseMenuItem.name]: CollapseMenuItem,
    [Icon.name]: Icon,
    AppType,
  },
  setup() {
    watchLang(use)
    const labelStr = 'labelStr'
    const iconFn = () => {
      return h(Icon, {
        name: iconStr,
      })
    }
    const labelFn = () => {
      return h('div', {}, 'labelFn')
    }

    const iconObj = {
      name: 'checkbox-marked-circle',
      size: '20',
    }
    const iconStr = 'checkbox-marked-circle'
    return {
      pack,
      iconFn,
      iconObj,
      iconStr,
      labelFn,
      labelStr,
    }
  },
}
</script>
