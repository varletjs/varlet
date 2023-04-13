<script setup>
import VarInput from '..'
import VarIcon from '../../icon'
import VarSpace from '../../space'
import dark from '../../themes/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { ref } from 'vue'
import { use, pack } from './locale'

const standardValue = ref('')
const standardValue2 = ref('')
const standardValue3 = ref('')
const standardValue4 = ref('')
const standardValue5 = ref('')
const standardValue6 = ref('')
const standardValue7 = ref('')
const standardValue8 = ref('')
const standardValue9 = ref('')

const outlinedValue = ref('')
const outlinedValue2 = ref('')
const outlinedValue3 = ref('')
const outlinedValue4 = ref('')
const outlinedValue5 = ref('')
const outlinedValue6 = ref('')
const outlinedValue7 = ref('')
const outlinedValue8 = ref('')
const outlinedValue9 = ref('')

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.standard }}</app-type>
  <var-space direction="column" :size="['3vw', 0]">
    <var-input :placeholder="pack.placeholder" v-model="standardValue2" />
    <var-input :placeholder="pack.readonly" readonly v-model="standardValue3" />
    <var-input :placeholder="pack.disabled" disabled v-model="standardValue4" />
    <var-input :placeholder="pack.clearable" clearable v-model="standardValue5" />
    <var-input
      :placeholder="pack.validate"
      :rules="[(v) => v.length > 6 || pack.maxMessage]"
      v-model="standardValue6"
    />
    <var-input :placeholder="pack.displayIcon" v-model="standardValue7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input :placeholder="pack.maxlength" :maxlength="10" v-model="standardValue8" />
    <var-input :placeholder="pack.textarea" textarea v-model="standardValue9" />
    <var-input :placeholder="pack.smallSize" size="small" v-model="standardValue" />
  </var-space>

  <app-type style="margin-top: 10vw">{{ pack.outlined }}</app-type>
  <var-space direction="column" :size="['6vw', 0]">
    <var-input variant="outlined" :placeholder="pack.placeholder" v-model="outlinedValue2" />
    <var-input variant="outlined" :placeholder="pack.readonly" readonly v-model="outlinedValue3" />
    <var-input variant="outlined" :placeholder="pack.disabled" disabled v-model="outlinedValue4" />
    <var-input variant="outlined" :placeholder="pack.clearable" clearable v-model="outlinedValue5" />
    <var-input
      variant="outlined"
      :placeholder="pack.validate"
      :rules="[(v) => v.length > 6 || pack.maxMessage]"
      v-model="outlinedValue6"
    />
    <var-input variant="outlined" :placeholder="pack.displayIcon" v-model="outlinedValue7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input variant="outlined" :placeholder="pack.maxlength" :maxlength="10" v-model="outlinedValue8" />
    <var-input variant="outlined" :placeholder="pack.textarea" textarea v-model="outlinedValue9" />
    <var-input variant="outlined" :placeholder="pack.smallSize" size="small" v-model="outlinedValue" />
  </var-space>

  <div style="height: 40px"></div>
</template>

<style scoped lang="less">
.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}
</style>
