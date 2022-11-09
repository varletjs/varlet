# 表单

### 介绍

提供了对所有表单组件进行控制的能力。


### 表单示例

```html
<script setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  username: '',
  password: '',
  department: '',
  gender: undefined,
  license: false,
  range: 10,
  count: 0,
  group: [],
  score: 0,
  like: [],
  files: []
})
const form = ref(null)
const disabled = ref(false)
const readonly = ref(false)
</script>

<template>
  <var-form ref="form" :disabled="disabled" :readonly="readonly">
    <var-space direction="column" :size="[14, 0]">
      <var-input
        placeholder="请输入用户名"
        :rules="[v => !!v || '用户名不能为空']"
        v-model="formData.username"
      />
      <var-input
        type="password"
        placeholder="请输入密码"
        :rules="[v => !!v || '密码不能为空']"
        v-model="formData.password"
      />
      <var-select
        placeholder="请选择部门"
        :rules="[v => !!v || '必须选一个部门']"
        v-model="formData.department"
      >
        <var-option label="吃饭部"  />
        <var-option label="睡觉部"  />
        <var-option label="打游戏部" />
      </var-select>
      <var-select
        multiple
        placeholder="请选择组织"
        :rules="[v => v.length >= 1 || '至少选择一个组织']"
        v-model="formData.group"
      >
        <var-option label="吃饭组"  />
        <var-option label="睡觉组"  />
        <var-option label="打游戏组" />
      </var-select>
      <var-radio-group
        :rules="[v => !!v || '必须选择一个性别']"
        v-model="formData.gender"
      >
        <var-radio :checked-value="1">男</var-radio>
        <var-radio :checked-value="2">女</var-radio>
      </var-radio-group>
      <var-checkbox-group
        :rules="[v => v.length > 0 || '至少选择一个爱好']"
        v-model="formData.like"
      >
        <var-checkbox :checked-value="1">吃饭</var-checkbox>
        <var-checkbox :checked-value="2">睡觉</var-checkbox>
        <var-checkbox :checked-value="3">打游戏</var-checkbox>
      </var-checkbox-group>
      <var-rate
        :rules="[v => v >= 3 || '必须大于2']"
        v-model="formData.score"
      />
      <var-switch
        :rules="[v => !!v || '您必须开启']"
        v-model="formData.license"
      />
      <var-counter
        :rules="[v => v > 10 || '必须大于10']"
        v-model="formData.count"
      />
      <var-slider
        :rules="[v => v > 10 || '必须大于10']"
        v-model="formData.range"
      />
      <var-uploader
        :rules="[v => v.length >= 1 || '至少上传一张图片']"
        v-model="formData.files"
      />
    </var-space>
  </var-form>
  
  <var-space direction="column" :size="[14, 0]">
    <var-button block type="danger" @click="form.reset()">
      清空表单
    </var-button>
    <var-button block type="warning" @click="form.resetValidation()">
      清空验证
    </var-button>
    <var-button block type="success" @click="form.validate()">
      触发验证
    </var-button>
    <var-button block type="info" @click="disabled = !disabled">
      表单禁用
    </var-button>
    <var-button block type="primary" @click="readonly = !readonly">
      表单只读
    </var-button>
  </var-space>
</template>
```

### 自定义表单组件

如果希望自定义组件并接入表单组件的能力，案例如下。

```html
// playground-ignore
<script setup>
import { Form } from '@varlet/ui'
import { nextTick } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  rules: {
    type: Array
  },
  validateTrigger: {
    type: Array,
    default: () => ['onToggle']
  },
  extraMessage: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])

const { useForm, useValidation } = Form
const { errorMessage, validateWithTrigger: _validateWithTrigger, validate: _validate, resetValidation } = useValidation()
const { bindForm, form } = useForm()

const reset = () => {
  emit('update:modelValue', false)
  resetValidation()
}

const validate = () => _validate(props.rules, props.modelValue)

const validateWithTrigger = (trigger) => {
  nextTick(() => {
    const { validateTrigger, rules, modelValue } = props
    _validateWithTrigger(validateTrigger, trigger, rules, modelValue)
  })
}

const handleClick = () => {
  if (
    props.readonly ||
    props.disabled || 
    form?.readonly.value || 
    form?.disabled.value
  ) {
    return
  }

  emit('update:modelValue', !props.modelValue)
  validateWithTrigger('onToggle')
}

const apis = {
  reset,
  validate,
  resetValidation
}

defineExpose(apis)
bindForm?.(apis)
</script>

<template>
  <div
    class="var-custom-form-component"
    :class="{
      'var-custom-form-component--disabled': disabled || form?.disabled.value,
      'var-custom-form-component--error': errorMessage,
    }"
  >
    <div class="var-custom-form-component__container"  @click="handleClick">
      <var-icon
        class="var-custom-form-component__icon"
        :name="modelValue ? 'checkbox-marked-circle' : 'close-circle'"
        :transition="250"
      />
      <slot />
    </div>
    <var-form-details :error-message="errorMessage" :extra-message="extraMessage" />
  </div>
</template>

<style>
.var-custom-form-component {
  cursor: pointer;
}

.var-custom-form-component__container {
  display: flex;
  align-items: center;
}

.var-custom-form-component__icon {
  margin-right: 6px;
  font-size: 24px;
}
  
.var-custom-form-component--disabled {
  color: var(--color-text-disabled);
  cursor: not-allowed;
}
  
.var-custom-form-component--error {
  color: var(--color-danger);
}
</style>
```

## API

### 属性

#### Form Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `disabled` | 是否禁用 | _boolean_ | `false` |

#### FormDetails Props

| 参数              | 说明      | 类型 | 默认值 |
|-----------------|---------| --- | -- |
| `error-message` | 错误信息 | _string_ | `-` |
| `extra-message` | 附加信息 | _string_ | `-` |

### 方法

#### Form Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `validate` | 触发所有表单组件的校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空所有表单组件的校验信息 | `-` | `-` |
| `reset` | 清空所有表单组件绑定的值和校验信息 | `-` | `-` |

### 插槽

#### Form Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 表单内容 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

#### FormDetails Variables

| 变量名                                   | 默认值 |
|---------------------------------------| --- |
| `--form-details-error-message-color`  | `var(--color-danger)` |
| `--form-details-extra-message-color`  | `#888` |
| `--form-details-margin-top`           | `6px` |
| `--form-details-font-size`            | `12px` |
| `--form-details-message-margin-right` | `4px` |
