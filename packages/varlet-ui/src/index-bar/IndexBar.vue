<template>
  <div :class="n()" ref="barEl">
    <slot />
    <ul :class="n('anchor-list')" :style="{ zIndex: toNumber(zIndex) + 2, display: hideList ? 'none' : 'block' }">
      <li
        v-for="anchorName in anchorNameList"
        :key="anchorName"
        :class="classes(n('anchor-item'), [active === anchorName, n('anchor-item--active')])"
        :style="{ color: active === anchorName && highlightColor ? highlightColor : '' }"
        @click="anchorClick({ anchorName, manualCall: true })"
      >
        {{ anchorName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, onBeforeUnmount, onDeactivated } from 'vue'
import { isPlainObject, toNumber } from '@varlet/shared'
import { easeInOutCubic } from '../utils/shared'
import {
  doubleRaf,
  getParentScroller,
  getScrollLeft,
  getScrollTop,
  nextTickFrame,
  requestAnimationFrame,
  scrollTo as varScrollTo,
  toPxNum,
} from '../utils/elements'
import { useIndexAnchors } from './provide'
import { props, type IndexBarScrollToOptions, type ClickOptions } from './props'
import type { Ref, ComputedRef } from 'vue'
import type { IndexBarProvider } from './provide'
import type { IndexAnchorProvider } from '../index-anchor/provide'
import { createNamespace, call } from '../utils/components'
import { useMounted } from '@varlet/use'

const { n, classes } = createNamespace('index-bar')

export default defineComponent({
  name: 'VarIndexBar',
  props,
  setup(props) {
    const { length, indexAnchors, bindIndexAnchors } = useIndexAnchors()
    const clickedName: Ref<string | number> = ref('')
    const barEl: Ref<HTMLDivElement | null> = ref(null)
    const anchorNameList: Ref<Array<number | string>> = ref([])
    const active: Ref<number | string | undefined> = ref()
    const sticky: ComputedRef<boolean> = computed(() => props.sticky)
    const cssMode: ComputedRef<boolean> = computed(() => props.cssMode)
    const stickyOffsetTop: ComputedRef<number> = computed(() => toPxNum(props.stickyOffsetTop))
    const zIndex: ComputedRef<number | string> = computed(() => props.zIndex)

    let scroller: HTMLElement | Window | null = null

    const indexBarProvider: IndexBarProvider = {
      active,
      sticky,
      cssMode,
      stickyOffsetTop,
      zIndex,
    }

    bindIndexAnchors(indexBarProvider)

    const emitEvent = (anchor: IndexAnchorProvider | number | string, options?: IndexBarScrollToOptions) => {
      const anchorName = isPlainObject(anchor) ? anchor.name.value : anchor
      if (anchorName === active.value || anchorName === undefined) return

      active.value = anchorName
      if (options?.event !== false) {
        call(props.onChange, anchorName)
      }
    }

    const getOffsetTop = () => {
      if (!('getBoundingClientRect' in scroller!)) {
        return 0
      }

      const { top: parentTop } = scroller.getBoundingClientRect()
      const { scrollTop } = scroller
      const { top: targetTop } = barEl.value!.getBoundingClientRect()

      return scrollTop - parentTop + targetTop
    }

    const handleScroll = () => {
      const scrollTop = getScrollTop(scroller!)
      const scrollHeight = scroller === window ? document.body.scrollHeight : (scroller as HTMLElement).scrollHeight
      const offsetTop = getOffsetTop()

      indexAnchors.forEach((anchor: IndexAnchorProvider, index: number) => {
        const anchorTop = anchor.ownTop.value
        const top = scrollTop - anchorTop + stickyOffsetTop.value - offsetTop
        const distance =
          index === indexAnchors.length - 1 ? scrollHeight : indexAnchors[index + 1].ownTop.value - anchor.ownTop.value

        anchor.setDisabled(true)

        if (top >= 0 && top < distance && clickedName.value === '') {
          anchor.setDisabled(false)
          emitEvent(anchor)
        }
      })
    }

    const anchorClick = async ({ anchorName, manualCall = false, options }: ClickOptions) => {
      if (manualCall) {
        call(props.onClick, anchorName)
      }

      if (anchorName === active.value) {
        return
      }

      const indexAnchor = indexAnchors.find(({ name }: IndexAnchorProvider) => anchorName === name.value)
      if (!indexAnchor) {
        return
      }

      const offsetTop = getOffsetTop()
      const top = indexAnchor.ownTop.value - stickyOffsetTop.value + offsetTop
      const left = getScrollLeft(scroller!)

      clickedName.value = anchorName
      emitEvent(anchorName, options)

      await varScrollTo(scroller!, {
        left,
        top,
        animation: easeInOutCubic,
        duration: toNumber(props.duration),
      })

      nextTickFrame(() => {
        clickedName.value = ''
      })
    }

    const setScroller = async () => {
      await doubleRaf()
      scroller = getParentScroller(barEl.value as HTMLDivElement)
    }

    const addScrollerListener = () => {
      scroller!.addEventListener('scroll', handleScroll)
    }

    const removeScrollerListener = () => {
      scroller!.removeEventListener('scroll', handleScroll)
    }

    // expose
    const scrollTo = (index: number | string, options?: IndexBarScrollToOptions) => {
      requestAnimationFrame(() => anchorClick({ anchorName: index, options }))
    }

    watch(
      () => length.value,
      async () => {
        await doubleRaf()
        indexAnchors.forEach(({ name, setOwnTop }) => {
          if (name.value) anchorNameList.value.push(name.value)
          setOwnTop()
        })
      }
    )

    useMounted(async () => {
      await setScroller()
      addScrollerListener()
    })

    onBeforeUnmount(removeScrollerListener)
    onDeactivated(removeScrollerListener)

    return {
      n,
      classes,
      barEl,
      active,
      zIndex,
      anchorNameList,
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
