# 选择框

# 选择框

### 介绍

通过下拉菜单展示并选择内容。

### 标准外观

```html
<script setup>
import { ref, computed } from 'vue'
import { z } from 'zod'

const standardValue = ref()
const standardValue2 = ref()
const standardValue3 = ref()
const standardValue4 = ref()
const standardValue5 = ref()
const standardValue6 = ref()
const standardValue7 = ref()
const standardValue8 = ref([])
const standardValue9 = ref([])
const standardValue10 = ref()
const standardValue11 = ref([])
const standardValue12 = ref()
const standardValue13 = ref()
const standardValue14 = ref()
const standardValue15 = ref()
const standardValue16 = ref([])

const options = computed(() => [
  { label: '吃饭', value: 1 },
  { label: '睡觉', value: 2 },
  { label: '打游戏', value: 3, disabled: true },
])

const keyOptions = computed(() => [
  { name: '吃饭', id: 1 },
  { name: '睡觉', id: 2 },
  { name: '打游戏', id: 3, disabled: true },
])
</script>

<template>
  <var-space direction="column" size="large">
    <var-select v-model="standardValue" placeholder="请选择一个选项">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="standardValue2" placeholder="文本关联值">
      <var-option label="吃饭" :value="1" />
      <var-option label="睡觉" :value="2" />
    </var-select>
    <div class="relation">当前选择的是: {{ standardValue2 }}</div>
    <var-select v-model="standardValue3" placeholder="只读" readonly>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="standardValue4" placeholder="禁用" disabled>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="standardValue5" placeholder="可清除" clearable>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="standardValue6" placeholder="使用插槽自定义清除图标" clearable>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>
    <var-select v-model="standardValue7" placeholder="自定义图标">
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
        <var-icon class="selected-icon" :name="standardValue7 === '吃饭' ? 'cake-variant' : 'weather-night'" />
        <span>{{ standardValue7 }}</span>
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
    <var-select v-model="standardValue8" placeholder="多选" multiple>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select v-model="standardValue9" placeholder="纸片风格的多选" chip multiple>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select
      v-model="standardValue10"
      placeholder="单选值校验"
      :rules="v => v === '摸鱼' || '您一定得选择摸鱼'"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="摸鱼" />
    </var-select>
    <var-select
      v-model="standardValue11"
      multiple
      placeholder="多选值校验"
      :rules="v => v.length >= 2 || '您至少选择两个选项'"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select
      v-model="standardValue12"
      placeholder="使用 Zod 校验单选值"
      :rules="z.string().refine(v => v === '摸鱼', '您一定得选择摸鱼')"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="摸鱼" />
    </var-select>
    <var-select v-model="standardValue13" placeholder="选项式 API" :options="options" />
    <var-select
      v-model="standardValue14"
      placeholder="自定义字段"
      :options="keyOptions"
      label-key="name"
      value-key="id"
    />
    <var-select v-model="standardValue15" placeholder="小尺寸" size="small">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select
      v-model="standardValue16"
      placeholder="使用 Zod 校验多选值"
      multiple
      :rules="z.array(z.string()).min(2, '您至少选择两个选项')"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
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
import { ref, computed } from 'vue'
import { z } from 'zod'

const outlinedValue = ref()
const outlinedValue2 = ref()
const outlinedValue3 = ref()
const outlinedValue4 = ref()
const outlinedValue5 = ref()
const outlinedValue6 = ref()
const outlinedValue7 = ref()
const outlinedValue8 = ref([])
const outlinedValue9 = ref([])
const outlinedValue10 = ref()
const outlinedValue11 = ref([])
const outlinedValue12 = ref()
const outlinedValue13 = ref()
const outlinedValue14 = ref()
const outlinedValue15 = ref()
const outlinedValue16 = ref([])

const options = computed(() => [
  { label: '吃饭', value: 1 },
  { label: '睡觉', value: 2 },
  { label: '打游戏', value: 3, disabled: true },
])

const keyOptions = computed(() => [
  { name: '吃饭', id: 1 },
  { name: '睡觉', id: 2 },
  { name: '打游戏', id: 3, disabled: true },
])
</script>

<template>
  <var-space direction="column" size="large">
    <var-select v-model="outlinedValue" variant="outlined" placeholder="请选择一个选项">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="outlinedValue2" variant="outlined" placeholder="文本关联值">
      <var-option label="吃饭" :value="1" />
      <var-option label="睡觉" :value="2" />
    </var-select>
    <div class="relation">当前选择的是: {{ outlinedValue2 }}</div>
    <var-select v-model="outlinedValue3" variant="outlined" placeholder="只读" readonly>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="outlinedValue4" variant="outlined" placeholder="禁用" disabled>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="outlinedValue5" variant="outlined" placeholder="可清除" clearable>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="outlinedValue6" variant="outlined" placeholder="使用插槽自定义清除图标" clearable>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>
    <var-select v-model="outlinedValue7" variant="outlined" placeholder="自定义图标">
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
        <var-icon class="selected-icon" :name="outlinedValue7 === '吃饭' ? 'cake-variant' : 'weather-night'" />
        <span>{{ outlinedValue7 }}</span>
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
    <var-select v-model="outlinedValue8" variant="outlined" placeholder="多选" multiple>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select v-model="outlinedValue9" variant="outlined" placeholder="纸片风格的多选" chip multiple>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select
      v-model="outlinedValue10"
      variant="outlined"
      placeholder="单选值校验"
      :rules="v => v === '摸鱼' || '您一定得选择摸鱼'"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="摸鱼" />
    </var-select>
    <var-select
      v-model="outlinedValue11"
      variant="outlined"
      multiple
      placeholder="多选值校验"
      :rules="v => v.length >= 2 || '您至少选择两个选项'"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select
      v-model="outlinedValue12"
      variant="outlined"
      placeholder="使用 Zod 校验单选值"
      :rules="z.string().refine(v => v === '摸鱼', '您一定得选择摸鱼')"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="摸鱼" />
    </var-select>
    <var-select v-model="outlinedValue13" variant="outlined" placeholder="选项式 API" :options="options" />
    <var-select
      v-model="outlinedValue14"
      variant="outlined"
      placeholder="自定义字段"
      :options="keyOptions"
      label-key="name"
      value-key="id"
    />
    <var-select v-model="outlinedValue15" variant="outlined" placeholder="小尺寸" size="small">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select
      v-model="outlinedValue16"
      variant="outlined"
      placeholder="使用 Zod 校验多选值"
      multiple
      :rules="z.array(z.string()).min(2, '您至少选择两个选项')"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
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

### 填充外观

```html
<script setup>
import { ref, computed } from 'vue'
import { z } from 'zod'

