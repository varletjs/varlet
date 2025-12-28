<script setup>
import { computed, ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { z } from 'zod'
import { t, use } from './locale'

const standardValue = ref()
const standardValue2 = ref()
const standardValue3 = ref()
const standardValue4 = ref()
const standardValue5 = ref()
const standardValue6 = ref()
const standardValue7 = ref()
const standardValue8 = ref([])
const standardValue9 = ref([])
const standardValue10 = ref()
const standardValue11 = ref([])
const standardValue12 = ref()
const standardValue13 = ref()
const standardValue14 = ref()
const standardValue15 = ref()
const standardValue16 = ref([])

const outlinedValue = ref()
const outlinedValue2 = ref()
const outlinedValue3 = ref()
const outlinedValue4 = ref()
const outlinedValue5 = ref()
const outlinedValue6 = ref()
const outlinedValue7 = ref()
const outlinedValue8 = ref([])
const outlinedValue9 = ref([])
const outlinedValue10 = ref()
const outlinedValue11 = ref([])
const outlinedValue12 = ref()
const outlinedValue13 = ref()
const outlinedValue14 = ref()
const outlinedValue15 = ref()
const outlinedValue16 = ref([])

// 填充
const filledValue = ref()
const filledValue2 = ref()
const filledValue3 = ref()
const filledValue4 = ref()
const filledValue5 = ref()
const filledValue6 = ref()
const filledValue7 = ref()
const filledValue8 = ref([])
const filledValue9 = ref([])
const filledValue10 = ref()
const filledValue11 = ref([])
const filledValue12 = ref()
const filledValue13 = ref()
const filledValue14 = ref()
const filledValue15 = ref()
const filledValue16 = ref([])

const options = computed(() => [
  { label: t('eat'), value: 1 },
  { label: t('sleep'), value: 2 },
  { label: t('play'), value: 3, disabled: true },
])

const keyOptions = computed(() => [
  { name: t('eat'), id: 1 },
  { name: t('sleep'), id: 2 },
  { name: t('play'), id: 3, disabled: true },
])

watchLang((lang) => {
  standardValue.value = undefined
  standardValue2.value = undefined
  standardValue3.value = undefined
  standardValue4.value = undefined
  standardValue5.value = undefined
  standardValue6.value = undefined
  standardValue7.value = undefined
  standardValue8.value = []
  standardValue9.value = []
  standardValue10.value = undefined
  standardValue11.value = []
  standardValue12.value = undefined
  standardValue13.value = undefined
  standardValue14.value = undefined
  standardValue15.value = undefined
  standardValue16.value = []

  outlinedValue.value = undefined
  outlinedValue2.value = undefined
  outlinedValue3.value = undefined
  outlinedValue4.value = undefined
  outlinedValue5.value = undefined
  outlinedValue6.value = undefined
  outlinedValue7.value = undefined
  outlinedValue8.value = []
  outlinedValue9.value = []
  outlinedValue10.value = undefined
  outlinedValue11.value = []
  outlinedValue12.value = undefined
  outlinedValue13.value = undefined
  outlinedValue14.value = undefined
  outlinedValue15.value = undefined
  outlinedValue16.value = []

  filledValue.value = undefined
  filledValue2.value = undefined
  filledValue3.value = undefined
  filledValue4.value = undefined
  filledValue5.value = undefined
  filledValue6.value = undefined
  filledValue7.value = undefined
  filledValue8.value = []
  filledValue9.value = []
  filledValue10.value = undefined
  filledValue11.value = []
  filledValue12.value = undefined
  filledValue13.value = undefined
  filledValue14.value = undefined
  filledValue15.value = undefined
  filledValue16.value = []

  use(lang)
})
onThemeChange()
</script>

<template>
  <app-type>{{ t('standard') }}</app-type>
  <var-space direction="column" :size="['3vmin', 0]">
    <var-select v-model="standardValue" :placeholder="t('placeholder')">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="standardValue2" :placeholder="t('relation')">
      <var-option :label="t('eat')" :value="1" />
      <var-option :label="t('sleep')" :value="2" />
    </var-select>
    <div class="relation">{{ t('currentSelect') }} {{ standardValue2 }}</div>
    <var-select v-model="standardValue3" :placeholder="t('readonly')" readonly>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="standardValue4" :placeholder="t('disabled')" disabled>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="standardValue5" :placeholder="t('clearable')" clearable>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="standardValue6" :placeholder="t('clearIconSlot')" clearable>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>
    <var-select v-model="standardValue7" :placeholder="t('customIcon')">
      <template #default>
        <var-option :label="t('eat')">
          <var-icon class="selected-icon" name="cake-variant" />
          <span>{{ t('eat') }}</span>
        </var-option>
        <var-option :label="t('sleep')">
          <var-icon class="selected-icon" name="weather-night" />
          <span>{{ t('sleep') }}</span>
        </var-option>
      </template>
      <template #selected>
        <var-icon class="selected-icon" :name="standardValue7 === t('eat') ? 'cake-variant' : 'weather-night'" />
        <span>{{ standardValue7 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>
    <var-select v-model="standardValue8" :placeholder="t('multiple')" multiple>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select v-model="standardValue9" :placeholder="t('chipMultiple')" chip multiple>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      v-model="standardValue10"
      :placeholder="t('validate')"
      :rules="[(v) => v === t('rest') || t('mustSelectRest')]"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select
      v-model="standardValue11"
      multiple
      :placeholder="t('multipleValidate')"
      :rules="[(v) => v.length >= 2 || t('mustSelectMoreThan')]"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      v-model="standardValue12"
      :placeholder="t('validateWithZod')"
      :rules="z.string().refine((v) => v === t('rest'), { message: t('mustSelectRest') })"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select v-model="standardValue13" :placeholder="t('selectOptions')" :options="options" />
    <var-select
      v-model="standardValue14"
      :placeholder="t('customFields')"
      :options="keyOptions"
      label-key="name"
      value-key="id"
    />
    <var-select v-model="standardValue15" :placeholder="t('smallSize')" size="small">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select
      v-model="standardValue16"
      :placeholder="t('multipleValidateWithZod')"
      multiple
      :rules="z.array(z.string()).min(2, { message: t('mustSelectMoreThan') })"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('outlined') }}</app-type>
  <var-space direction="column" :size="['6vmin', 0]">
    <var-select v-model="outlinedValue" variant="outlined" :placeholder="t('placeholder')">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="outlinedValue2" variant="outlined" :placeholder="t('relation')">
      <var-option :label="t('eat')" :value="1" />
      <var-option :label="t('sleep')" :value="2" />
    </var-select>
    <div class="relation">{{ t('currentSelect') }} {{ outlinedValue2 }}</div>
    <var-select v-model="outlinedValue3" variant="outlined" :placeholder="t('readonly')" readonly>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="outlinedValue4" variant="outlined" :placeholder="t('disabled')" disabled>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="outlinedValue5" variant="outlined" :placeholder="t('clearable')" clearable>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="outlinedValue6" variant="outlined" :placeholder="t('clearIconSlot')" clearable>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>
    <var-select v-model="outlinedValue7" variant="outlined" :placeholder="t('customIcon')">
      <template #default>
        <var-option :label="t('eat')">
          <var-icon class="selected-icon" name="cake-variant" />
          <span>{{ t('eat') }}</span>
        </var-option>
        <var-option :label="t('sleep')">
          <var-icon class="selected-icon" name="weather-night" />
          <span>{{ t('sleep') }}</span>
        </var-option>
      </template>
      <template #selected>
        <var-icon class="selected-icon" :name="outlinedValue7 === t('eat') ? 'cake-variant' : 'weather-night'" />
        <span>{{ outlinedValue7 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>
    <var-select v-model="outlinedValue8" variant="outlined" :placeholder="t('multiple')" multiple>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select v-model="outlinedValue9" variant="outlined" :placeholder="t('chipMultiple')" chip multiple>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      v-model="outlinedValue10"
      variant="outlined"
      :placeholder="t('validate')"
      :rules="[(v) => v === t('rest') || t('mustSelectRest')]"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select
      v-model="outlinedValue11"
      multiple
      variant="outlined"
      :placeholder="t('multipleValidate')"
      :rules="[(v) => v.length >= 2 || t('mustSelectMoreThan')]"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      v-model="outlinedValue12"
      variant="outlined"
      :placeholder="t('validateWithZod')"
      :rules="z.string().refine((v) => v === t('rest'), { message: t('mustSelectRest') })"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select v-model="outlinedValue13" variant="outlined" :placeholder="t('selectOptions')" :options="options" />
    <var-select
      v-model="outlinedValue14"
      variant="outlined"
      :placeholder="t('customFields')"
      :options="keyOptions"
      label-key="name"
      value-key="id"
    />
    <var-select v-model="outlinedValue15" variant="outlined" :placeholder="t('smallSize')" size="small">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select
      v-model="outlinedValue16"
      variant="outlined"
      :placeholder="t('multipleValidateWithZod')"
      multiple
      :rules="z.array(z.string()).min(2, { message: t('mustSelectMoreThan') })"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('filled') }}</app-type>
  <var-space direction="column" :size="['6vmin', 0]">
    <var-select v-model="filledValue" variant="filled" :placeholder="t('placeholder')">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="filledValue2" variant="filled" :placeholder="t('relation')">
      <var-option :label="t('eat')" :value="1" />
      <var-option :label="t('sleep')" :value="2" />
    </var-select>
    <div class="relation">{{ t('currentSelect') }} {{ filledValue2 }}</div>
    <var-select v-model="filledValue3" variant="filled" :placeholder="t('readonly')" readonly>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="filledValue4" variant="filled" :placeholder="t('disabled')" disabled>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="filledValue5" variant="filled" :placeholder="t('clearable')" clearable>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="filledValue6" variant="filled" :placeholder="t('clearIconSlot')" clearable>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>
    <var-select v-model="filledValue7" variant="filled" :placeholder="t('customIcon')">
      <template #default>
        <var-option :label="t('eat')">
          <var-icon class="selected-icon" name="cake-variant" />
          <span>{{ t('eat') }}</span>
        </var-option>
        <var-option :label="t('sleep')">
          <var-icon class="selected-icon" name="weather-night" />
          <span>{{ t('sleep') }}</span>
        </var-option>
      </template>
      <template #selected>
        <var-icon class="selected-icon" :name="filledValue7 === t('eat') ? 'cake-variant' : 'weather-night'" />
        <span>{{ filledValue7 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>
    <var-select v-model="filledValue8" variant="filled" :placeholder="t('multiple')" multiple>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select v-model="filledValue9" variant="filled" :placeholder="t('chipMultiple')" chip multiple>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      v-model="filledValue10"
      variant="filled"
      :placeholder="t('validate')"
      :rules="[(v) => v === t('rest') || t('mustSelectRest')]"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select
      v-model="filledValue11"
      multiple
      variant="filled"
      :placeholder="t('multipleValidate')"
      :rules="[(v) => v.length >= 2 || t('mustSelectMoreThan')]"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      v-model="filledValue12"
      variant="filled"
      :placeholder="t('validateWithZod')"
      :rules="z.string().refine((v) => v === t('rest'), { message: t('mustSelectRest') })"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select v-model="filledValue13" variant="filled" :placeholder="t('selectOptions')" :options="options" />
    <var-select
      v-model="filledValue14"
      variant="filled"
      :placeholder="t('customFields')"
      :options="keyOptions"
      label-key="name"
      value-key="id"
    />
    <var-select v-model="filledValue15" variant="filled" :placeholder="t('smallSize')" size="small">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select
      v-model="filledValue16"
      variant="filled"
      :placeholder="t('multipleValidateWithZod')"
      multiple
      :rules="z.array(z.string()).min(2, { message: t('mustSelectMoreThan') })"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
  </var-space>

  <div class="space"></div>
</template>

<style scoped lang="less">
.space {
  height: 200px;
}

.selected-icon {
  margin-right: 6px;
}

.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}

.arrow-icon-rotate {
  transform: rotate(180deg);
}
</style>
