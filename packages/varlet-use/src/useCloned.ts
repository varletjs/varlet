import type { ComputedRef, Ref, WatchOptions } from 'vue'
import { isRef, ref, unref, watch } from 'vue'

export type MaybeRef<T> = T | Ref<T>
export type MaybeReadonlyRef<T> = (() => T) | ComputedRef<T>
export type MaybeComputedRef<T> = MaybeReadonlyRef<T> | MaybeRef<T>

export interface UseClonedOptions<T = any> extends WatchOptions {
  clone?: (source: T) => T
  manual?: boolean
}

export interface UseClonedReturn<T> {
  cloned: ComputedRef<T>
  sync: () => void
}

export type CloneFn<F, T = F> = (x: F) => T

export function cloneFnJSON<T>(source: T): T {
  return JSON.parse(JSON.stringify(source))
}

export function useCloned<T>(source: MaybeComputedRef<T>, options: UseClonedOptions = {}) {
  const cloned = ref<T>({} as T)
  const { manual, clone = cloneFnJSON, deep = true, immediate = true } = options

  function sync() {
    cloned.value = clone(unref(source))
  }

  if (!manual && isRef(source)) {
    watch(source, sync, {
      ...options,
      deep,
      immediate,
    })
  } else {
    sync()
  }

  return { cloned, sync }
}
