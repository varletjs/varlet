<template>
  <div class="var-expansion-panels">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, nextTick, watch } from 'vue'
import { useChildren, useAtChildrenCounter } from '../utils/components'
import {
  EXPANSION_PANELS_BIND_EXPANSION_PANEL_KEY,
  EXPANSION_PANELS_COUNT_EXPANSION_PANEL_KEY,
  ExpansionPanelsProvider,
} from './provide'
import { ExpansionPanelProvider } from '../expansion-panel/provide'
import { props } from './props'
import { isArray } from '../utils/shared'

export default defineComponent({
  name: 'VarExpansionPanels',
  props,
  setup(props) {
    const active: ComputedRef<number | string | Array<number | string> | undefined | null> = computed(
      () => props.modelValue
    )
    const offset: ComputedRef<boolean> = computed(() => props.offset)
    const { bindChildren, childProviders: expansionPanelProviders } = useChildren<
      ExpansionPanelsProvider,
      ExpansionPanelProvider
    >(EXPANSION_PANELS_BIND_EXPANSION_PANEL_KEY)
    const { length } = useAtChildrenCounter(EXPANSION_PANELS_COUNT_EXPANSION_PANEL_KEY)

    const checkValue = () => {
      if (!props.accordion && !isArray(props.modelValue)) {
        console.error('[Varlet] ExpansionPanels: type of prop "modelValue" should be an Array')
        return false
      }
      if (props.accordion && isArray(props.modelValue)) {
        console.error('[Varlet] ExpansionPanels: type of prop "modelValue" should be a String or Number')
        return false
      }
      return true
    }

    const getValue = (value: number | string | undefined, isExpand: boolean) => {
      if (!checkValue()) return
      if (isExpand) return props.accordion ? value : [...(props.modelValue as Array<string | number>), value]
      return props.accordion
        ? null
        : (props.modelValue as Array<string | number>).filter((name: string | number) => name !== value)
    }

    const updateItem = (value: number | string | undefined, isExpand: boolean) => {
      const modelValue = getValue(value, isExpand)
      props['onUpdate:modelValue']?.(modelValue)
      props.onChange?.(modelValue)
    }

    const matchName = (): Array<ExpansionPanelProvider> | ExpansionPanelProvider | undefined => {
      if (props.accordion) {
        return expansionPanelProviders.find(({ name }: ExpansionPanelProvider) => props.modelValue === name.value)
      }
      return expansionPanelProviders.filter(({ name }: ExpansionPanelProvider) => {
        if (name.value === undefined) return false
        return (props.modelValue as Array<string | number>).includes(name.value)
      })
    }

    const matchIndex = (): Array<ExpansionPanelProvider> | ExpansionPanelProvider | undefined => {
      if (props.accordion) {
        // console.log(expansionPanelProviders)
        return expansionPanelProviders.find(({ index, name }: ExpansionPanelProvider) =>
          name.value === undefined ? props.modelValue === index.value : false
        )
      }
      return expansionPanelProviders.filter(({ index, name }: ExpansionPanelProvider) =>
        name.value === undefined ? (props.modelValue as Array<string | number>).includes(index.value) : false
      )
    }

    const resize = () => {
      if (!checkValue()) return
      const matchProviders: Array<ExpansionPanelProvider> | ExpansionPanelProvider | undefined =
        matchName() || matchIndex()
      if (
        (props.accordion && !matchProviders) ||
        (!props.accordion && !(matchProviders as Array<ExpansionPanelProvider>).length)
      ) {
        expansionPanelProviders.forEach((provider) => {
          provider.init(props.accordion, false)
        })
        return
      }
      expansionPanelProviders.forEach((provider) => {
        const isShow = props.accordion
          ? matchProviders === provider
          : (matchProviders as Array<ExpansionPanelProvider>).includes(provider)
        provider.init(props.accordion, isShow)
      })
    }

    const expansionPanelsProvider: ExpansionPanelsProvider = {
      active,
      offset,
      updateItem,
    }

    bindChildren(expansionPanelsProvider)

    watch(
      () => length.value,
      () => nextTick().then(resize)
    )

    watch(
      () => props.modelValue,
      () => nextTick().then(resize)
    )
  },
})
</script>

<style lang="less">
@import 'expansionPanels';
</style>
