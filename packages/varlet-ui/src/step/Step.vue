<template>
  <div :class="n()">
    <div :class="n(direction)">
      <div
        :class="classes(n(`${direction}-content`), [isActive || isCurrent, n(`${direction}-content--active`)])"
        @click="click"
      >
        <slot name="opposite"></slot>
      </div>
      <div :class="n(`${direction}-divider`)">
        <div
          :class="classes(n(`${direction}-tag`), [isActive || isCurrent, n(`${direction}-tag--active`)])"
          :style="{ backgroundColor: isActive || isCurrent ? activeColor : inactiveColor }"
          @click="click"
        >
          <var-icon :class="n('icon')" var-step-cover :name="activeIcon" v-if="isActive" />
          <var-icon :class="n('icon')" var-step-cover :name="currentIcon" v-else-if="isCurrent && currentIcon" />
          <var-icon :class="n('icon')" var-step-cover :name="inactiveIcon" v-else-if="inactiveIcon" />
          <span v-else>{{ index + 1 }}</span>
        </div>
        <div :class="n(`${direction}-line`)"></div>
      </div>
      <div
        :class="classes(n(`${direction}-content`), [isActive || isCurrent, n(`${direction}-content--active`)])"
        @click="click"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { props } from './props'
import { useSteps } from './provide'
import VarIcon from '../icon'
import { toNumber } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import type { ComputedRef } from 'vue'
import type { StepProvider } from './provide'

const { n, classes } = createNamespace('step')

export default defineComponent({
  name: 'VarStep',
  components: {
    VarIcon,
  },
  props,
  setup() {
    const { index, steps, bindSteps } = useSteps()

    const { active, activeColor, inactiveColor, direction, clickStep } = steps

    const isCurrent: ComputedRef<boolean> = computed(() => active.value === index.value)
    const isActive: ComputedRef<boolean> = computed(() => index.value !== -1 && toNumber(active.value) > index.value)

    const stepProvider: StepProvider = {
      index,
    }

    const click = () => clickStep(index.value)

    bindSteps(stepProvider)

    return {
      n,
      classes,
      index,
      isActive,
      isCurrent,
      direction,
      activeColor,
      inactiveColor,
      click,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './step';
</style>
