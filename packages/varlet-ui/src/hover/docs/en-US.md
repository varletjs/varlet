# Hover

### Intro

Style binding is performed when the pointer hovers the binding element, and the current hovering state can also be obtained through a function, which supports selective enablement on desktop or mobile.

### Style Binding

The style binding is performed when the pointer hovers over the bound element, and the style binding is canceled when the pointer leaves the element.

```html
<template>
   <var-paper
     class="paper"
     ripple
     :elevation="2"
     :width="100"
     :height="100"
     v-hover="{ color: '#fff', background: 'var(--color-primary)' }"
   >
     HOVER
   </var-paper>
</template>

<style>
.paper {
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
}
</style>
```

### Function Binding

The function is triggered when the pointer hovers and leaves, and carries the current hover state.

```html
<script setup>
const translateY = ref('100%')

function handleHover(hovering) {
   translateY.value = hovering ? '0' : '100%'
}
</script>

<template>
   <div class="image-container" v-hover="handleHover">
     <var-image src="https://varlet.gitee.io/varlet-ui/tree.jpeg" />
     <div class="image-mask" :style="{ transform: `translateY(${translateY})` }">HOVER</div>
   </div>
</template>

<style>
.image-container {
   position: relative;
   overflow: hidden;
   cursor: pointer;
   border-radius: 10px;
}

.image-mask {
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   transition: all 0.3s;
   color: #fff;
   background-color: var(--color-primary);
   font-size: 50px;
}
</style>
```

### Selectively enable for different devices

Considering the differences in `hover` effects on different platforms, the hover command can only be enabled on specific platforms.

#### Only enabled on desktop

```html
// playground-ignore
<var-paper v-hover:desktop="{ color: '#fff' }"">HOVER</var-paper>
```

#### Only enabled on mobile

```html
// playground-ignore
<var-paper v-hover:mobile="{ color: '#fff' }"">HOVER</var-paper>
```