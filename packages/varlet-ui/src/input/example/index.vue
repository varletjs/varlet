<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { z } from 'zod'
import { t, use } from './locale'

const standardValue = ref('')
const standardValue2 = ref('')
const standardValue3 = ref('')
const standardValue4 = ref('')
const standardValue5 = ref('')
const standardValue6 = ref('')
const standardValue7 = ref('')
const standardValue8 = ref('')
const standardValue9 = ref('')
const standardValue10 = ref('')
const standardValue11 = ref('')
const standardValue12 = ref('')
const standardValue13 = ref('')
const standardValue14 = ref('')
const standardValue15 = ref('')

const outlinedValue = ref('')
const outlinedValue2 = ref('')
const outlinedValue3 = ref('')
const outlinedValue4 = ref('')
const outlinedValue5 = ref('')
const outlinedValue6 = ref('')
const outlinedValue7 = ref('')
const outlinedValue8 = ref('')
const outlinedValue9 = ref('')
const outlinedValue10 = ref('')
const outlinedValue11 = ref('')
const outlinedValue12 = ref('')
const outlinedValue13 = ref('')
const outlinedValue14 = ref('')
const outlinedValue15 = ref('')

const inputRef = ref()
const outlinedInputRef = ref()

const selectAll = () => {
  inputRef.value?.select()
}

const selectAllOutlined = () => {
  outlinedInputRef.value?.select()
}

const filledValue = ref('')
const filledValue2 = ref('')
const filledValue3 = ref('')
const filledValue4 = ref('')
const filledValue5 = ref('')
const filledValue6 = ref('')
const filledValue7 = ref('')
const filledValue8 = ref('')
const filledValue9 = ref('')
const filledValue10 = ref('')
const filledValue11 = ref('')
const filledValue12 = ref('')
const filledValue13 = ref('')
const filledValue14 = ref('')

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('standard') }}</app-type>
  <var-space direction="column" :size="['3vmin', 0]">
    <var-input v-model="standardValue" :placeholder="t('placeholder')" />
    <var-input v-model="standardValue13" :placeholder="t('numberPlaceholder')" type="number" />
    <var-input v-model="standardValue2" :placeholder="t('readonly')" readonly />
    <var-input v-model="standardValue3" :placeholder="t('disabled')" disabled />
    <var-input v-model="standardValue4" :placeholder="t('clearable')" clearable />
    <var-input v-model="standardValue5" :placeholder="t('clearIconSlot')" clearable>
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input v-model="standardValue6" :placeholder="t('validate')" :rules="(v) => v.length > 6 || t('maxMessage')" />
    <var-input
      v-model="standardValue14"
      :placeholder="t('validateWithZod')"
      :rules="z.string().min(7, t('maxMessage'))"
    />
    <var-input v-model="standardValue7" :placeholder="t('displayIcon')">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input v-model="standardValue8" :placeholder="t('customIconSize')">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" size="8vmin" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" size="12vmin" />
      </template>
    </var-input>
    <var-input v-model="standardValue9" :placeholder="t('maxlength')" :maxlength="10" />
    <var-input v-model="standardValue10" :placeholder="t('textarea')" textarea />
    <var-input v-model="standardValue11" :placeholder="t('smallSize')" size="small" />
    <var-input v-model.trim="standardValue12" :placeholder="t('trim')" />
    <var-input ref="inputRef" v-model="standardValue15" :placeholder="t('selectAll')" />
    <var-button type="primary" @click="selectAll">{{ t('selectAllButton') }}</var-button>
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('outlined') }}</app-type>
  <var-space direction="column" :size="['6vmin', 0]">
    <var-input v-model="outlinedValue" variant="outlined" :placeholder="t('placeholder')" />
    <var-input v-model="outlinedValue13" variant="outlined" :placeholder="t('numberPlaceholder')" type="number" />
    <var-input v-model="outlinedValue2" variant="outlined" :placeholder="t('readonly')" readonly />
    <var-input v-model="outlinedValue3" variant="outlined" :placeholder="t('disabled')" disabled />
    <var-input v-model="outlinedValue4" variant="outlined" :placeholder="t('clearable')" clearable />
    <var-input v-model="outlinedValue5" variant="outlined" :placeholder="t('clearIconSlot')" clearable>
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input
      v-model="outlinedValue6"
      variant="outlined"
      :placeholder="t('validate')"
      :rules="(v) => v.length > 6 || t('maxMessage')"
    />
    <var-input
      v-model="outlinedValue14"
      variant="outlined"
      :placeholder="t('validateWithZod')"
      :rules="z.string().min(7, t('maxMessage'))"
    />
    <var-input v-model="outlinedValue7" variant="outlined" :placeholder="t('displayIcon')">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input v-model="outlinedValue8" variant="outlined" :placeholder="t('customIconSize')">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" size="8vmin" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" size="12vmin" />
      </template>
    </var-input>
    <var-input v-model="outlinedValue9" variant="outlined" :placeholder="t('maxlength')" :maxlength="10" />
    <var-input v-model="outlinedValue10" variant="outlined" :placeholder="t('textarea')" textarea />
    <var-input v-model="outlinedValue11" variant="outlined" :placeholder="t('smallSize')" size="small" />
    <var-input v-model.trim="outlinedValue12" variant="outlined" :placeholder="t('trim')" />

    <var-input ref="outlinedInputRef" v-model="outlinedValue15" variant="outlined" :placeholder="t('selectAll')" />
    <var-button type="primary" @click="selectAllOutlined">{{ t('selectAllButton') }}</var-button>
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('filled') }}</app-type>
  <var-space direction="column" :size="['6vmin', 0]">
    <var-input v-model="filledValue" variant="filled" :placeholder="t('placeholder')" />
    <var-input v-model="filledValue13" variant="filled" :placeholder="t('numberPlaceholder')" type="number" />
    <var-input v-model="filledValue2" variant="filled" :placeholder="t('readonly')" readonly />
    <var-input v-model="filledValue3" variant="filled" :placeholder="t('disabled')" disabled />
    <var-input v-model="filledValue4" variant="filled" :placeholder="t('clearable')" clearable />
    <var-input v-model="filledValue5" variant="filled" :placeholder="t('clearIconSlot')" clearable>
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input
      v-model="filledValue6"
      variant="filled"
      :placeholder="t('validate')"
      :rules="(v) => v.length > 6 || t('maxMessage')"
    />
    <var-input
      v-model="filledValue14"
      variant="filled"
      :placeholder="t('validateWithZod')"
      :rules="z.string().min(7, t('maxMessage'))"
    />
    <var-input v-model="filledValue7" variant="filled" :placeholder="t('displayIcon')">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input v-model="filledValue8" variant="filled" :placeholder="t('customIconSize')">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" size="8vmin" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" size="12vmin" />
      </template>
    </var-input>
    <var-input v-model="filledValue9" variant="filled" :placeholder="t('maxlength')" :maxlength="10" />
    <var-input v-model="filledValue10" variant="filled" :placeholder="t('textarea')" textarea />
    <var-input v-model="filledValue11" variant="filled" :placeholder="t('smallSize')" size="small" />
    <var-input v-model.trim="filledValue12" variant="filled" :placeholder="t('trim')" />
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
