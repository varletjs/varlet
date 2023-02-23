# Hover

### Intro

Hover

### Style Binding

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

### Function Binding

```html
<script setup>
const translateY = ref('100%')

function handleHover(hovering) {
  translateY.value = hovering ? '0' : Math.random() > 0.5 ? '100%' : '-100%'
}
</script>

<template>
  <var-card
    title="Dangerous"
    subtitle="The girl was dangerous"
    description="The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."
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