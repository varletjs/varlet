<template>
  <component
    :is="sticky ? n('$-sticky') : Transition"
    ref="anchorEl"
    :offset-top="sticky ? stickyOffsetTop : null"
    :z-index="sticky ? zIndex : null"
    :disabled="disabled && !cssMode"
    :css-mode="cssMode"
  >
    <div :class="n()" v-bind="$attrs">
      <slot>{{ name }}</slot>
    </div>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Transition, type RendererNode } from 'vue'
import VarSticky from '../sticky'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { useIndexBar, type IndexAnchorProvider } from './provide'

const { name, n, classes } = createNamespace('index-anchor')

export default defineComponent({
  name,
  components: { VarSticky },
  inheritAttrs: false,
  props,
  setup(props) {
    const disabled = ref(false)
    const name = computed(() => props.index)
    const anchorEl = ref<HTMLElement | RendererNode | null>(null)
    const { index, indexBar, bindIndexBar } = useIndexBar()
    const { active, sticky, cssMode, stickyOffsetTop, zIndex } = indexBar

    const indexAnchorProvider: IndexAnchorProvider = {
      index,
      name,
      setDisabled,
      getOffsetTop,
    }

    bindIndexBar(indexAnchorProvider)

    function getOffsetTop() {
      if (!anchorEl.value) {
        return 0
      }
      return (anchorEl.value as RendererNode).$el
        ? (anchorEl.value as RendererNode).$el.offsetTop
        : (anchorEl.value as HTMLElement).offsetTop
    }

    function setDisabled(value: boolean) {
      disabled.value = value
    }

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
