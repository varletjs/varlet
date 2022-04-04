<template>
  <div :class="n()">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, watch } from 'vue'
import { useCollapseItem } from './provide'
import { props } from './props'
import { call, createNamespace } from '../utils/components'
import { isArray } from '../utils/shared'
import type { ComputedRef } from 'vue'
import type { CollapseItemProvider } from '../collapse-item/provide'
import type { CollapseProvider } from './provide'
import type { CollapseModelValue } from './props'

const { n } = createNamespace('collapse')

export default defineComponent({
  name: 'VarCollapse',
  props,
  setup(props) {
    const { length, collapseItem, bindCollapseItem } = useCollapseItem()

    const active: ComputedRef<number | string | Array<number | string> | undefined | null> = computed(
      () => props.modelValue
    )
    const offset: ComputedRef<boolean> = computed(() => props.offset)

    const checkValue = () => {
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

    const getValue = (value: number | string, isExpand: boolean): CollapseModelValue => {
      if (!checkValue()) return null
      if (isExpand) return props.accordion ? value : [...(props.modelValue as Array<string | number>), value]

      return props.accordion
        ? null
        : (props.modelValue as Array<string | number>).filter((name: string | number) => name !== value)
    }

    const updateItem = (value: number | string, isExpand: boolean) => {
      const modelValue = getValue(value, isExpand)
      call(props['onUpdate:modelValue'], modelValue)
      call(props.onChange, modelValue)
    }

    const matchName = (): Array<CollapseItemProvider> | CollapseItemProvider | undefined => {
      if (props.accordion) {
        return collapseItem.find(({ name }: CollapseItemProvider) => props.modelValue === name.value)
      }

      const filterItem = collapseItem.filter(({ name }: CollapseItemProvider) => {
        if (name.value === undefined) return false

        return (props.modelValue as Array<string | number>).includes(name.value)
      })

      return filterItem.length ? filterItem : undefined
    }

    const matchIndex = (): Array<CollapseItemProvider> | CollapseItemProvider | undefined => {
      if (props.accordion) {
        return collapseItem.find(({ index, name }: CollapseItemProvider) =>
          name.value === undefined ? props.modelValue === index.value : false
        )
      }
      return collapseItem.filter(({ index, name }: CollapseItemProvider) =>
        name.value === undefined ? (props.modelValue as Array<string | number>).includes(index.value) : false
      )
    }

    const resize = () => {
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

    const collapseProvider: CollapseProvider = {
      active,
      offset,
      updateItem,
    }

    bindCollapseItem(collapseProvider)

    watch(
      () => length.value,
      () => nextTick().then(resize)
    )

    watch(
      () => props.modelValue,
      () => nextTick().then(resize)
    )

    return {
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
}
</style>
