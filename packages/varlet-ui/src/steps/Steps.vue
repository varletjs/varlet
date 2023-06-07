<template>
  <div ref="stepsEl" :class="n()" :style="{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, onActivated } from 'vue'
import { useStep } from './provide'
import { props } from './props'
import type { ComputedRef, Ref } from 'vue'
import type { StepsProvider } from './provide'
import { createNamespace, call } from '../utils/components'
import { doubleRaf } from '../utils/elements'
import { useEventListener } from '@varlet/use'

const { n } = createNamespace('steps')

export default defineComponent({
  name: 'VarSteps',
  props,
  setup(props) {
    const active: ComputedRef<number | string> = computed(() => props.active)
    const activeColor: ComputedRef<string | undefined> = computed(() => props.activeColor)
    const inactiveColor: ComputedRef<string | undefined> = computed(() => props.inactiveColor)
    const direction: ComputedRef<string> = computed(() => props.direction)
    const size: Ref<number> = ref(0)
    const { length, bindStep } = useStep()
    const stepsEl: Ref<HTMLElement | null> = ref(null)
    const clickStep = (index: number) => {
      call(props.onClickStep, index)
    }

    const stepsProvider: StepsProvider = {
      active,
      length,
      direction,
      activeColor,
      inactiveColor,
      clickStep,
      size,
    }

    bindStep(stepsProvider)
    const resize = () => {
      if (!stepsEl.value) {
        return
      }
      if (direction.value === 'horizontal') {
        const itemStepSize = (stepsEl.value as HTMLDivElement).offsetWidth / length.value
        size.value = parseInt(itemStepSize.toString(), 10)
      }
    }
    watch(
      () => length.value,
      async () => {
        // In nuxt, the size of the swipe cannot got when the route is change, need double raf
        await doubleRaf()

        resize()
      }
    )
    onActivated(resize)
    useEventListener(() => window, 'resize', resize)
    return {
      n,
      resize,
      stepsEl,
    }
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
