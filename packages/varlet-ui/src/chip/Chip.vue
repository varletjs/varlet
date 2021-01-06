<template>
  <transition name="var-fade">
    <!--        :style="{-->
    <!--        color: textcolor ? textcolor : hollow ? color : '',-->
    <!--        background: hollow ? '#fff' : color,-->
    <!--        borderColor: hollow ? color : color ? color : 'none',-->
    <!--        }"-->
    <span
      v-ripple="{ disabled }"
      class="var-chip var--box"
      :class="[
				`var-chip--${size}`,
				block ? 'var--flex' : 'var--inline-flex',
				{'var-chip--round':round},
				plain ? `var-chip--plain-${type}` : `var-chip--${type}`,
				plain ? `var-chip--plain` : `var-elevation--2`,
			]"
      :style="{
        color: fontColor,
        background:background,
        borderColor: borderColor,
        }"
    >
        <slot name="left"></slot>
			<slot/>
			<slot name="right"></slot>
			<span v-if="closable " class="var-chip--close" @click="$props.onClose">
        <var-icon :name="`${iconName ? iconName: 'close-circle'}`"></var-icon>
      </span>
		</span>
  </transition>
</template>

<script lang="ts">
	import Ripple from '../ripple'
	import { defineComponent, Ref, ref } from 'vue'
	import { props } from './props'
	import Icon from '../icon'

	export default defineComponent({
		name: 'VarChip',
		components: {
			[Icon.name]: Icon
		},
		directives: { Ripple },
		props,
		setup(props) {
			const fontColor: Ref<string|null> = ref(null)
			const background: Ref<string|null> = ref(null)
			const borderColor: Ref<string|null> = ref(null)
			fontColor.value = props.plain ? props.textColor || props.color || null : props.color ? props.textColor || '#fff' : null
			background.value = !props.plain ? props.color || null : null
			borderColor.value = props.plain ? props.color || null : null
			return {
				fontColor,
				background,
				borderColor
			}
		}
	})
</script>

<style lang="less">
  @import './chip';
</style>
