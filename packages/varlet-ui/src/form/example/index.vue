<script setup>
import VarCustomFormComponent from './CustomFormComponent'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { reactive, ref } from 'vue'
import { use, t } from './locale'

const formData = reactive({
  username: '',
  password: '',
  department: '',
  gender: undefined,
  license: false,
  range: 0,
  count: 0,
  group: [],
  score: 0,
  like: [],
  files: [],
  custom: false,
})

const form = ref(null)
const disabled = ref(false)
const readonly = ref(false)

watchLang((lang) => {
  use(lang)
  form.value?.reset()
})
onThemeChange()
</script>

<template>
  <app-type>{{ t('example') }}</app-type>

  <var-form
    ref="form"
    :disabled="disabled"
    :readonly="readonly"
    scroll-to-error="start"
    scroll-to-error-offset-y="14.4vmin"
  >
    <var-space direction="column" :size="['4vmin', 0]">
      <var-input
        :placeholder="t('username')"
        :rules="[(v) => !!v || t('usernameMessage')]"
        v-model="formData.username"
      />
      <var-input
        type="password"
        :placeholder="t('password')"
        :rules="[(v) => !!v || t('passwordMessage')]"
        v-model="formData.password"
      />
      <var-select
        :placeholder="t('department')"
        :rules="[(v) => !!v || t('departmentMessage')]"
        v-model="formData.department"
      >
        <var-option :label="`${t('eat')}${t('departmentUnit')}`" />
        <var-option :label="`${t('sleep')}${t('departmentUnit')}`" />
        <var-option :label="`${t('play')}${t('departmentUnit')}`" />
      </var-select>
      <var-select
        multiple
        :placeholder="t('group')"
        :rules="[(v) => v.length >= 1 || t('groupMessage')]"
        v-model="formData.group"
      >
        <var-option :label="`${t('eat')}${t('groupUnit')}`" />
        <var-option :label="`${t('sleep')}${t('groupUnit')}`" />
        <var-option :label="`${t('play')}${t('groupUnit')}`" />
      </var-select>
      <var-radio-group :rules="[(v) => !!v || t('genderMessage')]" v-model="formData.gender">
        <var-radio :checked-value="1">{{ t('male') }}</var-radio>
        <var-radio :checked-value="2">{{ t('female') }}</var-radio>
      </var-radio-group>
      <var-checkbox-group :rules="[(v) => v.length > 0 || t('likeMessage')]" v-model="formData.like">
        <var-checkbox :checked-value="1">{{ t('eat') }}</var-checkbox>
        <var-checkbox :checked-value="2">{{ t('sleep') }}</var-checkbox>
        <var-checkbox :checked-value="3">{{ t('play') }}</var-checkbox>
      </var-checkbox-group>
      <var-rate :rules="[(v) => v >= 3 || t('rateMessage')]" v-model="formData.score" />
      <var-switch :rules="[(v) => !!v || t('licenseMessage')]" v-model="formData.license" />
      <var-counter :rules="[(v) => v > 10 || t('countMessage')]" v-model="formData.count" />
      <var-slider :rules="[(v) => v > 10 || t('rangeMessage')]" v-model="formData.range" />
      <var-uploader :rules="[(v) => v.length >= 1 || t('filesMessage')]" v-model="formData.files" />
    </var-space>

    <app-type>{{ t('customFormComponent') }}</app-type>
    <var-custom-form-component
      :extra-message="t('customExtraMessage')"
      :rules="[(v) => !!v || t('customErrorMessage')]"
      v-model="formData.custom"
    >
      {{ t('customLabel') }}
    </var-custom-form-component>
  </var-form>

  <app-type>{{ t('controller') }}</app-type>

  <var-space direction="column" :size="['4vmin', 0]">
    <var-button block type="danger" @click="form.reset()">{{ t('reset') }}</var-button>
    <var-button block type="warning" @click="form.resetValidation()">{{ t('resetValidation') }}</var-button>
    <var-button block type="success" @click="form.validate()">{{ t('validate') }}</var-button>
    <var-button block type="info" @click="disabled = !disabled">{{ t('disabled') }}</var-button>
    <var-button block type="primary" @click="readonly = !readonly">{{ t('readonly') }}</var-button>
  </var-space>

  <div class="space"></div>
</template>

<style scoped lang="less">
.space {
  height: 40px;
}
</style>
