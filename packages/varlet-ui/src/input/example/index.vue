<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { use, t } from './locale'

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

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('standard') }}</app-type>
  <var-space direction="column" :size="['3vmin', 0]">
    <var-input :placeholder="t('placeholder')" v-model="standardValue" />
    <var-input :placeholder="t('readonly')" readonly v-model="standardValue2" />
    <var-input :placeholder="t('disabled')" disabled v-model="standardValue3" />
    <var-input :placeholder="t('clearable')" clearable v-model="standardValue4" />
    <var-input :placeholder="t('clearIconSlot')" clearable v-model="standardValue5">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input
      :placeholder="t('validate')"
      :rules="[(v) => v.length > 6 || t('maxMessage')]"
      v-model="standardValue6"
    />
    <var-input :placeholder="t('displayIcon')" v-model="standardValue7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>

    <var-input :placeholder="t('customIconSize')" v-model="standardValue8">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" size="8vmin" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" size="12vmin" />
      </template>
    </var-input>
    <var-input :placeholder="t('maxlength')" :maxlength="10" v-model="standardValue9" />
    <var-input :placeholder="t('textarea')" textarea v-model="standardValue10" />
    <var-input :placeholder="t('smallSize')" size="small" v-model="standardValue11" />
    <var-input :placeholder="t('trim')" v-model.trim="standardValue12" />
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('outlined') }}</app-type>
  <var-space direction="column" :size="['6vmin', 0]">
    <var-input variant="outlined" :placeholder="t('placeholder')" v-model="outlinedValue" />
    <var-input variant="outlined" :placeholder="t('readonly')" readonly v-model="outlinedValue2" />
    <var-input variant="outlined" :placeholder="t('disabled')" disabled v-model="outlinedValue3" />
    <var-input variant="outlined" :placeholder="t('clearable')" clearable v-model="outlinedValue4" />
    <var-input variant="outlined" :placeholder="t('clearIconSlot')" clearable v-model="outlinedValue5">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input
      variant="outlined"
      :placeholder="t('validate')"
      :rules="[(v) => v.length > 6 || t('maxMessage')]"
      v-model="outlinedValue6"
    />
    <var-input variant="outlined" :placeholder="t('displayIcon')" v-model="outlinedValue7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input variant="outlined" :placeholder="t('customIconSize')" v-model="outlinedValue8">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" size="8vmin" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" size="12vmin" />
      </template>
    </var-input>
    <var-input variant="outlined" :placeholder="t('maxlength')" :maxlength="10" v-model="outlinedValue9" />
    <var-input variant="outlined" :placeholder="t('textarea')" textarea v-model="outlinedValue10" />
    <var-input variant="outlined" :placeholder="t('smallSize')" size="small" v-model="outlinedValue11" />
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
