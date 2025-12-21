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
const standardValue8 = ref()
const standardValue9 = ref([])
const standardValue10 = ref([])
const standardValue11 = ref()
const standardValue12 = ref([])
const standardValue13 = ref()
const standardValue14 = ref()
const standardValue15 = ref([])
const standardValue16 = ref()
const standardValue17 = ref()
const standardValue18 = ref([])

const outlinedValue = ref()
const outlinedValue2 = ref()
const outlinedValue3 = ref()
const outlinedValue4 = ref()
const outlinedValue5 = ref()
const outlinedValue6 = ref()
const outlinedValue7 = ref()
const outlinedValue8 = ref()
const outlinedValue9 = ref([])
const outlinedValue10 = ref([])
const outlinedValue11 = ref()
const outlinedValue12 = ref([])
const outlinedValue13 = ref()
const outlinedValue14 = ref()
const outlinedValue15 = ref([])
const outlinedValue16 = ref()
const outlinedValue17 = ref()
const outlinedValue18 = ref([])
const options = computed(() => [
  {
    label: t('eat'),
    value: 1,
  },
  {
    label: t('sleep'),
    value: 2,
  },
  {
    label: t('play'),
    value: 3,
    disabled: true,
  },
])
const keyOptions = computed(() => [
  {
    name: t('eat'),
    id: 1,
  },
  {
    name: t('sleep'),
    id: 2,
  },
  {
    name: t('play'),
    id: 3,
    disabled: true,
  },
])

onThemeChange()
watchLang((lang) => {
  standardValue.value = undefined
  standardValue2.value = undefined
  standardValue3.value = undefined
  standardValue4.value = undefined
  standardValue5.value = undefined
  standardValue6.value = undefined
  standardValue7.value = undefined
  standardValue8.value = undefined
  standardValue9.value = []
  standardValue10.value = []
  standardValue11.value = undefined
  standardValue12.value = []
  standardValue13.value = undefined
  standardValue14.value = undefined
  standardValue15.value = []
  standardValue16.value = undefined
  standardValue17.value = undefined
  standardValue18.value = []

  outlinedValue.value = undefined
  outlinedValue2.value = undefined
  outlinedValue3.value = undefined
  outlinedValue4.value = undefined
  outlinedValue5.value = undefined
  outlinedValue6.value = undefined
  outlinedValue7.value = undefined
  outlinedValue8.value = undefined
  outlinedValue9.value = []
  outlinedValue10.value = []
  outlinedValue11.value = undefined
  outlinedValue12.value = []
  outlinedValue13.value = undefined
  outlinedValue14.value = undefined
  outlinedValue15.value = []
  outlinedValue16.value = undefined
  outlinedValue17.value = undefined
  outlinedValue18.value = []

  use(lang)
})
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
    <var-select v-model="standardValue8" :placeholder="t('customIconSize')">
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
        <var-icon
          class="selected-icon"
          :name="standardValue8 === t('eat') ? 'cake-variant' : 'weather-night'"
          size="8vmin"
        />
        <span>{{ standardValue8 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" size="8vmin" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" size="12vmin" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>
    <var-select v-model="standardValue9" :placeholder="t('multiple')" multiple>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select v-model="standardValue10" :placeholder="t('chipMultiple')" chip multiple>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      v-model="standardValue11"
      :placeholder="t('validate')"
      :rules="[(v) => v === t('rest') || t('mustSelectRest')]"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select
      v-model="standardValue17"
      :placeholder="t('validateWithZod')"
      :rules="z.string().refine((v) => v === t('rest'), { message: t('mustSelectRest') })"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select
      v-model="standardValue12"
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
      v-model="standardValue18"
      multiple
      :placeholder="t('multipleValidateWithZod')"
      :rules="z.array(z.string()).min(2, { message: t('mustSelectMoreThan') })"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select v-model="standardValue13" :placeholder="t('smallSize')">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="standardValue14" :placeholder="t('selectOptions')" :options="options" />
    <var-select v-model="standardValue15" :placeholder="t('selectOptionsMultiple')" :options="options" multiple />
    <var-select
      v-model="standardValue16"
      :placeholder="t('customFields')"
      :options="keyOptions"
      label-key="name"
      value-key="id"
    />
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('outlined') }}</app-type>
  <var-space direction="column" :size="['6vmin', 0]">
    <var-select v-model="outlinedValue" variant="filled" :placeholder="t('placeholder')">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="outlinedValue2" variant="filled" :placeholder="t('relation')">
      <var-option :label="t('eat')" :value="1" />
      <var-option :label="t('sleep')" :value="2" />
    </var-select>
    <div class="relation">{{ t('currentSelect') }} {{ outlinedValue2 }}</div>
    <var-select v-model="outlinedValue3" variant="filled" :placeholder="t('readonly')" readonly>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="outlinedValue4" variant="filled" :placeholder="t('disabled')" disabled>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="outlinedValue5" variant="filled" :placeholder="t('clearable')" clearable>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="outlinedValue6" variant="filled" :placeholder="t('clearIconSlot')" clearable>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>
    <var-select v-model="outlinedValue7" variant="filled" :placeholder="t('customIcon')">
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
    <var-select v-model="outlinedValue8" variant="filled" :placeholder="t('customIconSize')">
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
        <var-icon
          class="selected-icon"
          :name="outlinedValue8 === t('eat') ? 'cake-variant' : 'weather-night'"
          size="8vmin"
        />
        <span>{{ outlinedValue8 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" size="8vmin" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" size="12vmin" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>
    <var-select v-model="outlinedValue9" variant="filled" :placeholder="t('multiple')" multiple>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select v-model="outlinedValue10" variant="filled" :placeholder="t('chipMultiple')" chip multiple>
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      v-model="outlinedValue11"
      variant="filled"
      :placeholder="t('validate')"
      :rules="[(v) => v === t('rest') || t('mustSelectRest')]"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select
      v-model="outlinedValue17"
      variant="filled"
      :placeholder="t('validateWithZod')"
      :rules="z.string().refine((v) => v === t('rest'), { message: t('mustSelectRest') })"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select
      v-model="outlinedValue12"
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
      v-model="outlinedValue18"
      multiple
      variant="filled"
      :placeholder="t('multipleValidateWithZod')"
      :rules="z.array(z.string()).min(2, { message: t('mustSelectMoreThan') })"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select v-model="outlinedValue13" variant="filled" size="small" :placeholder="t('smallSize')">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select v-model="outlinedValue14" variant="filled" :placeholder="t('selectOptions')" :options="options" />
    <var-select
      v-model="outlinedValue15"
      variant="filled"
      :placeholder="t('selectOptionsMultiple')"
      :options="options"
      multiple
    />
    <var-select
      v-model="outlinedValue16"
      variant="filled"
      :placeholder="t('customFields')"
      :options="keyOptions"
      label-key="name"
      value-key="id"
    />
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
