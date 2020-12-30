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
				round ? 'var-chip--round' : null,
				plain ? `var-chip--plain-${type}` : `var-chip--${type}`,
				plain ? `var-chip--plain` : `var-elevation--2`,
			]"
      :style="{
        color: textColor ? textColor : plain ? color : null,
        background: plain ? '#fff' : color,
        borderColor: plain ? color : color ? color : 'none',
        }"
    >
        <slot name="left"></slot>
			<slot/>
			<slot name="right"></slot>
			<span v-if="closable " class="var-chip--close" @click="$props.onClose">
        <var-icon :name="`${iconName?iconName:'close-circle'}`"></var-icon>
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
			[Icon.name]: Icon
		},
		directives: { Ripple },
		props,
		setup(props) {
			console.log(props)
		}
	})
</script>

<style lang="less">
  @import './chip';
</style>
