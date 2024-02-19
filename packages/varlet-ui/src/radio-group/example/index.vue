<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { toRefs, reactive } from 'vue'
import { use, t } from './locale'

const values = reactive({
  value: false,
  value2: 0,
  value3: false,
  value4: false,
  value5: false,
  value6: 0,
  value7: false,
  value8: 0,
  value9: 0,
})
const { value, value2, value3, value4, value5, value6, value7, value8, value9 } = toRefs(values)

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-radio v-model="value">{{ t('currentValue') }} {{ value }}</var-radio>

  <app-type>{{ t('setState') }}</app-type>
  <var-radio :unchecked-value="0" :checked-value="1" v-model="value2"> {{ t('currentValue') }} {{ value2 }} </var-radio>

  <app-type>{{ t('setStyle') }}</app-type>
  <var-radio unchecked-color="var(--color-warning)" checked-color="var(--color-danger)" v-model="value3">
    <template #unchecked-icon>
      <var-icon name="heart-half-full" size="24px" />
    </template>
    <template #checked-icon>
      <var-icon name="heart" size="24px" />
    </template>
    <template #default> {{ t('currentValue') }} {{ value3 }} </template>
  </var-radio>

  <app-type>{{ t('disabled') }}</app-type>
  <var-radio disabled v-model="value4">{{ t('currentValue') }} {{ value4 }}</var-radio>

  <app-type>{{ t('readonly') }}</app-type>
  <var-radio readonly v-model="value5">{{ t('currentValue') }} {{ value5 }}</var-radio>

  <app-type>{{ t('radioGroup') }}</app-type>
  <var-radio-group v-model="value6">
    <var-radio :checked-value="0">{{ t('eat') }}</var-radio>
    <var-radio :checked-value="1">{{ t('sleep') }}</var-radio>
  </var-radio-group>
  <div class="relation">{{ t('currentValue') }} {{ value6 }}</div>

  <app-type>{{ t('vertical') }}</app-type>
  <var-radio-group v-model="value9" direction="vertical">
    <var-radio :checked-value="0">{{ t('eat') }}</var-radio>
    <var-radio :checked-value="1">{{ t('sleep') }}</var-radio>
  </var-radio-group>
  <div class="relation">{{ t('currentValue') }} {{ value9 }}</div>

  <app-type>{{ t('radioValidate') }}</app-type>
  <var-radio v-model="value7" :rules="[(v) => v || t('radioValidateMessage')]">
    {{ t('currentValue') }} {{ value7 }}
  </var-radio>

  <app-type>{{ t('radioGroupValidate') }}</app-type>
  <var-radio-group v-model="value8" :rules="[(v) => v === 0 || t('radioGroupValidateMessage')]">
    <var-radio :checked-value="0">{{ t('eat') }}</var-radio>
    <var-radio :checked-value="1">{{ t('sleep') }}</var-radio>
  </var-radio-group>
  <div class="relation">{{ t('currentValue') }} {{ value8 }}</div>

  <div class="space"></div>
</template>

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
