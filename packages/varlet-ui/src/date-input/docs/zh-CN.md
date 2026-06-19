# 日期输入框

### 介绍

用于输入或选择日期。

### 标准外观

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const standardValue = ref('2021-04-08')
const standardValue2 = ref('2021-04')
const standardValue3 = ref('2021')
const standardValue4 = ref('2021-04-08')
const standardValue5 = ref('2021-04-08')
const standardValue6 = ref('2021-04-08')
const standardValue7 = ref('')
const standardValue8 = ref('')
const standardValue9 = ref('2021-04-08')
const standardValue10 = ref(['2021-04-08', '2021-04-12'])
const standardValue11 = ref(['2021-04-08', '2021-04-20'])
const standardValue12 = ref(1617811200000)
const standardValue13 = ref('2021/04/08')
const standardValue14 = ref('2021-04-08')
const standardValue15 = ref(['2021-04', '2021-09'])
const standardValue16 = ref(['2021', '2025'])
const standardValue17 = ref('2021-04-08')
const standardValue18 = ref(['2021-04-08', '2021-04-12'])
const standardValue19 = ref('2021-04-09')

const allowedDates = (date) => Number(date.split('-')[2]) % 2 === 1
</script>

<template>
  <var-space direction="column" size="large">
    <var-date-input v-model="standardValue" placeholder="请选择日期" />
    <var-date-input v-model="standardValue2" type="month" placeholder="请选择月份" />
    <var-date-input v-model="standardValue3" type="year" placeholder="请选择年份" />
    <var-date-input v-model="standardValue4" placeholder="只读" readonly />
    <var-date-input v-model="standardValue5" placeholder="禁用" disabled />
    <var-date-input v-model="standardValue6" placeholder="可清除" clearable />
    <var-date-input
      v-model="standardValue7"
      placeholder="字段校验"
      :rules="[(v) => !!v || '请选择日期']"
    />
    <var-date-input
      v-model="standardValue8"
      placeholder="使用 Zod 进行校验"
      :rules="z.string().min(1, { message: '请选择日期' })"
    />
    <var-date-input v-model="standardValue9" placeholder="显示图标">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="calendar" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="heart-outline" />
      </template>
    </var-date-input>
    <var-date-input v-model="standardValue10" multiple placeholder="请选择日期" />
    <var-date-input v-model="standardValue11" range placeholder="请选择日期范围" />
    <var-date-input v-model="standardValue15" type="month" range placeholder="请选择月份范围" />
    <var-date-input v-model="standardValue16" type="year" range placeholder="请选择年份范围" />
    <var-date-input v-model="standardValue17" min="2021-04-05" max="2021-04-20" placeholder="限制日期范围" />
    <var-date-input
      v-model="standardValue18"
      range
      range-separator=" 至 "
      placeholder="自定义分隔符"
    />
    <var-date-input v-model="standardValue19" :allowed-dates="allowedDates" placeholder="限制可选日期" />
    <var-date-input v-model="standardValue12" value-format="timestamp" placeholder="时间戳绑定值">
      <template #extra-message>当前值：{{ standardValue12 }}</template>
    </var-date-input>
    <var-date-input v-model="standardValue13" value-format="YYYY/MM/DD" placeholder="自定义绑定值格式">
      <template #extra-message>当前值：{{ standardValue13 }}</template>
    </var-date-input>
    <var-date-input v-model="standardValue14" size="small" placeholder="小尺寸" />
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

const outlinedValue = ref('2021-04-08')
const outlinedValue2 = ref('2021-04')
const outlinedValue3 = ref('2021')
const outlinedValue4 = ref('2021-04-08')
const outlinedValue5 = ref('2021-04-08')
const outlinedValue6 = ref('2021-04-08')
const outlinedValue7 = ref('')
const outlinedValue8 = ref('')
const outlinedValue9 = ref('2021-04-08')
const outlinedValue10 = ref(['2021-04-08', '2021-04-12'])
const outlinedValue11 = ref(['2021-04-08', '2021-04-20'])
const outlinedValue12 = ref(1617811200000)
const outlinedValue13 = ref('2021/04/08')
const outlinedValue14 = ref('2021-04-08')
const outlinedValue15 = ref(['2021-04', '2021-09'])
const outlinedValue16 = ref(['2021', '2025'])
const outlinedValue17 = ref('2021-04-08')
const outlinedValue18 = ref(['2021-04-08', '2021-04-12'])
const outlinedValue19 = ref('2021-04-09')

