import { type Ref, getCurrentInstance, watch } from 'vue'
import { removeItem } from '@varlet/shared'
import { onSmartUnmounted, onSmartMounted } from '@varlet/use'

interface ContextStackItem {
  uid: number
  zIndex: Ref<number>
}

const stack: ContextStackItem[] = []

export function useStack(activeGetter: () => boolean, zIndex: Ref<number>) {
  const { uid } = getCurrentInstance()!

  watch(activeGetter, (isActive) => {
    if (isActive && !getStackItem(uid)) {
      pushStackItem()
    } else {
      // wait for the task to end
      setTimeout(() => {
        removeItem(stack, getStackItem(uid))
      })
    }
  })

  onSmartMounted(() => {
    if (activeGetter()) {
      pushStackItem()
    }
  })

  onSmartUnmounted(() => {
    removeItem(stack, getStackItem(uid))
  })

  function onStackTop() {
    if (stack.length === 0) {
      return true
    }

    stack.sort((a, b) => a.zIndex.value - b.zIndex.value)

    return stack[stack.length - 1].uid === uid
  }

  function pushStackItem() {
    if (getStackItem(uid)) {
      return
    }

    stack.push({ uid, zIndex })
  }

  function getStackItem(uid: number) {
    return stack.find((item) => item.uid === uid)
  }

  return {
    onStackTop,
  }
}
