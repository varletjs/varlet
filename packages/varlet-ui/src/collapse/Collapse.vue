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
import { normalizeToArray, call, isArray, removeArrayBlank } from '@varlet/shared'
import { type CollapseItemProvider } from '../collapse-item/provide'

const { name, n } = createNamespace('collapse')

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
        const value = targetExpand ? itemValue : undefined
        updateModelValue(isArray(props.modelValue) ? removeArrayBlank([value]) : value)
        return
      }

      const value = targetExpand
        ? [...normalizeValues.value, itemValue]
        : normalizeValues.value.filter((value) => value !== itemValue)
      updateModelValue(value)
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
    const toggleAll = () => {
      if (props.accordion) return
      let modelValue: CollapseModelValue = []
      const enabledItems = (name: string | number | undefined) =>
        normalizeToArray(matchItems()).find((i) => i?.name.value === name)

      if (normalizeToArray(matchItems()).filter((i) => !i?.disabled.value).length < 1) {
        modelValue = collapseItems.map((provider) =>
          provider.disabled.value
            ? enabledItems(provider.name.value)
              ? provider.name.value
              : undefined
            : provider.name.value
        )
      } else {
        modelValue = collapseItems.map((provider) =>
          provider.disabled.value ? (enabledItems(provider.name.value) ? provider.name.value : undefined) : undefined
        )
      }
      call(props['onUpdate:modelValue'], modelValue)
      call(props.onChange, modelValue)
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
