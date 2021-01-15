<template>
	<div class="var-snackbar" :style="{ pointerEvents: forbidClick ? 'auto' : 'none' }" v-show="show">
		<div :class="snackbarClass" :style="snackbarStyle">
			<div :class="`var-snackbar__content${contentClass ? ` ${contentClass}` : ''}`">
				<slot>{{ content }}</slot>
			</div>
			<div class="var-snackbar__action">
				<var-icon v-if="iconName" :transition="200" :name="iconName" />
				<var-loading v-if="type === 'loading'" :type="loadingType" :size="loadingSize" />
				<slot name="action" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, ref, Ref, onMounted, computed } from 'vue'
import Loading from '../loading'
import Button from '../button'
import Icon from '../icon'
import { useZIndex } from '../context/zIndex'
import { props } from './props'
import { useLock } from '../context/lock'
import { SNACKBAR_TYPE } from './index'

export default defineComponent({
	name: 'VarSnackbarCore',
	components: {
		[Loading.name]: Loading,
		[Button.name]: Button,
		[Icon.name]: Icon,
	},
	props,
	setup(props) {
		const timer: Ref = ref(null)
		const { zIndex } = useZIndex(props, 'show', 1)
		useLock(props, 'show', 'lockScroll')

		const snackbarStyle = reactive({
			zIndex,
		})
		const snackbarClass = computed(() => {
			const { position, vertical, type } = props
			const baseClass = `var-snackbar__wrapper var-snackbar__wrapper-${position} var-elevation--4`
			const verticalClass = vertical ? ' var-snackbar__vertical' : ''
			const typeClass = type && SNACKBAR_TYPE.includes(type) ? ` var-snackbar__wrapper-${type}` : ''
			return `${baseClass}${verticalClass}${typeClass}`
		})

		const iconName = computed(() => {
			switch (props.type) {
				case 'success':
					return 'checkbox-marked-circle'
				case 'warning':
					return 'warning'
				case 'info':
					return 'information'
				case 'error':
					return 'error'
				default:
					return ''
			}
		})

		watch(
			() => props.show,
			(show) => {
				if (show) {
					props.onOpen?.()
					timer.value = setTimeout(() => {
						props['onUpdate:show']?.(false)
					}, props.duration)
				} else if (show === false) {
					clearTimeout(timer.value)
					props.onClose?.()
				}
			}
		)

		watch(
			() => props._update,
			() => {
				clearTimeout(timer.value)
				timer.value = setTimeout(() => {
					props['onUpdate:show']?.(false)
				}, props.duration)
			}
		)

		onMounted(() => {
			if (props.show) {
				props.onOpen && props.onOpen()
				timer.value = setTimeout(() => {
					props['onUpdate:show']?.(false)
				}, props.duration)
			}
		})

		return {
			snackbarStyle,
			snackbarClass,
			iconName,
		}
	},
})
</script>

<style lang="less">
@import './core';
</style>
