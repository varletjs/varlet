import { h, reactive, TransitionGroup } from 'vue'
import VarSnackbarCore from '../snackbar-core'
import VarSnackbar from './Snackbar.vue'
import { mountInstance } from '../utils/components'
import { isBasicObject } from '../utils/shared'

interface SnackbarOptions {
	type?: 'loading' | 'success' | 'error' | 'warning' | 'info'
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

const Snackbar: any = function (options: SnackbarOptions): any {
	const snackOptions: SnackbarOptions = isBasicObject(options) ? options : {}
	const reactiveSnackOptions: SnackbarOptions = reactive<SnackbarOptions>(
		snackOptions
	)
	let snackbarList: any[]
	const Host = {
		setup() {
			return () => {
				snackbarList = Snackbar.instances.map(
					({ id, reactiveSnackOptions, _update }: any) => {
						if (reactiveSnackOptions.forbidClick) {
							const transitionGroupEl = document.querySelector(
								'.var-transition-group'
							)
							;(transitionGroupEl as HTMLElement).classList.add(
								'var-pointer-auto'
							)
						}
						return h(VarSnackbarCore, {
							...reactiveSnackOptions,
							...{
								key: id,
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
						onAfterLeave: removeInstance,
					},
					snackbarList
				)
			}
		},
	}

	if (!Snackbar.isMount) {
		Snackbar.isMount = true
		mountInstance(Host)
	}

	const id = Date.now()
	reactiveSnackOptions.show = true

	if (Snackbar.isAllowMultiple) {
		Snackbar.instances.push({
			id,
			reactiveSnackOptions,
		})
	} else {
		const { length } = Snackbar.instances
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
	return {
		clear: () => {
			for (let i = 0; i < snackbarList.length; i++) {
				if (snackbarList[i].key === id) {
					snackbarList[i].component.emit('update:show', false)
				}
			}
		},
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

Snackbar.allowMultiple = function (bool = false) {
	this.isAllowMultiple = !!bool
}

Snackbar.isAllowMultiple = true

Snackbar.instances = reactive([]) as any[]

Snackbar.Component = VarSnackbar

const transitionGroupProps = {
	name: 'var-snackbar-fade',
	tag: 'div',
	class: 'var-transition-group',
	afterEnter: 'onOpened',
	afterLeave: 'onClosed',
}

function removeInstance(element: any) {
	element.parentElement &&
		element.parentElement.classList.remove('var-pointer-auto')
	const { key } = element.__vueParentComponent.vnode
	for (let i = 0; i < Snackbar.instances.length; i++) {
		if (Snackbar.instances[i].id === key) Snackbar.instances.splice(i, 1)
	}
}

function getTop(postion: string) {
	if (postion === 'center') return '45%'
	if (postion === 'bottom') return '85%'
	return '5%'
}

export default Snackbar
