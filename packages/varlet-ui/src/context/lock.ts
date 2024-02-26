import context from '.'
import { watch, onBeforeMount, onUnmounted, onDeactivated, onActivated, getCurrentInstance } from 'vue'

export function resolveLock() {
  const lockCounts: number = Object.keys(context.locks).length
  lockCounts <= 0 ? document.body.classList.remove('var--lock') : document.body.classList.add('var--lock')
}

export function addLock(uid: number) {
  context.locks[uid] = 1
  resolveLock()
}

export function releaseLock(uid: number) {
  delete context.locks[uid]
  resolveLock()
}

export function useLock(source: any, useSource?: any) {
  const { uid } = getCurrentInstance()!

  if (useSource) {
    watch(useSource, (newValue: boolean) => {
      if (newValue === false) {
        // change to disabled state component release lock
        releaseLock(uid)
      } else if (newValue === true && source() === true) {
        // change to enabled state and layer is open. component is locked
        addLock(uid)
      }
    })
  }

  watch(source, (newValue: boolean) => {
    if (useSource && useSource() === false) {
      return
    }

    if (newValue === true) {
      // Layer opens and component is locked
      addLock(uid)
    } else {
      // Layer closes component release lock
      releaseLock(uid)
    }
  })

  onBeforeMount(() => {
    if (useSource && useSource() === false) {
      return
    }

    if (source() === true) {
      // The layer is open, the component is mounted, and the component is locked
      addLock(uid)
    }
  })

  onUnmounted(() => {
    if (useSource && useSource() === false) {
      return
    }

    if (source() === true) {
      // The layer is open. The component is uninstalled. The component release lock
      releaseLock(uid)
    }
  })

  onActivated(() => {
    if (useSource && useSource() === false) {
      return
    }

    if (source() === true) {
      // The layer is open, the component is in the keepalive foreground, and the component is locked
      addLock(uid)
    }
  })

  onDeactivated(() => {
    if (useSource && useSource() === false) {
      return
    }

    if (source() === true) {
      // The layer is open, the component is in the keepalive background, and the component release lock
      releaseLock(uid)
    }
  })
}
