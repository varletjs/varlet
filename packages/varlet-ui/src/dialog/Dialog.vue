<template>
	<var-popup
		class="var-dialog__popup-radius"
		v-model:show="popupShow"
		:overlay="overlay"
		:overlay-class="overlayClass"
		:lock-scroll="lockScroll"
		:close-on-click-overlay="popupCloseOnClickOverlay"
		:teleport="teleport"
		@open="$props.onOpen"
		@close="$props.onClose"
		@opened="$props.onOpened"
		@closed="$props.onClosed"
		@click-overlay="handleClickOverlay"
	>
		<div class="var--box var-dialog" v-bind="$attrs">
			<div class="var-dialog__title">
				<slot name="title">{{ title }}</slot>
			</div>
			<div
				class="var-dialog__message"
				:style="{
					'text-align': messageAlign,
				}"
			>
				<slot>
					{{ message }}
				</slot>
			</div>
			<div class="var-dialog__actions">
				<var-button
					class="var-dialog__button"
					:color="cancelButtonColor"
					:background="cancelButtonBackground"
					v-if="cancelButton"
					@click="cancel"
				>
					{{ cancelButtonText }}
				</var-button>
				<var-button
					class="var-dialog__button"
					:color="confirmButtonColor"
					:background="confirmButtonBackground"
					v-if="confirmButton"
					@click="confirm"
				>
					{{ confirmButtonText }}
				</var-button>
			</div>
		</div>
	</var-popup>
</template>

<script lang="ts">
import Popup from '../popup'
import Button from '../button'
import { props } from './props'
import { defineComponent, ref, Ref, watch } from 'vue'

export default defineComponent({
	name: 'VarDialog',
	components: {
		[Popup.name]: Popup,
		[Button.name]: Button,
	},
	inheritAttrs: false,
	props,
	setup(props) {
		// 需要透传到popup组件里并需要特殊处理的参数
		const popupShow: Ref<boolean> = ref(false)
		const popupCloseOnClickOverlay: Ref<boolean> = ref(false)

		watch(
			() => props.show,
			(newValue) => {
				popupShow.value = newValue
			},
			{ immediate: true }
		)
		watch(
			() => props.closeOnClickOverlay,
			(newValue) => {
				if (props.onBeforeClose) {
					// 异步关闭情况下 禁止点击弹出层关闭
					popupCloseOnClickOverlay.value = false
					return
				}
				popupCloseOnClickOverlay.value = newValue
			},
			{ immediate: true }
		)

		// 异步关闭回调
		const done = () => props['onUpdate:show']?.(false)

		const handleClickOverlay = () => {
			props.onClickOverlay?.()
			if (props.closeOnClickOverlay === false) {
				return
			}
			if (props.onBeforeClose) {
				props.onBeforeClose(done)
				return
			}
			props['onUpdate:show']?.(false)
		}

		const confirm = () => {
			props.onConfirm?.()
			if (props.beforeClose) {
				props.onBeforeClose(done)
				return
			}
			props['onUpdate:show']?.(false)
		}

		const cancel = () => {
			props.onCancel?.()
			if (props.onBeforeClose) {
				props.onBeforeClose(done)
				return
			}
			props['onUpdate:show']?.(false)
		}

		return {
			popupShow,
			popupCloseOnClickOverlay,
			handleClickOverlay,
			confirm,
			cancel,
		}
	},
})
</script>

<style lang="less">
@import './dialog';
</style>
