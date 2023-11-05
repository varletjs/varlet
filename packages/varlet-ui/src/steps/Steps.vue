<template>
  <div :class="n()" :style="{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStep, type StepsProvider } from './provide'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { call } from '@varlet/shared'

const { name, n } = createNamespace('steps')

export default defineComponent({
  name,
  props,
  setup(props) {
    const active = computed(() => props.active)
    const activeColor = computed(() => props.activeColor)
    const inactiveColor = computed(() => props.inactiveColor)
    const direction = computed(() => props.direction)
    const { bindStep } = useStep()

    const stepsProvider: StepsProvider = {
      active,
      direction,
      activeColor,
      inactiveColor,
      clickStep,
    }

    bindStep(stepsProvider)

    function clickStep(index: number) {
      call(props.onClickStep, index)
    }

    return { n }
  },
})
</script>

<style lang="less">
@import '../styles/common';

.var-steps {
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
</style>
