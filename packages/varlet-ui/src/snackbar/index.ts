import VarSnackbar from './Snackbar.vue'
import { mountInstance } from '../utils/components'
import { h, reactive, TransitionGroup, nextTick } from 'vue'

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
}

const Snackbar: any = function (options: SnackbarOptions): void {
	const snackOptions: SnackbarOptions =
		Object.prototype.toString.call(options) === '[object Object]' ? options : {}
	const reactiveSnackOptions: SnackbarOptions = reactive<SnackbarOptions>(
		snackOptions
	)
	const Host = {
		setup() {
			return () =>
				h(
					TransitionGroup,
					{
						...props,
					},
					Snackbar.instances.map((value: any) => {
						console.log(reactiveSnackOptions)
						return h(value, {
							...reactiveSnackOptions,
							...{
								key: value.id,
								'onUpdate:show': (value: boolean) => {
									reactiveSnackOptions.show = value
								},
							},
						})
					})
				)
		},
	}

	if (!Snackbar.isMount) {
		Snackbar.isMount = true
		const { unmountInstance } = mountInstance(Host)
	}

	if (Snackbar.allowMultiple) {
		VarSnackbar.id = Date.now()
		Snackbar.instances.push(VarSnackbar)
		nextTick(() => {
			reactiveSnackOptions.show = true
		})
	}
}

;['success', 'warning', 'info', 'error', 'loading'].forEach((type: string) => {
	Snackbar[type] = (options: any) => {
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
	// if (Snackbar.allowMultiple) {
	//
	// }
	app.component(VarSnackbar.name, VarSnackbar)
}

Snackbar.allowMultiple = true

Snackbar.isMount = false

Snackbar.instances = reactive([])

Snackbar.Component = VarSnackbar

const props = {
	name: 'var-fade',
	afterEnter: 'onOpened',
	afterLeave: 'onClosed',
}

// export default createSnackbar
export default Snackbar
