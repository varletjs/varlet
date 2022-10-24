<script setup>
import VarForm from '..'
import VarInput from '../../input'
import VarSelect from '../../select'
import VarOption from '../../option'
import VarCheckboxGroup from '../../checkbox-group'
import VarCheckbox from '../../checkbox'
import VarRadioGroup from '../../radio-group'
import VarRadio from '../../radio'
import VarButton from '../../button'
import VarSwitch from '../../switch'
import VarSlider from '../../slider'
import VarUploader from '../../uploader'
import VarCounter from '../../counter'
import VarRate from '../../rate'
import VarSpace from '../../space'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import dark from '../../themes/dark'
import { reactive, ref } from 'vue'
import { use, pack } from './locale'

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
})

const form = ref(null)
const disabled = ref(false)
const readonly = ref(false)

watchLang((lang) => {
  use(lang)
  form.value?.reset()
})
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.example }}</app-type>

  <var-form ref="form" :disabled="disabled" :readonly="readonly">
    <var-space direction="column" :size="['4vw', 0]">
      <var-input
        :placeholder="pack.username"
        :rules="[(v) => !!v || pack.usernameMessage]"
        v-model="formData.username"
      />
      <var-input
        type="password"
        :placeholder="pack.password"
        :rules="[(v) => !!v || pack.passwordMessage]"
        v-model="formData.password"
      />
      <var-select
        :placeholder="pack.department"
        :rules="[(v) => !!v || pack.departmentMessage]"
        v-model="formData.department"
      >
        <var-option :label="`${pack.eat}${pack.departmentUnit}`" />
        <var-option :label="`${pack.sleep}${pack.departmentUnit}`" />
        <var-option :label="`${pack.play}${pack.departmentUnit}`" />
      </var-select>
      <var-select
        multiple
        :placeholder="pack.group"
        :rules="[(v) => v.length >= 1 || pack.groupMessage]"
        v-model="formData.group"
      >
        <var-option :label="`${pack.eat}${pack.groupUnit}`" />
        <var-option :label="`${pack.sleep}${pack.groupUnit}`" />
        <var-option :label="`${pack.play}${pack.groupUnit}`" />
      </var-select>
      <var-radio-group :rules="[(v) => !!v || pack.genderMessage]" v-model="formData.gender">
        <var-radio :checked-value="1">{{ pack.male }}</var-radio>
        <var-radio :checked-value="2">{{ pack.female }}</var-radio>
      </var-radio-group>
      <var-checkbox-group :rules="[(v) => v.length > 0 || pack.likeMessage]" v-model="formData.like">
        <var-checkbox :checked-value="1">{{ pack.eat }}</var-checkbox>
        <var-checkbox :checked-value="2">{{ pack.sleep }}</var-checkbox>
        <var-checkbox :checked-value="3">{{ pack.play }}</var-checkbox>
      </var-checkbox-group>
      <var-rate :rules="[(v) => v >= 3 || pack.rateMessage]" v-model="formData.score" />
      <var-switch :rules="[(v) => !!v || pack.licenseMessage]" v-model="formData.license" />
      <var-counter :rules="[(v) => v > 10 || pack.countMessage]" v-model="formData.count" />
      <var-slider :rules="[(v) => v > 10 || pack.rangeMessage]" v-model="formData.range" />
      <var-uploader :rules="[(v) => v.length >= 1 || pack.filesMessage]" v-model="formData.files" />
    </var-space>
  </var-form>

  <app-type>{{ pack.controller }}</app-type>

  <var-space direction="column" :size="['4vw', 0]">
    <var-button block type="danger" @click="form.reset()">{{ pack.reset }}</var-button>
    <var-button block type="warning" @click="form.resetValidation()">{{ pack.resetValidation }}</var-button>
    <var-button block type="success" @click="form.validate()">{{ pack.validate }}</var-button>
    <var-button block type="info" @click="disabled = !disabled">{{ pack.disabled }}</var-button>
    <var-button block type="primary" @click="readonly = !readonly">{{ pack.readonly }}</var-button>
  </var-space>

  <div class="space"></div>
</template>

<style scoped lang="less">
.space {
  height: 40px;
}
</style>
