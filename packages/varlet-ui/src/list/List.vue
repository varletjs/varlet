<template>
  <div :class="classes(n(), n('$--box'))" ref="listEl">
    <slot />

    <slot name="loading" v-if="loading">
      <div :class="n('loading')">
        <div :class="n('loading-text')">{{ loadingText ?? t('listLoadingText') }}</div>
        <var-loading size="mini" :radius="10" />
      </div>
    </slot>

    <slot name="finished" v-if="finished">
      <div :class="n('finished')">{{ finishedText ?? t('listFinishedText') }}</div>
    </slot>

    <slot name="error" v-if="error">
      <div :class="n('error')" v-ripple @click="load">
        {{ errorText ?? t('listErrorText') }}
      </div>
    </slot>

    <div :class="n('detector')" ref="detectorEl"></div>
  </div>
</template>

<script lang="ts">
import VarLoading from '../loading'
import Ripple from '../ripple'
import { defineComponent, ref, nextTick, watch } from 'vue'
import { getParentScroller, toPxNum } from '../utils/elements'
import { props } from './props'
import { isNumber, getRect, call } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { t } from '../locale'
import { onSmartMounted, onSmartUnmounted } from '@varlet/use'
import { useTabItem } from './provide'

const { name, n, classes } = createNamespace('list')

export default defineComponent({
  name,
  directives: { Ripple },
  components: { VarLoading },
  props,
  setup(props) {
    const listEl = ref<HTMLElement | null>(null)
    const detectorEl = ref<HTMLElement | null>(null)
    const { tabItem, bindTabItem } = useTabItem()

    let scroller: HTMLElement | Window

    call(bindTabItem, {})

    if (tabItem) {
      watch(() => tabItem.current.value, check)
    }

    watch(() => [props.loading, props.error, props.finished], check)

    onSmartMounted(() => {
      scroller = getParentScroller(listEl.value!)
      scroller.addEventListener('scroll', check)

      if (props.immediateCheck) {
        check()
      }
    })

    onSmartUnmounted(removeScrollerListener)

    function load() {
      call(props['onUpdate:error'], false)
      call(props['onUpdate:loading'], true)
      call(props.onLoad)
    }

    function isReachBottom() {
      const { bottom: containerBottom } = getRect(scroller)
      const { bottom: detectorBottom } = getRect(detectorEl.value!)

      // The fractional part of the detectorBottom when bottoming out overflows
      // https://github.com/varletjs/varlet/issues/310
      return Math.floor(detectorBottom) - toPxNum(props.offset) <= containerBottom
    }

    function removeScrollerListener() {
      if (!scroller) {
        // may be null in nuxt
        return
      }

      scroller.removeEventListener('scroll', check)
    }

    // expose
    async function check() {
      await nextTick()

      if (props.loading || props.finished || props.error || tabItem?.current.value === false || !isReachBottom()) {
        return
      }

      load()
    }

    return {
      t,
      listEl,
      detectorEl,
      isNumber,
      load,
      check,
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import '../loading/loading';
@import './list';
</style>
