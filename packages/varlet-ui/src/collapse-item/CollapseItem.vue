<template>
  <div
    :class="{
      'var-collapse-item': true,
      'var-collapse-item__active': offset && isShow,
      'var-collapse-item__disable': disabled,
    }"
  >
    <div class="var-collapse-item-header" @click="toggle()">
      <div class="var-collapse-item-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="var-collapse-item-header__icon">
        <slot name="icon">
          <var-icon
            :name="icon"
            :transition="400"
            :class="{
              'var-collapse-item-header__icon': true,
              'var-collapse-item-header__open': isShow && icon === 'chevron-down',
              'var-collapse-item-header__disable': disabled,
            }"
          />
        </slot>
      </div>
    </div>
    <div class="var-collapse-item-content" v-show="show" ref="contentEl" @transitionend="transitionend">
      <div class="var-collapse-item__wrap">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, nextTick, watch, ComputedRef, computed } from 'vue'
import { requestAnimationFrame } from '../utils/elements'
import { isArray } from '../utils/shared'
import { CollapseItemProvider, useCollapse } from './provide'
import { props } from './props'
import Icon from '../icon'

export default defineComponent({
  name: 'VarCollapseItem',
  components: {
    [Icon.name]: Icon,
  },
  props,
  setup(props) {
    const { index, collapse, bindCollapse } = useCollapse()

    if (!collapse || !bindCollapse || !index) {
      throw Error('<var-collapse-item/> must in <var-collapse>')
    }

    const contentEl: Ref<HTMLDivElement | null> = ref(null)
    const show: Ref<boolean> = ref(false)
    const isShow: Ref<boolean> = ref(false)
    const { active, offset, updateItem } = collapse

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
      show.value = true
      nextTick(() => {
        const { offsetHeight } = contentEl.value as HTMLDivElement
        ;(contentEl.value as HTMLDivElement).style.height = 0 + 'px'
        requestAnimationFrame(() => {
          ;(contentEl.value as HTMLDivElement).style.height = offsetHeight + 'px'
        })
      })
    }

    const closePanel = () => {
      if (!contentEl.value) return
      ;(contentEl.value as HTMLDivElement).style.height = 0 + 'px'
    }

    const transitionend = () => {
      if (!isShow.value) {
        show.value = false
        ;(contentEl.value as HTMLDivElement).style.height = ''
      }
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
      show,
      isShow,
      offset,
      toggle,
      contentEl,
      transitionend,
    }
  },
})
</script>

<style lang="less">
@import '../icon/icon';
@import './collapseItem';
</style>
