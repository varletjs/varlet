<template>
  <div class="var-index-bar" ref="barEl" @scroll="handleScroll">
    <slot></slot>
    <ul class="var-index-bar__anchor-list" :style="{ zIndex: zIndex + 2 }">
      <li
        v-for="anchorName in anchorNameList"
        :key="anchorName"
        class="var-index-bar__anchor-item"
        :class="{ 'var-index-bar__anchor-item--active': active === anchorName }"
        @click="anchorClick(anchorName)"
      >
        {{ anchorName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, nextTick, ref, Ref, watch, onMounted } from 'vue'
import { isPlainObject } from '../utils/shared'
import { IndexBarProvider, useIndexAnchors } from './provide'
import { IndexAnchorProvider } from '../index-anchor/provide'
import { props } from './props'

export default defineComponent({
  name: 'VarIndexBar',
  props,
  setup(props) {
    const { length, indexAnchors, bindIndexAnchors } = useIndexAnchors()

    const barEl: Ref<HTMLDivElement | null> = ref(null)
    const anchorNameList: Ref<Array<number | string>> = ref([])

    const active: ComputedRef<number | string | undefined> = computed(() => props.active)
    const sticky: ComputedRef<boolean> = computed(() => props.sticky)
    const stickyOffsetTop: ComputedRef<number> = computed(() => props.stickyOffsetTop)
    const zIndex: ComputedRef<number | string> = computed(() => props.zIndex)

    const indexBarProvider: IndexBarProvider = {
      active,
      sticky,
      stickyOffsetTop,
      zIndex,
    }

    bindIndexAnchors(indexBarProvider)

    const emitEvent = (anchor: IndexAnchorProvider | number | string) => {
      const anchorName = isPlainObject(anchor) ? anchor.name.value : anchor
      if (anchorName === props.active) return
      props['onUpdate:active']?.(anchorName)
      props.onChange?.(anchorName)
    }

    const handleScroll = () => {
      const { scrollTop } = barEl.value as HTMLDivElement
      indexAnchors.forEach((anchor: IndexAnchorProvider, index: number) => {
        const anchorTop = anchor.ownTop.value
        const top = scrollTop - anchorTop + stickyOffsetTop.value

        if (top >= 0 && top <= 10) {
          emitEvent(anchor)
        } else if (top < 0 && top >= -10) {
          const preAnchor = indexAnchors[index - 1]
          emitEvent(preAnchor)
        }
      })
    }

    const anchorClick = (anchorName: string | number) => {
      props.onClick?.(anchorName)
      if (anchorName === active.value) return
      const indexAnchor = indexAnchors.find(({ name }: IndexAnchorProvider) => anchorName === name.value)
      if (!indexAnchor) return
      const top = indexAnchor.ownTop.value
      const { scrollLeft } = barEl.value as HTMLDivElement
      ;(barEl.value as HTMLDivElement).scrollTo(scrollLeft, top)
      emitEvent(anchorName)
    }

    // expose
    const scrollTo = (index: number | string) => {
      anchorClick(index)
    }

    watch(
      () => length.value,
      () =>
        nextTick(() => {
          indexAnchors.forEach(({ name }) => {
            if (name.value) anchorNameList.value.push(name.value)
          })
        })
    )

    onMounted(() => {
      indexAnchors.forEach(({ setOwnTop }) => setOwnTop())
    })

    return {
      barEl,
      anchorNameList,
      scrollTo,
      anchorClick,
      handleScroll,
    }
  },
})
</script>

<style lang="less">
@import './indexBar';
</style>
