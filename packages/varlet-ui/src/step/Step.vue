<template>
  <div :class="n()">
    <div :class="n(direction)">
      <div
        :class="classes(n(`${direction}-tag`), [isActive || isCurrent, n(`${direction}-tag--active`)])"
        :style="{ backgroundColor: isActive || isCurrent ? activeColor : inactiveColor }"
        @click="click"
      >
        <var-icon
          :class="n('icon')"
          var-step-cover
          :name="activeIcon"
          :namespace="activeIconNamespace"
          v-if="isActive"
        />
        <var-icon
          :class="n('icon')"
          var-step-cover
          :name="currentIcon"
          :namespace="currentIconNamespace"
          v-else-if="isCurrent && currentIcon"
        />
        <var-icon
          :class="n('icon')"
          var-step-cover
          :name="inactiveIcon"
          :namespace="inactiveIconNamespace"
          v-else-if="inactiveIcon"
        />
        <span v-else>{{ index + 1 }}</span>
      </div>
      <div
        :class="classes(n(`${direction}-content`), [isActive || isCurrent, n(`${direction}-content--active`)])"
        @click="click"
        v-if="$slots.default"
      >
        <slot />
      </div>
      <div :class="n(`${direction}-line`)"></div>
    </div>
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { computed, defineComponent, type ComputedRef } from 'vue'
import { props } from './props'
import { useSteps, type StepProvider } from './provide'
import { toNumber } from '@varlet/shared'
import { createNamespace } from '../utils/components'

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
