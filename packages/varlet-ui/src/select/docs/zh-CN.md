# 选择框

### 介绍

通过下拉菜单展示并选择内容。

### 标准外观

```html
<script setup>
import { ref } from 'vue'

const value = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()
const value6 = ref()
const value7 = ref([])
const value8 = ref([])
const value9 = ref()
const value10 = ref([])
const value11 = ref()
</script>

<template>
  <var-space direction="column" size="large">
    <var-select placeholder="请选择一个选项" v-model="value">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select placeholder="文本关联值" v-model="value2">
      <var-option label="吃饭" :value="1" />
      <var-option label="睡觉" :value="2" />
    </var-select>
    <div class="relation">当前选择的是: {{ value2 }}</div>
    <var-select placeholder="只读" readonly v-model="value3">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select placeholder="禁用" disabled v-model="value4">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select placeholder="可清除" clearable v-model="value5">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select placeholder="自定义图标" v-model="value6">
      <template #default>
        <var-option label="吃饭">
          <var-icon class="selected-icon" name="cake-variant" />
          <span>吃饭</span>
        </var-option>
        <var-option label="睡觉">
          <var-icon class="selected-icon" name="weather-night" />
          <span>睡觉</span>
        </var-option>
      </template>
      <template #selected>
        <var-icon class="selected-icon" :name="value6 === '吃饭' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value6 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>
    <var-select placeholder="多选" multiple v-model="value7">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select placeholder="纸片风格的多选" chip multiple v-model="value8">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select
      placeholder="单选值校验"
      :rules="[(v) => v === '摸鱼' || '您一定得选择摸鱼']"
      v-model="value9"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="摸鱼" />
    </var-select>
    <var-select
      multiple
      placeholder="多选值校验"
      :rules="[(v) => v.length >= 2 || '您至少选择两个选项']"
      v-model="value10"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select placeholder="小尺寸" v-model="value11">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
  </var-space>
</template>

<style>
.selected-icon {
  margin-right: 6px;
}

.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}

.arrow-icon-rotate {
  transform: rotate(180deg);
}
</style>
```

### 外边框外观

```html
<script setup>
import { ref } from 'vue'

const value = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()
const value6 = ref()
const value7 = ref([])
const value8 = ref([])
const value9 = ref()
const value10 = ref([])
const value11 = ref()
</script>

<template>
  <var-space direction="column" size="large">
    <var-select variant="outlined" placeholder="请选择一个选项" v-model="value">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select variant="outlined" placeholder="文本关联值" v-model="value2">
      <var-option label="吃饭" :value="1" />
      <var-option label="睡觉" :value="2" />
    </var-select>
    <div class="relation">当前选择的是: {{ value2 }}</div>
    <var-select variant="outlined" placeholder="只读" readonly v-model="value3">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select variant="outlined" placeholder="禁用" disabled v-model="value4">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select variant="outlined" placeholder="可清除" clearable v-model="value5">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select variant="outlined" placeholder="自定义图标" v-model="value6">
      <template #default>
        <var-option label="吃饭">
          <var-icon class="selected-icon" name="cake-variant" />
          <span>吃饭</span>
        </var-option>
        <var-option label="睡觉">
          <var-icon class="selected-icon" name="weather-night" />
          <span>睡觉</span>
        </var-option>
      </template>
      <template #selected>
        <var-icon class="selected-icon" :name="value6 === '吃饭' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value6 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>
    <var-select variant="outlined" placeholder="多选" multiple v-model="value7">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select variant="outlined" placeholder="纸片风格的多选" chip multiple v-model="value8">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select
      variant="outlined"
      placeholder="单选值校验"
      :rules="[(v) => v === '摸鱼' || '您一定得选择摸鱼']"
      v-model="value9"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="摸鱼" />
    </var-select>
    <var-select
      variant="outlined"
      multiple
      placeholder="多选值校验"
      :rules="[(v) => v.length >= 2 || '您至少选择两个选项']"
      v-model="value10"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select variant="outlined" size="small" placeholder="小尺寸" v-model="value11">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
  </var-space>
</template>

<style>
.selected-icon {
  margin-right: 6px;
}

.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}

.arrow-icon-rotate {
  transform: rotate(180deg);
}
</style>
```

## API

### 属性

