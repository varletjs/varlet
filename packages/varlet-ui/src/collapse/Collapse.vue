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
import { isArray, call } from '@varlet/shared'
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
    const { length, collapseItem, bindCollapseItem } = useCollapseItem()

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

    bindCollapseItem(collapseProvider)

    function checkValue() {
      if (!props.accordion && !isArray(props.modelValue)) {
        console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array')
        return false
      }

      if (props.accordion && isArray(props.modelValue)) {
        console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number')
        return false
      }
      return true
    }

    function getValue(value: number | string, isExpand: boolean): CollapseModelValue {
      if (!checkValue()) return null
      if (isExpand) return props.accordion ? value : [...(props.modelValue as Array<string | number>), value]

      return props.accordion
        ? null
        : (props.modelValue as Array<string | number>).filter((name: string | number) => name !== value)
    }

    function updateItem(value: number | string, isExpand: boolean) {
      const modelValue = getValue(value, isExpand)
      call(props['onUpdate:modelValue'], modelValue)
      call(props.onChange, modelValue)
    }

    function matchName(): Array<CollapseItemProvider> | CollapseItemProvider | undefined {
      if (props.accordion) {
        return collapseItem.find(({ name }: CollapseItemProvider) => props.modelValue === name.value)
      }

      const filterItem = collapseItem.filter(({ name }: CollapseItemProvider) => {
        if (name.value === undefined) return false

        return (props.modelValue as Array<string | number>).includes(name.value)
      })

      return filterItem.length ? filterItem : undefined
    }

    function matchIndex(): Array<CollapseItemProvider> | CollapseItemProvider | undefined {
      if (props.accordion) {
        return collapseItem.find(
          ({ index, name }: CollapseItemProvider) => name.value === undefined && props.modelValue === index.value
        )
      }
      return collapseItem.filter(
        ({ index, name }: CollapseItemProvider) =>
          name.value === undefined && (props.modelValue as Array<string | number>).includes(index.value)
      )
    }

    function resize() {
      if (!checkValue()) return

      const matchProviders: Array<CollapseItemProvider> | CollapseItemProvider | undefined = matchName() || matchIndex()

      if (
        (props.accordion && !matchProviders) ||
        (!props.accordion && !(matchProviders as Array<CollapseItemProvider>).length)
      ) {
        collapseItem.forEach((provider) => {
          provider.init(props.accordion, false)
        })
        return
      }

      collapseItem.forEach((provider) => {
        const isShow = props.accordion
          ? matchProviders === provider
          : (matchProviders as Array<CollapseItemProvider>).includes(provider)

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
