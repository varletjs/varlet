<template>
  <div class="var-step">
    <div :class="`var-step-${direction}`">
      <div :class="`var-step-${direction}__main`" :ref="getRef">
        <div
          :class="{
            [`var-step-${direction}__tag`]: true,
            [`var-step-${direction}__tag--active`]: isActive || isCurrent,
          }"
          :style="{ backgroundColor: isActive || isCurrent ? activeColor : inactiveColor }"
          @click="click"
        >
          <var-icon class="var-step__icon" var-step-cover :name="activeIcon" v-if="isActive" />
          <var-icon class="var-step__icon" var-step-cover :name="currentIcon" v-else-if="isCurrent && currentIcon" />
          <var-icon class="var-step__icon" var-step-cover :name="inactiveIcon" v-else-if="inactiveIcon" />
          <span v-else>{{ index + 1 }}</span>
        </div>
        <div
          :class="{
            [`var-step-${direction}__content`]: true,
            [`var-step-${direction}__content--active`]: isActive || isCurrent,
          }"
          @click="click"
        >
          <slot />
        </div>
      </div>
      <div :class="`var-step-${direction}__line`" v-if="!isLastChild" :style="{ margin: lineMargin }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { props } from './props'
import { useSteps } from './provide'
import VarIcon from '../icon'
import type { Ref, ComputedRef, ComponentPublicInstance } from 'vue'
import type { StepProvider } from './provide'

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
