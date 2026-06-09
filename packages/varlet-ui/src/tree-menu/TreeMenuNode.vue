<template>
  <div :class="n('node')" role="none">
    <div v-if="isDivider" :class="n('divider')" role="separator" />

    <template v-else-if="isGroup">
      <div v-if="labelVNode" :class="n('group-label')">
        <maybe-v-node :is="labelVNode" />
      </div>

      <div :class="n('group-children')" role="group">
        <var-tree-menu-node
          v-for="child in node.children"
          :key="child.value"
          :node="child"
          :active="active"
          :expanded-value-set="expandedValueSet"
          :active-path-value-set="activePathValueSet"
          :disabled="disabled"
          :ripple="ripple"
          @select="emitSelect"
          @toggle="emitToggle"
        />
      </div>
    </template>

    <div
      v-else
      v-ripple="{ disabled: !ripple || isDisabled }"
      :class="
        classes(
          n('item'),
          [isActive, n('item--active')],
          [isActivePath, n('item--active-path')],
          [isExpanded, n('item--expanded')],
          [isDisabled, n('item--disabled')],
          [ripple && !isDisabled, n('item--ripple')],
          [hasChildren, n('item--parent')],
        )
      "
      :style="styles"
      :tabindex="isDisabled ? -1 : 0"
      :aria-selected="isActive"
      :aria-disabled="isDisabled"
      :aria-expanded="hasChildren ? isExpanded : undefined"
      role="treeitem"
      @click="handleClick"
      @keydown="handleKeydown"
    >
      <span :class="n('item-indicator')" />

      <span :class="n('item-content')">
        <span v-if="iconVNode" :class="n('icon-wrap')">
          <var-icon
            v-if="isString(iconVNode)"
            :class="n('icon')"
            :name="iconVNode"
            :namespace="node.namespace"
            var-tree-menu-cover
          />
          <maybe-v-node v-else :class="n('icon')" :is="iconVNode" />
        </span>

        <span :class="n('label')">
          <maybe-v-node :is="labelVNode" />
        </span>

        <span v-if="hasChildren" :class="classes(n('expand-icon'), [isExpanded, n('expand-icon--expanded')])">
          <var-icon name="chevron-down" var-tree-menu-cover />
        </span>
        <span v-else :class="n('expand-placeholder')" />
      </span>
    </div>

    <var-collapse-transition v-if="hasChildren" :expand="isExpanded">
      <div :class="n('children')" role="group">
        <var-tree-menu-node
          v-for="child in node.children"
          :key="child.value"
          :node="child"
          :active="active"
          :expanded-value-set="expandedValueSet"
          :active-path-value-set="activePathValueSet"
          :disabled="disabled"
          :ripple="ripple"
          @select="emitSelect"
          @toggle="emitToggle"
        />
      </div>
    </var-collapse-transition>
  </div>
</template>

<script lang="ts">
import { call, isFunction, isString } from '@varlet/shared'
import { computed, defineComponent, type CSSProperties, type PropType } from 'vue'
import VarCollapseTransition from '../collapse-transition'
import VarIcon from '../icon'
import Ripple from '../ripple'
import { createNamespace, defineListenerProp, MaybeVNode } from '../utils/components'
import type { TreeMenuNode, TreeMenuValue } from './props'

const { n, classes } = createNamespace('tree-menu')

export default defineComponent({
  name: 'VarTreeMenuNode',
  components: {
    VarCollapseTransition,
    VarIcon,
    MaybeVNode,
  },
  directives: { Ripple },
  props: {
    node: {
      type: Object as PropType<TreeMenuNode>,
      required: true,
    },
    active: [Number, String] as PropType<TreeMenuValue>,
    expandedValueSet: {
      type: Object as PropType<Set<TreeMenuValue>>,
      required: true,
    },
    activePathValueSet: {
      type: Object as PropType<Set<TreeMenuValue>>,
      required: true,
    },
    disabled: Boolean,
    ripple: Boolean,
    onSelect: defineListenerProp<(node: TreeMenuNode) => void>(),
    onToggle: defineListenerProp<(node: TreeMenuNode) => void>(),
  },
  setup(props) {
    const isGroup = computed(() => props.node.type === 'group')
    const isDivider = computed(() => props.node.type === 'divider')
    const isActive = computed(() => props.active === props.node.value)
    const isActivePath = computed(() => props.activePathValueSet.has(props.node.value))
    const isDisabled = computed(() => props.disabled || props.node.disabled)
    const hasChildren = computed(() => !isGroup.value && !isDivider.value && props.node.children.length > 0)
    const isExpanded = computed(() => props.expandedValueSet.has(props.node.value))
    const iconVNode = computed(() =>
      isFunction(props.node.icon) ? props.node.icon(props.node.option, isActive.value) : props.node.icon,
    )
    const labelVNode = computed(() =>
      isFunction(props.node.label) ? props.node.label(props.node.option, isActive.value) : props.node.label,
    )
    const styles = computed<CSSProperties>(() => ({
      '--tree-menu-level': props.node.level,
    }))

    function emitSelect(node: TreeMenuNode) {
      call(props.onSelect, node)
    }

    function emitToggle(node: TreeMenuNode) {
      call(props.onToggle, node)
    }

    function handleClick() {
      if (isDisabled.value) {
        return
      }

      if (hasChildren.value) {
        emitToggle(props.node)
        return
      }

      emitSelect(props.node)
    }

    function handleKeydown(event: KeyboardEvent) {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return
      }

      event.preventDefault()
      handleClick()
    }

    return {
      isString,
      isGroup,
      isDivider,
      isActive,
      isActivePath,
      isDisabled,
      hasChildren,
      isExpanded,
      iconVNode,
      labelVNode,
      styles,
      n,
      classes,
      emitSelect,
      emitToggle,
      handleClick,
      handleKeydown,
    }
  },
})
</script>
