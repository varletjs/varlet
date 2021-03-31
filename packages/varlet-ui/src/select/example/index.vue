<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-select :placeholder="pack.placeholder" v-model="value">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
  </var-select>

  <app-type>{{ pack.plainMode }}</app-type>
  <var-select :hint="false" :line="false" :placeholder="pack.placeholder" v-model="value2">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
  </var-select>

  <app-type>{{ pack.relation }}</app-type>
  <var-select :placeholder="pack.placeholder" v-model="value6">
    <var-option :label="pack.eat" :value="1" />
    <var-option :label="pack.sleep" :value="2" />
  </var-select>
  <div class="relation">{{ pack.currentSelect }} {{ value6 }}</div>

  <app-type>{{ pack.disabled }}</app-type>
  <var-select :placeholder="pack.placeholder" disabled v-model="value4">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
  </var-select>

  <app-type>{{ pack.readonly }}</app-type>
  <var-select :placeholder="pack.placeholder" readonly v-model="value3">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
  </var-select>

  <app-type>{{ pack.clearable }}</app-type>
  <var-select :placeholder="pack.placeholder" clearable v-model="value8">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
  </var-select>

  <app-type>{{ pack.displayIcon }}</app-type>
  <var-select :placeholder="pack.placeholder" v-model="value11">
    <template #prepend-icon>
      <var-icon class="prepend-icon" name="plus" />
    </template>
    <template #append-icon>
      <var-icon class="append-icon" name="minus" />
    </template>
    <template #default>
      <var-option :label="pack.eat" />
      <var-option :label="pack.sleep" />
    </template>
  </var-select>

  <app-type>{{ pack.multiple }}</app-type>
  <var-select :placeholder="pack.multiplePlaceholder" multiple v-model="value5">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
    <var-option :label="pack.play" />
    <var-option :label="pack.coding" />
  </var-select>

  <app-type>{{ pack.chipMultiple }}</app-type>
  <var-select :placeholder="pack.multiplePlaceholder" chip multiple v-model="value7">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
    <var-option :label="pack.play" />
    <var-option :label="pack.coding" />
  </var-select>

  <app-type>{{ pack.validate }}</app-type>
  <var-select :placeholder="pack.placeholder" :rules="[(v) => v === pack.rest || pack.mustSelectRest]" v-model="value9">
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
    <var-option :label="pack.rest" />
  </var-select>

  <app-type>{{ pack.multipleValidate }}</app-type>
  <var-select
    :placeholder="pack.multiplePlaceholder"
    multiple
    :rules="[(v) => v.length >= 2 || pack.mustSelectMoreThan]"
    v-model="value10"
  >
    <var-option :label="pack.eat" />
    <var-option :label="pack.sleep" />
    <var-option :label="pack.play" />
    <var-option :label="pack.coding" />
  </var-select>

  <div class="space"></div>
</template>

<script>
import Select from '..'
import Option from '../../option'
import Icon from '../../icon'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { ref } from 'vue'
import { watchLang } from '../../utils/components'
import { use, pack } from './locale'

export default {
  name: 'SelectExample',
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
    [Icon.name]: Icon,
    AppType,
  },
  setup() {
    const value = ref()
    const value2 = ref()
    const value3 = ref()
    const value4 = ref()
    const value6 = ref()
    const value5 = ref([])
    const value7 = ref([])
    const value8 = ref()
    const value9 = ref()
    const value10 = ref([])
    const value11 = ref()

    watchLang((lang) => {
      use(lang)
      value.value = undefined
      value2.value = undefined
      value3.value = undefined
      value4.value = undefined
      value6.value = undefined
      value5.value = []
      value7.value = []
      value8.value = undefined
      value9.value = undefined
      value10.value = []
      value11.value = undefined
    })

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
      value9,
      value10,
      value11,
    }
  },
}
</script>

<style scoped lang="less">
.relation {
  margin: 10px 0;
}

.space {
  height: 160px;
}

.prepend-icon {
  margin-right: 2px;
}

.append-icon {
  margin-left: 2px;
}
</style>
