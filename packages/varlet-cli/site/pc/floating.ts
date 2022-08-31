import { reactive, ref } from 'vue'

export const animationBoxData = reactive<any>({})

export const animationEl = ref<HTMLElement | null>()

export const animationElClientRect = ref<DOMRect | null>()

export const isMountedCount = ref<number>(0)
