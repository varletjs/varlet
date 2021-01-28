<template>
	<transition name="var-fade">
		<span
			v-bind="$attrs"
			v-ripple="{ disabled }"
			:class="[
				`var-chip--${size}`,
				block ? 'var--flex' : 'var--inline-flex',
				plain ? `var-chip--plain-${type}` : `var-chip--${type}`,
				{ 'var-chip--round': round, 'var-chip--plain': plain },
			]"
			:style="
				plain
					? {
							color: textColor || color,
							borderColor: color,
					  }
					: {
							color: textColor,
							background: color,
					  }
			"
			class="var-chip var--box"
		>
			<slot name="left"></slot>
			<span :class="[`var-chip--text-${size}`]">
				<slot />
			</span>
			<slot name="right"></slot>
			<span v-if="closable" class="var-chip--close" @click="$props.onClose">
				<var-icon :name="`${iconName ? iconName : 'close-circle'}`"></var-icon>
			</span>
		</span>
	</transition>
</template>

<script lang="ts">
import Ripple from '../ripple'
import { defineComponent } from 'vue'
import { props } from './props'
import Icon from '../icon'

export default defineComponent({
  name: 'VarChip',
  components: {
    [Icon.name]: Icon,
  },
  directives: { Ripple },
  inheritAttrs: false,
  props,
  setup(props) {
    const controlStyle = () => {
      if (props.plain) {
        return {
          color: props.textColor || props.color,
          borderColor: props.color,
        }
      }

      return {
        color: props.textColor,
        background: props.color,
      }
    }
    return {
      controlStyle,
    }
  },
})
</script>

<style lang="less">
@import './chip';
</style>
