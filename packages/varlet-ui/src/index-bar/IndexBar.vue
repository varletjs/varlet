<template>
  <div :class="n()" ref="barEl">
    <slot />
    <ul :class="n('anchor-list')" :style="{ zIndex: toNumber(zIndex) + 2, display: hideList ? 'none' : 'block' }">
      <li
        v-for="anchorName in anchorNameList"
        :key="anchorName"
        :class="classes(n('anchor-item'), [active === anchorName, n('anchor-item--active')])"
        :style="{ color: active === anchorName && highlightColor ? highlightColor : '' }"
        @click="anchorClick(anchorName, true)"
      >
        {{ anchorName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, onMounted, onBeforeUnmount } from 'vue'
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
import { props } from './props'
import type { Ref, ComputedRef } from 'vue'
import type { IndexBarProvider } from './provide'
import type { IndexAnchorProvider } from '../index-anchor/provide'
import { createNamespace, call } from '../utils/components'

const { n, classes } = createNamespace('index-bar')

export default defineComponent({
  name: 'VarIndexBar',
  props,
  setup(props) {
    const { length, indexAnchors, bindIndexAnchors } = useIndexAnchors()

    const clickedName: Ref<string | number> = ref('')
    const scroller: Ref<HTMLElement | Window | null> = ref(null)
    const barEl: Ref<HTMLDivElement | null> = ref(null)
    const anchorNameList: Ref<Array<number | string>> = ref([])
    const active: Ref<number | string | undefined> = ref()

    const sticky: ComputedRef<boolean> = computed(() => props.sticky)
    const cssMode: ComputedRef<boolean> = computed(() => props.cssMode)
    const stickyOffsetTop: ComputedRef<number> = computed(() => toPxNum(props.stickyOffsetTop))
    const zIndex: ComputedRef<number | string> = computed(() => props.zIndex)

    const indexBarProvider: IndexBarProvider = {
      active,
      sticky,
      cssMode,
      stickyOffsetTop,
      zIndex,
    }

    bindIndexAnchors(indexBarProvider)

    const emitEvent = (anchor: IndexAnchorProvider | number | string) => {
      const anchorName = isPlainObject(anchor) ? anchor.name.value : anchor
      if (anchorName === active.value || anchorName === undefined) return

      active.value = anchorName
      call(props.onChange, anchorName)
    }

    const handleScroll = () => {
      const scrollTop = getScrollTop(scroller.value!)
      const scrollHeight =
        scroller.value === window ? document.body.scrollHeight : (scroller.value as HTMLElement).scrollHeight

      const { offsetTop } = barEl.value as HTMLElement
      indexAnchors.forEach((anchor: IndexAnchorProvider, index: number) => {
        const anchorTop = anchor.ownTop.value
        const top = scrollTop - anchorTop + stickyOffsetTop.value - offsetTop

        const distance =
          index === indexAnchors.length - 1 ? scrollHeight : indexAnchors[index + 1].ownTop.value - anchor.ownTop.value

        if (top >= 0 && top < distance && !clickedName.value) {
          if (index && !props.cssMode) {
            indexAnchors[index - 1].setDisabled(true)
          }

          anchor.setDisabled(false)
          emitEvent(anchor)
        }
      })
    }

    const anchorClick = async (anchorName: string | number, manualCall?: boolean) => {
      const { offsetTop } = barEl.value as HTMLElement

      if (manualCall) call(props.onClick, anchorName)
      if (anchorName === active.value) return
      const indexAnchor = indexAnchors.find(({ name }: IndexAnchorProvider) => anchorName === name.value)
      if (!indexAnchor) return
      const top = indexAnchor.ownTop.value - stickyOffsetTop.value + offsetTop
      const left = getScrollLeft(scroller.value!)
      clickedName.value = anchorName
      emitEvent(anchorName)

      await varScrollTo(scroller.value!, {
        left,
        top,
        animation: easeInOutCubic,
        duration: toNumber(props.duration),
      })

      nextTickFrame(() => {
        clickedName.value = ''
      })
    }

    // expose
    const scrollTo = (index: number | string) => {
      requestAnimationFrame(() => anchorClick(index))
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

    onMounted(async () => {
      await doubleRaf()
      scroller.value = getParentScroller(barEl.value as HTMLDivElement)
      scroller.value.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
      call(scroller.value!.removeEventListener, 'scroll', handleScroll)
    })

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
