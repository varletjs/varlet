<template>
  <component
    :is="sticky ? 'var-sticky' : Transition"
    :offset-top="sticky ? stickyOffsetTop : null"
    :z-index="sticky ? zIndex : null"
    :disabled="disabled && !cssMode"
    :css-mode="cssMode"
    ref="anchorEl"
  >
    <div :class="n()" v-bind="$attrs">
      <slot>{{ name }}</slot>
    </div>
  </component>
</template>

<script lang="ts">
import VarSticky from '../sticky'
import { computed, defineComponent, ref, Transition } from 'vue'
import { useIndexBar } from './provide'
import { props } from './props'
import type { Ref, ComputedRef, RendererNode } from 'vue'
import type { IndexAnchorProvider } from './provide'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('index-anchor')

export default defineComponent({
  name: 'VarIndexAnchor',
  components: {
    VarSticky,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const { index, indexBar, bindIndexBar } = useIndexBar()

    const ownTop: Ref<number> = ref(0)
    const disabled: Ref<boolean> = ref(false)
    const name: ComputedRef<number | string | undefined> = computed(() => props.index)
    const anchorEl: Ref<HTMLDivElement | RendererNode | null> = ref(null)

    const { active, sticky, cssMode, stickyOffsetTop, zIndex } = indexBar
    const setOwnTop = () => {
      if (!anchorEl.value) return
      ownTop.value = (anchorEl.value as RendererNode).$el
        ? (anchorEl.value as RendererNode).$el.offsetTop
        : (anchorEl.value as HTMLDivElement).offsetTop
    }

    const setDisabled = (value: boolean) => {
      disabled.value = value
    }

    const indexAnchorProvider: IndexAnchorProvider = {
      index,
      name,
      ownTop,
      setOwnTop,
      setDisabled,
    }

    bindIndexBar(indexAnchorProvider)

    return {
      n,
      classes,
      name,
      anchorEl,
      active,
      sticky,
      zIndex,
      disabled,
      cssMode,
      stickyOffsetTop,
      Transition,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../sticky/sticky';

.var-index-anchor {
  position: relative;
}
</style>
