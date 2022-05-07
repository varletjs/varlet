import { reactive, ref } from 'vue'

// 动画节点属性存储
export const animationBoxData = reactive<any>({})

// 存储节点
export const animationEl = ref<HTMLElement | null>()

export const animationElClientRect = ref<DOMRect | null>();
