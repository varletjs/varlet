<template>
	<div
		class="var-snackbar"
		:style="{ pointerEvents: forbidClick ? 'auto' : 'none' }"
		v-show="show"
	>
		<div
			:class="`var-snackbar__wrapper var-snackbar__wrapper-${position} var-elevation--4 ${
				vertical ? 'var-snackbar__vertical' : ''
			}`"
			:style="snackbarStyle"
		>
			<div :class="`var-snackbar__content ${contentClass}`">
				<var-loading
					:type="loadingType"
					:size="loadingSize"
					v-if="type === 'loading'"
				/>
				<slot>
					{{ content }}
				</slot>
			</div>
			<div class="var-snackbar__action">
				<var-button
					type="primary"
					size="small"
					v-if="['success', 'error', 'info', 'warning'].includes(type)"
				>
					{{ type }}
				</var-button>
				<slot name="action"></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, ref, Ref, onMounted } from 'vue'
import Loading from '../loading'
import Button from '../button'
import { useZIndex } from '../context/zIndex'
import { useTeleport } from '../utils/teleport'
import { props, emits } from './propsEmits'
import { useLock } from '../context/lock'

export default defineComponent({
	name: 'VarSnackbarCore',
	components: {
		[Loading.name]: Loading,
		[Button.name]: Button,
	},
	props,
	emits,
	setup(props, ctx) {
		const timer: Ref<any> = ref(null)
		const { disabled } = useTeleport()
		const { zIndex } = useZIndex(props, 'show', 1)
		useLock(props, 'show', 'lockScroll')

		const snackbarStyle = reactive({
			zIndex,
		})

		watch(
			() => props.show,
			(show) => {
				if (show) {
					props.onOpen && props.onOpen()
					timer.value = setTimeout(() => {
						ctx.emit('update:show', false)
					}, props.duration)
				} else if (show === false) {
					props.onClose && props.onClose()
				}
			}
		)
		watch(
			() => props._update,
			() => {
				clearTimeout(timer.value)
				timer.value = setTimeout(() => {
					ctx.emit('update:show', false)
				}, props.duration)
			}
		)

		onMounted(() => {
			if (props.show) {
				props.onOpen && props.onOpen()
				timer.value = setTimeout(() => {
					ctx.emit('update:show', false)
				}, props.duration)
			}
		})
		return {
			snackbarStyle,
			disabled,
		}
	},
})
</script>

<style lang="less">
@import 'snackbarCore';
</style>
