<template>
	<div
		class="var-snackbar"
		:style="{ alignItems, pointerEvents: forbidClick ? 'auto' : 'none' }"
		v-show="show"
	>
		<div
			:class="`var-snackbar__wrapper var-elevation--4 ${
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
import { defineComponent, reactive, computed, watch } from 'vue'
import Loading from '../loading'
import Button from '../button'
import { useZIndex } from '../context/zIndex'
import { useTeleport } from '../utils/teleport'
import { props } from './propsEmits'
import { useLock } from '../context/lock'

export default defineComponent({
	name: 'VarSnackbar',
	components: {
		[Loading.name]: Loading,
		[Button.name]: Button,
	},
	props,
	emits: ['update:show'],
	setup(props, ctx) {
		const { disabled } = useTeleport()
		const { zIndex } = useZIndex(props, 'show', 2)
		useLock(props, 'show', 'lockScroll')
		const alignItems = computed(() => {
			if (props.position === 'top') return 'flex-start'
			if (props.position === 'center') return 'center'
			if (props.position === 'bottom') return 'flex-end'
		})
		const snackbarStyle = reactive({
			backgroundColor: props.color,
			width: typeof props.width === 'string' ? props.width : props.width + 'px',
			height:
				typeof props.height === 'string' ? props.height : props.height + 'px',
			zIndex,
		})

		watch(
			() => props.show,
			(show) => {
				console.log('watch')
				if (show) {
					props.onOpen && props.onOpen()
					setTimeout(() => {
						ctx.emit('update:show', false)
					}, props.duration)
				} else if (show === false) {
					props.onClose && props.onClose()
				}
			}
		)
		return {
			snackbarStyle,
			alignItems,
			disabled,
		}
	},
})
</script>

<style lang="less">
@import './snackbar';
</style>
