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
  </var-checkbox-group>
  <div class="relation">{{ pack.currentValue }} {{ value6 }}</div>

  <app-type>{{ pack.action }}</app-type>
  <var-row>
    <var-button class="button" type="primary" @click="$refs['group'].checkAll()">{{ pack.checkAll }}</var-button>
    <var-button class="button" type="primary" @click="$refs['group'].inverseAll()">{{ pack.inverseAll }}</var-button>
  </var-row>

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
import { ref } from 'vue'
import { watchLang } from '../../utils/components'
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
    const value = ref(false)
    const value2 = ref(0)
    const value3 = ref(false)
    const value4 = ref(false)
    const value5 = ref(false)
    const value6 = ref([])
    const group = ref(null)
    const value7 = ref(false)
    const value8 = ref([])

    watchLang(use)

    return {
      pack,
      value,
      value2,
      value3,
      value4,
      value5,
      value6,
      group,
      value7,
      value8,
    }
  },
}
</script>

<style scoped lang="less">
.relation {
  margin-top: 10px;
}

.button {
  margin-right: 10px;
}

.space {
  height: 40px;
}
</style>
