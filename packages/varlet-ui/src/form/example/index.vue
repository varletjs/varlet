<template>
	<var-form ref="formEl" :disabled="disabled" :readonly="readonly">
		<var-input
			class="mb"
			placeholder="请输入用户名"
			:rules="[(v) => !!v || '用户名不能为空!', (v) => (v && v.length > 5) || '用户名不少于5个字!']"
			v-model="form.username"
		/>
		<var-input
			class="mb"
			type="password"
			placeholder="请输入密码"
			:rules="[(v) => !!v || '密码不能为空!', (v) => (v && v.length > 5) || '密码不少于5个字!']"
			v-model="form.password"
		/>
		<var-select class="mb" placeholder="请选择部门" v-model="form.department" :rules="[(v) => !!v || '必须选一个部门']">
			<var-option label="吃饭部" :value="1" />
			<var-option label="睡觉部" :value="2" />
			<var-option label="打游戏部" :value="3" />
		</var-select>
		<var-select
			class="mb"
			placeholder="请选择组织"
			multiple
			:rules="[(v) => (v && v.length > 0) || '至少选择一个组织!']"
			v-model="form.group"
		>
			<var-option label="晓" :value="1" />
			<var-option label="木叶村" :value="2" />
			<var-option label="大筒木" :value="3" />
		</var-select>
		<var-select
			class="mb"
			placeholder="请选择特长"
			multiple
			chip
			:rules="[(v) => (v && v.length > 0) || '至少选择一个特长!']"
			v-model="form.skill"
		>
			<var-option label="火遁" :value="1" />
			<var-option label="水遁" :value="2" />
			<var-option label="嘴遁" :value="3" />
		</var-select>
		<var-radio-group class="mb" :rules="[(v) => !!v || '至少选择一个性别!']" v-model="form.gender">
			<var-radio :checked-value="1">男</var-radio>
			<var-radio :checked-value="2">女</var-radio>
		</var-radio-group>
		<var-checkbox-group class="mb" :rules="[(v) => (v && v.length > 0) || '至少选择一个爱好!']" v-model="form.like">
			<var-checkbox :checked-value="1">吃饭</var-checkbox>
			<var-checkbox :checked-value="2">睡觉</var-checkbox>
			<var-checkbox :checked-value="3">打游戏</var-checkbox>
		</var-checkbox-group>
		<var-radio class="mb" :rules="[(v) => !!v || '您必须确保同意才能提交!']" v-model="form.confirm"> 同意 </var-radio>
		<p style="display: flex">
			<span style="margin-right: 8px">透视锁头</span>
			<var-switch class="mb" :rules="[(v) => !!v || '不开挂你怎么玩']" v-model="form.open" />
		</p>
		<var-slider class="mb" :rules="[(v) => v >= 35 || '前戏不好看！！']" v-model="form.slider" />
		<var-button class="mt" block type="danger" @click="formEl.reset()">清空表单</var-button>
		<var-button class="mt" block type="warning" @click="formEl.resetValidation()">清空验证</var-button>
		<var-button class="mt" block type="success" @click="formEl.validate()">触发验证</var-button>
		<var-button class="mt" block type="info" @click="disabled = !disabled">表单禁用</var-button>
		<var-button class="mt" block type="primary" @click="readonly = !readonly">表单只读</var-button>
	</var-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
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

export default defineComponent({
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
  },
  setup() {
    const form: any = reactive({
      username: undefined,
      password: undefined,
      department: undefined,
      gender: undefined,
      confirm: false,
      open: false,
      slider: 10,
      group: [],
      skill: [],
      like: [],
    })

    const formEl: any = ref(null)
    const disabled: any = ref(false)
    const readonly: any = ref(false)

    return {
      formEl,
      form,
      disabled,
      readonly,
    }
  },
})
</script>

<style scoped lang="less">
.mb {
	margin-bottom: 5px;
}

.mt {
	margin-top: 20px;
}
</style>
