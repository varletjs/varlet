<template>
	<div class="var-snackbar" :style="{ pointerEvents: forbidClick ? 'auto' : 'none' }" v-show="show">
		<div :class="snackbarClass" :style="snackbarStyle">
			<div :class="`var-snackbar__content${contentClass ? ` ${contentClass}` : ''}`">
				<var-loading :type="loadingType" :size="loadingSize" v-if="type === 'loading'" />
				<slot>
					{{ content }}
				</slot>
			</div>
			<div class="var-snackbar__action">
				<var-icon v-if="type === 'success'" name="checkbox-marked-circle"></var-icon>
				<var-icon v-if="type === 'warning'" name="warning"></var-icon>
				<var-icon v-if="type === 'info'" name="information"></var-icon>
				<var-icon v-if="type === 'error'" name="error"></var-icon>
				<slot name="action"></slot>
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
		}
	},
})
</script>

<style lang="less">
@import './core';
</style>
