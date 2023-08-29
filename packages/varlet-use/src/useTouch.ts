import { ref } from 'vue'

export type TouchDirection = 'horizontal' | 'vertical'

function getDirection(x: number, y: number) {
  if (x > y) {
    return 'horizontal'
  }

  if (y > x) {
    return 'vertical'
  }
}

export function useTouch() {
  const startX = ref(0)
  const startY = ref(0)
  const deltaX = ref(0)
  const deltaY = ref(0)
  const offsetX = ref(0)
  const offsetY = ref(0)
  const prevX = ref(0)
  const prevY = ref(0)
  const moveX = ref(0)
  const moveY = ref(0)
  const direction = ref<TouchDirection | undefined>()
  const touching = ref(false)
  const dragging = ref(false)
  const startTime = ref(0)
  const distance = ref(0)

  let draggingAnimationFrame: number | null = null

  const resetTouch = () => {
    startX.value = 0
    startY.value = 0
    deltaX.value = 0
    deltaY.value = 0
    offsetX.value = 0
    offsetY.value = 0
    prevX.value = 0
    prevY.value = 0
    moveX.value = 0
    moveY.value = 0
    direction.value = undefined
    touching.value = false
    dragging.value = false
    startTime.value = 0
    distance.value = 0
  }

  const startTouch = (event: TouchEvent) => {
    resetTouch()

    const { clientX: x, clientY: y } = event.touches[0]

    startX.value = x
    startY.value = y
    prevX.value = x
    prevY.value = y
    touching.value = true
    startTime.value = performance.now()
    dragging.value = false

    if (draggingAnimationFrame) {
      window.cancelAnimationFrame(draggingAnimationFrame)
    }
  }

  const moveTouch = (event: TouchEvent) => {
    const { clientX: x, clientY: y } = event.touches[0]

    dragging.value = true
    deltaX.value = x - startX.value
    deltaY.value = y - startY.value
    offsetX.value = Math.abs(deltaX.value)
    offsetY.value = Math.abs(deltaY.value)
    distance.value = Math.sqrt(offsetX.value ** 2 + offsetY.value ** 2)
    moveX.value = x - prevX.value
    moveY.value = y - prevY.value

    if (!direction.value) {
      direction.value = getDirection(offsetX.value, offsetY.value)
    }

    prevX.value = x
    prevY.value = y
  }

  const endTouch = () => {
    touching.value = false

    draggingAnimationFrame = window.requestAnimationFrame(() => {
      dragging.value = false
    })
  }

  return {
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    prevX,
    prevY,
    moveX,
    moveY,
    direction,
    touching,
    dragging,
    startTime,
    distance,
    resetTouch,
    startTouch,
    moveTouch,
    endTouch,
  }
}
