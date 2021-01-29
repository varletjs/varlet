<template>
  <div class="var-list var--box" ref="listEl">
    <slot />

    <slot name="loading" v-if="loading">
      <div class="var-list__loading">
        <div class="var-list__loading-text">{{ loadingText }}</div>
        <var-loading size="mini" :radius="10" />
      </div>
    </slot>

    <slot name="finished" v-if="finished">
      <div class="var-list__finished">{{ finishedText }}</div>
    </slot>

    <slot name="error" v-if="error">
      <div class="var-list__error" v-ripple @click="load">
        {{ errorText }}
      </div>
    </slot>

    <div class="var-list__detector" ref="detectorEl"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, Ref } from 'vue'
import { getParentScroller } from '../utils/elements'
import { props } from './props'
import { isNumber } from '../utils/shared'
import Ripple from '../ripple'
import Loading from '../loading'

export default defineComponent({
  name: 'VarList',
  directives: { Ripple },
  components: {
    [Loading.name]: Loading,
  },
  props,
  setup(props) {
    const listEl: Ref<HTMLElement | null> = ref(null)
    const detectorEl: Ref<HTMLElement | null> = ref(null)
    let scroller: HTMLElement | Window = window

    const load = () => {
      props['onUpdate:error']?.(false)
      props['onUpdate:loading']?.(true)
      props.onLoad?.()
    }

    const isReachBottom = () => {
      const containerBottom =
        scroller === window ? window.innerHeight : (scroller as HTMLElement).getBoundingClientRect().bottom

      const { bottom: detectorBottom } = (detectorEl.value as HTMLElement).getBoundingClientRect()

      return detectorBottom - props.offset <= containerBottom
    }

    const check = () => {
      if (!props.loading && !props.finished && !props.error && isReachBottom()) {
        load()
      }
    }

    onMounted(() => {
      scroller = getParentScroller(listEl.value as HTMLElement, 'y')

      props.immediateCheck && check()

      scroller.addEventListener('scroll', check)
    })

    onUnmounted(() => {
      scroller.removeEventListener('scroll', check)
    })

    return {
      listEl,
      detectorEl,
      isNumber,
      load,
      check,
    }
  },
})
</script>

<style lang="less">
@import './list';
</style>
