<template>
	<div class="var-index-bar" ref="barEl" @scroll="handleScroll">
		<slot></slot>
		<ul class="var-index-bar__anchor-list" :style="{ zIndex: zIndex + 2 }">
			<li
				v-for="anchorName in anchorNameList"
				:key="anchorName"
				:style="{ color: active === anchorName ? highlightColor : '#2c7cf6' }"
				@click="anchorClick(anchorName)"
			>
				{{ anchorName }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, nextTick, ref, Ref, watch, onMounted } from 'vue'
import { useChildren, useAtChildrenCounter } from '../utils/components'
import { isPlainObject } from '../utils/shared'
import { IndexBarProvider, INDEX_BAR_BIND_INDEX_ANCHOR_KEY, INDEX_BAR_COUNT_INDEX_ANCHOR_KEY } from './provide'
import { IndexAnchorProvider } from '../index-anchor/provide'
import { props } from './props'

export default defineComponent({
  name: 'VarIndexBar',
  props,
  setup(props) {
    const barEl: Ref<HTMLDivElement | null> = ref(null)

    const active: ComputedRef<number | string | undefined> = computed(() => props.active)
    const sticky: ComputedRef<boolean> = computed(() => props.sticky)
    const stickyOffsetTop: ComputedRef<number> = computed(() => props.stickyOffsetTop)
    const zIndex: ComputedRef<number | string> = computed(() => props.zIndex)

    const anchorNameList: Ref<Array<number | string>> = ref([])

    const { bindChildren, childProviders: IndexAnchorProviders } = useChildren<IndexBarProvider, IndexAnchorProvider>(
      INDEX_BAR_BIND_INDEX_ANCHOR_KEY
    )
    const { length } = useAtChildrenCounter(INDEX_BAR_COUNT_INDEX_ANCHOR_KEY)

    const indexBarProvider: IndexBarProvider = {
      active,
      sticky,
      stickyOffsetTop,
      zIndex,
    }

    bindChildren(indexBarProvider)

    const emitEvent = (anchor: IndexAnchorProvider | number | string) => {
      const anchorName = isPlainObject(anchor) ? anchor.name.value : anchor
      if (anchorName === props.active) return
      props['onUpdate:active']?.(anchorName)
      props.onChange?.(anchorName)
    }

    const handleScroll = () => {
      const { scrollTop } = barEl.value as HTMLDivElement
      IndexAnchorProviders.forEach((anchor: IndexAnchorProvider, index: number) => {
        const anchorTop = anchor.ownTop.value
        const top = scrollTop - anchorTop + stickyOffsetTop.value

        if (top >= 0 && top <= 10) {
          emitEvent(anchor)
        } else if (top < 0 && top >= -10) {
          const preAnchor = IndexAnchorProviders[index - 1]
          emitEvent(preAnchor)
        }
      })
    }

    const anchorClick = (anchorName: string | number) => {
      if (anchorName === active.value) return
      const indexAnchor = IndexAnchorProviders.find(({ name }: IndexAnchorProvider) => anchorName === name.value)
      if (!indexAnchor) return
      const top = indexAnchor.ownTop.value
      const { scrollLeft } = barEl.value as HTMLDivElement
			;(barEl.value as HTMLDivElement).scrollTo(scrollLeft, top)
      emitEvent(anchorName)
    }

    watch(
      () => length.value,
      () =>
        nextTick(() => {
          IndexAnchorProviders.forEach(({ name }) => {
            if (name.value) anchorNameList.value.push(name.value)
          })
        })
    )

    onMounted(() => {
      IndexAnchorProviders.forEach(({ setOwnTop }) => setOwnTop())
    })

    return {
      barEl,
      anchorNameList,
      anchorClick,
      handleScroll,
    }
  },
})
</script>

<style lang="less">
@import './indexBar';
</style>
