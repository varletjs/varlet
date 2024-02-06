<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { use, t } from './locale'

const standardValue = ref(undefined)
const standardValue2 = ref(undefined)
const standardValue3 = ref(undefined)
const standardValue4 = ref(undefined)
const standardValue5 = ref(undefined)
const standardValue6 = ref(undefined)
const standardValue7 = ref([])
const standardValue8 = ref([])
const standardValue9 = ref([])
const standardValue10 = ref(undefined)
const standardValue11 = ref(undefined)
const standardValue12 = ref(undefined)

const outlinedValue = ref(undefined)
const outlinedValue2 = ref(undefined)
const outlinedValue3 = ref(undefined)
const outlinedValue4 = ref(undefined)
const outlinedValue5 = ref(undefined)
const outlinedValue6 = ref(undefined)
const outlinedValue7 = ref([])
const outlinedValue8 = ref([])
const outlinedValue9 = ref([])
const outlinedValue10 = ref(undefined)
const outlinedValue11 = ref(undefined)
const outlinedValue12 = ref(undefined)

onThemeChange()
watchLang((lang) => {
  standardValue.value = undefined
  standardValue2.value = undefined
  standardValue3.value = undefined
  standardValue4.value = undefined
  standardValue5.value = undefined
  standardValue6.value = undefined
  standardValue7.value = []
  standardValue8.value = []
  standardValue9.value = []
  standardValue10.value = undefined
  standardValue11.value = undefined
  standardValue12.value = undefined

  outlinedValue.value = undefined
  outlinedValue2.value = undefined
  outlinedValue3.value = undefined
  outlinedValue4.value = undefined
  outlinedValue5.value = undefined
  outlinedValue6.value = undefined
  outlinedValue7.value = []
  outlinedValue8.value = []
  outlinedValue9.value = []
  outlinedValue10.value = undefined
  outlinedValue11.value = undefined
  outlinedValue12.value = undefined

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
    <var-select :placeholder="t('relation')" v-model="standardValue10">
      <var-option :label="t('eat')" :value="1" />
      <var-option :label="t('sleep')" :value="2" />
    </var-select>
    <div class="relation">{{ t('currentSelect') }} {{ standardValue10 }}</div>
    <var-select :placeholder="t('readonly')" readonly v-model="standardValue2">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select :placeholder="t('disabled')" disabled v-model="standardValue3">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select :placeholder="t('clearable')" clearable v-model="standardValue4">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select :placeholder="t('customIcon')" v-model="standardValue6">
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
        <var-icon class="selected-icon" :name="standardValue6 === t('eat') ? 'cake-variant' : 'weather-night'" />
        <span>{{ standardValue6 }}</span>
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
    <var-select :placeholder="t('customIconSize')" v-model="standardValue12">
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
          :name="standardValue12 === t('eat') ? 'cake-variant' : 'weather-night'"
          size="8vmin"
        />
        <span>{{ standardValue12 }}</span>
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
    <var-select :placeholder="t('multiple')" multiple v-model="standardValue7">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select :placeholder="t('chipMultiple')" chip multiple v-model="standardValue8">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      :placeholder="t('validate')"
      :rules="[(v) => v === t('rest') || t('mustSelectRest')]"
      v-model="standardValue5"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('rest')" />
    </var-select>
    <var-select
      multiple
      :placeholder="t('multipleValidate')"
      :rules="[(v) => v.length >= 2 || t('mustSelectMoreThan')]"
      v-model="standardValue9"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select :placeholder="t('smallSize')" v-model="standardValue11">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('outlined') }}</app-type>
  <var-space direction="column" :size="['6vmin', 0]">
    <var-select variant="outlined" :placeholder="t('placeholder')" v-model="outlinedValue">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select variant="outlined" :placeholder="t('relation')" v-model="outlinedValue10">
      <var-option :label="t('eat')" :value="1" />
      <var-option :label="t('sleep')" :value="2" />
    </var-select>
    <div class="relation">{{ t('currentSelect') }} {{ outlinedValue10 }}</div>
    <var-select variant="outlined" :placeholder="t('readonly')" readonly v-model="outlinedValue2">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select variant="outlined" :placeholder="t('disabled')" disabled v-model="outlinedValue3">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select variant="outlined" :placeholder="t('clearable')" clearable v-model="outlinedValue4">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
    </var-select>
    <var-select variant="outlined" :placeholder="t('customIcon')" v-model="outlinedValue6">
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
        <var-icon class="selected-icon" :name="outlinedValue6 === t('eat') ? 'cake-variant' : 'weather-night'" />
        <span>{{ outlinedValue6 }}</span>
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
    <var-select variant="outlined" :placeholder="t('customIconSize')" v-model="outlinedValue12">
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
          :name="outlinedValue12 === t('eat') ? 'cake-variant' : 'weather-night'"
          size="8vmin"
        />
        <span>{{ outlinedValue12 }}</span>
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
    <var-select variant="outlined" :placeholder="t('multiple')" multiple v-model="outlinedValue7">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select variant="outlined" :placeholder="t('chipMultiple')" chip multiple v-model="outlinedValue8">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select
      variant="outlined"
      :placeholder="t('validate')"
      :rules="[(v) => v === t('rest') || t('mustSelectRest')]"
      v-model="outlinedValue5"
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
      v-model="outlinedValue9"
    >
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
      <var-option :label="t('play')" />
      <var-option :label="t('coding')" />
    </var-select>
    <var-select variant="outlined" size="small" :placeholder="t('smallSize')" v-model="outlinedValue11">
      <var-option :label="t('eat')" />
      <var-option :label="t('sleep')" />
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
