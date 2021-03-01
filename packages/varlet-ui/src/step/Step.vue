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
          <var-icon :name="activeIcon || 'check'" v-if="isActive" />
          <var-icon :name="currentIcon" v-else-if="isCurrent && currentIcon" />
          <var-icon :name="inActiveIcon" v-else-if="inActiveIcon" />
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
          <var-icon :name="activeIcon || 'check'" v-if="isActive" />
          <var-icon :name="currentIcon" v-else-if="isCurrent && currentIcon" />
          <var-icon :name="inActiveIcon" v-else-if="inActiveIcon" />
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
import { computed, ComputedRef, defineComponent, onMounted, ref, Ref, watch } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import { props } from './props'
import { StepProvider } from './provide'
import { StepsProvider, STEPS_BIND_STEP_KEY, STEPS_COUNT_STEP_KEY } from '../steps/provide'
import Icon from '../icon'

export default defineComponent({
  name: 'VarStep',
  components: {
    [Icon.name]: Icon,
  },
  props,
  setup(props) {
    const main: Ref<HTMLDivElement | null> = ref(null)
    const lineMargin: Ref<string> = ref('')

    const isLastChild: Ref<boolean> = ref(false)
    const { parentProvider: StepsProvider, bindParent } = useParent<StepsProvider, StepProvider>(STEPS_BIND_STEP_KEY)
    const { index } = useAtParentIndex(STEPS_COUNT_STEP_KEY)
    if (!StepsProvider || !bindParent || !index) {
      throw Error('<step/> must in <steps>')
    }
    const { active, length, activeColor, inactiveColor, direction, changeStep } = StepsProvider

    const isCurrent: ComputedRef<boolean> = computed(() => active.value === index.value)
    const isActive: ComputedRef<boolean> = computed(() => index.value !== -1 && active.value > index.value)

    const stepProvider: StepProvider = {
      index,
    }

    const click = () => changeStep(index.value)

    bindParent(stepProvider)
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
@import './step';
</style>
