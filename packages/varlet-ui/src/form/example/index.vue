<template>
  <app-type>{{ pack.example }}</app-type>
  <var-form ref="form" :disabled="disabled" :readonly="readonly">
    <var-input
      class="mb"
      :placeholder="pack.username"
      :rules="[(v) => !!v || pack.usernameMessage]"
      v-model="formData.username"
    />
    <var-input
      class="mb"
      type="password"
      :placeholder="pack.password"
      :rules="[(v) => !!v || pack.passwordMessage]"
      v-model="formData.password"
    />
    <var-select
      class="mb"
      :placeholder="pack.department"
      :rules="[(v) => !!v || pack.departmentMessage]"
      v-model="formData.department"
    >
      <var-option :label="`${pack.eat}${pack.departmentUnit}`" />
      <var-option :label="`${pack.sleep}${pack.departmentUnit}`" />
      <var-option :label="`${pack.play}${pack.departmentUnit}`" />
    </var-select>
    <var-select
      class="mb"
      multiple
      :placeholder="pack.group"
      :rules="[(v) => v.length >= 1 || pack.groupMessage]"
      v-model="formData.group"
    >
      <var-option :label="`${pack.eat}${pack.groupUnit}`" />
      <var-option :label="`${pack.sleep}${pack.groupUnit}`" />
      <var-option :label="`${pack.play}${pack.groupUnit}`" />
    </var-select>
    <var-radio-group class="mb" :rules="[(v) => !!v || pack.genderMessage]" v-model="formData.gender">
      <var-radio :checked-value="1">{{ pack.male }}</var-radio>
      <var-radio :checked-value="2">{{ pack.female }}</var-radio>
    </var-radio-group>
    <var-checkbox-group class="mb" :rules="[(v) => v.length > 0 || pack.likeMessage]" v-model="formData.like">
      <var-checkbox :checked-value="1">{{ pack.eat }}</var-checkbox>
      <var-checkbox :checked-value="2">{{ pack.sleep }}</var-checkbox>
      <var-checkbox :checked-value="3">{{ pack.play }}</var-checkbox>
    </var-checkbox-group>
    <div class="row mb">
      <var-switch :rules="[(v) => !!v || pack.licenseMessage]" v-model="formData.license" />
    </div>
    <div class="row mb">
      <var-counter :rules="[(v) => v > 10 || pack.countMessage]" v-model="formData.count" />
    </div>
    <var-slider class="mb" :rules="[(v) => v > 10 || pack.rangeMessage]" v-model="formData.range" />
    <var-uploader class="mb" :rules="[(v) => v.length >= 1 || pack.filesMessage]" v-model="formData.files" />
  </var-form>

  <app-type>{{ pack.controller }}</app-type>
  <var-button class="mt" block type="danger" @click="form.reset()">{{ pack.reset }}</var-button>
  <var-button class="mt" block type="warning" @click="form.resetValidation()">{{ pack.resetValidation }}</var-button>
  <var-button class="mt" block type="success" @click="form.validate()">{{ pack.validate }}</var-button>
  <var-button class="mt" block type="info" @click="disabled = !disabled">{{ pack.disabled }}</var-button>
  <var-button class="mt" block type="primary" @click="readonly = !readonly">{{ pack.readonly }}</var-button>

  <div class="space"></div>
</template>

<script>
import Form from '..'
import Input from '../../input'
import Select from '../../select'
import Option from '../../option'
import CheckboxGroup from '../../checkbox-group'
import Checkbox from '../../checkbox'
import RadioGroup from '../../radio-group'
import Radio from '../../radio'
import Button from '../../button'
import Switch from '../../switch'
import Slider from '../../slider'
import Uploader from '../../uploader'
import Counter from '../../counter'
import AppType from '@varlet/cli/site/mobile/components/AppType.vue'
import { reactive, ref } from 'vue'
import { watchLang } from '../../utils/components'
import { use, pack } from './locale'

export default {
  name: 'FormExample',
  components: {
    [Form.name]: Form,
    [Input.name]: Input,
    [Select.name]: Select,
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Option.name]: Option,
    [Switch.name]: Switch,
    [Slider.name]: Slider,
    [Button.name]: Button,
    [Uploader.name]: Uploader,
    [Counter.name]: Counter,
    AppType,
  },
  setup() {
    const formData = reactive({
      username: '',
      password: '',
      department: '',
      gender: undefined,
      license: false,
      range: 10,
      count: 0,
      group: [],
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

    return {
      pack,
      form,
      formData,
      disabled,
      readonly,
    }
  },
}
</script>

<style scoped lang="less">
.row {
  display: flex;
  align-items: center;
  padding: 5px 0;
}

.label {
  margin-right: 10px;
}

.mb {
  margin-bottom: 10px;
}

.mt {
  margin-top: 20px;
}

.space {
  height: 40px;
}
</style>
