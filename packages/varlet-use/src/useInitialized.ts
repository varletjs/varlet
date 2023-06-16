import { watch, ref, type WatchSource } from 'vue'

export function useInitialized<T>(source: WatchSource<T>, value: T) {
  const initialized = ref(false)

  watch(
    source,
    (newValue) => {
      if (value === newValue) {
        initialized.value = true
      }
    },
    { immediate: true }
  )

  return initialized
}
