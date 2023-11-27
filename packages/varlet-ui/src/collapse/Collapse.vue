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
import { normalizeToArray, call } from '@varlet/shared'
import { type CollapseItemProvider } from '../collapse-item/provide'

const { name, n } = createNamespace('collapse')

export default defineComponent({
  name,
  props,
  setup(props) {
    const active = computed(() => props.modelValue)
    const offset = computed(() => props.offset)
    const divider = computed(() => props.divider)
    const elevation = computed(() => props.elevation)
    const normalizeValues = computed(() => normalizeToArray(props.modelValue))
    const { length, collapseItems, bindCollapseItems } = useCollapseItem()

    const collapseProvider: CollapseProvider = {
      active,
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
        updateModelValue(targetExpand ? itemValue : null)
        return
      }

      const values = normalizeValues.value as Array<string | number>
      const modelValue = targetExpand ? [...values, itemValue] : values.filter((value) => value !== itemValue)

      updateModelValue(modelValue)
    }

    function updateModelValue(modelValue: CollapseModelValue) {
      call(props['onUpdate:modelValue'], modelValue)
      call(props.onChange, modelValue)
    }

    function matchItems(): Array<CollapseItemProvider> | CollapseItemProvider | undefined {
      if (props.accordion) {
        const matchedNameItem = collapseItems.find(({ name }) => normalizeValues.value[0] === name.value)

        if (matchedNameItem === undefined) {
          return collapseItems.find(
            ({ index, name }) => name.value == null && normalizeValues.value.includes(index.value)
          )
        }

        return matchedNameItem
      }

      const matchedNameItems = collapseItems.filter(({ name }) =>
        name.value == null ? false : normalizeValues.value.includes(name.value)
      )
      const matchedIndexItems = collapseItems.filter(
        ({ index, name }) => name.value == null && normalizeValues.value.includes(index.value)
      )

      return [...matchedNameItems, ...matchedIndexItems]
    }

    function resize() {
      const matchedItems: Array<CollapseItemProvider | undefined> = normalizeToArray(matchItems())

      collapseItems.forEach((collapseItem) => {
        collapseItem.init(props.accordion, matchedItems.includes(collapseItem))
      })
    }

    return {
      divider,
      n,
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
