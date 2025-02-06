# 选择框

### 介绍

通过下拉菜单展示并选择内容。

### 标准外观

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const value = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()
const value6 = ref()
const value7 = ref()
const value8 = ref()
const value9 = ref([])
const value10 = ref([])
const value11 = ref()
const value12 = ref([])
const value13 = ref()
const value14 = ref()
const value15 = ref([])
const value16 = ref()
const value17 = ref()
const value18 = ref([])

const options = ref([
  {
    label: '吃饭',
    value: 1,
  },
  {
    label: '睡觉',
    value: 2,
  },
  {
    label: '打游戏',
    value: 3,
    disabled: true,
  },
])

const keyOptions = ref([
   {
    name: '吃饭',
    id: 1,
  },
  {
    name: '睡觉',
    id: 2,
  },
  {
    name: '打游戏',
    id: 3,
    disabled: true,
  },
])
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
    <var-select placeholder="使用插槽自定义清除图标" clearable v-model="value6">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>

    <var-select placeholder="自定义图标" v-model="value7">
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
        <var-icon class="selected-icon" :name="value7 === '吃饭' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value7 }}</span>
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

    <var-select placeholder="自定义图标尺寸" v-model="value8">
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
        <var-icon class="selected-icon" :size="28" :name="value8 === '吃饭' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value8 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>

    <var-select placeholder="多选" multiple v-model="value9">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select placeholder="纸片风格的多选" chip multiple v-model="value10">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select
      placeholder="单选值校验"
      :rules="[(v) => v === '摸鱼' || '您一定得选择摸鱼']"
      v-model="value11"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="摸鱼" />
    </var-select>
    <var-select
      placeholder="使用 Zod 校验单选值"
      :rules="z.string().refine(v => v === '摸鱼', '您一定得选择摸鱼')"
      v-model="value17"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="摸鱼" />
    </var-select>
    <var-select
      multiple
      placeholder="多选值校验"
      :rules="[(v) => v.length >= 2 || '您至少选择两个选项']"
      v-model="value12"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select
      multiple
      placeholder="使用 Zod 校验多选值"
      :rules="z.array(z.string()).min(2, '您至少选择两个选项')"
      v-model="value18"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select placeholder="小尺寸" v-model="value13">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select placeholder="选项式 API" v-model="value14" :options="options" />
    <var-select placeholder="选项式 API（多选）" v-model="value15" :options="options" multiple />
    <var-select placeholder="自定义字段" v-model="value16" :options="keyOptions" label-key="name" value-key="id" />
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
import { z } from 'zod'

const value = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()
const value6 = ref()
const value7 = ref()
const value8 = ref()
const value9 = ref([])
const value10 = ref([])
const value11 = ref()
const value12 = ref([])
const value13 = ref()
const value14 = ref()
const value15 = ref([])
const value16 = ref()
const value17 = ref()
const value18 = ref([])

const options = ref([
  {
    label: '吃饭',
    value: 1,
  },
  {
    label: '睡觉',
    value: 2,
  },
  {
    label: '打游戏',
    value: 3,
    disabled: true,
  },
])

