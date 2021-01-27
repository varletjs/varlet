<template>
  <div
    :class="{
      'var-expansion-panel': true,
      'var-expansion-panel__active': offset && isShow,
      'var-expansion-panel__disable': disabled,
    }"
  >
    <div class="var-expansion-panel-header" @click="toggle()">
      <div class="var-expansion-panel-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="var-expansion-panel-header__icon">
        <slot name="icon">
          <var-icon
            :name="icon"
            :transition="400"
            :class="{
              'var-expansion-panel-header__icon': true,
              'var-expansion-panel-header__open': isShow && icon === 'chevron-down',
              'var-expansion-panel-header__disable': disabled,
            }"
          />
        </slot>
      </div>
    </div>
    <div class="var-expansion-panel-content" v-show="show" ref="contentEl" @transitionend="transitionend">
      <div class="var-expansion-panel__wrap">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, nextTick, watch, ComputedRef, computed } from 'vue'
import { requestAnimationFrame } from '../utils/elements'
import { isArray } from '../utils/shared'
import { useParent, useAtParentIndex } from '../utils/components'
import {
  EXPANSION_PANELS_BIND_EXPANSION_PANEL_KEY,
  EXPANSION_PANELS_COUNT_EXPANSION_PANEL_KEY,
  ExpansionPanelsProvider,
} from '../expansion-panels/provide'
import { ExpansionPanelProvider } from './provide'
import { props } from './props'
import Icon from '../icon'

export default defineComponent({
  name: 'VarExpansionPanel',
  components: {
    [Icon.name]: Icon,
  },
  props,
  setup(props) {
    const { parentProvider: ExpansionPanelsProvider, bindParent } = useParent<
      ExpansionPanelsProvider,
      ExpansionPanelProvider
    >(EXPANSION_PANELS_BIND_EXPANSION_PANEL_KEY)
    const { index } = useAtParentIndex(EXPANSION_PANELS_COUNT_EXPANSION_PANEL_KEY)

    if (!ExpansionPanelsProvider || !bindParent || !index) {
      throw Error('<var-expansion-panel/> must in <var-expansion-panels>')
    }

    const contentEl: Ref<HTMLDivElement | null> = ref(null)
    const show: Ref<boolean> = ref(false)
    const isShow: Ref<boolean> = ref(false)
    const { active, offset, updateItem } = ExpansionPanelsProvider

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

    const expansionPanelProvider: ExpansionPanelProvider = {
      index,
      name,
      init,
    }

    bindParent(expansionPanelProvider)

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
@import './expansionPanel';
</style>
