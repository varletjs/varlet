import { watch, onBeforeMount, onUnmounted, onDeactivated, onActivated, getCurrentInstance } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import context from '.'

export function resolveLock() {
  const lockCounts: number = Object.keys(context.locks).length
  lockCounts <= 0 ? document.body.classList.remove('var-site--lock') : document.body.classList.add('var-site--lock')
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
  const { uid } = getCurrentInstance() as ComponentInternalInstance

  if (useSource) {
    watch(useSource, (newValue: boolean) => {
      if (newValue === false) {
        // 改变为禁用状态 组件解锁
        releaseLock(uid)
      } else if (newValue === true && source() === true) {
        // 改变为启用状态 并且popup处于开启状态 组件加锁
        addLock(uid)
      }
    })
  }

  watch(source, (newValue: boolean) => {
    if (useSource && useSource() === false) {
      return
    }

    if (newValue === true) {
      // popup开启 组件加锁
      addLock(uid)
    } else {
      // popup关闭 组件解锁
      releaseLock(uid)
    }
  })

  onBeforeMount(() => {
    if (useSource && useSource() === false) {
      return
    }

    if (source() === true) {
      // popup处于开启状态 组件挂载 组件加锁
      addLock(uid)
    }
  })

  onUnmounted(() => {
    if (useSource && useSource() === false) {
      return
    }

    if (source() === true) {
      // popup处于开启状态 组件卸载 组件解锁
      releaseLock(uid)
    }
  })

  onActivated(() => {
    if (useSource && useSource() === false) {
      return
    }

    if (source() === true) {
      // popup处于开启状态 组件处于keepalive前台 组件加锁
      addLock(uid)
    }
  })

  onDeactivated(() => {
    if (useSource && useSource() === false) {
      return
    }

    if (source() === true) {
      // popup处于开启状态 组件处于keepalive后台 组件解锁
      releaseLock(uid)
    }
  })
}