const allowedDates = (date) => Number(date.split('-')[2]) % 2 === 1
</script>

<template>
  <var-space direction="column" size="large">
    <var-date-input v-model="outlinedValue" variant="outlined" placeholder="请选择日期" />
    <var-date-input v-model="outlinedValue2" variant="outlined" type="month" placeholder="请选择月份" />
    <var-date-input v-model="outlinedValue3" variant="outlined" type="year" placeholder="请选择年份" />
    <var-date-input v-model="outlinedValue4" variant="outlined" placeholder="只读" readonly />
    <var-date-input v-model="outlinedValue5" variant="outlined" placeholder="禁用" disabled />
    <var-date-input v-model="outlinedValue6" variant="outlined" placeholder="可清除" clearable />
    <var-date-input
      v-model="outlinedValue7"
      variant="outlined"
      placeholder="字段校验"
      :rules="[(v) => !!v || '请选择日期']"
    />
    <var-date-input
      v-model="outlinedValue8"
      variant="outlined"
      placeholder="使用 Zod 进行校验"
      :rules="z.string().min(1, { message: '请选择日期' })"
    />
    <var-date-input v-model="outlinedValue9" variant="outlined" placeholder="显示图标">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="calendar" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="heart-outline" />
      </template>
    </var-date-input>
    <var-date-input v-model="outlinedValue10" variant="outlined" multiple placeholder="请选择日期" />
    <var-date-input v-model="outlinedValue11" variant="outlined" range placeholder="请选择日期范围" />
    <var-date-input v-model="outlinedValue15" variant="outlined" type="month" range placeholder="请选择月份范围" />
    <var-date-input v-model="outlinedValue16" variant="outlined" type="year" range placeholder="请选择年份范围" />
    <var-date-input
      v-model="outlinedValue17"
      variant="outlined"
      min="2021-04-05"
      max="2021-04-20"
      placeholder="限制日期范围"
    />
    <var-date-input
      v-model="outlinedValue18"
      variant="outlined"
      range
      range-separator=" 至 "
      placeholder="自定义分隔符"
    />
    <var-date-input
      v-model="outlinedValue19"
      variant="outlined"
      :allowed-dates="allowedDates"
      placeholder="限制可选日期"
    />
    <var-date-input v-model="outlinedValue12" variant="outlined" value-format="timestamp" placeholder="时间戳绑定值">
      <template #extra-message>当前值：{{ outlinedValue12 }}</template>
    </var-date-input>
    <var-date-input
      v-model="outlinedValue13"
      variant="outlined"
      value-format="YYYY/MM/DD"
      placeholder="自定义绑定值格式"
    >
      <template #extra-message>当前值：{{ outlinedValue13 }}</template>
    </var-date-input>
    <var-date-input v-model="outlinedValue14" variant="outlined" size="small" placeholder="小尺寸" />
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

### 填充外观

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const filledValue = ref('2021-04-08')
const filledValue2 = ref('2021-04')
const filledValue3 = ref('2021')
const filledValue4 = ref('2021-04-08')
const filledValue5 = ref('2021-04-08')
const filledValue6 = ref('2021-04-08')
const filledValue7 = ref('')
const filledValue8 = ref('')
const filledValue9 = ref('2021-04-08')
const filledValue10 = ref(['2021-04-08', '2021-04-12'])
const filledValue11 = ref(['2021-04-08', '2021-04-20'])
const filledValue12 = ref(1617811200000)
const filledValue13 = ref('2021/04/08')
const filledValue14 = ref('2021-04-08')
const filledValue15 = ref(['2021-04', '2021-09'])
const filledValue16 = ref(['2021', '2025'])
const filledValue17 = ref('2021-04-08')
const filledValue18 = ref(['2021-04-08', '2021-04-12'])
const filledValue19 = ref('2021-04-09')

const allowedDates = (date) => Number(date.split('-')[2]) % 2 === 1
</script>

