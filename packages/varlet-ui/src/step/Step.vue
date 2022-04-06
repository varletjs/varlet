<template>
  <div :class="n()">
    <div :class="n(direction)">
      <div :class="n(`${direction}-main`)" :ref="getRef">
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
        <div
          :class="classes(n(`${direction}-content`), [isActive || isCurrent, n(`${direction}-content--active`)])"
          @click="click"
        >
          <slot />
        </div>
      </div>
      <div :class="n(`${direction}-line`)" v-if="!isLastChild" :style="{ margin: lineMargin }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { props } from './props'
import { useSteps } from './provide'
import VarIcon from '../icon'
import { createNamespace } from '../utils/components'
import type { Ref, ComputedRef, ComponentPublicInstance } from 'vue'
import type { StepProvider } from './provide'

const { n, classes } = createNamespace('step')

export default defineComponent({
  name: 'VarStep',
  components: {
    VarIcon,
  },
  props,
  setup() {
    const main: Ref<HTMLDivElement | null> = ref(null)
    const lineMargin: Ref<string> = ref('')
    const isLastChild: Ref<boolean> = ref(false)

    const { index, steps, bindSteps } = useSteps()

    const { active, length, activeColor, inactiveColor, direction, clickStep } = steps

    const isCurrent: ComputedRef<boolean> = computed(() => active.value === index.value)
    const isActive: ComputedRef<boolean> = computed(() => index.value !== -1 && active.value > index.value)

    const stepProvider: StepProvider = {
      index,
    }

    const click = () => clickStep(index.value)

    const getRef = (el: Element | ComponentPublicInstance | null) => {
      if (direction.value === 'horizontal') {
        main.value = el as HTMLDivElement
      }
    }

    bindSteps(stepProvider)

    watch(length, (newLength) => {
      isLastChild.value = newLength - 1 === index.value
      if (main.value) {
        const margin = (main.value as HTMLDivElement).offsetWidth / 2 - 14
        lineMargin.value = `0 -${margin}px`
      }
    })

    return {
      n,
      classes,
      main,
      index,
      isActive,
      isCurrent,
      direction,
      lineMargin,
      activeColor,
      inactiveColor,
      isLastChild,
      click,
      getRef,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './step';
</style>
