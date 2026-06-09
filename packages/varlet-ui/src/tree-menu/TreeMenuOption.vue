<template>
  <div :class="n('option')">
    <div v-if="option.type === 'divider'" :class="n('divider')" />

    <template v-else-if="option.type === 'group'">
      <div v-if="labelVNode" :class="n('group-label')">
        <maybe-v-node :is="labelVNode" />
      </div>

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

    <div
      v-else
      v-ripple="{ disabled: !ripple || option.disabled }"
      :class="
        classes(
          n('item'),
          [option.active, n('--item-active')],
          [option.activePath, n('--item-active-path')],
          [option.disabled, n('--item-disabled')],
          [ripple && !option.disabled, n('--item-ripple-enabled')],
        )
      "
      :style="styles"
      @click="handleClick"
    >
      <span :class="n('item-indicator')" />

      <span :class="n('item-content')">
        <span v-if="iconVNode" :class="n('icon-container')">
          <var-icon
            v-if="isString(iconVNode)"
            :class="n('icon')"
            :name="iconVNode"
            :namespace="option.option.namespace"
            var-tree-menu-cover
          />
          <maybe-v-node v-else :class="n('icon')" :is="iconVNode" />
        </span>

        <span :class="n('label')">
          <maybe-v-node :is="labelVNode" />
        </span>

        <span
          v-if="option.hasChildren"
          :class="classes(n('expand-icon'), [option.expanded, n('--expand-icon-expanded')])"
        >
          <var-icon name="chevron-down" var-tree-menu-cover />
        </span>
        <span v-else :class="n('expand-placeholder')" />
      </span>
    </div>

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
import { computed, defineComponent, type CSSProperties, type PropType } from 'vue'
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
    const iconVNode = computed(() => callOrReturn(props.option.icon, props.option.option, props.option.active))
    const labelVNode = computed(() => callOrReturn(props.option.label, props.option.option, props.option.active))
    const styles = computed<CSSProperties>(() => ({
      '--tree-menu-level': props.option.level,
    }))

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

    return {
      isString,
      iconVNode,
      labelVNode,
      styles,
      n,
      classes,
      handleClick,
    }
  },
})
</script>
