<template>
  <component
    :is="sticky ? 'var-sticky' : Transition"
    :offset-top="sticky ? stickyOffsetTop : null"
    :z-index="sticky ? zIndex : null"
    ref="anchorEl"
  >
    <div class="var-index-anchor" v-bind="$attrs">
      <slot>{{ name }}</slot>
    </div>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, ref, RendererNode, Transition } from 'vue'
import Sticky from '../sticky'
import { useIndexBar } from './provide'
import { props } from './props'
import type { Ref, ComputedRef } from 'vue'
import type { IndexAnchorProvider } from './provide'

export default defineComponent({
  name: 'VarIndexAnchor',
  components: {
    [Sticky.name]: Sticky,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const { index, indexBar, bindIndexBar } = useIndexBar()

    const ownTop: Ref<number> = ref(0)
    const name: ComputedRef<number | string | undefined> = computed(() => props.index)
    const anchorEl: Ref<HTMLDivElement | RendererNode | null> = ref(null)

    if (!indexBar || !bindIndexBar) {
      console.error('[Varlet] IndexAnchor: You should use this component in "IndexBar"')
      return
    }

    const { active, sticky, stickyOffsetTop, zIndex } = indexBar

    const setOwnTop = () => {
      if (!anchorEl.value) return
      ownTop.value = (anchorEl.value as RendererNode).$el
        ? (anchorEl.value as RendererNode).$el.offsetTop
        : (anchorEl.value as HTMLDivElement).offsetTop
    }

    const indexAnchorProvider: IndexAnchorProvider = {
      index,
      name,
      ownTop,
      setOwnTop,
    }

    bindIndexBar(indexAnchorProvider)

    return {
      name,
      anchorEl,
      active,
      sticky,
      zIndex,
      stickyOffsetTop,
      Transition,
    }
  },
})
</script>

<style lang="less">
@import '../sticky/sticky';

.var-index-anchor {
  position: relative;
}
</style>
