# 自动完成

### 介绍

输入框自动完成功能。

### 标准外观

```html
<script setup>
import { ref, computed } from 'vue'

const { value, options } = useAutoComplete()
const { value: value2, options: options2 } = useAutoComplete()
const { value: value3, options: options3 } = useAutoComplete()
const { value: value4, options: options4 } = useAutoComplete()
const { value: value5, options: options5 } = useAutoComplete()
const { value: value6, options: options6 } = useAutoComplete()
const { value: value7, options: options7 } = useAutoComplete()
const { value: value8, options: options8 } = useAutoComplete()
const { value: value9, options: options9 } = useAutoComplete()
const { value: value10, options: options10 } = useAutoComplete()
const { value: value11, options: options11 } = useAutoComplete()

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
  <var-space direction="column" size="large">
    <var-auto-complete placeholder="请输入文本" :options="options" v-model="value" />
    <var-auto-complete readonly placeholder="只读" :options="options2" v-model="value2" />
    <var-auto-complete disabled placeholder="禁用" :options="options3" v-model="value3" />
    <var-auto-complete clearable placeholder="可清除" :options="options4" v-model="value4" />
    <var-auto-complete clearable placeholder="使用插槽自定义清除图标" :options="options5" v-model="value5">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-auto-complete>
    <var-auto-complete
      placeholder="字段校验"
      :options="options6"
      :rules="[(v) => v.length > 6 || '文本长度必须大于6']"
      v-model="value6"
    />
    <var-auto-complete placeholder="显示图标" :options="options7" v-model="value7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-auto-complete>  
    <var-auto-complete placeholder="自定义图标尺寸" :options="options8" v-model="value8">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
    </var-auto-complete>  
    <var-auto-complete
      placeholder="最大长度"
      :maxlength="10"
      :options="options9"
      v-model="value9"
    />
    <var-auto-complete
      placeholder="自定义菜单显示时机"
      :get-show="(value) => value.length > 3"
      :options="options10"
      v-model="value10"
    />  
    <var-auto-complete
      size="small"
      placeholder="小尺寸"
      :options="options11"
      v-model="value11"
    />  
  </var-space>
</template>

<style>
.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}
</style>
```

### 外边框外观

```html
<script setup>
import { ref, computed } from 'vue'

const { value, options } = useAutoComplete()
const { value: value2, options: options2 } = useAutoComplete()
const { value: value3, options: options3 } = useAutoComplete()
const { value: value4, options: options4 } = useAutoComplete()
const { value: value5, options: options5 } = useAutoComplete()
const { value: value6, options: options6 } = useAutoComplete()
const { value: value7, options: options7 } = useAutoComplete()
const { value: value8, options: options8 } = useAutoComplete()
const { value: value9, options: options9 } = useAutoComplete()
const { value: value10, options: options10 } = useAutoComplete()
const { value: value11, options: options11 } = useAutoComplete()

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
  <var-space direction="column" size="large">
    <var-auto-complete variant="outlined" placeholder="请输入文本" :options="options" v-model="value" />
    <var-auto-complete variant="outlined" readonly placeholder="只读" :options="options2" v-model="value2" />
    <var-auto-complete variant="outlined" disabled placeholder="禁用" :options="options3" v-model="value3" />
    <var-auto-complete variant="outlined" clearable placeholder="可清除" :options="options4" v-model="value4" />
    <var-auto-complete variant="outlined" clearable placeholder="使用插槽自定义清除图标" :options="options5" v-model="value5">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-auto-complete>
    <var-auto-complete
      variant="outlined"
      placeholder="字段校验"
      :options="options6"
      :rules="[(v) => v.length > 6 || '文本长度必须大于6']"
      v-model="value6"
    />
    <var-auto-complete variant="outlined" placeholder="显示图标" :options="options7" v-model="value7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-auto-complete>  
    <var-auto-complete variant="outlined" placeholder="自定义图标尺寸" :options="options8" v-model="value8">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
    </var-auto-complete>  
    <var-auto-complete
      variant="outlined"
      placeholder="最大长度"
      :maxlength="10"
      :options="options9"
      v-model="value9"
    />
    <var-auto-complete
      variant="outlined"
      placeholder="自定义菜单显示时机"
      :get-show="(value) => value.length > 3"
      :options="options10"
      v-model="value10"
    />  
    <var-auto-complete
      variant="outlined"
      size="small"
      placeholder="小尺寸"
      :options="options11"
      v-model="value11"
    />  
  </var-space>
</template>

<style>
.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}
</style>
```

## API

### 属性

#### AutoComplete Props

| 参数 | 说明 | 类型             | 默认值       |
| ------- | --- |----------------|-----------|
| `v-model` | 绑定的值 | _string_ | `-` |
| `variant` | 输入框风格, 可选值为 `standard` `outlined`    | _string_ | `standard` |
| `size` | 输入框尺寸，可选值 `normal` `small`              | _string_ | `normal` |
| `placeholder` | 占位符                      | _string_ | `-` |
| `options`  | 指定可选项 | _AutoCompleteOption[]_ | `[]` |
| `label-key`  | 作为 label 唯一标识的键名 | _string_ | `label` |
| `value-key`  | 作为 value 唯一标识的键名 | _string_ | `value` |
| `maxlength` | 最大长度           | _string \| number_ | `-` |
| `readonly` | 是否只读            | _boolean_ | `false` |
| `disabled` | 是否禁用            | _boolean_ | `false` |
| `validate-trigger` | 触发验证的时机，可选值为 `onFocus` `onBlur` `onChange` `onClick` `onClear` `onInput` | _AutoCompleteValidateTrigger[]_ | `['onInput', 'onClear', 'onChange']` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示     | _Array<(v: string) => any>_ | `-` |
| `enterkeyhint` | 定制回车键样式，参见 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) | _string_ | `-` |
| `clearable` | 是否可清除              | _boolean_ | `false` |
| `line` | 是否显示分割线                | _boolean_ | `true` |
| `hint` | 是否使用占位符作为提示          | _boolean_ | `true` |
| `text-color` | 文字颜色                 | _string_ | `-` |
| `focus-color` | 聚焦时的主要颜色                  | _string_ | `-` |
| `blur-color` | 失焦时的主要颜色               | _string_ | `-` |
| `get-show` | 根据输入值决定是否显示菜单 | _(v: string) => boolean_ | `-` |

#### AutoCompleteOption 

| 参数 | 说明 | 类型             | 默认值       |
| ------- | --- |----------------|-----------|
| `label`    |    选项的标签    | _string \| VNode \| (option: AutoCompleteOption, checked: boolean) => VNodeChild_      | `-`   |
| `value`  |    选项的值    | _any_      | `-`   |
| `disabled`    |    是否禁用   | _boolean_      | `-`   |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `focus` | 聚焦 | `-` | `-` |
| `blur` | 失焦 | `-` | `-` |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值和校验信息 | `-` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `focus` | 聚焦时触发 | `-` |
| `blur` | 失焦时触发 | `-` |
| `click` | 点击时触发 | `event: Event` |
| `clear` | 清除时触发 | `value: string` |
| `input` | 输入时触发 | `value: string`, `event: Event` |
| `change` | 更新时触发 | `value: string` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `prepend-icon` | 前置图标 | `-` |
| `append-icon` | 后置图标 | `-` |
| `clear-icon` | 清除图标 | `clear: (e: Event) => void` 清除函数(在使用插槽时, 可用于清除输入框内容) |
| `extra-message` | 附加信息 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                      | 默认值           |
| --------------------------- | ---------------- |
| `--auto-complete-options-padding` | `6px 0`  |