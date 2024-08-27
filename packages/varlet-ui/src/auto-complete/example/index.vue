<script setup>
import { watchLang, AppType } from '@varlet/cli/client'
import { use, t } from './locale'
import { ref, computed } from 'vue'

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
    })
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
    <var-auto-complete :placeholder="t('placeholder')" :options="standardOptions" v-model="standardValue" />
    <var-auto-complete readonly :placeholder="t('readonly')" :options="standardOptions2" v-model="standardValue2" />
    <var-auto-complete disabled :placeholder="t('disabled')" :options="standardOptions3" v-model="standardValue3" />
    <var-auto-complete clearable :placeholder="t('clearable')" :options="standardOptions4" v-model="standardValue4" />
    <var-auto-complete clearable :placeholder="t('clearIconSlot')" :options="standardOptions5" v-model="standardValue5">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-auto-complete>
    <var-auto-complete
      :placeholder="t('validate')"
      :options="standardOptions6"
      :rules="[(v) => v.length > 6 || t('maxMessage')]"
      v-model="standardValue6"
    />
    <var-auto-complete :placeholder="t('displayIcon')" :options="standardOptions7" v-model="standardValue7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-auto-complete>
    <var-auto-complete :placeholder="t('customIconSize')" :options="standardOptions8" v-model="standardValue8">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" size="8vmin" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" size="12vmin" />
      </template>
    </var-auto-complete>
    <var-auto-complete
      :placeholder="t('maxlength')"
      :maxlength="10"
      :options="standardOptions9"
      v-model="standardValue9"
    />
    <var-auto-complete
      size="small"
      :placeholder="t('smallSize')"
      :options="standardOptions10"
      v-model="standardValue10"
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
