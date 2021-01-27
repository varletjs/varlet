<template>
  <div class="example">
    <app-type>主题色徽标</app-type>
    <var-badge type="primary"></var-badge>
    <var-badge type="info"></var-badge>
    <var-badge type="warning"></var-badge>
    <var-badge type="success"></var-badge>
    <var-badge type="danger"></var-badge>
    <var-badge></var-badge>
    <app-type>圆点徽标</app-type>
    <var-badge dot type="danger"></var-badge>

    <app-type>自定义内容徽标</app-type>
    <var-badge type="danger" value="badge"></var-badge>
    <var-badge type="danger" value="hot"></var-badge>
    <var-badge type="danger" :value="66"></var-badge>

    <app-type>最大值</app-type>
    <var-badge type="danger" :value="value" :max-value="maxValue"></var-badge>
    <var-badge type="danger" :value="value1" :max-value="maxValue"></var-badge>

    <app-type>不同徽标定位</app-type>

    <var-badge type="danger" position="right-top">
      <var-chip plain :round="false" color="#009688">右上</var-chip>
    </var-badge>
    <var-badge type="danger" position="right-bottom">
      <var-chip plain :round="false" color="#009688">右下</var-chip>
    </var-badge>
    <var-badge type="danger" position="left-top">
      <var-chip plain :round="false" color="#009688">左上</var-chip>
    </var-badge>
    <var-badge type="danger" position="left-bottom">
      <var-chip plain :round="false" color="#009688">左下</var-chip>
    </var-badge>

    <app-type>是否显示徽标</app-type>

    <var-button @click="handleChange">
      点击改变状态
    </var-button>
    <var-badge type="danger" position="right-top" :hidden="hidden">
      <var-chip plain :round="false" color="#009688">徽标</var-chip>
    </var-badge>
    <app-type>自定义徽标颜色</app-type>
    <var-badge color="#6200ea" position="right-top">
      <var-chip plain :round="false" color="#009688">徽标</var-chip>
    </var-badge>
    <app-type>自定义徽标图标</app-type>
    <var-badge color="#6200ea" position="right-top" icon="account-circle">
      <var-chip plain :round="false" color="#009688">徽标</var-chip>
    </var-badge>
  </div>


</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import Badge from '..'
import Button from '../../button'
import Chip from '../../chip'

export default defineComponent({
  name: 'BadgeExample',
  components: {
    [Badge.name]: Badge,
    [Button.name]: Button,
    [Chip.name]: Chip
  },
  setup() {
    const value: Ref<number> = ref(88)
    const value1: Ref<number> = ref(188)
    const maxValue: Ref<number> = ref(99)
    const hidden: Ref<boolean> = ref(false)
    const handleChange = () => {
      hidden.value = !hidden.value
    }
    return {
      value,
      value1,
      maxValue,
      hidden,
      handleChange
    }
  }
})
</script>

<style scoped>
  .var-badge {
    margin-right: 20px;
    margin-bottom: 8px;
  }

  .example-span {
    font-size: 14px;
    margin-right: 10px;
  }
</style>
