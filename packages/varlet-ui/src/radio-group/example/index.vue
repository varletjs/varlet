<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-radio v-model="value">{{ pack.currentValue }} {{ value }}</var-radio>

  <app-type>{{ pack.setState }}</app-type>
  <var-radio :unchecked-value="0" :checked-value="1" v-model="value2"> {{ pack.currentValue }} {{ value2 }} </var-radio>

  <app-type>{{ pack.setStyle }}</app-type>
  <var-radio unchecked-color="#e99eb4" checked-color="#f44336" v-model="value3">
    <template #unchecked-icon>
      <var-icon name="heart-half-full" size="24px" />
    </template>
    <template #checked-icon>
      <var-icon name="heart" size="24px" />
    </template>
    <template #default> {{ pack.currentValue }} {{ value3 }} </template>
  </var-radio>

  <app-type>{{ pack.disabled }}</app-type>
  <var-radio disabled v-model="value4">{{ pack.currentValue }} {{ value4 }}</var-radio>

  <app-type>{{ pack.readonly }}</app-type>
  <var-radio readonly v-model="value5">{{ pack.currentValue }} {{ value5 }}</var-radio>

  <app-type>{{ pack.radioGroup }}</app-type>
  <var-radio-group v-model="value6">
    <var-radio :checked-value="0">{{ pack.eat }}</var-radio>
    <var-radio :checked-value="1">{{ pack.sleep }}</var-radio>
  </var-radio-group>
  <div class="relation">{{ pack.currentValue }} {{ value6 }}</div>

  <app-type>{{ pack.radioValidate }}</app-type>
  <var-radio v-model="value7" :rules="[(v) => v || pack.radioValidateMessage]">
    {{ pack.currentValue }} {{ value7 }}
  </var-radio>

  <app-type>{{ pack.radioGroupValidate }}</app-type>
  <var-radio-group v-model="value8" :rules="[(v) => v === 0 || pack.radioGroupValidateMessage]">
    <var-radio :checked-value="0">{{ pack.eat }}</var-radio>
    <var-radio :checked-value="1">{{ pack.sleep }}</var-radio>
  </var-radio-group>
  <div class="relation">{{ pack.currentValue }} {{ value8 }}</div>

  <div class="space"></div>
</template>

<script lang="ts">
import RadioGroup from '..'
import Radio from '../../radio'
import Icon from '../../icon'
import Button from '../../button'
import Row from '../../row'
import AppType from '@varlet/cli/site/mobile/components/AppType.vue'
import { ref } from 'vue'
import { watchLang } from '../../utils/components'
import { use, pack } from './locale'

export default {
  name: 'RadioGroupExample',
  components: {
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
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
    const value6 = ref(0)
    const value7 = ref(false)
    const value8 = ref(0)

    watchLang(use)

    return {
      pack,
      value,
      value2,
      value3,
      value4,
      value5,
      value6,
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