const keyOptions = ref([
   {
    name: '吃饭',
    id: 1,
  },
  {
    name: '睡觉',
    id: 2,
  },
  {
    name: '打游戏',
    id: 3,
    disabled: true,
  },
])
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
    <var-select variant="outlined" placeholder="使用插槽自定义清除图标" clearable v-model="value6">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>

    <var-select variant="outlined" placeholder="自定义图标" v-model="value7">
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
        <var-icon class="selected-icon" :name="value7 === '吃饭' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value7 }}</span>
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
    <var-select variant="outlined" placeholder="自定义图标尺寸" v-model="value8">
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
        <var-icon class="selected-icon" :size="28" :name="value8 === '吃饭' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value8 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>

    <var-select variant="outlined" placeholder="多选" multiple v-model="value9">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select variant="outlined" placeholder="纸片风格的多选" chip multiple v-model="value10">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select
      variant="outlined"
      placeholder="单选值校验"
      :rules="[(v) => v === '摸鱼' || '您一定得选择摸鱼']"
      v-model="value11"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="摸鱼" />
    </var-select>
    <var-select
      variant="outlined"
      placeholder="使用 Zod 校验单选值"
      :rules="z.string().refine(v => v === '摸鱼', '您一定得选择摸鱼')"
      v-model="value17"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="摸鱼" />
    </var-select>
    <var-select
      variant="outlined"
      multiple
      placeholder="多选值校验"
      :rules="v => v.length >= 2 || '您至少选择两个选项'"
      v-model="value12"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select
      variant="outlined"
      multiple
      placeholder="使用 Zod 校验多选值"
      :rules="z.array(z.string()).min(2, '您至少选择两个选项')"
      v-model="value18"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select variant="outlined" size="small" placeholder="小尺寸" v-model="value13">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select variant="outlined" placeholder="选项式 API" v-model="value14" :options="options" />
    <var-select variant="outlined" placeholder="选项式 API（多选）" v-model="value15" :options="options" multiple />
    <var-select variant="outlined" placeholder="自定义字段" v-model="value16" :options="keyOptions" label-key="name" value-key="id" />
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
| `size` | 选择框尺寸，可选值 `normal` `small`   | _string_ | `normal` |
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
| `options` ***3.3.4*** | 指定可选项 | _SelectOption[]_ | `[]` |
| `label-key` ***3.3.4*** | 作为 label 唯一标识的键名 | _string_ | `label` |
| `value-key` ***3.3.4*** | 作为 value 唯一标识的键名 | _string_ | `value` |
| `validate-trigger` | 触发验证的时机，可选值为 `onFocus` `onBlur` `onChange` `onClick` `onClear` `onClose` | _SelectValidateTrigger[]_ | `['onChange', 'onClear', 'onClose']` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其它类型的值将转换为文本作为用户提示。自 `3.5.0` 开始支持 [Zod 验证](#/zh-CN/zodValidation)  | _((v: any) => any) \| ZodType \| Array<((v: any) => any) \| ZodType>_ | `-` |

#### SelectOption

| 参数 | 说明 | 类型             | 默认值       |
| ------- | --- |----------------|-----------|
| `label`    |    选项的标签    | _string \| VNode \| (option: SelectOption, selected: boolean) => VNodeChild_      | `-`   |
| `value`  |    选项的值    | _any_      | `-`   |
| `disabled`    |    是否禁用   | _boolean_      | `-`   |

#### Option Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | 选项显示的文本 | _any_ | `-` |
| `value` | 选项绑定的值 | _any_ | `-` |
| `disabled` | 是否禁用 | _boolean_ | `false` |
| `ripple` ***3.8.0***  | 是否启用水波效果 | _boolean_ | `true` |

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

| 事件名 | 说明    | 参数 |
| --- |-------| --- |
| `focus` | 聚焦时触发 | `event: Event` |
| `blur` | 失焦时触发 | `event: Event` |
| `click` | 点击时触发 | `event: Event` |
| `clear` | 清除时触发 | `value: any \| any[]` |
| `close` | 关闭时触发 | `value: any[]` |
| `change` | 更新时触发 | `value: any \| any[]` |

### 插槽

#### Select Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `selected` | 选择区域的内容 | `-` |
| `prepend-icon` | 前置图标 | `-` |
| `clear-icon` | 清除图标 | `clear: (e: Event) => void` 清除函数(在使用插槽时, 可用于清除选择框内容) |
| `append-icon` | 后置图标 | `-` |
| `arrow-icon` | 箭头图标 | `focus: boolean` 是否处于聚焦状态, `menu-open: boolean` 是否菜单被打开 |

#### Option Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 选项显示的内容 | `selected: boolean` 是否选中 |

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
| `--select-scroller-background` | `var(--color-surface-container-high)` |
| `--select-scroller-padding` | `6px 0` |
| `--select-scroller-max-height` | `278px` |
| `--select-scroller-border-radius` | `2px` |
| `--select-label-font-size` | `16px` |
| `--select-chips-margin` | `-5px 0 0 0` |
| `--select-chips-padding` | `2px 0` |
| `--select-chip-margin` | `5px 5px 0 0` |
| `--select-arrow-size` | `20px` |
| `--select-standard-menu-margin` | `calc(var(--field-decorator-placeholder-size) * 0.75 + 14px) 0 0 0` |

#### Option Variables

| 变量名 | 默认值 |
| --- | --- |
| `--option-height` | `38px` |
| `--option-padding` | `0 12px` |
| `--option-font-size` | `16px` |
| `--option-selected-background` | `var(--input-decorator-focus-color)` |
| `--option-text-color` | `#555` |
