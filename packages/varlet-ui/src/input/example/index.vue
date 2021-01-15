<template>
  <div class="example">
    <var-input
      class="example__input"
      prepend-icon="star"
      placeholder="请输入账号"
      :rules="[
        v => !!v || '不能为空不能为空不能为空不能为空不能为空不能为空不能为空不能为空不能为空',
        v => v && v.length > 6 || '必须大于6位'
      ]"
      v-model="value"
    />

    <var-input
      class="example__input"
      prepend-icon="heart"
      placeholder="请输入密码"
      type="password"
      v-model="value2"
      :rules="[
        v => !!v || '不能为空不能为空不能为空不能为空不能为空不能为空不能为空不能为空不能为空',
        v => v && v.length > 6 || '必须大于6位'
      ]"
    />

    <var-input
      class="example__input"
      prepend-icon="fire"
      placeholder="请输入密码"
      type="password"
      clearable
      :rules="[
        v => !!v || '不能为空不能为空不能为空不能为空不能为空不能为空不能为空不能为空不能为空',
        v => v && v.length > 6 || '必须大于6位'
      ]"
      v-model="value3"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Input from '..'
import Button from '../../button'
import Icon from '../../icon'

export default defineComponent({
  name: 'InputExample',
  components: {
    [Input.name]: Input,
    [Button.name]: Button,
    [Icon.name]: Icon
  },
  setup() {
    const value4: any = ref('')

    return {
      value: ref(''),
      value2: ref(''),
      value3: ref(''),
      value4
    }
  }
})
</script>

<style scoped lang="less">
.example {

  &__input {
    margin-bottom: 10px;
  }
}
</style>
