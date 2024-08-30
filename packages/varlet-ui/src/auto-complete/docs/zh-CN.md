# 自动完成

### 介绍

输入框自动完成功能。

## API

### 属性

#### AutoComplete Props

| 参数 | 说明 | 类型             | 默认值       |
| ------- | --- |----------------|-----------|
| `v-model` | 绑定的值 | _any[]_ | `[]` |
| `options`  | 指定可选项 | _AutoCompleteOption[]_ | `-` |
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
| `placeholder` | 占位符                      | _string_ | `-` |
| `size` | 输入框尺寸，可选值 `normal` `small`              | _string_ | `normal` |
| `variant` | 输入框风格, 可选值为 `standard` `outlined`    | _string_ | `standard` |

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

#### AutoComplete Variables

| 变量名                      | 默认值           |
| --------------------------- | ---------------- |
| `--auto-complete-options-padding`       | `6px 0`  |