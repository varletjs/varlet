<template>
	<transition
		name="var-snackbar-fade"
		@after-enter="onOpened"
		@after-leave="onClosed"
	>
		<var-snackbar-core
			v-bind="$props"
			v-on="$event"
			@update:show="update"
			class="var--absolute var-snackbar-transition"
		>
			<slot>
				{{ content }}
			</slot>
			<template #action>
				<slot name="action"></slot>
			</template>
		</var-snackbar-core>
	</transition>
</template>

<script>
import { defineComponent } from 'vue'
import SnackbarCore from '../snackbar-core'
import { props, emits } from '../snackbar-core/propsEmits'

export default defineComponent({
	name: 'VarSnackbar',
	components: {
		[SnackbarCore.name]: SnackbarCore,
	},
	props,
	emits,
	setup(props, { emit }) {
		const update = (value) => {
			emit('update:show', value)
		}
		return {
			update,
		}
	},
})
</script>
