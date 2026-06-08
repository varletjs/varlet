<template>
  <nav :class="classes(n(), n('$--box'))" :style="styles" v-bind="$attrs">
    <div v-if="$slots.start" :class="classes(n('section'), n('start'))">
      <slot name="start"></slot>
    </div>

    <div :class="n('content')" role="tree">
      <tree-menu-node
        v-for="node in nodes"
        :key="node.value"
        :node="node"
        :active="active"
        :expanded-value-set="expandedValueSet"
        :active-path-value-set="activePathValueSet"
        :disabled="disabled"
        :ripple="ripple"
        :on-select="handleSelect"
        :on-toggle="handleToggle"
      />
    </div>

    <div v-if="$slots.end" :class="classes(n('section'), n('end'))">
      <slot name="end"></slot>
    </div>
  </nav>
</template>

<script lang="ts">
import { call, isArray, isNumber } from '@varlet/shared'
import { useVModel } from '@varlet/use'
import { computed, defineComponent, watch, type CSSProperties } from 'vue'
import { createNamespace } from '../utils/components'
import { props, type TreeMenuNode, type TreeMenuOption, type TreeMenuValue } from './props'
import TreeMenuNodeComponent from './TreeMenuNode.vue'

const { name, n, classes } = createNamespace('tree-menu')

export default defineComponent({
  name,
  components: {
    TreeMenuNode: TreeMenuNodeComponent,
  },
  props,
  setup(props) {
    const active = useVModel(props, 'active')
    const expandedValues = useVModel(props, 'expandedValues', {
      defaultValue: [],
    })

    const treeMeta = computed(() => {
      const map = new Map<TreeMenuValue, TreeMenuNode>()
      const nodes = normalizeOptions(props.options)

      function visit(node: TreeMenuNode) {
        map.set(node.value, node)
        node.children.forEach(visit)
      }

      nodes.forEach(visit)

      return {
        nodes,
        nodeByValue: map,
      }
    })
    const nodes = computed(() => treeMeta.value.nodes)
    const nodeByValue = computed(() => treeMeta.value.nodeByValue)
    const expandedValueSet = computed(() => new Set(expandedValues.value ?? []))
    const activePathValueSet = computed(() => {
      if (active.value == null) {
        return new Set<TreeMenuValue>()
      }

      const node = nodeByValue.value.get(active.value)

      return new Set(node ? getAncestorValues(node) : [])
    })
    const styles = computed<CSSProperties>(() => {
      if (props.indent == null) {
        return {}
      }

      const indent = isNumber(props.indent) ? `${props.indent}px` : props.indent

      return {
        '--tree-menu-item-indent': indent,
      }
    })

    watch(
      () => props.active,
      (value) => {
        if (props.expandedValues !== undefined || value == null) {
          return
        }

        expandAncestors(value)
      },
      { immediate: true },
    )

    function normalizeOptions(options: TreeMenuOption[], parent?: TreeMenuNode, level = 0): TreeMenuNode[] {
      return options.map((option, index) => {
        const rawValue = option[props.valueKey]
        const value = rawValue ?? index
        const rawChildren = option[props.childrenKey]
        const node: TreeMenuNode = {
          option,
          value,
          label: option[props.labelKey],
          icon: option[props.iconKey],
          namespace: option.namespace,
          disabled: option.disabled,
          children: [],
          parent,
          level,
        }

        node.children = isArray(rawChildren) ? normalizeOptions(rawChildren, node, level + 1) : []

        return node
      })
    }

    function getDescendantValues(node: TreeMenuNode) {
      const values: TreeMenuValue[] = []

      function visit(child: TreeMenuNode) {
        values.push(child.value)
        child.children.forEach(visit)
      }

      node.children.forEach(visit)

      return values
    }

    function getAncestorValues(node: TreeMenuNode) {
      const values: TreeMenuValue[] = []
      let parent = node.parent

      while (parent) {
        values.push(parent.value)
        parent = parent.parent
      }

      return values
    }

    function updateExpandedValues(values: TreeMenuValue[]) {
      expandedValues.value = values
      call(props.onExpand, values)
    }

    function expandAncestors(value: TreeMenuValue) {
      const node = nodeByValue.value.get(value)

      if (!node) {
        return
      }

      const target = new Set(expandedValues.value ?? [])

      getAncestorValues(node).forEach((value) => {
        target.add(value)
      })

      updateExpandedValues([...target])
    }

    function handleSelect(node: TreeMenuNode) {
      if (active.value === node.value) {
        return
      }

      active.value = node.value
      call(props.onChange, node.value, node.option)

      if (props.expandedValues === undefined) {
        expandAncestors(node.value)
      }
    }

    function handleToggle(node: TreeMenuNode) {
      const target = new Set(expandedValues.value ?? [])
      const expanded = target.has(node.value)

      if (expanded) {
        target.delete(node.value)
        getDescendantValues(node).forEach((value) => target.delete(value))
        updateExpandedValues([...target])
        return
      }

      if (props.accordion) {
        const siblings = node.parent ? node.parent.children : nodes.value

        siblings.forEach((sibling) => {
          if (sibling.value === node.value) {
            return
          }

          target.delete(sibling.value)
          getDescendantValues(sibling).forEach((value) => target.delete(value))
        })
      }

      target.add(node.value)
      updateExpandedValues([...target])
    }

    return {
      n,
      classes,
      active,
      nodes,
      expandedValueSet,
      activePathValueSet,
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
