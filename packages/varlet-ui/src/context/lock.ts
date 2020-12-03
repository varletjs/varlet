import {
  watch,
  onBeforeMount,
  onUnmounted,
  onDeactivated,
  onActivated,
  getCurrentInstance,
  ComponentInternalInstance
} from 'vue'
import context from '.'

export function resolveLock() {
  const lockCounts: number = Object.keys(context.locks).reduce((lockCounts: number, key: string) => {
    return lockCounts + context.locks[key]
  }, 0)
  lockCounts <= 0
    ? document.body.classList.remove('var--lock')
    : document.body.classList.add('var--lock')
}

export function addLock(uid: number) {
  context.locks[uid] = 1
}

export function releaseLock(uid: number) {
  context.locks[uid] = 0
}

export function useLock(props: any, state: string) {
  const { uid } = getCurrentInstance() as ComponentInternalInstance

  watch(() => props[state], (newValue) => {
    if (newValue === true) {
      // popup开启 组件加锁
      addLock(uid)
    } else {
      // popup关闭 组件解锁
      releaseLock(uid)
    }
    // 处理全局锁
    resolveLock()
  })

  onBeforeMount(() => {
    if (props[state] === true) {
      // popup处于开启状态 组件挂载 组件加锁
      addLock(uid)
    }
    // 处理全局锁
    resolveLock()
  })

  onUnmounted(() => {
    if (props[state] === true) {
      // popup处于开启状态 组件卸载 组件解锁
      releaseLock(uid)
    }
    // 处理全局锁
    resolveLock()
  })

  onActivated(() => {
    if (props[state] === true) {
      // popup处于开启状态 组件处于keepalive前台 组件加锁
      addLock(uid)
    }
    // 处理全局锁
    resolveLock()
  })

  onDeactivated(() => {
    if (props[state] === true) {
      // popup处于开启状态 组件处于keepalive后台 组件解锁
      releaseLock(uid)
    }

    resolveLock()
  })
}
