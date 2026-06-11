<template>
  <div :class="n('option')">
    <div v-if="option.type === 'divider'" :class="n('divider')" />

    <template v-else-if="option.type === 'group'">
      <maybe-v-node :is="renderGroupLabel()" />

      <div :class="n('group-children')">
        <var-tree-menu-option
          v-for="child in option.children"
          :key="child.value"
          :option="child"
          :ripple="ripple"
          @select="onSelect"
          @toggle="onToggle"
        />
      </div>
    </template>

    <maybe-v-node v-else :is="renderItem()" />

    <var-collapse-transition v-if="option.hasChildren" :expand="option.expanded">
      <div :class="n('children')">
        <var-tree-menu-option
          v-for="child in option.children"
          :key="child.value"
          :option="child"
          :ripple="ripple"
          @select="onSelect"
          @toggle="onToggle"
        />
      </div>
    </var-collapse-transition>
  </div>
</template>

<script lang="ts">
import { call, callOrReturn, isString } from '@varlet/shared'
import { defineComponent, h, withDirectives, type PropType } from 'vue'
import VarCollapseTransition from '../collapse-transition'
import VarIcon from '../icon'
import Ripple from '../ripple'
import { createNamespace, defineListenerProp, MaybeVNode } from '../utils/components'
import type { TreeMenuNormalizedOption } from './props'

const { n, classes } = createNamespace('tree-menu')

export default defineComponent({
  name: 'VarTreeMenuOption',
  components: {
    VarCollapseTransition,
    VarIcon,
    MaybeVNode,
  },
  directives: { Ripple },
  props: {
    option: {
      type: Object as PropType<TreeMenuNormalizedOption>,
      required: true,
    },
    ripple: Boolean,
    onSelect: defineListenerProp<(option: TreeMenuNormalizedOption) => void>(),
    onToggle: defineListenerProp<(option: TreeMenuNormalizedOption) => void>(),
  },
  setup(props) {
    function handleClick() {
      if (props.option.disabled) {
        return
      }

      if (props.option.hasChildren) {
        call(props.onToggle, props.option)
        return
      }

      call(props.onSelect, props.option)
    }

    function renderItem() {
      const node = renderDefaultItem()
      const render = props.option.option.render

      if (!render) {
        return node
      }

      return render({ node }, props.option.option, props.option.active)
    }

    function renderGroupLabel() {
      const label = renderLabel()

      if (!label) {
        return
      }

      return h('div', { class: n('group-label') }, [h(MaybeVNode, { is: label })])
    }

    function renderDefaultItem() {
      return withDirectives(
        h(
          'div',
          {
            class: classes(
              n('item'),
              [props.option.active, n('--item-active')],
              [props.option.activePath, n('--item-active-path')],
              [props.option.disabled, n('--item-disabled')],
              [props.ripple && !props.option.disabled, n('--item-ripple-enabled')],
            ),
            style: {
              '--tree-menu-level': props.option.level,
            },
            onClick: handleClick,
          },
          [
            h('span', { class: n('item-indicator') }),
            h('span', { class: n('item-content') }, [
              renderIcon(),
              h('span', { class: n('label') }, [h(MaybeVNode, { is: renderLabel() })]),
              renderExpandIcon(),
            ]),
          ],
        ),
        [[Ripple, { disabled: !props.ripple || props.option.disabled }]],
      )
    }

    function renderIcon() {
      const iconVNode = callOrReturn(props.option.icon, props.option.option, props.option.active)

      if (!iconVNode) {
        return
      }

      return h('span', { class: n('icon-container') }, [
        isString(iconVNode)
          ? h(VarIcon, {
              class: n('icon'),
              name: iconVNode,
              namespace: props.option.option.namespace,
              varTreeMenuCover: '',
            })
          : h(MaybeVNode, { class: n('icon'), is: iconVNode }),
      ])
    }

    function renderLabel() {
      return callOrReturn(props.option.label, props.option.option, props.option.active)
    }

    function renderExpandIcon() {
      if (!props.option.hasChildren) {
        return h('span', { class: n('expand-placeholder') })
      }

      return h('span', { class: classes(n('expand-icon'), [props.option.expanded, n('--expand-icon-expanded')]) }, [
        h(VarIcon, { name: 'chevron-down', varTreeMenuCover: '' }),
      ])
    }

    return {
      renderGroupLabel,
      renderItem,
      n,
    }
  },
})
</script>
