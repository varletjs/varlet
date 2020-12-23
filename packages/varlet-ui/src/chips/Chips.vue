<template>
  <transition
    name="var-fade"
  >
    <span
      v-ripple="{disabled}"
      class="var-chips var--box var-elevation--2"
      :style="{
         color:textcolor?textcolor:(hollow?color:'#fff'),
         background:hollow?'#fff':color,
         borderColor:hollow?color:(color?color:'none')}"
      :class="[
         `var-chips--${type}`,
         `var-chips--${size}`,
         block?'var--flex':'var--inline-flex',
         round?'var-chips--round':null,
         hollow?'var-chips--hollow':null
    ]"
    >
      <slot name="left"></slot>
      <slot/>
      <slot name="right"></slot>
      <span v-if="paralyse&&!closeIcon" class="var-chips--close">x</span>
      <span v-else-if="paralyse&&closeIcon" class="var-chips--close">{{closeIcon}}</span>
    </span>
  </transition>
</template>

<script lang="ts">
	import Ripple from '../ripple'
	import { defineComponent, Ref, ref } from 'vue'
	import { props } from './props'

	export default defineComponent({
		name: 'VarChips',
		components: {},
		directives: { Ripple },
		props,
		setup(props) {
		}
	})
</script>

<style lang="less">
  @import './chips';
</style>
