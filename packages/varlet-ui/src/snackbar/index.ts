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

	const id = Date.now()

	const Host = {
		setup() {
			return () =>
				h(
					TransitionGroup,
					{
						...props,
						...{
							style: {
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
							},
						},
					},
					Snackbar.instances.map(
						({ id, reactiveSnackOptions, _update }: any) => {
							return h(VarSnackbar, {
								...reactiveSnackOptions,
								...{
									key: id,
									_update,
									'onUpdate:show': (value: boolean) => {
										reactiveSnackOptions.show = value
									},
									onClosed: () => {
										for (let i = 0; i < Snackbar.instances.length; i++) {
											// if (Snackbar.instances[i].id === id) Snackbar.instances.splice(i, 1)
										}
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

	if (Snackbar.allowMultiple) {
		Snackbar.instances.push({
			id,
			reactiveSnackOptions,
		})

		nextTick(() => {
			reactiveSnackOptions.show = true
		})
	} else {
		const { length } = Snackbar.instances
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
			nextTick(() => {
				reactiveSnackOptions.show = true
			})
		}
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
	app.component(VarSnackbar.name, VarSnackbar)
}

Snackbar.allowMultiple = true

Snackbar.isMount = false

Snackbar.instances = reactive([])

Snackbar.Component = VarSnackbar

const props = {
	name: 'var-snackbar-fade',
	tag: 'div',
	afterEnter: 'onOpened',
	afterLeave: 'onClosed',
}

export default Snackbar
