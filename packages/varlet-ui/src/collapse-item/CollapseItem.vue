<template>
  <div
    :class="classes(n(), [offset && isShow, n('--active')], [disabled, n('--disable')])"
    :style="`--collapse-divider-top: ${divider ? 'var(--collapse-border-top)' : 'none'}`"
  >
    <div :class="classes(n('shadow'), formatElevation(elevation, 2))"></div>
    <div :class="n('header')" @click="toggle()">
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
import { defineComponent, ref, watch, computed } from 'vue'
import { nextTickFrame, requestAnimationFrame } from '../utils/elements'
import { isArray } from '@varlet/shared'
import { createNamespace, formatElevation } from '../utils/components'
import { useCollapse } from './provide'
import { props } from './props'
import VarIcon from '../icon'
import type { Ref, ComputedRef } from 'vue'
import type { CollapseItemProvider } from './provide'

const { n, classes } = createNamespace('collapse-item')

export default defineComponent({
  name: 'VarCollapseItem',
  components: {
    VarIcon,
  },
  props,
  setup(props) {
    const { index, collapse, bindCollapse } = useCollapse()

    let isInitToTrigger = true // ensure to trigger transitionend
    const contentEl: Ref<HTMLDivElement | null> = ref(null)
    const showContent: Ref<boolean> = ref(false)
    const isShow: Ref<boolean> = ref(false)
    const { active, offset, divider, elevation, updateItem } = collapse

    const name: ComputedRef<number | string | undefined> = computed(() => props.name)

    const init = (accordion: boolean, show: boolean) => {
      if (active.value === undefined || (accordion && isArray(active.value)) || show === isShow.value) return

      isShow.value = show
      toggle(true)
    }

    const toggle = (initOrAccordion?: boolean) => {
      if (props.disabled) return

      if (!initOrAccordion) {
        updateItem(props.name || index.value, !isShow.value)
      }
    }

    const openPanel = () => {
      if (!contentEl.value) return
      ;(contentEl.value as HTMLDivElement).style.height = ''
      showContent.value = true

      requestAnimationFrame(() => {
        const { offsetHeight } = contentEl.value as HTMLDivElement
        ;(contentEl.value as HTMLDivElement).style.height = 0 + 'px'

        requestAnimationFrame(() => {
          ;(contentEl.value as HTMLDivElement).style.height = offsetHeight + 'px'

          if (!isInitToTrigger) return

          nextTickFrame(() => {
            if (isInitToTrigger) transitionend()
          })
        })
      })
    }

    const start = () => {
      isInitToTrigger = false
    }

    const closePanel = () => {
      if (!contentEl.value) return

      const { offsetHeight } = contentEl.value
      contentEl.value.style.height = offsetHeight + 'px'

      requestAnimationFrame(() => {
        ;(contentEl.value as HTMLDivElement).style.height = 0 + 'px'
      })
    }

    const transitionend = () => {
      if (!isShow.value) {
        showContent.value = false
      }

      ;(contentEl.value as HTMLDivElement).style.height = ''
    }

    const collapseItemProvider: CollapseItemProvider = {
      index,
      name,
      init,
    }

    bindCollapse(collapseItemProvider)

    watch(isShow, (value) => {
      if (value) openPanel()
      else closePanel()
    })

    return {
      n,
      start,
      classes,
      showContent,
      isShow,
      offset,
      divider,
      elevation,
      toggle,
      contentEl,
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
