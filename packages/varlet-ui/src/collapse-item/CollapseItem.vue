<template>
  <div
    :class="classes(n(), [offset && isShow, n('--active')], [disabled, n('--disable')])"
    :style="`--collapse-divider-top: ${divider ? 'var(--collapse-border-top)' : 'none'}`"
  >
    <div :class="classes(n('shadow'), formatElevation(elevation, 2))"></div>
    <div :class="n('header')" @click="toggle">
      <div :class="n('header-title')">
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
      @transitionend="transitionend"
      @transitionstart="start"
    >
      <div :class="n('content-wrap')">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { defineComponent, ref, watch, computed } from 'vue'
import { doubleRaf, raf } from '@varlet/shared'
import { createNamespace, formatElevation } from '../utils/components'
import { useCollapse, type CollapseItemProvider } from './provide'
import { props } from './props'

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
    const contentEl = ref<HTMLDivElement | null>(null)
    const name = computed(() => props.name)
    const { index, collapse, bindCollapse } = useCollapse()
    const { offset, divider, elevation, updateItem } = collapse

    const collapseItemProvider: CollapseItemProvider = {
      index,
      name,
      init,
    }

    // ensure to trigger transitionend
    let isInitToTrigger = true

    watch(isShow, (value) => {
      value ? openPanel() : closePanel()
    })

    bindCollapse(collapseItemProvider)

    async function openPanel() {
      if (!contentEl.value) {
        return
      }

      contentEl.value.style.height = ''
      showContent.value = true
      await raf()

      if (!contentEl.value) {
        return
      }

      const { offsetHeight } = contentEl.value
      contentEl.value.style.height = 0 + 'px'
      await raf()

      if (!contentEl.value) {
        return
      }

      contentEl.value.style.height = offsetHeight + 'px'

      if (!isInitToTrigger) {
        return
      }

      await doubleRaf()

      if (isInitToTrigger) {
        transitionend()
      }
    }

    async function closePanel() {
      if (!contentEl.value) {
        return
      }

      const { offsetHeight } = contentEl.value
      contentEl.value.style.height = offsetHeight + 'px'
      await raf()
      contentEl.value.style.height = 0 + 'px'
    }

    function init(show: boolean) {
      isShow.value = show
    }

    function toggle() {
      if (props.disabled) {
        return
      }

      updateItem(props.name ?? index.value, !isShow.value)
    }

    function start() {
      isInitToTrigger = false
    }

    function transitionend() {
      if (!isShow.value) {
        showContent.value = false
      }

      contentEl.value!.style.height = ''
    }

    return {
      isShow,
      showContent,
      offset,
      divider,
      elevation,
      contentEl,
      n,
      start,
      classes,
      toggle,
      transitionend,
      formatElevation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import './collapseItem';
</style>
