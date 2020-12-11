<template>
	<teleport :to="teleport" :disabled="disabled">
		<transition
			name="var-snackbar-fade"
			@after-enter="onOpened"
			@after-leave="onClosed"
		>
			<var-snackbar-core
				v-bind="$props"
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
	</teleport>
</template>

<script>
import { defineComponent } from 'vue'
import SnackbarCore from '../snackbar-core'
import { useTeleport } from '../utils/teleport'
import { props, emits } from '../snackbar-core/propsEmits'

export default defineComponent({
	name: 'VarSnackbar',
	components: {
		[SnackbarCore.name]: SnackbarCore,
	},
	props,
	emits,
	setup(props, { emit }) {
		const { disabled } = useTeleport()
		const update = (value) => {
			emit('update:show', value)
		}
		return {
			update,
			disabled,
		}
	},
})
</script>
