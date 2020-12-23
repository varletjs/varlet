<template>
  <transition
    name="var-fade"
  >
    <div
      v-ripple="{disabled}"
      class="var-chips var--box"
      :style="{
         color:textcolor?textcolor:(hollow?color:'#fff'),
         background:hollow?'#fff':color,
         borderColor:hollow?color:'none'}"
      :class="[
         `var-chips--${type}`,
         `var-chips--${size}`,
         block?'var--block':'var--inline',
         round?'var-chips--round':null,
         hollow?'var-chips--hollow':null
    ]"
      v-show="show"
    >
      <slot/>
      <div v-if="paralyse" class="var-chips--operator" @click="hideChips">
        <slot name="operator">x</slot>
      </div>
    </div>
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
			const show: Ref<boolean> = ref(true)
			const hideChips = () => {
				show.value = false
			}
			return {
				show,
				hideChips
			}

		}
	})
</script>

<style lang="less">
  @import './chips';
  /*.var-chips {*/
  /*  display: flex;*/
  /*}*/
  .var-chips--operator {
    margin-left: 4px;
    cursor: pointer;
  }
</style>
