<template>
	<transition name="var-form-details">
		<div class="var-form-details" v-if="errorMessage || maxlengthText">
			<div class="var-form-details__message">{{ errorMessage }}</div>
			<div class="var-form-details__length">{{ maxlengthText }}</div>
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'VarFormDetails',
  props,
})
</script>

<style lang="less">
@import './formDetails';
</style>
