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

/**
 * 组件锁操作
 * @param props 组件props
 * @param state 组件props中控制组件加锁的开关对应的key值
 * @param use 组件props中控制组件加锁的开关是否可用对应的key值
 */
export function useLock(props: any, state: string, use?: string) {
  const { uid } = getCurrentInstance() as ComponentInternalInstance
  if (use) {
    watch(
      () => props[use],
      (newValue: boolean) => {
        if (newValue === false) {
          // 改变为禁用状态 组件解锁
          releaseLock(uid)
        } else if (newValue === true && props[state] === true) {
          // 改变为启用状态 并且popup处于开启状态 组件加锁
          addLock(uid)
        }
      }
    )
  }

  watch(
    () => props[state],
    (newValue: boolean) => {
      if (use && props[use] === false) {
        return
      }

      if (newValue === true) {
        // popup开启 组件加锁
        addLock(uid)
      } else {
        // popup关闭 组件解锁
        releaseLock(uid)
      }
    }
  )

  onBeforeMount(() => {
    if (use && props[use] === false) {
      return
    }

    if (props[state] === true) {
      // popup处于开启状态 组件挂载 组件加锁
      addLock(uid)
    }
  })

  onUnmounted(() => {
    if (use && props[use] === false) {
      return
    }

    if (props[state] === true) {
      // popup处于开启状态 组件卸载 组件解锁
      releaseLock(uid)
    }
  })

  onActivated(() => {
    if (use && props[use] === false) {
      return
    }

    if (props[state] === true) {
      // popup处于开启状态 组件处于keepalive前台 组件加锁
      addLock(uid)
    }
  })

  onDeactivated(() => {
    if (use && props[use] === false) {
      return
    }

    if (props[state] === true) {
      // popup处于开启状态 组件处于keepalive后台 组件解锁
      releaseLock(uid)
    }
  })
}
