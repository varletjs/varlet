<template>
  <div class="example">
    <varlet-button class="example__button" type="plain" size="large">测试</varlet-button>

    <varlet-button class="example__button" type="primary" size="large">测试</varlet-button>
    <varlet-button class="example__button" type="primary" size="normal">测试</varlet-button>
    <varlet-button class="example__button" type="primary" size="small">测试</varlet-button>
    <varlet-button class="example__button" type="primary" size="mini">测试</varlet-button>

    <varlet-button class="example__button" type="danger" size="large">测试</varlet-button>
    <varlet-button class="example__button" type="danger">测试</varlet-button>
    <varlet-button class="example__button" type="danger" size="small">测试</varlet-button>
    <varlet-button class="example__button" type="danger" size="mini">测试</varlet-button>

    <varlet-button class="example__button" type="info" size="normal" block>测试测试测试测试测试测试测试测试</varlet-button>
    <varlet-button class="example__button" type="warning" size="large" block>测试</varlet-button>

    <varlet-button
      class="example__button"
      round
    >
      <img style="width: 40px; height: 40px" src="https://img.yzcdn.cn/vant/logo.png">
    </varlet-button>

    <varlet-button
      class="example__button"
      block
      type="warning"
      size="large"
      background="rgb(114, 50, 221)"
      color="rgb(255,192,0)"
      @click="trigger"
    >
      修改颜色
    </varlet-button>

    <varlet-button class="example__button" type="primary"  @click="trigger">切换状态</varlet-button>
    <varlet-button class="example__button" type="plain" size="large" :disabled="disabled">{{ disabled ? '禁用' : '启用' }}</varlet-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import Button from '..'

export default defineComponent({
  name: 'ButtonExample',
  components: {
    [Button.name]: Button
  },
  setup() {
    const disabled: Ref<boolean> = ref(true)
    return {
      disabled,
      trigger() {
        disabled.value = !disabled.value
      }
    }
  }
})
</script>

<style lang="less">
.example {
  padding: 20px;

  &__button {
    margin-bottom: 20px;
    margin-right: 20px;
  }
}
</style>
