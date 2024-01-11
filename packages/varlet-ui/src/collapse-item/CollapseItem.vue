<template>
  <div
    :class="classes(n(), [offset && isShow, n('--active')], [disabled, n('--disable')])"
    :style="`--collapse-divider-top: ${divider ? 'var(--collapse-border-top)' : 'none'}`"
  >
    <div :class="classes(n('shadow'), formatElevation(elevation, 2))"></div>
    <div :class="n('header')" @click="toggle">
      <div :class="n('header-title')" v-if="$slots.title || title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div :class="n('header-icon')">
        <slot name="icon">
          <var-icon
            :name="icon"
            :transition="250"
            :class="
              classes(
                n('header-icon'),
                [isShow && icon === 'chevron-down', n('header-open')],
                [disabled, n('header--disable')]
              )
            "
          />
        </slot>
      </div>
    </div>
    <div
      :class="n('content')"
      v-show="showContent"
      ref="contentEl"
      @transitionend="handleTransitionEnd"
      @transitionstart="handleTransitionStart"
    >
      <div :class="n('content-wrap')">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { defineComponent, ref, computed } from 'vue'
import { createNamespace, formatElevation } from '../utils/components'
import { useCollapse, type CollapseItemProvider } from './provide'
import { props } from './props'
import { useCollapseTransition } from '../collapse-transition/useCollapseTransition'

const { name, n, classes } = createNamespace('collapse-item')

export default defineComponent({
  name,
  components: {
    VarIcon,
  },
  props,
  setup(props) {
    const isShow = ref(false)
    const showContent = ref(false)
    const contentEl = ref<HTMLElement | null>(null)
    const name = computed(() => props.name)
    const disabled = computed(() => props.disabled)
    const { index, collapse, bindCollapse } = useCollapse()
    const { offset, divider, elevation, updateItem } = collapse

    const collapseItemProvider: CollapseItemProvider = {
      index,
      name,
      disabled,
      init,
    }

    bindCollapse(collapseItemProvider)

    const { handleTransitionEnd, handleTransitionStart } = useCollapseTransition({
      contentEl,
      showContent,
      expand: isShow,
    })

    function init(show: boolean) {
      isShow.value = show
    }

    function toggle() {
      if (props.disabled) {
        return
      }

      updateItem(props.name ?? index.value, !isShow.value)
    }

    return {
      isShow,
      showContent,
      offset,
      divider,
      elevation,
      contentEl,
      n,
      classes,
      toggle,
      formatElevation,
      handleTransitionEnd,
      handleTransitionStart,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './collapseItem';
</style>
