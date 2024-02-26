import { onDeactivated, onUnmounted } from 'vue'

export function onSmartUnmounted(hook: () => void) {
  let keepalive = false

  onDeactivated(() => {
    keepalive = true
    hook()
  })

  onUnmounted(() => {
    if (keepalive) {
      return
    }

    hook()
  })
}
