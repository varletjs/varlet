<template>
  <nav :class="classes(n(), n('$--box'))" :style="styles">
    <div v-if="$slots.start" :class="n('section')">
      <slot name="start"></slot>
    </div>

    <div :class="n('content')" role="tree">
      <tree-menu-option
        v-for="option in treeMeta.options"
        :key="option.value"
        :option="option"
        :ripple="ripple"
        @select="handleSelect"
        @toggle="handleToggle"
      />
    </div>

    <div v-if="$slots.end" :class="n('section')">
      <slot name="end"></slot>
    </div>
  </nav>
</template>

<script lang="ts">
import { call, isArray } from '@varlet/shared'
import { useVModel } from '@varlet/use'
import { computed, defineComponent, watch, type CSSProperties } from 'vue'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props, type TreeMenuNormalizedOption, type TreeMenuOption, type TreeMenuValue } from './props'
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

    const treeMeta = computed(() => {
      const map = new Map<TreeMenuValue, TreeMenuNormalizedOption>()
      const expandedValueSet = new Set(expandedValues.value)
      const options = normalizeOptions(props.options)

      function visit(option: TreeMenuNormalizedOption) {
        map.set(option.value, option)
        option.children.forEach(visit)
      }

      options.forEach(visit)

      const activeOption = active.value == null ? undefined : map.get(active.value)

      if (activeOption) {
        getAncestorValues(activeOption).forEach((value) => {
          const option = map.get(value)

          if (option) {
            option.activePath = true
          }
        })
      }

      function normalizeOptions(
        options: TreeMenuOption[],
        parent?: TreeMenuNormalizedOption,
        level = 0,
      ): TreeMenuNormalizedOption[] {
        return options.map((option, index) => {
          const type = option.type
          const rawValue = option[props.valueKey]
          const value = rawValue ?? index
          const rawChildren = option[props.childrenKey]
          const hasChildren = !type && isArray(rawChildren) && rawChildren.length > 0
          const normalizedOption: TreeMenuNormalizedOption = {
            option,
            type,
            value,
            label: option[props.labelKey],
            icon: option[props.iconKey],
            active: active.value === value,
            activePath: false,
            disabled: props.disabled || !!option.disabled,
            expanded: expandedValueSet.has(value),
            hasChildren,
            children: [],
            parent,
            level,
          }

          const childLevel = type === 'group' ? level : level + 1

          normalizedOption.children = isArray(rawChildren)
            ? normalizeOptions(rawChildren, normalizedOption, childLevel)
            : []

          return normalizedOption
        })
      }

      return {
        options,
        optionByValue: map,
      }
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

    function getDescendantValues(option: TreeMenuNormalizedOption) {
      const values: TreeMenuValue[] = []

      function visit(child: TreeMenuNormalizedOption) {
        values.push(child.value)
        child.children.forEach(visit)
      }

      option.children.forEach(visit)

      return values
    }

    function getAncestorValues(option: TreeMenuNormalizedOption) {
      const values: TreeMenuValue[] = []
      let parent = option.parent

      while (parent) {
        values.push(parent.value)
        parent = parent.parent
      }

      return values
    }

    function expandAncestors(value: TreeMenuValue) {
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
      active,
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
