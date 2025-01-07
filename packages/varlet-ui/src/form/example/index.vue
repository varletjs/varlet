<script setup>
import { computed, reactive, ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import VarCustomFormComponent from './CustomFormComponent'
import { t, use } from './locale'

const formData = reactive({
  username: '',
  password: '',
  email: '',
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
const suggestions = computed(() =>
  ['@qq.com', '@163.com', '@gmail.com'].map((suffix) => {
    const [prefix] = formData.email.split('@')
    return {
      label: prefix + suffix,
      value: prefix + suffix,
    }
  }),
)

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
        v-model="formData.username"
        :placeholder="t('username')"
        :rules="[(v) => !!v || t('usernameMessage')]"
      />
      <var-input
        v-model="formData.password"
        type="password"
        :placeholder="t('password')"
        :rules="[(v) => !!v || t('passwordMessage'), (v) => v.length >= 8 || t('passwordMinLengthMessage')]"
      />
      <var-auto-complete
        v-model="formData.email"
        :placeholder="t('email')"
        :rules="[(v) => !!v || t('emailMessage')]"
        :options="suggestions"
      />
      <var-select
        v-model="formData.department"
        :placeholder="t('department')"
        :rules="[(v) => !!v || t('departmentMessage')]"
      >
        <var-option :label="`${t('eat')}${t('departmentUnit')}`" />
        <var-option :label="`${t('sleep')}${t('departmentUnit')}`" />
        <var-option :label="`${t('play')}${t('departmentUnit')}`" />
      </var-select>
      <var-select
        v-model="formData.group"
        multiple
        :placeholder="t('group')"
        :rules="[(v) => v.length >= 1 || t('groupMessage')]"
      >
        <var-option :label="`${t('eat')}${t('groupUnit')}`" />
        <var-option :label="`${t('sleep')}${t('groupUnit')}`" />
        <var-option :label="`${t('play')}${t('groupUnit')}`" />
      </var-select>
      <var-radio-group v-model="formData.gender" :rules="[(v) => !!v || t('genderMessage')]">
        <var-radio :checked-value="1">{{ t('male') }}</var-radio>
        <var-radio :checked-value="2">{{ t('female') }}</var-radio>
      </var-radio-group>
      <var-checkbox-group v-model="formData.like" :rules="[(v) => v.length > 0 || t('likeMessage')]">
        <var-checkbox :checked-value="1">{{ t('eat') }}</var-checkbox>
        <var-checkbox :checked-value="2">{{ t('sleep') }}</var-checkbox>
        <var-checkbox :checked-value="3">{{ t('play') }}</var-checkbox>
      </var-checkbox-group>
      <var-rate v-model="formData.score" :rules="[(v) => v >= 3 || t('rateMessage')]" />
      <var-switch v-model="formData.license" variant :rules="[(v) => !!v || t('licenseMessage')]" />
      <var-counter v-model="formData.count" :rules="[(v) => v > 10 || t('countMessage')]" />
      <var-slider v-model="formData.range" :rules="[(v) => v > 10 || t('rangeMessage')]" />
      <var-uploader v-model="formData.files" :rules="[(v) => v.length >= 1 || t('filesMessage')]" />
    </var-space>

    <app-type>{{ t('customFormComponent') }}</app-type>
    <var-custom-form-component
      v-model="formData.custom"
      :extra-message="t('customExtraMessage')"
      :rules="[(v) => !!v || t('customErrorMessage')]"
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