const filledValue = ref()
const filledValue2 = ref()
const filledValue3 = ref()
const filledValue4 = ref()
const filledValue5 = ref()
const filledValue6 = ref()
const filledValue7 = ref()
const filledValue8 = ref([])
const filledValue9 = ref([])
const filledValue10 = ref()
const filledValue11 = ref([])
const filledValue12 = ref()
const filledValue13 = ref()
const filledValue14 = ref()
const filledValue15 = ref()
const filledValue16 = ref([])

const options = computed(() => [
  { label: '吃饭', value: 1 },
  { label: '睡觉', value: 2 },
  { label: '打游戏', value: 3, disabled: true },
])

const keyOptions = computed(() => [
  { name: '吃饭', id: 1 },
  { name: '睡觉', id: 2 },
  { name: '打游戏', id: 3, disabled: true },
])
</script>

<template>
  <var-space direction="column" size="large">
    <var-select v-model="filledValue" variant="filled" placeholder="请选择一个选项">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="filledValue2" variant="filled" placeholder="文本关联值">
      <var-option label="吃饭" :value="1" />
      <var-option label="睡觉" :value="2" />
    </var-select>
    <div class="relation">当前选择的是: {{ filledValue2 }}</div>
    <var-select v-model="filledValue3" variant="filled" placeholder="只读" readonly>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="filledValue4" variant="filled" placeholder="禁用" disabled>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="filledValue5" variant="filled" placeholder="可清除" clearable>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="filledValue6" variant="filled" placeholder="使用插槽自定义清除图标" clearable>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>
    <var-select v-model="filledValue7" variant="filled" placeholder="自定义图标">
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
        <var-icon class="selected-icon" :name="filledValue7 === '吃饭' ? 'cake-variant' : 'weather-night'" />
        <span>{{ filledValue7 }}</span>
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
    <var-select v-model="filledValue8" variant="filled" placeholder="多选" multiple>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select v-model="filledValue9" variant="filled" placeholder="纸片风格的多选" chip multiple>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select
      v-model="filledValue10"
      variant="filled"
      placeholder="单选值校验"
      :rules="v => v === '摸鱼' || '您一定得选择摸鱼'"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="摸鱼" />
    </var-select>
    <var-select
      v-model="filledValue11"
      variant="filled"
      multiple
      placeholder="多选值校验"
      :rules="v => v.length >= 2 || '您至少选择两个选项'"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select
      v-model="filledValue12"
      variant="filled"
      placeholder="使用 Zod 校验单选值"
      :rules="z.string().refine(v => v === '摸鱼', '您一定得选择摸鱼')"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="摸鱼" />
    </var-select>
    <var-select v-model="filledValue13" variant="filled" placeholder="选项式 API" :options="options" />
    <var-select
      v-model="filledValue14"
      variant="filled"
      placeholder="自定义字段"
      :options="keyOptions"
      label-key="name"
      value-key="id"
    />
    <var-select v-model="filledValue15" variant="filled" placeholder="小尺寸" size="small">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select
      v-model="filledValue16"
      variant="filled"
      placeholder="使用 Zod 校验多选值"
      multiple
      :rules="z.array(z.string()).min(2, '您至少选择两个选项')"
    >
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
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
| `size` | 选择框尺寸，可选值 `normal` `small`   | _string_ | `normal` |
| `variant` | 选择框风格, 可选值为 `standard` `outlined` `filled` | _string_ | `standard` |
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
| `tabindex` ***3.12.1*** | 与原生 select 的 tabindex 属性一致  | _string_ | `-` |

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
