# 悬停指令

### 介绍

悬停指令

### 样式绑定

```html
<template>
   <var-paper
    :elevation="2"
    :width="100"
    :height="100"
    class="var-hover-example-paper"
    v-hover="{ color: '#fff', background: ' var(--color-primary)' }"
  >
    HOVER
  </var-paper>
</template>

<style>
.var-hover-example-paper {
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}
</style>
```

### 函数绑定

```html
<script setup>
const translateY = ref('100%')

function handleHover(hovering) {
  translateY.value = hovering ? '0' : Math.random() > 0.5 ? '100%' : '-100%'
}
</script>

<template>
  <var-card
    title="本草纲目"
    subtitle="我表情悠哉 跳个大概"
    description="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
    class="var-hover-example-card"
    v-hover="handleHover"
  >
    <template #image>
      <div class="var-hover-example-card__image">
        <img src="https://varlet.gitee.io/varlet-ui/tree.jpeg" />
        <div
          class="var-hover-example-card__image__mask"
          :style="{
            transform: `translateY(${translateY})`,
          }"
        >
          HOVER
        </div>
      </div>
    </template>
  </var-card>
</template>

<style>
.var-hover-example-card {
  cursor: pointer;

  &__image {
    position: relative;

    overflow: hidden;

    width: 100%;

    font-size: 0;
    line-height: 1;

    img {
      width: 100%;
    }

    &__mask {
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      transition: all 0.3s;

      color: #fff;
      background-color: var(--color-primary);

      font-size: 50px;
    }
  }
}
</style>
```
