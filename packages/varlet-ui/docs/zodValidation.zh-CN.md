# Zod 验证

### 介绍

我们在 `3.5.0+` 支持了基于 [Zod](https://zod.dev/) 的表单验证方式，`Zod` 是一个非常强大的数据验证工具，并且对 `Typescript` 十分友好。

### 安装 Zod

为了控制组件库的尺寸，我们不内置 `Zod`，所以需要手动安装。

```shell
pnpm i zod
```

### 基本使用

每个表单组件的 `rules` 属性支持传入一个或多个 `Zod Schema`。
组件将使用该 `Schema` 的规则进行验证，验证失败时将使用其定义的错误信息作为用户提示。

```html
<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const user = ref({
  name: '',
  email: '',
  password: '',
  repeatPassword: ''
})

function handleSubmit(valid) {
  console.log(valid)
}
</script>

<template>
  <var-form @submit="handleSubmit">
    <var-space direction="column" size="large">
      <var-input 
        placeholder="名称" 
        :rules="z.string().min(1, '名称不能为空')" 
        v-model="user.name"
       />
      <var-input 
        placeholder="邮箱" 
        :rules="z.string().email('邮箱格式有误')" 
        v-model="user.email" 
      />
      <var-input 
        type="password"
        placeholder="密码" 
        :rules="z.string().min(6, '密码最少6位')"
        v-model="user.password" 
      />
      <var-input 
        type="password" 
        placeholder="确认密码"
        :rules="z.string().min(6, '密码最少6位').refine(v => v === user.password, '与密码不一致')" 
        v-model="user.repeatPassword" 
      />
      <var-button type="primary" native-type="submit">提交</var-button>
    </var-space>
  </var-form>
</template>
```

### 结合 Typescript 使用

如果您使用 `Typescript`，定义一个 `Zod Schema` 可以同时得到 Typescript 类型和表单 rules。

```html
<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'

const user = ref<z.infer<typeof UserSchema>>({
  name: '',
  email: '',
  password: '',
  repeatPassword: ''
})

const UserSchema = z.object({
  name: z.string().min(1, '名称不能为空'),
  email: z.string().email('邮箱格式有误'),
  password: z.string().min(6, '密码最少6位'),
  repeatPassword: z.string().min(6, '确认密码最少6位').refine(v => v === user.value.password, '与密码不一致'),
})

function handleSubmit(valid) {
  console.log(valid)
}
</script>

<template>
  <var-form @submit="handleSubmit">
    <var-space direction="column" size="large">
      <var-input 
        placeholder="名称" 
        :rules="UserSchema.shape.name" 
        v-model="user.name"
       />
      <var-input 
        placeholder="邮箱" 
        :rules="UserSchema.shape.email" 
        v-model="user.email" 
      />
      <var-input 
        type="password"
        placeholder="密码" 
        :rules="UserSchema.shape.password"
        v-model="user.password" 
      />
      <var-input 
        type="password" 
        placeholder="确认密码"
        :rules="UserSchema.shape.repeatPassword" 
        v-model="user.repeatPassword" 
      />
      <var-button type="primary" native-type="submit">提交</var-button>
    </var-space>
  </var-form>
</template>
```