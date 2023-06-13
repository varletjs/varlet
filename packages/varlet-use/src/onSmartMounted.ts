import { onMounted, nextTick, onActivated } from 'vue'

export function onSmartMounted(hook: () => void) {
  let isMounted = false

  onMounted(() => {
    hook()

    nextTick(() => {
      isMounted = true
    })
  })

  onActivated(() => {
    if (!isMounted) {
      return
    }

    hook()
  })
}
