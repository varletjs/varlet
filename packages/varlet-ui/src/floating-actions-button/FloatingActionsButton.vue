<template>
  <var-menu :class="[n(), fabLocation]" :trigger="trigger" :placement="actionsLocation" :default-style="false">
    <var-button type="primary" round>
      <var-icon :name="inactiveIcon" />
    </var-button>

    <template #menu>
      <var-button type="primary" round>
        <var-icon v-for="(item, index) in actions" :name="item.icon" :key="index" />
      </var-button>
    </template>
  </var-menu>
</template>

<script lang="ts">
import VarButton from '../button'
import VarIcon from '../icon'
import VarMenu from '../menu'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { defineComponent } from 'vue'

const { n } = createNamespace('floating-actions-button')

export default defineComponent({
  name: 'VarFloatingActionsButton',
  components: {
    VarButton,
    VarIcon,
    VarMenu,
  },
  props,
  setup() {
    return {
      n,
    }
  },
})
</script>

<style lang="less">
@import './floatingActionsButton.less';
</style>
