import {
	createApp,
	Component,
	h,
	getCurrentInstance,
	inject,
	onUnmounted,
	computed,
	provide,
	reactive,
	VNodeNormalizedChildren,
	VNode,
	isVNode,
	ComponentInternalInstance,
	ComputedRef,
	onUpdated,
	onMounted,
} from 'vue'
import { removeItem } from './shared'

export interface MountInstance {
	instance: any
	unmount: () => void
}

export interface ChildrenCounter {
	collect(instance: ComponentInternalInstance): void
	clear(instance: ComponentInternalInstance): void
	instances: ComponentInternalInstance[]
}

export function pickProps(props: any, propsKey: string): any
export function pickProps(props: any, propsKey: string[]): any
export function pickProps(props: any, propsKey: any): any {
	return Array.isArray(propsKey)
		? propsKey.reduce((pickedProps: any, key) => {
				pickedProps[key] = props[key]
				return pickedProps
		  }, {})
		: props[propsKey]
}

export function mount(component: Component): MountInstance {
	const app = createApp(component)
	const host = document.createElement('div')
	document.body.appendChild(host)

	return {
		instance: app.mount(host),
		unmount() {
			app.unmount(host)
			document.body.removeChild(host)
		},
	}
}

export function mountInstance(
	component: any,
	props: Record<string, any> = {},
	eventListener: Record<string, any> = {}
): {
	unmountInstance: () => void
} {
	const Host = {
		setup() {
			return () =>
				h(component, {
					...props,
					...eventListener,
				})
		},
	}

	const { unmount } = mount(Host)
	return { unmountInstance: unmount }
}

export function flatVNodes(children: VNodeNormalizedChildren) {
	const vNodes: VNode[] = []

	const flat = (children: VNodeNormalizedChildren) => {
		if (Array.isArray(children)) {
			children.forEach((child) => {
				if (isVNode(child)) {
					vNodes.push(child)

					if (child.component?.subTree) {
						flat(child.component.subTree.children)
					}

					if (child.children) {
						flat(child.children)
					}
				}
			})
		}
	}

	flat(children)

	return vNodes
}

export function countChildren(key: symbol) {
	const instances: ComponentInternalInstance[] = reactive([])
	const parentInstance: ComponentInternalInstance = getCurrentInstance() as ComponentInternalInstance

	const sortInstances = () => {
		const vNodes = flatVNodes(parentInstance.subTree?.children)
		instances.sort((a, b) => {
			return vNodes.indexOf(a.vnode) - vNodes.indexOf(b.vnode)
		})
	}

	onMounted(() => {
		sortInstances()
	})
	onUpdated(() => {
		sortInstances()
	})

	provide<ChildrenCounter>(key, {
		collect(instance: ComponentInternalInstance) {
			instances.push(instance)
		},
		clear(instance: ComponentInternalInstance) {
			removeItem(instances, instance)
		},
		instances,
	})
}

export function useAtParentIndex(key: symbol): ComputedRef<number> | never {
	const childrenCounter: ChildrenCounter | undefined = inject<ChildrenCounter>(key)
	if (!childrenCounter) {
		throw new Error('Children counter provider not found')
	}

	const { collect, clear, instances } = childrenCounter

	const instance: ComponentInternalInstance = getCurrentInstance() as ComponentInternalInstance

	collect(instance)

	onUnmounted(() => {
		clear(instance)
	})

	return computed(() => instances.indexOf(instance))
}
