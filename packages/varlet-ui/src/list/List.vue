<template>
  <div ref="listEl" :class="classes(n(), n('$--box'))">
    <slot />

    <slot v-if="loading" name="loading">
      <div :class="n('loading')">
        <div :class="n('loading-text')">{{ loadingText ?? (pt ? pt : t)('listLoadingText') }}</div>
        <var-loading size="mini" :radius="10" />
      </div>
    </slot>

    <slot v-if="finished" name="finished">
      <div :class="n('finished')">{{ finishedText ?? (pt ? pt : t)('listFinishedText') }}</div>
    </slot>

    <slot v-if="error" name="error">
      <div v-ripple :class="n('error')" @click="load">
        {{ errorText ?? (pt ? pt : t)('listErrorText') }}
      </div>
    </slot>

    <div ref="detectorEl" :class="n('detector')"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, watch } from 'vue'
import { call, getRect, isNumber } from '@varlet/shared'
import { onSmartMounted, onSmartUnmounted } from '@varlet/use'
import VarLoading from '../loading'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import Ripple from '../ripple'
import { createNamespace } from '../utils/components'
import { getParentScroller, toPxNum } from '../utils/elements'
import { props } from './props'
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
    const { t: pt } = injectLocaleProvider()

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
      listEl,
      detectorEl,
      pt,
      t,
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
