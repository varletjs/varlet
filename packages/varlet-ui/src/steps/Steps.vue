<template>
  <div class="var-steps" :style="{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, watch } from 'vue'
import { useChildren, useAtChildrenCounter } from '../utils/components'
import { StepsProvider, STEPS_BIND_STEP_KEY, STEPS_COUNT_STEP_KEY } from './provide'
import { StepProvider } from '../step/provide'
import { props } from './props'

export default defineComponent({
  name: 'VarSteps',
  props,
  setup(props) {
    const active: ComputedRef<number | string> = computed(() => props.active)
    const activeColor: ComputedRef<string | undefined> = computed(() => props.activeColor)
    const inactiveColor: ComputedRef<string | undefined> = computed(() => props.inactiveColor)
    const direction: ComputedRef<string> = computed(() => props.direction)
    const { bindChildren, childProviders: stepProviders } = useChildren<StepsProvider, StepProvider>(
      STEPS_BIND_STEP_KEY
    )
    const { length } = useAtChildrenCounter(STEPS_COUNT_STEP_KEY)

    const changeStep = (index: number) => {
      props.onChange?.(index)
    }
    const stepsProvider: StepsProvider = {
      active,
      length,
      direction,
      activeColor,
      inactiveColor,
      changeStep,
    }

    bindChildren(stepsProvider)

    watch(
      () => length.value,
      (value) => {}
    )
  },
})
</script>

<style lang="less">
@import './steps';
</style>
