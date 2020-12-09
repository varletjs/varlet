<template>
	<button
		v-ripple="{ disabled }"
		class="var--box var-button var-elevation--3"
		:class="[
			`var-button--${type}`,
			`var-button--${size}`,
			block ? 'var--block' : 'var--inline',
			round ? 'var-button--round' : null,
			disabled ? 'var-button--disabled' : null,
		]"
		:style="{
			color: color,
			background: background,
		}"
		:disabled="disabled"
		@click="trigger"
	>
		<var-loading :type="loadingType" :size="loadingSize" v-if="loading" />
		<slot v-else />
	</button>
</template>

<script lang="ts">
import Ripple from '../ripple'
import Loading from '../Loading'
import { defineComponent } from 'vue'
import { props, emits } from './propsEmits'

export default defineComponent({
	name: 'VarButton',
	components: {
		[Loading.name]: Loading,
	},
	directives: { Ripple },
	props,
	emits,
	setup(props, { emit }) {
	  const trigger = () => {
      if (props.loading) {
        return
      }

      emit('click')
    }

		return {
      trigger
		}
	},
})
</script>

<style lang="less">
@import './button';
</style>
