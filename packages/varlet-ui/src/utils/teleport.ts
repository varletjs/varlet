import { onActivated, onDeactivated, ref, Ref } from 'vue'

export function useTeleport() {
  const disabled: Ref<boolean> = ref(false)
  onActivated(() => {
    disabled.value = false
  })
  onDeactivated(() => {
    disabled.value = true
  })

  return {
    disabled
  }
}
