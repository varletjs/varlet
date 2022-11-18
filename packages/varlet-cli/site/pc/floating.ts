import { reactive, ref } from 'vue'

export type Rect = Pick<DOMRect, 'width' | 'height' | 'top' | 'left'>

export const animationBoxData = reactive<any>({})

export const animationEl = ref<HTMLElement | null>()

export const animationElClientRect = ref<Rect | null>()

export const isMountedCount = ref<number>(0)
