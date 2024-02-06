<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { reactive, toRefs } from 'vue'
import { use, t } from './locale'

const values = reactive({
  value: false,
  value2: 0,
  value3: false,
  value4: false,
  value5: false,
  value6: [],
  value7: false,
  value8: [],
  value9: [],
  value10: false,
  group: null,
  indeterminate: true,
})

const { value, value2, value3, value4, value5, value6, value7, value8, value9, group, value10, indeterminate } =
  toRefs(values)

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-checkbox v-model="value">{{ t('currentValue') }} {{ value }}</var-checkbox>

  <app-type>{{ t('setState') }}</app-type>
  <var-checkbox :unchecked-value="0" :checked-value="1" v-model="value2">
    {{ t('currentValue') }} {{ value2 }}
  </var-checkbox>

  <app-type>{{ t('setStyle') }}</app-type>
  <var-checkbox unchecked-color="var(--color-warning)" checked-color="var(--color-danger)" v-model="value3">
    <template #unchecked-icon>
      <var-icon name="heart-half-full" size="24px" />
    </template>
    <template #checked-icon>
      <var-icon name="heart" size="24px" />
    </template>
    <template #default> {{ t('currentValue') }} {{ value3 }} </template>
  </var-checkbox>

  <app-type>{{ t('disabled') }}</app-type>
  <var-checkbox disabled v-model="value4">{{ t('currentValue') }} {{ value4 }}</var-checkbox>

  <app-type>{{ t('readonly') }}</app-type>
  <var-checkbox readonly v-model="value5">{{ t('currentValue') }} {{ value5 }}</var-checkbox>

  <app-type>{{ t('indeterminate') }}</app-type>
  <var-space :size="[0, 10]">
    <var-checkbox v-model="value10" v-model:indeterminate="indeterminate">
      {{ t('indeterminateValue') }} {{ indeterminate }}
    </var-checkbox>
    <var-button type="primary" @click="indeterminate = !indeterminate">{{ t('toggle') }}</var-button>
  </var-space>

  <app-type>{{ t('checkboxGroup') }}</app-type>
  <var-checkbox-group ref="group" v-model="value6">
    <var-checkbox :checked-value="0">{{ t('eat') }}</var-checkbox>
    <var-checkbox :checked-value="1">{{ t('sleep') }}</var-checkbox>
  </var-checkbox-group>
  <div class="relation">{{ t('currentValue') }} {{ value6 }}</div>
  <var-divider margin="14px 0" />
  <var-space :size="[0, 10]">
    <var-button type="primary" @click="$refs.group.checkAll()">{{ t('checkAll') }}</var-button>
    <var-button type="primary" @click="$refs.group.inverseAll()">{{ t('inverseAll') }}</var-button>
  </var-space>

  <app-type>{{ t('vertical') }}</app-type>
  <var-checkbox-group v-model="value9" direction="vertical">
    <var-checkbox :checked-value="0">{{ t('eat') }}</var-checkbox>
    <var-checkbox :checked-value="1">{{ t('sleep') }}</var-checkbox>
  </var-checkbox-group>
  <div class="relation">{{ t('currentValue') }} {{ value9 }}</div>

  <app-type>{{ t('checkboxValidate') }}</app-type>
  <var-checkbox v-model="value7" :rules="[(v) => v || t('checkboxValidateMessage')]">
    {{ t('currentValue') }} {{ value7 }}
  </var-checkbox>

  <app-type>{{ t('checkboxGroupValidate') }}</app-type>
  <var-checkbox-group v-model="value8" :rules="[(v) => v.length === 2 || t('checkboxGroupValidateMessage')]">
    <var-checkbox :checked-value="0">{{ t('eat') }}</var-checkbox>
    <var-checkbox :checked-value="1">{{ t('sleep') }}</var-checkbox>
  </var-checkbox-group>
  <div class="relation">{{ t('currentValue') }} {{ value8 }}</div>

  <div class="space"></div>
</template>

<style scoped lang="less">
.relation {
  margin-top: 10px;
}

.space {
  height: 40px;
}
</style>
