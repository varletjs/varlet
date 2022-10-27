<template>
  <var-menu
    v-model:show="show"
    :class="classes(n(), [true, `${n()}--${fabLocation}`])"
    :trigger="trigger"
    :placement="actionsLocation"
    :default-style="false"
  >
    <var-button :style="show ? getFabMargin() : { margin: 0 }" type="primary" round>
      <var-icon :name="inactiveIcon" />
    </var-button>

    <template #menu>
      <var-button v-for="(item, index) in actions" :key="index" type="primary" round>
        <var-icon :name="item.icon" />
      </var-button>
    </template>
  </var-menu>
</template>

<script lang="ts">
import VarButton from '../button'
import VarIcon from '../icon'
import VarMenu from '../menu'
import { props } from './props'
import { call, createNamespace } from '../utils/components'
import { defineComponent, ref, Ref, watch } from 'vue'

const { n, classes } = createNamespace('floating-actions-button')

export default defineComponent({
  name: 'VarFloatingActionsButton',
  components: {
    VarButton,
    VarIcon,
    VarMenu,
  },
  props,
  setup(props) {
    const show: Ref<boolean> = ref(false)

    const getFabMargin = () => {
      const { actionsLocation } = props

      switch (actionsLocation) {
        case 'top':
          return { marginTop: '16px' }
        case 'bottom':
          return { marginBottom: '16px' }
        case 'left':
          return { marginLeft: '16px' }
        case 'right':
          return { marginRight: '16px' }
      }
    }

    watch(
      () => props.show,
      (newValue) => {
        show.value = newValue ?? false
      },
      { immediate: true }
    )

    watch(
      () => show.value,
      (newValue) => {
        console.log('show.value', newValue)
        call(props['onUpdate:show'], newValue)
      },
      { immediate: true }
    )

    return {
      n,
      classes,
      show,
      getFabMargin,
    }
  },
})
</script>

<style lang="less">
@import './floatingActionsButton.less';
</style>
