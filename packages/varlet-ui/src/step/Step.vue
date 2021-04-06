<template>
  <div class="var-step">
    <div class="var-step-horizontal" v-if="direction === 'horizontal'">
      <div class="var-step-horizontal__main" ref="main">
        <div
          class="var-step-horizontal__tag"
          :class="{ 'var-step-horizontal__tag--active': isActive || isCurrent }"
          :style="{ backgroundColor: isActive || isCurrent ? activeColor : inactiveColor }"
          @click="click"
        >
          <var-icon class="var-step__icon" var-step-cover :name="activeIcon || 'check'" v-if="isActive" />
          <var-icon class="var-step__icon" var-step-cover :name="currentIcon" v-else-if="isCurrent && currentIcon" />
          <var-icon class="var-step__icon" var-step-cover :name="inactiveIcon" v-else-if="inactiveIcon" />
          <span v-else>{{ index + 1 }}</span>
        </div>
        <div
          class="var-step-horizontal__content"
          :class="{ 'var-step-horizontal__content--active': isActive || isCurrent }"
          @click="click"
        >
          <slot />
        </div>
      </div>
      <div class="var-step-horizontal__line" v-if="!isLastChild" :style="{ margin: lineMargin }"></div>
    </div>
    <div class="var-step-vertical" v-else>
      <div class="var-step-vertical__main">
        <div
          class="var-step-vertical__tag"
          :class="{ 'var-step-vertical__tag--active': isActive || isCurrent }"
          :style="{ backgroundColor: isActive || isCurrent ? activeColor : inactiveColor }"
          @click="click"
        >
          <var-icon class="var-step__icon" var-step-cover :name="activeIcon" v-if="isActive" />
          <var-icon class="var-step__icon" var-step-cover :name="currentIcon" v-else-if="isCurrent && currentIcon" />
          <var-icon class="var-step__icon" var-step-cover :name="inactiveIcon" v-else-if="inactiveIcon" />
          <span v-else>{{ index + 1 }}</span>
        </div>
        <div
          class="var-step-vertical__content"
          :class="{ 'var-step-vertical__content--active': isActive || isCurrent }"
          @click="click"
        >
          <slot />
        </div>
      </div>
      <div class="var-step-vertical__line" v-if="!isLastChild" :style="{ margin: lineMargin }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, Ref, watch } from 'vue'
import { props } from './props'
import { StepProvider, useSteps } from './provide'
import Icon from '../icon'

export default defineComponent({
  name: 'VarStep',
  components: {
    [Icon.name]: Icon,
  },
  props,
  setup() {
    const main: Ref<HTMLDivElement | null> = ref(null)
    const lineMargin: Ref<string> = ref('')
    const isLastChild: Ref<boolean> = ref(false)

    const { index, steps, bindSteps } = useSteps()

    if (!steps || !bindSteps || !index) {
      throw Error('<step/> must in <steps>')
    }

    const { active, length, activeColor, inactiveColor, direction, clickStep } = steps

    const isCurrent: ComputedRef<boolean> = computed(() => active.value === index.value)
    const isActive: ComputedRef<boolean> = computed(() => index.value !== -1 && active.value > index.value)

    const stepProvider: StepProvider = {
      index,
    }

    const click = () => clickStep(index.value)

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
    }
  },
})
</script>

<style lang="less">
@import '../icon/icon';
@import './step';
</style>
