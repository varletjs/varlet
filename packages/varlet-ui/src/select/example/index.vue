<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { computed, ref } from 'vue'
import { z } from 'zod'
import { use, t } from './locale'

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
    <var-select :placeholder="t('placeholder')" v-model="standardValue">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select :placeholder="t('relation')" v-model="standardValue2">
      <var-option :label="t('eat')" :value="1" />
      <var-option :label="t('sleep')" :value="2" />
    </var-select>
    <div class="relation">{{ t('currentSelect') }} {{ standardValue2 }}</div>
    <var-select :placeholder="t('readonly')" readonly v-model="standardValue3">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select :placeholder="t('disabled')" disabled v-model="standardValue4">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select :placeholder="t('clearable')" clearable v-model="standardValue5">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select :placeholder="t('clearIconSlot')" clearable v-model="standardValue6">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>
    <var-select :placeholder="t('customIcon')" v-model="standardValue7">
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
    <var-select :placeholder="t('customIconSize')" v-model="standardValue8">
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
    <var-select :placeholder="t('multiple')" multiple v-model="standardValue9">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select :placeholder="t('chipMultiple')" chip multiple v-model="standardValue10">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      :placeholder="t('validate')"
      :rules="[(v) => v === t('rest') || t('mustSelectRest')]"
      v-model="standardValue11"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select
      :placeholder="t('validateWithZod')"
      :rules="z.string().refine((v) => v === t('rest'), { message: t('mustSelectRest') })"
      v-model="standardValue17"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select
      multiple
      :placeholder="t('multipleValidate')"
      :rules="[(v) => v.length >= 2 || t('mustSelectMoreThan')]"
      v-model="standardValue12"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      multiple
      :placeholder="t('multipleValidateWithZod')"
      :rules="z.array(z.string()).min(2, { message: t('mustSelectMoreThan') })"
      v-model="standardValue18"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select :placeholder="t('smallSize')" v-model="standardValue13">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select :placeholder="t('selectOptions')" v-model="standardValue14" :options="options" />
    <var-select :placeholder="t('selectOptionsMultiple')" v-model="standardValue15" :options="options" multiple />
    <var-select
      :placeholder="t('customFields')"
      v-model="standardValue16"
      :options="keyOptions"
      label-key="name"
      value-key="id"
    />
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('outlined') }}</app-type>
  <var-space direction="column" :size="['6vmin', 0]">
    <var-select variant="outlined" :placeholder="t('placeholder')" v-model="outlinedValue">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select variant="outlined" :placeholder="t('relation')" v-model="outlinedValue2">
      <var-option :label="t('eat')" :value="1" />
      <var-option :label="t('sleep')" :value="2" />
    </var-select>
    <div class="relation">{{ t('currentSelect') }} {{ outlinedValue2 }}</div>
    <var-select variant="outlined" :placeholder="t('readonly')" readonly v-model="outlinedValue3">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select variant="outlined" :placeholder="t('disabled')" disabled v-model="outlinedValue4">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select variant="outlined" :placeholder="t('clearable')" clearable v-model="outlinedValue5">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select variant="outlined" :placeholder="t('clearIconSlot')" clearable v-model="outlinedValue6">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>
    <var-select variant="outlined" :placeholder="t('customIcon')" v-model="outlinedValue7">
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
    <var-select variant="outlined" :placeholder="t('customIconSize')" v-model="outlinedValue8">
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
    <var-select variant="outlined" :placeholder="t('multiple')" multiple v-model="outlinedValue9">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select variant="outlined" :placeholder="t('chipMultiple')" chip multiple v-model="outlinedValue10">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      variant="outlined"
      :placeholder="t('validate')"
      :rules="[(v) => v === t('rest') || t('mustSelectRest')]"
      v-model="outlinedValue11"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select
      variant="outlined"
      :placeholder="t('validateWithZod')"
      :rules="z.string().refine((v) => v === t('rest'), { message: t('mustSelectRest') })"
      v-model="outlinedValue17"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select
      multiple
      variant="outlined"
      :placeholder="t('multipleValidate')"
      :rules="[(v) => v.length >= 2 || t('mustSelectMoreThan')]"
      v-model="outlinedValue12"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      multiple
      variant="outlined"
      :placeholder="t('multipleValidateWithZod')"
      :rules="z.array(z.string()).min(2, { message: t('mustSelectMoreThan') })"
      v-model="outlinedValue18"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select variant="outlined" size="small" :placeholder="t('smallSize')" v-model="outlinedValue13">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select variant="outlined" :placeholder="t('selectOptions')" v-model="outlinedValue14" :options="options" />
    <var-select
      variant="outlined"
      :placeholder="t('selectOptionsMultiple')"
      v-model="outlinedValue15"
      :options="options"
      multiple
    />
    <var-select
      variant="outlined"
      :placeholder="t('customFields')"
      v-model="outlinedValue16"
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
