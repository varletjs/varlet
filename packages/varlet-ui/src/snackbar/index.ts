import VarSnackbar from './Snackbar.vue'
import { mountInstance } from '../utils/components'
import { h, reactive, TransitionGroup } from 'vue'

interface SnackbarOptions {
	type?: 'loading' | 'success' | 'error' | 'warning' | 'info'
	content?: string
	position?: 'top' | 'center' | 'bottom'
	loadingType?: string
	loadingSize?: string
	teleport?: string
	lockScroll?: boolean
	contentClass?: string
	height?: number | string
	width?: number | string
	color?: string
	duration?: number
	vertical?: boolean
	show?: boolean
	forbidClick?: boolean
	onOpen?: () => void
	onClose?: () => void
	onOpened?: () => void
	onClosed?: () => void
	_isDeclarative?: boolean
}

const Snackbar: any = function (options: SnackbarOptions): void {
	const snackOptions: SnackbarOptions =
		Object.prototype.toString.call(options) === '[object Object]' ? options : {}
	const reactiveSnackOptions: SnackbarOptions = reactive<SnackbarOptions>(
		snackOptions
	)

	const id = Date.now()

	const Host = {
		setup() {
			return () =>
				h(
					TransitionGroup,
					{
						...props,
						...{
							class: 'var-transition-group',
						},
						onAfterLeave: (element: any) => {
							if (element.parentElement) {
								element.parentElement.classList.remove('var-pointer-auto')
							}
							const id = element.__vueParentComponent.vnode.key
							for (let i = 0; i < Snackbar.instances.length; i++) {
								if (Snackbar.instances[i].id === id)
									Snackbar.instances.splice(i, 1)
							}
						},
					},
					Snackbar.instances.map(
						({ id, reactiveSnackOptions, _update }: any) => {
							if (reactiveSnackOptions.forbidClick) {
								const transitionGroupEl = document.querySelector(
									'.var-transition-group'
								)
								;(transitionGroupEl as HTMLElement).classList.add(
									'var-pointer-auto'
								)
							}
							// reactiveSnackOptions.forbidClick && 'var-pointer-auto'
							return h(VarSnackbar, {
								...reactiveSnackOptions,
								...{
									key: id,
									_update,
									'onUpdate:show': (value: boolean) => {
										reactiveSnackOptions.show = value
									},
								},
							})
						}
					)
				)
		},
	}

	if (!Snackbar.isMount) {
		Snackbar.isMount = true
		mountInstance(Host)
	}

	if (Snackbar.isAllowMultiple) {
		reactiveSnackOptions.show = true
		reactiveSnackOptions._isDeclarative = false
		Snackbar.instances.push({
			id,
			reactiveSnackOptions,
		})
	} else {
		const { length } = Snackbar.instances
		reactiveSnackOptions.show = true
		reactiveSnackOptions._isDeclarative = false
		const id = Date.now()
		if (length === 1) {
			Snackbar.instances[0].reactiveSnackOptions = {
				...Snackbar.instances[0].reactiveSnackOptions,
				...reactiveSnackOptions,
			}
			Snackbar.instances[0]._update = `update-${id}`
		} else {
			Snackbar.instances.push({
				id,
				reactiveSnackOptions,
				_update: `update-${id}`,
			})
		}
	}
}

;['success', 'warning', 'info', 'error', 'loading'].forEach((type: any) => {
	Snackbar[type] = (options: SnackbarOptions | string) => {
		if (typeof options === 'string') {
			options = {
				content: options,
				type,
			}
		} else {
			options.type = type
		}
		return Snackbar(options)
	}
})

Snackbar.install = function (app: any) {
	app.component(VarSnackbar.name, VarSnackbar)
}

Snackbar.allowMultiple = function (bool = true) {
	this.isAllowMultiple = !!bool
}

Snackbar.isAllowMultiple = true

Snackbar.instances = reactive([]) as any[]

Snackbar.Component = VarSnackbar

const props = {
	name: 'var-snackbar-fade',
	tag: 'div',
	afterEnter: 'onOpened',
	afterLeave: 'onClosed',
}

export default Snackbar
