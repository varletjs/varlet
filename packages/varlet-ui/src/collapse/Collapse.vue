<template>
  <div :class="n()">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, watch } from 'vue'
import { useCollapseItem, type CollapseProvider } from './provide'
import { props, type CollapseModelValue } from './props'
import { createNamespace } from '../utils/components'
import { normalizeToArray, call, removeArrayBlank } from '@varlet/shared'
import { type CollapseItemProvider } from '../collapse-item/provide'

const { name, n } = createNamespace('collapse')

type CollapseToggleAllOptions = { expand: boolean | 'inverse'; skipDisabled?: boolean }

export default defineComponent({
  name,
  props,
  setup(props) {
    const offset = computed(() => props.offset)
    const divider = computed(() => props.divider)
    const elevation = computed(() => props.elevation)
    const normalizeValues = computed(() => normalizeToArray(props.modelValue))
    const { length, collapseItems, bindCollapseItems } = useCollapseItem()

    const collapseProvider: CollapseProvider = {
      offset,
      divider,
      elevation,
      updateItem,
    }

    watch(
      () => length.value,
      () => nextTick().then(resize)
    )

    watch(
      () => props.modelValue,
      () => nextTick().then(resize)
    )

    bindCollapseItems(collapseProvider)

    function updateItem(itemValue: number | string, targetExpand: boolean) {
      if (props.accordion) {
        const modelValue = targetExpand ? itemValue : undefined
        updateModelValue(modelValue)
        return
      }

      const modelValue = targetExpand
        ? [...normalizeValues.value, itemValue]
        : normalizeValues.value.filter((value) => value !== itemValue)
      updateModelValue(modelValue)
    }

    function updateModelValue(modelValue: CollapseModelValue) {
      call(props['onUpdate:modelValue'], modelValue)
      call(props.onChange, modelValue)
    }

    function matchItems(): Array<CollapseItemProvider> | CollapseItemProvider | undefined {
      if (props.accordion) {
        const [value] = normalizeValues.value
        if (value == null) {
          return
        }

        const matchedNameItem = collapseItems.find(({ name }) => value === name.value)
        if (matchedNameItem == null) {
          return collapseItems.find(({ index, name }) => name.value == null && value === index.value)
        }

        return matchedNameItem
      }

      const matchedNameItems = collapseItems.filter(
        ({ name }) => name.value != null && normalizeValues.value.includes(name.value)
      )
      const matchedIndexItems = collapseItems.filter(
        ({ index, name }) => name.value == null && normalizeValues.value.includes(index.value)
      )

      return [...matchedNameItems, ...matchedIndexItems]
    }

    function resize() {
      const matchedItems: CollapseItemProvider[] = removeArrayBlank(normalizeToArray(matchItems()))

      collapseItems.forEach((collapseItem) => {
        collapseItem.init(matchedItems.includes(collapseItem))
      })
    }

    // expose
    const toggleAll = (options: CollapseToggleAllOptions) => {
      if (props.accordion) return

      const matchedItems = collapseItems.filter((item) => {
        const itemValue = item.name.value ?? item.index.value
        const expanded = normalizeValues.value.includes(itemValue)

        if (options.skipDisabled && item.disabled.value) {
          return expanded
        }

        if (options.expand === 'inverse') {
          return !expanded
        }

        return options.expand
      })

      const modelValue = matchedItems.map((item) => item.name.value ?? item.index.value)
      updateModelValue(modelValue)
    }

    return {
      divider,
      n,
      toggleAll,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';

.var-collapse {
  position: relative;
  width: 100%;
  z-index: 0;
}
</style>
