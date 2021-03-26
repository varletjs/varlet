<template>
  <div class="var-steps" :style="{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'
import { StepsProvider, useStep } from './provide'
import { props } from './props'

export default defineComponent({
  name: 'VarSteps',
  props,
  setup(props) {
    const active: ComputedRef<number | string> = computed(() => props.active)
    const activeColor: ComputedRef<string | undefined> = computed(() => props.activeColor)
    const inactiveColor: ComputedRef<string | undefined> = computed(() => props.inactiveColor)
    const direction: ComputedRef<string> = computed(() => props.direction)

    const { length, bindStep } = useStep()

    const clickStep = (index: number) => {
      props.onClickStep?.(index)
    }

    const stepsProvider: StepsProvider = {
      active,
      length,
      direction,
      activeColor,
      inactiveColor,
      clickStep,
    }

    bindStep(stepsProvider)
  },
})
</script>

<style lang="less">
.var-steps {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
</style>
