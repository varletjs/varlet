<script setup>
import { computed, ref } from 'vue'
import { AppType, watchLang } from '@varlet/cli/client'
import { z } from 'zod'
import { t, use } from './locale'

const { value: standardValue, options: standardOptions } = useAutoComplete()
const { value: standardValue2, options: standardOptions2 } = useAutoComplete()
const { value: standardValue3, options: standardOptions3 } = useAutoComplete()
const { value: standardValue4, options: standardOptions4 } = useAutoComplete()
const { value: standardValue5, options: standardOptions5 } = useAutoComplete()
const { value: standardValue6, options: standardOptions6 } = useAutoComplete()
const { value: standardValue7, options: standardOptions7 } = useAutoComplete()
const { value: standardValue8, options: standardOptions8 } = useAutoComplete()
const { value: standardValue9, options: standardOptions9 } = useAutoComplete()
const { value: standardValue10, options: standardOptions10 } = useAutoComplete()
const { value: standardValue11, options: standardOptions11 } = useAutoComplete()

const { value: outlinedValue, options: outlinedOptions } = useAutoComplete()
const { value: outlinedValue2, options: outlinedOptions2 } = useAutoComplete()
const { value: outlinedValue3, options: outlinedOptions3 } = useAutoComplete()
const { value: outlinedValue4, options: outlinedOptions4 } = useAutoComplete()
const { value: outlinedValue5, options: outlinedOptions5 } = useAutoComplete()
const { value: outlinedValue6, options: outlinedOptions6 } = useAutoComplete()
const { value: outlinedValue7, options: outlinedOptions7 } = useAutoComplete()
const { value: outlinedValue8, options: outlinedOptions8 } = useAutoComplete()
const { value: outlinedValue9, options: outlinedOptions9 } = useAutoComplete()
const { value: outlinedValue10, options: outlinedOptions10 } = useAutoComplete()
const { value: outlinedValue11, options: outlinedOptions11 } = useAutoComplete()

const { value: filledValue, options: filledOptions } = useAutoComplete()
const { value: filledValue2, options: filledOptions2 } = useAutoComplete()
const { value: filledValue3, options: filledOptions3 } = useAutoComplete()
const { value: filledValue4, options: filledOptions4 } = useAutoComplete()
const { value: filledValue5, options: filledOptions5 } = useAutoComplete()
const { value: filledValue6, options: filledOptions6 } = useAutoComplete()
const { value: filledValue7, options: filledOptions7 } = useAutoComplete()
const { value: filledValue8, options: filledOptions8 } = useAutoComplete()
const { value: filledValue9, options: filledOptions9 } = useAutoComplete()
const { value: filledValue10, options: filledOptions10 } = useAutoComplete()
const { value: filledValue11, options: filledOptions11 } = useAutoComplete()

watchLang(use)

function useAutoComplete() {
  const value = ref('')
  const options = computed(() =>
    ['@qq.com', '@163.com', '@gmail.com'].map((suffix) => {
      const [prefix] = value.value.split('@')
      return {
        label: `${prefix}${suffix}`,
        value: `${prefix}${suffix}`,
      }
    }),
  )

  return {
    value,
    options,
  }
}
</script>

