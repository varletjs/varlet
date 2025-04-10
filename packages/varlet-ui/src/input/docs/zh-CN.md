# 输入框

### 介绍

输入框的行为和基本原生一致，用户输入时始终获得一个符合 `type` 规则的字符串，可选择 `standard` 和 `outlined` 两种风格，默认为 `standard`。

### 标准外观

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const value = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const value9 = ref('')
const value10 = ref('')
const value11 = ref('')
const value12 = ref('')
const value13 = ref('')
const value14 = ref('')
</script>

<template>
  <var-space direction="column" size="large">
    <var-input placeholder="请输入文本" v-model="value" />
    <var-input placeholder="请输入数字" type="number" v-model="value13" />
    <var-input placeholder="只读" readonly v-model="value2" />
    <var-input placeholder="禁用" disabled v-model="value3" />
    <var-input placeholder="可清除" clearable v-model="value4" />
    <var-input clearable placeholder="使用插槽自定义清除图标" v-model="value5">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input
      placeholder="字段校验"
      :rules="(v) => v.length > 6 || '文本长度必须大于6'"
      v-model="value6"
    />
    <var-input
      placeholder="使用 Zod 进行校验"
      :rules="z.string().min(7, '文本长度必须大于6')"
      v-model="value14"
    />
    <var-input placeholder="显示图标" v-model="value7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input placeholder="自定义图标尺寸" v-model="value8">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
    </var-input>
    <var-input placeholder="最大长度" :maxlength="10" v-model="value9" />
    <var-input placeholder="文本域" textarea v-model="value10" />
    <var-input placeholder="小尺寸" size="small" v-model="value11" />
    <var-input placeholder="移除空白字符" v-model.trim="value12" />
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
import { ref } from 'vue'
import { z } from 'zod'

const value = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const value9 = ref('')
const value10 = ref('')
const value11 = ref('')
const value12 = ref('')
const value13 = ref('')
const value14 = ref('')
</script>

<template>
  <var-space direction="column" size="large">
    <var-input variant="outlined" placeholder="请输入文本" v-model="value" />
    <var-input variant="outlined" placeholder="请输入数字" type="number" v-model="value13" />
    <var-input variant="outlined" placeholder="只读" readonly v-model="value2" />
    <var-input variant="outlined" placeholder="禁用" disabled v-model="value3" />
    <var-input variant="outlined" placeholder="可清除" clearable v-model="value4" />
    <var-input variant="outlined" clearable placeholder="使用插槽自定义清除图标" v-model="value5">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input
      variant="outlined"
      placeholder="字段校验"
      :rules="(v) => v.length > 6 || '文本长度必须大于6'"
      v-model="value6"
    />
    <var-input
      variant="outlined"
      placeholder="使用 Zod 进行校验"
      :rules="z.string().min(7, '文本长度必须大于6')"
      v-model="value14"
    />
    <var-input variant="outlined" placeholder="显示图标" v-model="value7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input 
      variant="outlined" 
      placeholder="自定义图标尺寸"
      v-model="value8"
    >
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
    </var-input>
    <var-input variant="outlined" placeholder="最大长度" :maxlength="10" v-model="value9" />
    <var-input variant="outlined" placeholder="文本域" textarea v-model="value10" />
    <var-input variant="outlined" placeholder="小尺寸" size="small" v-model="value11" />
    <var-input variant="outlined" placeholder="移除空白字符" v-model.trim="value12" />
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

