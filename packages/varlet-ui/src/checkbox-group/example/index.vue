<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-checkbox v-model="value">{{ pack.currentValue }} {{ value }}</var-checkbox>

  <app-type>{{ pack.setState }}</app-type>
  <var-checkbox :unchecked-value="0" :checked-value="1" v-model="value2">
    {{ pack.currentValue }} {{ value2 }}
  </var-checkbox>

  <app-type>{{ pack.setStyle }}</app-type>
  <var-checkbox unchecked-color="#e99eb4" checked-color="#f44336" v-model="value3">
    <template #unchecked-icon>
      <var-icon name="heart-half-full" size="24px" />
    </template>
    <template #checked-icon>
      <var-icon name="heart" size="24px" />
    </template>
    <template #default> {{ pack.currentValue }} {{ value3 }} </template>
  </var-checkbox>

  <app-type>{{ pack.disabled }}</app-type>
  <var-checkbox disabled v-model="value4">{{ pack.currentValue }} {{ value4 }}</var-checkbox>

  <app-type>{{ pack.readonly }}</app-type>
  <var-checkbox readonly v-model="value5">{{ pack.currentValue }} {{ value5 }}</var-checkbox>

  <app-type>{{ pack.checkboxGroup }}</app-type>
  <var-checkbox-group ref="group" v-model="value6">
    <var-checkbox :checked-value="0">{{ pack.eat }}</var-checkbox>
    <var-checkbox :checked-value="1">{{ pack.sleep }}</var-checkbox>
    <var-button class="button" type="primary" @click="$refs.group.checkAll()">{{ pack.checkAll }}</var-button>
    <var-button class="button" type="primary" @click="$refs.group.inverseAll()">{{ pack.inverseAll }}</var-button>
  </var-checkbox-group>
  <div class="relation">{{ pack.currentValue }} {{ value6 }}</div>

  <app-type>{{ pack.checkboxValidate }}</app-type>
  <var-checkbox v-model="value7" :rules="[(v) => v || pack.checkboxValidateMessage]">
    {{ pack.currentValue }} {{ value7 }}
  </var-checkbox>

  <app-type>{{ pack.checkboxGroupValidate }}</app-type>
  <var-checkbox-group v-model="value8" :rules="[(v) => v.length === 2 || pack.checkboxGroupValidateMessage]">
    <var-checkbox :checked-value="0">{{ pack.eat }}</var-checkbox>
    <var-checkbox :checked-value="1">{{ pack.sleep }}</var-checkbox>
  </var-checkbox-group>
  <div class="relation">{{ pack.currentValue }} {{ value8 }}</div>

  <div class="space"></div>
</template>

<script>
import CheckboxGroup from '..'
import Checkbox from '../../checkbox'
import Icon from '../../icon'
import Button from '../../button'
import Row from '../../row'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { reactive, toRefs } from 'vue'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'CheckboxGroupExample',
  components: {
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox,
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Row.name]: Row,
    AppType,
  },
  setup() {
    const values = reactive({
      value: false,
      value2: 0,
      value3: false,
      value4: false,
      value5: false,
      value6: [],
      value7: false,
      value8: [],
      group: null,
    })

    watchLang(use)

    return {
      pack,
      ...toRefs(values),
    }
  },
}
</script>

<style scoped lang="less">
.relation {
  margin-top: 10px;
}

.button {
  margin-left: 10px;
}

.space {
  height: 40px;
}
</style>
