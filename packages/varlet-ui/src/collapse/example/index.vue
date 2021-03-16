<template>
  <div class="collapse-demo">
    <div>
      <app-type>基本使用</app-type>
      <var-collapse v-model="value" @change="changeHandle">
        <var-collapse-item title="Item" name="1">hello world</var-collapse-item>
        <var-collapse-item title="Item" name="2">hello world</var-collapse-item>
      </var-collapse>
    </div>

    <div>
      <app-type>隐藏边距</app-type>
      <var-collapse v-model="value" :offset="false">
        <var-collapse-item title="Item" name="1">hello world</var-collapse-item>
        <var-collapse-item title="Item" name="2">hello world</var-collapse-item>
      </var-collapse>
    </div>

    <div>
      <app-type>手风琴模式</app-type>
      <var-collapse v-model="value1" accordion :offset="false" @change="changeHandle">
        <var-collapse-item title="Item" name="1">hello world</var-collapse-item>
        <var-collapse-item title="Item" name="2">hello world</var-collapse-item>
      </var-collapse>
    </div>

    <div>
      <app-type>禁用</app-type>
      <var-button @click="disabled = !disabled" style="margin-bottom: 8px">
        {{ disabled ? '恢复' : '禁用' }}
      </var-button>
      <var-collapse v-model="value1" accordion @change="changeHandle">
        <var-collapse-item title="Item" :name="1" :disabled="disabled">hello world</var-collapse-item>
        <var-collapse-item title="Item" :disabled="disabled">hello world</var-collapse-item>
      </var-collapse>
    </div>

    <div>
      <app-type>自定义标题</app-type>
      <var-collapse v-model="value1" accordion>
        <var-collapse-item title="Collapse Item" name="1" icon="account-circle">hello world</var-collapse-item>
        <var-collapse-item>
          <template #title>Title Slot</template>
          <template #icon>Icon Slot</template>

          hello world
        </var-collapse-item>
      </var-collapse>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Collapse from '..'
import CollapseItem from '../../collapse-item'
import Button from '../../button'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'

export default defineComponent({
  name: 'CollapseExample',
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Button.name]: Button,
    AppType,
  },
  setup() {
    const disabled = ref(false)
    const value = ref(['1'])
    const value1 = ref('')
    const changeHandle = (val) => {
      console.log(val)
    }

    watchLang(use)

    return {
      disabled,
      value,
      value1,
      pack,
      changeHandle,
    }
  },
})
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