#### Select Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值 | _any \| any[]_ | `-` |
| `size` | 选择框尺寸，可选值 `small`   | _string_ | `-` |
| `variant` | 选择框风格, 可选值为 `standard` `outlined` | _string_ | `standard` |
| `placeholder` | 占位符 | _string_ | `-` |
| `multiple` | 是否开启多选 | _boolean_ | `false` |
| `offset-y` | 下拉菜单的垂直偏移量 | _string \| number_ | `0` |
| `chip` | 是否使用纸片风格(仅限多选) | _boolean_ | `false` |
| `line` | 是否显示分割线 | _boolean_ | `true` |
| `hint` | 是否使用占位符作为提示 | _boolean_ | `true` |
| `text-color` | 文字颜色 | _string_ | `-` |
| `focus-color` | 聚焦时的主要颜色 | _string_ | `-` |
| `blur-color` | 失焦时的主要颜色 | _string_ | `-` |
| `readonly` | 是否只读 | _boolean_ | `false` |
| `disabled` | 是否禁用 | _boolean_ | `false` |
| `clearable` | 是否可清除 | _boolean_ | `false` |
| `validate-trigger` | 触发验证的时机，可选值为 `onFocus` `onBlur` `onChange` `onClick` `onClear` `onClose` | _ValidateTriggers[]_ | `['onChange', 'onClear', 'onClose']` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其余的值则转换为文本作为用户提示 | _Array<(v: any \| any[]) => any>_ | `-` |

#### Option Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | 选项显示的文本 | _any_ | `-` |
| `value` | 选项绑定的值 | _any_ | `-` |

### 方法

#### Select Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `focus` | 聚焦 | `-` | `-` |
| `blur` | 失焦 | `-` | `-` |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值(单选设置为 `undefined`，多选设置为 `[]`)和校验信息 | `-` | `-` |

### 事件

#### Select Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `focus` | 聚焦时触发 | `event: Event` |
| `blur` | 失焦时触发 | `event: Event` |
| `click` | 点击时触发 | `event: Event` |
| `clear` | 清除时触发 | `value: any \| any[]` |
| `close` | 输入时触发 | `value: any \| any[]` |
| `change` | 更新时触发 | `value: any \| any[]` |

### 插槽

#### Select Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `selected` | 选择区域的内容 | `-` |
| `prepend-icon` | 前置图标 | `-` |
| `append-icon` | 后置图标 | `-` |
| `arrow-icon` | 箭头图标 | `focus: boolean` 是否处于聚焦状态 |

#### Option Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 选项显示的内容 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### Select Variables

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
| `--field-decorator-disabled-color` | `var(--color-text-disabled)` |
| `--field-decorator-standard-normal-padding-top` | `20px` |
| `--field-decorator-standard-normal-padding-bottom` | `4px` |
| `--field-decorator-standard-normal-icon-padding` | `20px 0 4px` |
| `--field-decorator-standard-normal-placeholder-translate-y` | `var(--field-decorator-standard-normal-padding-top)` |
| `--field-decorator-standard-small-padding-top` | `16px` |
| `--field-decorator-standard-small-padding-bottom` | `4px` |
| `--field-decorator-standard-small-icon-padding` | `16px 0 4px` |
| `--field-decorator-standard-small-placeholder-translate-y` | `var(--field-decorator-standard-small-padding-top)` |
| `--field-decorator-outlined-normal-padding-top` | `16px` |
| `--field-decorator-outlined-normal-padding-bottom` | `16px` |
| `--field-decorator-outlined-normal-padding-left` | `16px` |
| `--field-decorator-outlined-normal-padding-right` | `16px` |
| `--field-decorator-outlined-normal-placeholder-space` | `4px` |
| `--field-decorator-outlined-normal-icon-padding` | `16px 0 16px` |
| `--field-decorator-outlined-normal-placeholder-translate-y` | `var(--field-decorator-outlined-normal-padding-top)` |
| `--field-decorator-outlined-small-padding-top` | `8px` |
| `--field-decorator-outlined-small-padding-bottom` | `8px` |
| `--field-decorator-outlined-small-padding-left` | `12px` |
| `--field-decorator-outlined-small-padding-right` | `12px` |
| `--field-decorator-outlined-small-placeholder-space` | `2px` |
| `--field-decorator-outlined-small-icon-padding` | `8px 0 8px` |
| `--field-decorator-outlined-small-placeholder-translate-y` | `var(--field-decorator-outlined-small-padding-top)` |
| `--select-scroller-background` | `#fff` |
| `--select-scroller-padding` | `6px 0` |
| `--select-scroller-max-height` | `278px` |
| `--select-chip-margin` | `5px 5px 0` |
| `--select-arrow-size` | `20px` |
| `--select-standard-scroller-margin` | `calc(var(--input-decorator-placeholder-size) * 0.75 + 8px) 0 0 0` |
| `--select-outlined-scroller-margin` | `0` |

#### Option Variables

| 变量名 | 默认值 |
| --- | --- |
| `--option-height` | `38px` |
| `--option-padding` | `0 12px` |
| `--option-selected-background` | `var(--input-decorator-focus-color)` |
