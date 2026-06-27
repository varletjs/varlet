<template>
  <div :class="n()">
    <div :class="n(direction)">
      <div
        :class="classes(n(`${direction}-tag`), [isActive || isCurrent, n(`${direction}-tag--active`)])"
        :style="{ backgroundColor: isActive || isCurrent ? activeColor : inactiveColor }"
        @click="click"
      >
        <span v-if="isActive" :class="n('icon')">
          <slot name="active-icon">
            <var-icon :name="activeIcon" :namespace="activeIconNamespace" />
          </slot>
        </span>
        <span v-else-if="isCurrent && ($slots['current-icon'] || currentIcon)" :class="n('icon')">
          <slot name="current-icon">
            <var-icon :name="currentIcon" :namespace="currentIconNamespace" />
          </slot>
        </span>
        <span v-else-if="$slots['inactive-icon'] || inactiveIcon" :class="n('icon')">
          <slot name="inactive-icon">
            <var-icon :name="inactiveIcon" :namespace="inactiveIconNamespace" />
          </slot>
        </span>
        <span v-else>{{ index + 1 }}</span>
      </div>
      <div
        v-if="$slots.default"
        :class="classes(n(`${direction}-content`), [isActive || isCurrent, n(`${direction}-content--active`)])"
        @click="click"
      >
        <slot />
      </div>
      <div :class="n(`${direction}-line`)"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { toNumber } from '@varlet/shared'
import { computed, defineComponent, type ComputedRef } from 'vue'
import VarIcon from '../icon'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { useSteps, type StepProvider } from './provide'

const { name, n, classes } = createNamespace('step')

export default defineComponent({
  name,
  components: { VarIcon },
  props,
  setup() {
    const { index, steps, bindSteps } = useSteps()
    const { active, activeColor, inactiveColor, direction, clickStep } = steps
    const isCurrent: ComputedRef<boolean> = computed(() => active.value === index.value)
    const isActive: ComputedRef<boolean> = computed(() => index.value !== -1 && toNumber(active.value) > index.value)

    const stepProvider: StepProvider = { index }

    bindSteps(stepProvider)

    function click() {
      return clickStep(index.value)
    }

    return {
      index,
      isActive,
      isCurrent,
      direction,
      activeColor,
      inactiveColor,
      n,
      classes,
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