| 参数 | 说明                                                                       | 类型 | 默认值 |
| --- |--------------------------------------------------------------------------| --- | --- |
| `v-model` | 绑定的值                                                                     | _string_ | `-` |
| `placeholder` | 占位符                                                                      | _string_ | `-` |
| `type` | 输入框类型, 可选值为 `text` `password` `number` `tel`                         | _string_ | `text` |
| `size` | 输入框尺寸，可选值 `normal` `small`                                                          | _string_ | `normal` |
| `variant` | 输入框风格, 可选值为 `standard` `outlined`                                      | _string_ | `standard` |
| `maxlength` | 最大长度                                                                     | _string \| number_ | `-` |
| `textarea` | 是否是文本域                                                                   | _boolean_ | `false` |
| `rows` | 文本域的显示行数                                                                 | _string \| number_ | `8` |
| `line` | 是否显示分割线                                                                  | _boolean_ | `true` |
| `hint` | 是否使用占位符作为提示                                                              | _boolean_ | `true` |
| `text-color` | 文字颜色                                                                     | _string_ | `-` |
| `focus-color` | 聚焦时的主要颜色                                                                 | _string_ | `-` |
| `blur-color` | 失焦时的主要颜色                                                                 | _string_ | `-` |
| `readonly` | 是否只读                                                                     | _boolean_ | `false` |
| `disabled` | 是否禁用                                                                     | _boolean_ | `false` |
| `clearable` | 是否可清除                                                                    | _boolean_ | `false` |
| `resize` | 文本域是否可以拖动调整尺寸                                                            | _boolean_ | `false` |
| `autofocus` | 是否自动聚焦                                                                   | _boolean_ | `false` |
| `validate-trigger` | 触发验证的时机，可选值为 `onFocus` `onBlur` `onChange` `onClick` `onClear` `onInput` | _InputValidateTrigger[]_ | `['onInput', 'onClear']` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其它类型的值将转换为文本作为用户提示。自 `3.5.0` 开始支持 [Zod 验证](#/zh-CN/zodValidation)  | _((v: string) => any) \| ZodType \| Array<((v: string) => any) \| ZodType>_ | `-` |
| `enterkeyhint` | 定制回车键样式，参见 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) | _string_ | `-` |
| `aria-label` ***3.8.4*** | 参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label) | _string_ | `-` |

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
| `focus` | 聚焦时触发 | `event: Event` |
| `blur` | 失焦时触发 | `event: Event` |
| `click` | 点击时触发 | `event: Event` |
| `clear` | 清除时触发 | `value: string` |
| `input` | 输入时触发 | `value: string`, `event: Event` |
| `change` | 更新时触发 | `value: string`, `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `prepend-icon` | 前置图标 | `-` |
| `append-icon` | 后置图标 | `-` |
| `clear-icon` | 清除图标 | `clear: (e: Event) => void` 清除函数(在使用插槽时, 可用于清除输入框内容) |
| `extra-message` | 附加信息 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--field-decorator-text-color` | `#555` |
| `--field-decorator-error-color` | `var(--color-danger)` |
| `--field-decorator-blur-color` | `#888` |
| `--field-decorator-focus-color` | `var(--color-primary)` |
| `--field-decorator-placeholder-size` | `16px` |
| `--field-decorator-icon-size` | `20px` |
| `--field-decorator-line-size` | `1px` |
| `--field-decorator-line-focus-size` | `2px` |
| `--field-decorator-line-border-radius` | `4px` |
| `--field-decorator-disabled-color` | `var(--color-text-disabled)` |
| `--field-decorator-standard-normal-margin-top` | `22px` |
| `--field-decorator-standard-normal-margin-bottom` | `4px` |
| `--field-decorator-standard-normal-icon-margin-top` | `22px` |
| `--field-decorator-standard-normal-icon-margin-bottom` | `4px` |
| `--field-decorator-standard-normal-non-hint-margin-top` | `4px` |
| `--field-decorator-standard-small-margin-top` | `18px` |
| `--field-decorator-standard-small-margin-bottom` | `4px` |
| `--field-decorator-standard-small-icon-margin-top` | `18px` |
| `--field-decorator-standard-small-icon-margin-bottom` | `4px` |
| `--field-decorator-standard-small-non-hint-margin-top` | `2px` |
| `--field-decorator-outlined-normal-margin-top` | `16px` |
| `--field-decorator-outlined-normal-margin-bottom` | `16px` |
| `--field-decorator-outlined-normal-padding-left` | `16px` |
| `--field-decorator-outlined-normal-padding-right` | `16px` |
| `--field-decorator-outlined-normal-placeholder-space` | `4px` |
| `--field-decorator-outlined-normal-icon-margin-top` | `16px` |
| `--field-decorator-outlined-normal-icon-margin-bottom` | `16px` |
| `--field-decorator-outlined-small-margin-top` | `8px` |
| `--field-decorator-outlined-small-margin-bottom` | `8px` |
| `--field-decorator-outlined-small-padding-left` | `12px` |
| `--field-decorator-outlined-small-padding-right` | `12px` |
| `--field-decorator-outlined-small-placeholder-space` | `2px` |
| `--field-decorator-outlined-small-icon-margin-top` | `8px` |
| `--field-decorator-outlined-small-icon-margin-bottom` | `8px` |
| `--input-input-height` | `24px` |
| `--input-input-font-size` | `16px` |
| `--input-textarea-height` | `auto` |