<template>
  <var-space direction="column" size="large">
    <var-date-input v-model="filledValue" variant="filled" placeholder="请选择日期" />
    <var-date-input v-model="filledValue2" variant="filled" type="month" placeholder="请选择月份" />
    <var-date-input v-model="filledValue3" variant="filled" type="year" placeholder="请选择年份" />
    <var-date-input v-model="filledValue4" variant="filled" placeholder="只读" readonly />
    <var-date-input v-model="filledValue5" variant="filled" placeholder="禁用" disabled />
    <var-date-input v-model="filledValue6" variant="filled" placeholder="可清除" clearable />
    <var-date-input
      v-model="filledValue7"
      variant="filled"
      placeholder="字段校验"
      :rules="[(v) => !!v || '请选择日期']"
    />
    <var-date-input
      v-model="filledValue8"
      variant="filled"
      placeholder="使用 Zod 进行校验"
      :rules="z.string().min(1, { message: '请选择日期' })"
    />
    <var-date-input v-model="filledValue9" variant="filled" placeholder="显示图标">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="calendar" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="heart-outline" />
      </template>
    </var-date-input>
    <var-date-input v-model="filledValue10" variant="filled" multiple placeholder="请选择日期" />
    <var-date-input v-model="filledValue11" variant="filled" range placeholder="请选择日期范围" />
    <var-date-input v-model="filledValue15" variant="filled" type="month" range placeholder="请选择月份范围" />
    <var-date-input v-model="filledValue16" variant="filled" type="year" range placeholder="请选择年份范围" />
    <var-date-input
      v-model="filledValue17"
      variant="filled"
      min="2021-04-05"
      max="2021-04-20"
      placeholder="限制日期范围"
    />
    <var-date-input
      v-model="filledValue18"
      variant="filled"
      range
      range-separator=" 至 "
      placeholder="自定义分隔符"
    />
    <var-date-input
      v-model="filledValue19"
      variant="filled"
      :allowed-dates="allowedDates"
      placeholder="限制可选日期"
    />
    <var-date-input v-model="filledValue12" variant="filled" value-format="timestamp" placeholder="时间戳绑定值">
      <template #extra-message>当前值：{{ filledValue12 }}</template>
    </var-date-input>
    <var-date-input
      v-model="filledValue13"
      variant="filled"
      value-format="YYYY/MM/DD"
      placeholder="自定义绑定值格式"
    >
      <template #extra-message>当前值：{{ filledValue13 }}</template>
    </var-date-input>
    <var-date-input v-model="filledValue14" variant="filled" size="small" placeholder="小尺寸" />
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

### 日期时间选择

通过 `type="datetime"` 选择日期与时间，日历下方提供 `时 : 分 : 秒` 的时间选择，绑定值默认格式为 `YYYY-MM-DD HH:mm:ss`，仅支持 24 小时制。设置 `use-seconds` 为 `false` 可只精确到分钟。`min` / `max` 接收完整时间串，会同时限制日历可选天和时间列表可选项；通过 `allowed-times` 限制可选时间，参数为完整的 `YYYY-MM-DD HH:mm:ss`，可直接用 `dayjs` 解析。配合 `range` 可选择日期时间范围，开始与结束时间在同一行编辑，最终按完整时间排序起止。

