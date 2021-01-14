<template>
  <div class="var-rate" ref="rate">
    <div class="var-rate--content" v-for="(val,ind) in valueList" :key="val.score">
      <var-icon
        v-ripple="{disabled: readonly || disabled ? true : !ripple}"
        :transition="1"
        :name="`${val.type === 'full' ? icon : val.type === 'half' ? halfIcon : emptyIcon}`"
        :style="{
          color: val.color,
          cursor: readonly ? 'default' : disabled?'not-allowed' :'pointer',
          fontSize,
          marginRight: ind + 1 !== count ? marginRight : 0}"
        @click="handleClick(val.score,$event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import { defineComponent, ref, Ref, watch } from 'vue'
import { props } from './props'
import Icon from '../icon'

interface labelValue {
  type: string,
  score: number,
  color: string
}

export default defineComponent({
  name: 'VarRate',
  components: {
    [Icon.name]: Icon
  },
  directives: { Ripple },
  inheritAttrs: false,
  props,
  setup(props) {
    const valueList: Ref<labelValue[]> = ref([])
    const transformValue = (index: number, score: number) => {
      if (index <= score) {
        return { type: 'full', score: index, color: props.disabled ? props.disabledColor : props.color }
      }
      if (props.half && index <= score + 0.5) {
        return { type: 'half', score: index, color: props.disabled ? props.disabledColor : props.color }
      }
      return { type: 'empty', score: index, color: props.disabled ? props.disabledColor : props.emptyColor }
    }
    const calculation = (value: number) => {
      valueList.value = []
      for (let i = 1; i <= props.count; i++) {
        valueList.value.push(transformValue(i, value))
      }
    }
    calculation(props.modelValue)
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
    watch(
      () => props.modelValue,
      (newValue) => {
        calculation(newValue)
      })
    const fontSize: Ref<number | string> = ref(0)
    fontSize.value = !isNaN(Number(props.size)) ? `${props.size}px` : props.size
    const marginRight: Ref<number | string> = ref(0)
    marginRight.value = !isNaN(Number(props.marginRight)) ? `${props.marginRight}px` : props.marginRight
    return {
      valueList,
      handleClick,
      fontSize,
      marginRight
    }
  }
})
</script>

<style lang="less">
@import './rate';
</style>
