<template>
  <nav :class="classes(n(), n('$--box'))" :style="styles">
    <slot v-if="$slots.start" name="start"></slot>

    <tree-menu-option
      v-for="option in treeMeta.options"
      :key="option.value"
      :option="option"
      :ripple="ripple"
      @select="handleSelect"
      @toggle="handleToggle"
    />

    <slot v-if="$slots.end" name="end"></slot>
  </nav>
</template>

<script lang="ts">
import { call, isArray } from '@varlet/shared'
import { useVModel } from '@varlet/use'
import { computed, defineComponent, ref, watch, type CSSProperties } from 'vue'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props, type TreeMenuNormalizedOption, type TreeMenuOption, type TreeMenuOptionValue } from './props'
import TreeMenuOptionComponent from './TreeMenuOption.vue'

const { name, n, classes } = createNamespace('tree-menu')

export default defineComponent({
  name,
  components: {
    TreeMenuOption: TreeMenuOptionComponent,
  },
  props,
  setup(props) {
    const active = useVModel(props, 'active')
    const expandedValues = useVModel(props, 'expandedValues', {
      defaultValue: [],
    })

    const treeMeta = ref<{
      options: TreeMenuNormalizedOption[]
      optionByValue: Map<TreeMenuOptionValue, TreeMenuNormalizedOption>
    }>({
      options: [],
      optionByValue: new Map(),
    })

    const styles = computed<CSSProperties>(() => {
      if (props.indent == null) {
        return {}
      }

      return {
        '--tree-menu-item-indent': toSizeUnit(props.indent),
      }
    })

    watch(
      () => [props.options, props.valueKey, props.labelKey, props.iconKey, props.childrenKey] as const,
      () => {
        treeMeta.value = createTreeMeta()
        updateTreeState()
      },
      { immediate: true },
    )

    watch(
      () => active.value,
      (value) => {
        if (value == null) {
          expandedValues.value = []
          return
        }

        expandAncestors(value)
      },
      { immediate: true },
    )

    watch(
      [active, expandedValues, () => props.disabled],
      () => {
        updateTreeState()
      },
      { immediate: true },
    )

    function createTreeMeta() {
      const map = new Map<TreeMenuOptionValue, TreeMenuNormalizedOption>()
      const options = normalize(props.options)

      options.forEach(visit)

      function normalize(
        options: TreeMenuOption[],
        parent?: TreeMenuNormalizedOption,
        level = 0,
      ): TreeMenuNormalizedOption[] {
        return options.reduce<TreeMenuNormalizedOption[]>((normalizedOptions, option) => {
          if (option.show === false) {
            return normalizedOptions
          }

          const type = option.type
          const value = option[props.valueKey]
          const rawChildren = option[props.childrenKey]
          const normalizedOption: TreeMenuNormalizedOption = {
            option,
            type,
            value,
            label: option[props.labelKey],
            icon: option[props.iconKey],
            active: false,
            activePath: false,
            disabled: false,
            expanded: false,
            hasChildren: false,
            children: [],
            parent,
            level,
          }

          const childLevel = type === 'group' ? level : level + 1

          normalizedOption.children = isArray(rawChildren) ? normalize(rawChildren, normalizedOption, childLevel) : []
          normalizedOption.hasChildren = !type && normalizedOption.children.length > 0

          normalizedOptions.push(normalizedOption)

          return normalizedOptions
        }, [])
      }

      function visit(option: TreeMenuNormalizedOption) {
        map.set(option.value, option)
        option.children.forEach(visit)
      }

      return {
        options,
        optionByValue: map,
      }
    }

    function updateTreeState() {
      const expandedValueSet = new Set(expandedValues.value ?? [])
      const activeOption = active.value == null ? undefined : treeMeta.value.optionByValue.get(active.value)
      const activePathValueSet = new Set(activeOption ? getAncestorValues(activeOption) : [])

      treeMeta.value.options.forEach((option) => {
        updateOptionState(option, expandedValueSet, activePathValueSet)
      })
    }

    function updateOptionState(
      option: TreeMenuNormalizedOption,
      expandedValueSet: Set<TreeMenuOptionValue>,
      activePathValueSet: Set<TreeMenuOptionValue>,
    ) {
      option.active = active.value === option.value
      option.activePath = activePathValueSet.has(option.value)
      option.disabled = props.disabled || !!option.option.disabled
      option.expanded = expandedValueSet.has(option.value)
      option.children.forEach((child) => {
        updateOptionState(child, expandedValueSet, activePathValueSet)
      })
    }

    function getDescendantValues(option: TreeMenuNormalizedOption) {
      const values: TreeMenuOptionValue[] = []

      function visit(child: TreeMenuNormalizedOption) {
        values.push(child.value)
        child.children.forEach(visit)
      }

      option.children.forEach(visit)

      return values
    }

    function getAncestorValues(option: TreeMenuNormalizedOption) {
      const values: TreeMenuOptionValue[] = []
      let parent = option.parent

      while (parent) {
        values.push(parent.value)
        parent = parent.parent
      }

      return values
    }

    function expandAncestors(value: TreeMenuOptionValue) {
      const option = treeMeta.value.optionByValue.get(value)

      if (!option) {
        return
      }

      const target = new Set(expandedValues.value)

      getAncestorValues(option).forEach((value) => {
        target.add(value)
      })

      expandedValues.value = [...target]
    }

    function handleSelect(option: TreeMenuNormalizedOption) {
      if (active.value === option.value) {
        return
      }

      active.value = option.value
      call(props.onChange, option.value, option.option)
    }

    function handleToggle(option: TreeMenuNormalizedOption) {
      const target = new Set(expandedValues.value)
      const expanded = target.has(option.value)

      if (expanded) {
        target.delete(option.value)
        getDescendantValues(option).forEach((value) => target.delete(value))
        expandedValues.value = [...target]
        return
      }

      if (props.accordion) {
        const siblings = option.parent ? option.parent.children : treeMeta.value.options

        siblings.forEach((sibling) => {
          if (sibling.value === option.value) {
            return
          }

          target.delete(sibling.value)
          getDescendantValues(sibling).forEach((value) => target.delete(value))
        })
      }

      target.add(option.value)
      expandedValues.value = [...target]
    }

    return {
      n,
      classes,
      treeMeta,
      styles,
      handleSelect,
      handleToggle,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../collapse-transition/collapseTransition';
@import '../icon/icon';
@import '../ripple/ripple';
@import './treeMenu';
</style>