```html
<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'

const datetimeValue = ref('2021-04-08 12:30:45')
const datetimeNoSecondsValue = ref('2021-04-08 12:30')
const datetimeMinMaxValue = ref('2021-04-08 12:00:00')
const datetimeAllowedTimesValue = ref('2021-04-08 10:00:00')
const datetimeRangeValue = ref(['2021-04-08 09:00:00', '2021-04-12 18:30:00'])

// 只允许 09:00 - 17:59
const allowedTimes = (value) => {
  const hour = dayjs(value).hour()
  return hour >= 9 && hour < 18
}
</script>

<template>
  <var-space direction="column" size="large">
    <var-date-input v-model="datetimeValue" type="datetime" placeholder="请选择日期时间">
      <template #extra-message>当前值：{{ datetimeValue }}</template>
    </var-date-input>
    <var-date-input
      v-model="datetimeNoSecondsValue"
      type="datetime"
      :use-seconds="false"
      variant="outlined"
      placeholder="请选择日期时间（到分钟）"
    >
      <template #extra-message>当前值：{{ datetimeNoSecondsValue }}</template>
    </var-date-input>
    <var-date-input
      v-model="datetimeMinMaxValue"
      type="datetime"
      variant="filled"
      min="2021-04-08 09:30:00"
      max="2021-04-20 18:00:00"
      placeholder="限制日期时间范围"
    >
      <template #extra-message>当前值：{{ datetimeMinMaxValue }}</template>
    </var-date-input>
    <var-date-input
      v-model="datetimeAllowedTimesValue"
      type="datetime"
      variant="outlined"
      :allowed-times="allowedTimes"
      placeholder="限制可选时间"
    >
      <template #extra-message>当前值：{{ datetimeAllowedTimesValue }}</template>
    </var-date-input>
    <var-date-input v-model="datetimeRangeValue" type="datetime" range variant="filled" placeholder="请选择日期时间范围">
      <template #extra-message>当前值：{{ datetimeRangeValue.join(' ~ ') }}</template>
    </var-date-input>
  </var-space>
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定的值，具体类型由 `value-format` 决定 | _string \| number \| Date \| Array<string \| number \| Date> \| undefined_ | `-` |
| `type` | 输入类型，可选值为 `date` `month` `year` `datetime` | _string_ | `date` |
| `format` | 输入框展示和解析用户输入时使用的格式 | _string_ | 根据 `type` 推导 |
| `value-format` | 绑定值格式，可选值为 `timestamp` `date`，也可传入日期格式字符串。不传时使用 `format` 输出字符串 | _string_ | `-` |
| `use-seconds` | `type` 为 `datetime` 时是否精确到秒 | _boolean_ | `true` |
| `multiple` | 是否支持多选 | _boolean_ | `false` |
| `range` | 是否支持范围选择 | _boolean_ | `false` |
| `separator` | 多选展示分隔符 | _string_ | `, ` |
| `range-separator` | 范围展示分隔符 | _string_ | ` ~ ` |
| `placeholder` | 占位符 | _string_ | `-` |
| `variant` | 输入框风格，可选值为 `standard` `outlined` `filled` | _string_ | `standard` |
| `size` | 输入框尺寸，可选值 `normal` `small` | _string_ | `normal` |
| `line` | 是否显示分割线 | _boolean_ | `true` |
| `hint` | 是否使用占位符作为提示 | _boolean_ | `true` |
| `text-color` | 文字颜色 | _string_ | `-` |
| `focus-color` | 聚焦时的主要颜色 | _string_ | `-` |
| `blur-color` | 失焦时的主要颜色 | _string_ | `-` |
| `readonly` | 是否只读，只读时禁止输入并禁止打开面板选择 | _boolean_ | `false` |
| `disabled` | 是否禁用 | _boolean_ | `false` |
| `clearable` | 是否可清除 | _boolean_ | `false` |
| `validate-trigger` | 触发验证的时机，可选值为 `onFocus` `onBlur` `onChange` `onClick` `onClear` `onInput` | _InputValidateTrigger[]_ | `['onInput', 'onClear', 'onChange']` |
| `rules` | 验证规则，返回 `true` 表示验证通过，其它类型的值将转换为文本作为用户提示。自 `3.5.0` 开始支持 [Zod 验证](#/zh-CN/zodValidation) | _((v: any) => any) \| ZodType \| Array<((v: any) => any) \| ZodType>_ | `-` |
| `allowed-dates` | 限制可以选择的值，参数格式随 `type` 变化（`YYYY` / `YYYY-MM` / `YYYY-MM-DD`） | _(value: string) => boolean_ | `-` |
| `allowed-times` | `type` 为 `datetime` 时限制可选择的时间，参数为完整的 `YYYY-MM-DD HH:mm:ss` | _(value: string) => boolean_ | `-` |
| `min` | 允许的最小值，格式随 `type` 变化（`YYYY` / `YYYY-MM` / `YYYY-MM-DD` / `YYYY-MM-DD HH:mm:ss`） | _string_ | `-` |
| `max` | 允许的最大值，格式随 `type` 变化（`YYYY` / `YYYY-MM` / `YYYY-MM-DD` / `YYYY-MM-DD HH:mm:ss`） | _string_ | `-` |
| `first-day-of-week` | 设置一周的第一天，从周日的 `0` 开始 | _string \| number_ | `0` |
| `tabindex` | 与原生 input 的 tabindex 属性一致 | _string_ | `-` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `focus` | 聚焦 | `-` | `-` |
| `blur` | 失焦 | `-` | `-` |
| `select` | 选中输入框中的所有文本 | `-` | `-` |
| `validate` | 触发校验 | `-` | `valid: Promise<boolean>` |
| `resetValidation` | 清空校验信息 | `-` | `-` |
| `reset` | 清空绑定的值和校验信息 | `-` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `focus` | 聚焦时触发 | `event: Event` |
| `blur` | 失焦时触发 | `event: Event` |
| `clear` | 清除时触发 | `value: string` |
| `change` | 绑定值变化时触发 | `value: string \| number \| Date \| Array<string \| number \| Date> \| undefined` |

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
| `--date-input-picker-width` | `320px` |
| `--date-input-time-field-separator-color` | `var(--color-on-surface-variant)` |
| `--date-input-time-field-border-color` | `var(--color-outline)` |
| `--date-input-time-field-active-color` | `var(--color-primary)` |
