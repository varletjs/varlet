<template>
  <div :class="n()" ref="barEl">
    <slot />
    <ul :class="n('anchor-list')" :style="{ zIndex: toNumber(zIndex) + 2, display: hideList ? 'none' : 'block' }">
      <li
        v-for="anchorName in anchorNameList"
        :key="anchorName"
        :class="classes(n('anchor-item'), [active === anchorName, n('anchor-item--active')])"
        :style="{ color: active === anchorName && highlightColor ? highlightColor : undefined }"
        @click="anchorClick({ anchorName, manualCall: true })"
      >
        <slot name="anchor-name" :anchor-name="anchorName">
          {{ anchorName }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, onBeforeUnmount, onDeactivated, onActivated } from 'vue'
import {
  isPlainObject,
  toNumber,
  doubleRaf,
  requestAnimationFrame,
  getRect,
  getScrollLeft,
  getScrollTop,
  call,
} from '@varlet/shared'
import { easeInOutCubic } from '../utils/shared'
import { getParentScroller, scrollTo as varScrollTo, toPxNum } from '../utils/elements'
import { useIndexAnchors, type IndexBarProvider } from './provide'
import { props, type IndexBarScrollToOptions, type ClickOptions } from './props'
import { createNamespace } from '../utils/components'
import { onSmartMounted } from '@varlet/use'
import { type IndexAnchorProvider } from '../index-anchor/provide'

const { name, n, classes } = createNamespace('index-bar')

export default defineComponent({
  name,
  props,
  setup(props) {
    const clickedName = ref<string | number>('')
    const barEl = ref<HTMLElement | null>(null)
    const anchorNameList = ref<(number | string)[]>([])
    const active = ref<number | string | undefined>()
    const sticky = computed(() => props.sticky)
    const cssMode = computed(() => props.stickyCssMode)
    const stickyOffsetTop = computed(() => toPxNum(props.stickyOffsetTop))
    const zIndex = computed(() => props.zIndex)
    const { length, indexAnchors, bindIndexAnchors } = useIndexAnchors()

    let scroller: HTMLElement | Window | null = null
    let isDeactivated = false
    const indexBarProvider: IndexBarProvider = {
      active,
      sticky,
      cssMode,
      stickyOffsetTop,
      zIndex,
    }

    watch(
      () => length.value,
      async () => {
        await doubleRaf()
        anchorNameList.value = indexAnchors
          .filter(({ name }) => name.value != null)
          .map(({ name }) => name.value) as Array<string | number>
      }
    )

    onSmartMounted(setupScroller)

    onBeforeUnmount(removeScrollerListener)

    onDeactivated(() => {
      isDeactivated = true
      removeScrollerListener()
    })

    onActivated(() => {
      if (!isDeactivated || active.value === undefined) return

      anchorClick({
        anchorName: active.value,
        options: { event: false },
      })
      isDeactivated = false
    })

    bindIndexAnchors(indexBarProvider)

    function emitEvent(anchor: IndexAnchorProvider | number | string, options?: IndexBarScrollToOptions) {
      const anchorName = isPlainObject(anchor) ? anchor.name.value : anchor
      if (anchorName === active.value || anchorName === undefined) return

      active.value = anchorName
      if (options?.event !== false) {
        call(props.onChange, anchorName)
      }
    }

    function getOffsetTop() {
      const { top: parentTop } = getRect(scroller!)
      const { top: targetTop } = getRect(barEl.value!)
      const scrollTop = getScrollTop(scroller!)

      return scrollTop - parentTop + targetTop
    }

    function handleScroll() {
      const scrollTop = getScrollTop(scroller!)
      const scrollHeight = scroller === window ? document.body.scrollHeight : (scroller as HTMLElement).scrollHeight
      const offsetTop = getOffsetTop()

      indexAnchors.forEach((anchor: IndexAnchorProvider, index: number) => {
        const anchorTop = anchor.getOffsetTop()
        const top = scrollTop - anchorTop + stickyOffsetTop.value - offsetTop
        const distance =
          index === indexAnchors.length - 1
            ? scrollHeight
            : indexAnchors[index + 1].getOffsetTop() - anchor.getOffsetTop()

        anchor.setDisabled(true)

        if (top >= 0 && top < distance && clickedName.value === '') {
          anchor.setDisabled(false)
          emitEvent(anchor)
        }
      })
    }

    async function anchorClick({ anchorName, manualCall = false, options }: ClickOptions) {
      if (manualCall) {
        call(props.onClick, anchorName)
      }

      if (anchorName === active.value && !isDeactivated) {
        return
      }

      const indexAnchor = indexAnchors.find(({ name }: IndexAnchorProvider) => anchorName === name.value)
      if (!indexAnchor) {
        return
      }

      const offsetTop = getOffsetTop()
      const indexAnchorTop = indexAnchor.getOffsetTop()
      const top = indexAnchorTop - stickyOffsetTop.value + offsetTop
      const left = getScrollLeft(scroller!)

      clickedName.value = anchorName
      emitEvent(anchorName, options)

      await varScrollTo(scroller!, {
        left,
        top,
        animation: easeInOutCubic,
        duration: toNumber(props.duration),
      })

      await doubleRaf()
      clickedName.value = ''
    }

    function setupScroller() {
      scroller = getParentScroller(barEl.value as HTMLElement)
      scroller.addEventListener('scroll', handleScroll)
    }

    function removeScrollerListener() {
      if (!scroller) {
        // may be null in nuxt
        return
      }

      scroller.removeEventListener('scroll', handleScroll)
    }

    // expose
    function scrollTo(index: number | string, options?: IndexBarScrollToOptions) {
      requestAnimationFrame(() => anchorClick({ anchorName: index, options }))
    }

    return {
      barEl,
      active,
      zIndex,
      anchorNameList,
      n,
      classes,
      toNumber,
      scrollTo,
      anchorClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './indexBar';
</style>
