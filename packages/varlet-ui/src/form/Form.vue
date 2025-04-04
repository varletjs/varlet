<template>
  <form :class="n()" @submit="handleSubmit" @reset="handleReset">
    <slot />
  </form>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { call, find, preventDefault } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { getParentScroller, getTop, scrollTo, toPxNum } from '../utils/elements'
import { linear } from '../utils/shared'
import { props } from './props'
import { useFormItems, type FormProvider } from './provide'

const { name, n } = createNamespace('form')

export default defineComponent({
  name,
  props,
  setup(props) {
    const disabled = computed(() => props.disabled)
    const readonly = computed(() => props.readonly)
    const { formItems, bindFormItems } = useFormItems()

    const formProvider: FormProvider = {
      disabled,
      readonly,
    }

    bindFormItems(formProvider)

    function scroll(formItemElement: HTMLElement) {
      // wait form-details animation end
      setTimeout(() => {
        const scroller = getParentScroller(formItemElement)
        const scrollerTop = scroller === window ? 0 : getTop(scroller as HTMLElement)
        const top = getTop(formItemElement) - scrollerTop - toPxNum(props.scrollToErrorOffsetY)

        scrollTo(scroller, {
          top,
          animation: linear,
        })
      }, 300)
    }

    async function handleSubmit(event: Event) {
      preventDefault(event)
      const valid = await validate()
      call(props.onSubmit, valid)
    }

    function handleReset(event: Event) {
      preventDefault(event)
      reset()
      call(props.onReset)
    }

    // expose
    async function validate() {
      const res = await Promise.all(formItems.map(({ validate }) => validate()))

      if (props.scrollToError) {
        const [, errorIndex] = find(res, (r) => r === false, props.scrollToError)
        const hasError = errorIndex > -1

        if (hasError) {
          const formItemElement = formItems[errorIndex].instance.proxy?.$el
          scroll(formItemElement)
        }

        return !hasError
      }

      return res.every((result) => result === true)
    }

    // expose
    function reset() {
      return formItems.forEach(({ reset }) => reset())
    }

    // expose
    function resetValidation() {
      return formItems.forEach(({ resetValidation }) => resetValidation())
    }

    return {
      n,
      handleSubmit,
      handleReset,
      validate,
      reset,
      resetValidation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
</style>
