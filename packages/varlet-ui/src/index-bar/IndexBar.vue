<template>
  <div class="var-index-bar" ref="barEl">
    <slot />
    <ul class="var-index-bar__anchor-list" :style="{ zIndex: zIndex + 2, display: hideList ? 'none' : 'block' }">
      <li
        v-for="anchorName in anchorNameList"
        :key="anchorName"
        class="var-index-bar__anchor-item"
        :class="{ 'var-index-bar__anchor-item--active': active === anchorName }"
        :style="{ color: active === anchorName && highlightColor ? highlightColor : '' }"
        @click="anchorClick(anchorName)"
      >
        {{ anchorName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { easeInOutCubic, isPlainObject, toNumber } from '../utils/shared'
import {
  getParentScroller,
  getScrollLeft,
  nextTickFrame,
  requestAnimationFrame,
  scrollTo as varScrollTo,
} from '../utils/elements'
import { useIndexAnchors } from './provide'
import { props } from './props'
import type { Ref, ComputedRef } from 'vue'
import type { IndexBarProvider } from './provide'
import type { IndexAnchorProvider } from '../index-anchor/provide'

export default defineComponent({
  name: 'VarIndexBar',
  props,
  setup(props) {
    const { length, indexAnchors, bindIndexAnchors } = useIndexAnchors()

    const scrollEl: Ref<HTMLElement | null> = ref(null)
    const clickedName: Ref<string | number> = ref('')
    const scroller: Ref<HTMLElement | Window | null> = ref(null)
    const barEl: Ref<HTMLDivElement | null> = ref(null)
    const anchorNameList: Ref<Array<number | string>> = ref([])
    const active: Ref<number | string | undefined> = ref()

    const sticky: ComputedRef<boolean> = computed(() => props.sticky)
    const cssMode: ComputedRef<boolean> = computed(() => props.cssMode)
    const stickyOffsetTop: ComputedRef<number> = computed(() => props.stickyOffsetTop)
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
      if (anchorName === active.value) return

      active.value = anchorName
      props.onChange?.(anchorName)
    }

    const handleScroll = () => {
      const { scrollTop, scrollHeight } = scrollEl.value as HTMLElement
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
      if (manualCall) props.onClick?.(anchorName)
      if (anchorName === active.value) return
      const indexAnchor = indexAnchors.find(({ name }: IndexAnchorProvider) => anchorName === name.value)
      if (!indexAnchor) return
      const top = indexAnchor.ownTop.value
      const left = getScrollLeft(scrollEl.value as HTMLElement)
      clickedName.value = anchorName
      emitEvent(anchorName)

      await varScrollTo(scrollEl.value as HTMLElement, {
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
      requestAnimationFrame(() => anchorClick(index, true))
    }

    watch(
      () => length.value,
      () =>
        nextTick(() => {
          indexAnchors.forEach(({ name, setOwnTop }) => {
            if (name.value) anchorNameList.value.push(name.value)
            setOwnTop()
          })
        })
    )

    onMounted(() => {
      scroller.value = getParentScroller(barEl.value as HTMLDivElement)
      scrollEl.value =
        scroller.value === window
          ? (scroller.value as Window).document.documentElement
          : (scroller.value as HTMLElement)
      scroller.value?.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
      scroller.value?.removeEventListener('scroll', handleScroll)
    })

    return {
      barEl,
      active,
      zIndex,
      anchorNameList,
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
