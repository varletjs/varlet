<script setup>
import VarInput from '..'
import VarIcon from '../../icon'
import { AppType , watchLang, watchDarkMode } from '@varlet/cli/client'
import dark from '../../themes/dark'
import { reactive, toRefs } from 'vue'
import { use, pack } from './locale'

const values = reactive({
  value: '',
  value2: '',
  value3: '',
  value4: '',
  value5: '',
  value6: '',
  value7: '',
  value8: '',
  value9: '',
})
const { value, value2, value3, value4, value5, value6, value7, value8, value9 } = toRefs(values)
watchLang((lang) => {
  use(lang)
  values.value5 = pack.value.clearableText
})
watchDarkMode(dark)
</script>

<template>
  <app-type class="pb">{{ pack.basicUsage }}</app-type>
  <var-input :placeholder="pack.placeholder" v-model="value" />

  <app-type class="pb">{{ pack.plainMode }}</app-type>
  <var-input :hint="false" :line="false" :placeholder="pack.placeholder" v-model="value7" />

  <app-type class="pb">{{ pack.textarea }}</app-type>
  <var-input :placeholder="pack.placeholder" textarea v-model="value2" />

  <app-type class="pb">{{ pack.maxlength }}</app-type>
  <var-input :placeholder="pack.placeholder" :maxlength="10" v-model="value8" />

  <app-type class="pb">{{ pack.disabled }}</app-type>
  <var-input :placeholder="pack.placeholder" disabled v-model="value3" />

  <app-type class="pb">{{ pack.readonly }}</app-type>
  <var-input :placeholder="pack.placeholder" readonly v-model="value4" />

  <app-type class="pb">{{ pack.clearable }}</app-type>
  <var-input :placeholder="pack.placeholder" clearable v-model="value5" />

  <app-type class="pb">{{ pack.displayIcon }}</app-type>
  <var-input :placeholder="pack.placeholder" v-model="value6">
    <template #prepend-icon>
      <var-icon class="prepend-icon" name="plus" />
    </template>
    <template #append-icon>
      <var-icon class="append-icon" name="minus" />
    </template>
  </var-input>

  <app-type>{{ pack.validate }}</app-type>
  <var-input :placeholder="pack.placeholder" :rules="[(v) => v.length > 6 || pack.maxMessage]" v-model="value9" />

  <div style="height: 40px"></div>
</template>

<style scoped lang="less">
.prepend-icon {
  margin-right: 2px;
}

.append-icon {
  margin-left: 2px;
}

.pb {
  padding-bottom: 10px;
}
</style>
