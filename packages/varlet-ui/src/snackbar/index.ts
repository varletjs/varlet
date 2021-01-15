import { h, reactive, TransitionGroup, App, RendererElement } from 'vue'
import VarSnackbarCore from './core.vue'
import VarSnackbar from './Snackbar.vue'
import { mountInstance } from '../utils/components'
import { isBaseObject } from '../utils/shared'

export type SnackbarType = 'success' | 'warning' | 'info' | 'error' | 'loading'

type SnackbarHandel = {
	clear: () => void
}

interface SnackbarOptions {
	type?: SnackbarType
	content?: string
	position?: 'top' | 'center' | 'bottom'
	loadingType?: string
	loadingSize?: string
	teleport?: string
	lockScroll?: boolean
	contentClass?: string
	duration?: number
	vertical?: boolean
	show?: boolean
	forbidClick?: boolean
	onOpen?: () => void
	onClose?: () => void
	onOpened?: () => void
	onClosed?: () => void
}

interface UniqSnackbarOptions {
	id: number
	reactiveSnackOptions: SnackbarOptions
	_update?: string
}

interface Snackbar {
	(options: SnackbarOptions): SnackbarHandel

	install(app: App): void

	allowMultiple(bool: boolean): void

	success(options: SnackbarOptions | string): SnackbarHandel

	warning(options: SnackbarOptions | string): SnackbarHandel

	info(options: SnackbarOptions | string): SnackbarHandel

	error(options: SnackbarOptions | string): SnackbarHandel

	loading(options: SnackbarOptions | string): SnackbarHandel

	clear(): void

	isAllowMultiple: boolean
	isMount: boolean | undefined
	uniqSnackbarOptions: UniqSnackbarOptions[]
	Component: RendererElement
}

export const SNACKBAR_TYPE: Array<SnackbarType> = ['loading', 'success', 'warning', 'info', 'error']

const transitionGroupProps: any = {
	name: 'var-snackbar-fade',
	tag: 'div',
	class: 'var-transition-group',
	afterEnter: 'onOpened',
	afterLeave: 'onClosed',
}

const TransitionGroupHost = {
	setup() {
		return () => {
			const snackbarList = Snackbar.uniqSnackbarOptions.map(
				({ id, reactiveSnackOptions, _update }: UniqSnackbarOptions) => {
					if (reactiveSnackOptions.forbidClick) {
						const transitionGroupEl = document.querySelector('.var-transition-group')
						;(transitionGroupEl as HTMLElement).classList.add('var-pointer-auto')
					}
					if (Snackbar.isAllowMultiple) reactiveSnackOptions.position = 'top'
					return h(VarSnackbarCore, {
						...reactiveSnackOptions,
						...{
							key: id,
							'data-id': id,
							style: {
								position: 'relative',
								top: getTop(reactiveSnackOptions.position),
							},
							_update,
							'onUpdate:show': (value: boolean) => {
								reactiveSnackOptions.show = value
							},
						},
					})
				}
			)

			return h(
				TransitionGroup,
				{
					...transitionGroupProps,
					onAfterLeave: removeUniqOption,
				},
				// remove [Vue warn]: Non-function value encountered for default slot. Prefer function slots for better performance
				() => snackbarList
			)
		}
	},
}

const Snackbar: Snackbar = <Snackbar>function (options: SnackbarOptions = {}): SnackbarHandel {
	const snackOptions: SnackbarOptions = isBaseObject(options) ? options : {}
	const reactiveSnackOptions: SnackbarOptions = reactive<SnackbarOptions>(snackOptions)
	reactiveSnackOptions.show = true

	if (!Snackbar.isMount) {
		Snackbar.isMount = true
		mountInstance(TransitionGroupHost)
	}

	const id = Date.now()
	const { length } = Snackbar.uniqSnackbarOptions
	const uniqSnackbarOptionItem: UniqSnackbarOptions = {
		id,
		reactiveSnackOptions,
	}

	if (length === 0 || Snackbar.isAllowMultiple) {
		addUniqOption(uniqSnackbarOptionItem)
	} else {
		const _update = `update-${id}`
		updateUniqOption(reactiveSnackOptions, _update)
	}

	return {
		clear() {
			if (!Snackbar.isAllowMultiple && Snackbar.uniqSnackbarOptions.length)
				Snackbar.uniqSnackbarOptions[0].reactiveSnackOptions.show = false
			else reactiveSnackOptions.show = false
		},
	}
}

SNACKBAR_TYPE.forEach((type) => {
	Snackbar[type] = (options: SnackbarOptions | string): SnackbarHandel => {
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

Snackbar.install = function (app: App) {
	app.component(VarSnackbar.name, VarSnackbar)
}

Snackbar.allowMultiple = function (bool = false) {
	if (bool !== Snackbar.isAllowMultiple) {
		for (let i = 0; i < Snackbar.uniqSnackbarOptions.length; i++) {
			Snackbar.uniqSnackbarOptions[i].reactiveSnackOptions.show = false
		}
		this.isAllowMultiple = !!bool
	}
}

Snackbar.clear = function () {
	Snackbar.uniqSnackbarOptions.forEach((snackbar: UniqSnackbarOptions) => {
		snackbar.reactiveSnackOptions.show = false
	})
}

Snackbar.isAllowMultiple = false

Snackbar.isMount = false

Snackbar.uniqSnackbarOptions = reactive<UniqSnackbarOptions[]>([])

Snackbar.Component = VarSnackbar

function removeUniqOption(element: HTMLElement): void {
	element.parentElement && element.parentElement.classList.remove('var-pointer-auto')
	const id = element.getAttribute('data-id')
	for (let i = 0; i < Snackbar.uniqSnackbarOptions.length; i++) {
		if (Snackbar.uniqSnackbarOptions[i].id === +(id as string)) Snackbar.uniqSnackbarOptions.splice(i, 1)
	}
}

function addUniqOption(uniqSnackbarOptionItem: UniqSnackbarOptions) {
	Snackbar.uniqSnackbarOptions.push(uniqSnackbarOptionItem)
}

function updateUniqOption(reactiveSnackOptions: SnackbarOptions, _update: string) {
	Snackbar.uniqSnackbarOptions[0].reactiveSnackOptions = {
		...Snackbar.uniqSnackbarOptions[0].reactiveSnackOptions,
		...reactiveSnackOptions,
	}
	Snackbar.uniqSnackbarOptions[0]._update = _update
}

function getTop(position = 'top'): string {
	if (position === 'center') return '45%'
	if (position === 'bottom') return '85%'
	return '5%'
}

export default Snackbar
