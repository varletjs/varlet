<template>
  <div class="var-rate" ref="rate">
    <div
      class="var-rate--content"
      v-for="val in count"
      :key="val"
      v-ripple="{ disabled: readonly || disabled ? true : !ripple }"
      :style="{
        color: transformValue(val + 1).color,
        cursor: readonly ? 'default' : disabled ? 'not-allowed' : 'pointer',
        marginRight: val !== count ? marginRight : 0,
        width: fontSize,
        height: fontSize,
        borderRadius: '50%',
      }"
    >
      <var-icon
        :transition="1"
        :name="`${
          transformValue(val + 1).type === 'full'
            ? icon
            : transformValue(val + 1).type === 'half'
            ? halfIcon
            : emptyIcon
        }`"
        :style="{ fontSize }"
        @click="handleClick(val + 1, $event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import { defineComponent, ref, Ref } from 'vue'
import { props } from './props'
import Icon from '../icon'

export default defineComponent({
  name: 'VarRate',
  components: {
    [Icon.name]: Icon,
  },
  directives: { Ripple },
  inheritAttrs: false,
  props,
  setup(props) {
    const transformValue = (index: number) => {
      if (index <= props.modelValue) {
        return { type: 'full', score: index, color: props.disabled ? props.disabledColor : props.color }
      }
      if (props.half && index <= props.modelValue + 0.5) {
        return { type: 'half', score: index, color: props.disabled ? props.disabledColor : props.color }
      }
      return { type: 'empty', score: index, color: props.disabled ? props.disabledColor : props.emptyColor }
    }
    const changeValue = (score: number, event: MouseEvent) => {
      if (props.half) {
        const { offsetWidth } = event.target as HTMLDivElement
        if (event.offsetX <= Math.floor(offsetWidth / 2)) {
          score -= 0.5
        }
      }
      props['onUpdate:modelValue']?.(score)
    }
    const handleClick = (score: number, event: MouseEvent) => {
      if (props.readonly || props.disabled) {
        return
      }
      changeValue(score, event)
      props.onChange?.(score)
    }
    const fontSize: Ref<number | string> = ref(0)
    fontSize.value = !isNaN(Number(props.size)) ? `${props.size}px` : props.size
    const marginRight: Ref<number | string> = ref(0)
    marginRight.value = !isNaN(Number(props.marginRight)) ? `${props.marginRight}px` : props.marginRight
    return {
      transformValue,
      handleClick,
      fontSize,
      marginRight,
    }
  },
})
</script>

<style lang="less">
@import './rate';
</style>