<template>
  <app-type>{{ t('standard') }}</app-type>
  <var-space direction="column" :size="['3vmin', 0]">
    <var-auto-complete v-model="standardValue" :placeholder="t('placeholder')" :options="standardOptions" />
    <var-auto-complete v-model="standardValue2" readonly :placeholder="t('readonly')" :options="standardOptions2" />
    <var-auto-complete v-model="standardValue3" disabled :placeholder="t('disabled')" :options="standardOptions3" />
    <var-auto-complete v-model="standardValue4" clearable :placeholder="t('clearable')" :options="standardOptions4" />
    <var-auto-complete v-model="standardValue5" clearable :placeholder="t('clearIconSlot')" :options="standardOptions5">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-auto-complete>
    <var-auto-complete
      v-model="standardValue6"
      :placeholder="t('validate')"
      :options="standardOptions6"
      :rules="[(v) => v.length > 6 || t('maxMessage')]"
    />
    <var-auto-complete
      v-model="standardValue7"
      :placeholder="t('validateWithZod')"
      :options="standardOptions7"
      :rules="z.string().min(7, { message: t('maxMessage') })"
    />
    <var-auto-complete v-model="standardValue8" :placeholder="t('displayIcon')" :options="standardOptions8">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-auto-complete>
    <var-auto-complete
      v-model="standardValue9"
      :placeholder="t('maxlength')"
      :maxlength="10"
      :options="standardOptions9"
    />
    <var-auto-complete
      v-model="standardValue10"
      :placeholder="t('customMenuShowTiming')"
      :get-show="(value) => value.length > 3"
      :options="standardOptions10"
    />
    <var-auto-complete
      v-model="standardValue11"
      size="small"
      :placeholder="t('smallSize')"
      :options="standardOptions11"
    />
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('outlined') }}</app-type>
  <var-space direction="column" :size="['6vmin', 0]">
    <var-auto-complete
      v-model="outlinedValue"
      variant="outlined"
      :placeholder="t('placeholder')"
      :options="outlinedOptions"
    />
    <var-auto-complete
      v-model="outlinedValue2"
      variant="outlined"
      readonly
      :placeholder="t('readonly')"
      :options="outlinedOptions2"
    />
    <var-auto-complete
      v-model="outlinedValue3"
      variant="outlined"
      disabled
      :placeholder="t('disabled')"
      :options="outlinedOptions3"
    />
    <var-auto-complete
      v-model="outlinedValue4"
      variant="outlined"
      clearable
      :placeholder="t('clearable')"
      :options="outlinedOptions4"
    />
    <var-auto-complete
      v-model="outlinedValue5"
      variant="outlined"
      clearable
      :placeholder="t('clearIconSlot')"
      :options="outlinedOptions5"
    >
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-auto-complete>
    <var-auto-complete
      v-model="outlinedValue6"
      variant="outlined"
      :placeholder="t('validate')"
      :options="outlinedOptions6"
      :rules="[(v) => v.length > 6 || t('maxMessage')]"
    />
    <var-auto-complete
      v-model="outlinedValue7"
      variant="outlined"
      :placeholder="t('validateWithZod')"
      :options="outlinedOptions7"
      :rules="z.string().min(7, { message: t('maxMessage') })"
    />
    <var-auto-complete
      v-model="outlinedValue8"
      variant="outlined"
      :placeholder="t('displayIcon')"
      :options="outlinedOptions8"
    >
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-auto-complete>
    <var-auto-complete
      v-model="outlinedValue9"
      variant="outlined"
      :placeholder="t('maxlength')"
      :maxlength="10"
      :options="outlinedOptions9"
    />
    <var-auto-complete
      v-model="outlinedValue10"
      variant="outlined"
      :placeholder="t('customMenuShowTiming')"
      :get-show="(value) => value.length > 3"
      :options="outlinedOptions10"
    />
    <var-auto-complete
      v-model="outlinedValue11"
      variant="outlined"
      size="small"
      :placeholder="t('smallSize')"
      :options="outlinedOptions11"
    />
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('filled') }}</app-type>
  <var-space direction="column" :size="['6vmin', 0]">
    <var-auto-complete
      v-model="filledValue"
      variant="filled"
      :placeholder="t('placeholder')"
      :options="filledOptions"
    />
    <var-auto-complete
      v-model="filledValue2"
      variant="filled"
      readonly
      :placeholder="t('readonly')"
      :options="filledOptions2"
    />
    <var-auto-complete
      v-model="filledValue3"
      variant="filled"
      disabled
      :placeholder="t('disabled')"
      :options="filledOptions3"
    />
    <var-auto-complete
      v-model="filledValue4"
      variant="filled"
      clearable
      :placeholder="t('clearable')"
      :options="filledOptions4"
    />
    <var-auto-complete
      v-model="filledValue5"
      variant="filled"
      clearable
      :placeholder="t('clearIconSlot')"
      :options="filledOptions5"
    >
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-auto-complete>
    <var-auto-complete
      v-model="filledValue6"
      variant="filled"
      :placeholder="t('validate')"
      :options="filledOptions6"
      :rules="[(v) => v.length > 6 || t('maxMessage')]"
    />
    <var-auto-complete
      v-model="filledValue7"
      variant="filled"
      :placeholder="t('validateWithZod')"
      :options="filledOptions7"
      :rules="z.string().min(7, { message: t('maxMessage') })"
    />
    <var-auto-complete
      v-model="filledValue8"
      variant="filled"
      :placeholder="t('displayIcon')"
      :options="filledOptions8"
    >
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-auto-complete>
    <var-auto-complete
      v-model="filledValue9"
      variant="filled"
      :placeholder="t('maxlength')"
      :maxlength="10"
      :options="filledOptions9"
    />
    <var-auto-complete
      v-model="filledValue10"
      variant="filled"
      :placeholder="t('customMenuShowTiming')"
      :get-show="(value) => value.length > 3"
      :options="filledOptions10"
    />
    <var-auto-complete
      v-model="filledValue11"
      variant="filled"
      size="small"
      :placeholder="t('smallSize')"
      :options="filledOptions11"
    />
  </var-space>
</template>

<style scoped lang="less">
.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}
</style>
