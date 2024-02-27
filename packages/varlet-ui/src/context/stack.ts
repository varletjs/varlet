import context from './index'
import { getCurrentInstance, watch } from 'vue'
import { removeItem } from '@varlet/shared'
import { onSmartMounted, onSmartUnmounted } from '@varlet/use'

export function useStack(activeGetter: () => boolean) {
  const { uid } = getCurrentInstance()!

  watch(activeGetter, (isActive) => {
    if (isActive && !context.stack.includes(uid)) {
      context.stack.push(uid)
    } else {
      // wait for the task to end
      setTimeout(() => {
        removeItem(context.stack, uid)
      })
    }
  })

  onSmartMounted(() => {
    if (activeGetter()) {
      context.stack.push(uid)
    }
  })

  onSmartUnmounted(() => {
    removeItem(context.stack, uid)
  })

  function onStackTop() {
    return context.stack[context.stack.length - 1] === uid
  }

  return {
    onStackTop,
  }
}
