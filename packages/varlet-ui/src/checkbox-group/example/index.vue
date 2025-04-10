<script setup>
import { computed, reactive, toRefs } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { z } from 'zod'
import { t, use } from './locale'

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
  value11: [],
  value12: false,
  value13: [],
  group: null,
  indeterminate: true,
  optionsValue: [],
  fieldValue: [],
})

const {
  value,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7,
  value8,
  value9,
  group,
  value10,
  value11,
  value12,
  value13,
  indeterminate,
  optionsValue,
  fieldValue,
} = toRefs(values)

const options = computed(() => [
  { label: t('eat'), value: 0 },
  { label: t('sleep'), value: 1 },
  { label: t('game'), value: 2, disabled: true },
])

const fieldOptions = computed(() => [
  { name: t('eat'), id: 0 },
  { name: t('sleep'), id: 1 },
  { name: t('game'), id: 2 },
])

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-checkbox v-model="value">{{ t('currentValue') }} {{ value }}</var-checkbox>

  <app-type>{{ t('setState') }}</app-type>
  <var-checkbox v-model="value2" :unchecked-value="0" :checked-value="1">
    {{ t('currentValue') }} {{ value2 }}
  </var-checkbox>

  <app-type>{{ t('setStyle') }}</app-type>
  <var-checkbox v-model="value3" unchecked-color="var(--color-warning)" checked-color="var(--color-danger)">
    <template #unchecked-icon>
      <var-icon name="heart-half-full" size="24px" />
    </template>
    <template #checked-icon>
      <var-icon name="heart" size="24px" />
    </template>
    <template #default> {{ t('currentValue') }} {{ value3 }} </template>
  </var-checkbox>

  <app-type>{{ t('disabled') }}</app-type>
  <var-checkbox v-model="value4" disabled>{{ t('currentValue') }} {{ value4 }}</var-checkbox>

  <app-type>{{ t('readonly') }}</app-type>
  <var-checkbox v-model="value5" readonly>{{ t('currentValue') }} {{ value5 }}</var-checkbox>

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

  <app-type>{{ t('checkboxGroupOptions') }}</app-type>
  <var-checkbox-group v-model="optionsValue" :options="options" />
  <div class="relation">{{ t('currentValue') }} {{ optionsValue }}</div>

  <app-type>{{ t('customFields') }}</app-type>
  <var-checkbox-group v-model="fieldValue" :options="fieldOptions" label-key="name" value-key="id" />
  <div class="relation">{{ t('currentValue') }} {{ fieldValue }}</div>

  <app-type>{{ t('vertical') }}</app-type>
  <var-checkbox-group v-model="value9" direction="vertical">
    <var-checkbox :checked-value="0">{{ t('eat') }}</var-checkbox>
    <var-checkbox :checked-value="1">{{ t('sleep') }}</var-checkbox>
  </var-checkbox-group>
  <div class="relation">{{ t('currentValue') }} {{ value9 }}</div>

  <app-type>{{ t('max') }}</app-type>
  <var-checkbox-group v-model="value11" :max="1">
    <var-checkbox :checked-value="0">{{ t('eat') }}</var-checkbox>
    <var-checkbox :checked-value="1">{{ t('sleep') }}</var-checkbox>
  </var-checkbox-group>

  <app-type>{{ t('checkboxValidate') }}</app-type>
  <var-checkbox v-model="value7" :rules="[(v) => v || t('checkboxValidateMessage')]">
    {{ t('currentValue') }} {{ value7 }}
  </var-checkbox>

  <app-type>{{ t('checkboxValidateWithZod') }}</app-type>
  <var-checkbox v-model="value12" :rules="z.boolean().refine((v) => v, { message: t('checkboxValidateMessage') })">
    {{ t('currentValue') }} {{ value12 }}
  </var-checkbox>

  <app-type>{{ t('checkboxGroupValidate') }}</app-type>
  <var-checkbox-group v-model="value8" :rules="[(v) => v.length === 2 || t('checkboxGroupValidateMessage')]">
    <var-checkbox :checked-value="0">{{ t('eat') }}</var-checkbox>
    <var-checkbox :checked-value="1">{{ t('sleep') }}</var-checkbox>
  </var-checkbox-group>
  <div class="relation">{{ t('currentValue') }} {{ value8 }}</div>

  <app-type>{{ t('checkboxGroupValidateWithZod') }}</app-type>
  <var-checkbox-group
    v-model="value13"
    :rules="z.array(z.number()).length(2, { message: t('checkboxGroupValidateMessage') })"
  >
    <var-checkbox :checked-value="0">{{ t('eat') }}</var-checkbox>
    <var-checkbox :checked-value="1">{{ t('sleep') }}</var-checkbox>
  </var-checkbox-group>
  <div class="relation">{{ t('currentValue') }} {{ value13 }}</div>

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
