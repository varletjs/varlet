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

    function getValue(value: number | string, isExpand: boolean): CollapseModelValue {
      if (props.accordion) {
        return isExpand ? value : null
      }

      const values = normalizeValues.value as Array<string | number>
      return isExpand ? [...values, value] : values.filter((name) => name !== value)
    }

    function updateItem(value: number | string, isExpand: boolean) {
      const modelValue = getValue(value, isExpand)

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
      const matchedProviders: Array<CollapseItemProvider> | CollapseItemProvider | undefined = matchItems()

      if (
        (props.accordion && !matchedProviders) ||
        (!props.accordion && !(matchedProviders as Array<CollapseItemProvider>).length)
      ) {
        collapseItems.forEach((provider) => {
          provider.init(props.accordion, false)
        })
        return
      }

      collapseItems.forEach((provider) => {
        const isShow = props.accordion
          ? matchedProviders === provider
          : (matchedProviders as Array<CollapseItemProvider>).includes(provider)

        provider.init(props.accordion, isShow)
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
