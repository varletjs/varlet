import { onDeactivated, onUnmounted } from 'vue'

export function onSmartUnmounted(hook: () => void) {
  onUnmounted(() => {
    hook()
  })

  onDeactivated(() => {
    hook()
  })
}
