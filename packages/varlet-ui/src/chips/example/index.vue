<template>
  <div class="example">
    <div class="example-inner">
      <var-chips>标签</var-chips>
      <var-chips type="primary">标签</var-chips>
      <var-chips type="info">标签</var-chips>
      <var-chips type="success">标签</var-chips>
      <var-chips type="warning">标签</var-chips>
      <var-chips type="danger">标签</var-chips>
    </div>

    <div>
      <var-chips type="primary" size="large">标签</var-chips>
      <var-chips type="primary">标签</var-chips>
      <var-chips type="primary" size="small">标签</var-chips>
      <var-chips type="primary" size="mini">标签</var-chips>
    </div>
    <div>
      <var-chips type="primary" hollow>标签</var-chips>
      <var-chips type="primary" round>标签</var-chips>
      <var-chips type="primary" paralyse>标签</var-chips>
      <var-chips color="#7232dd">标签</var-chips>
      <var-chips color="#7232dd" hollow>标签</var-chips>
    </div>

    <div>
      <var-chips color="#7232dd" textcolor="red" hollow>标签</var-chips>
      <var-chips color="#7232dd" textcolor="red">标签</var-chips>
    </div>
  </div>

</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import Chips from '..'

	export default defineComponent({
		name: 'ChipsExample',
		components: {
			[Chips.name]: Chips
		}
	})
</script>

<style scoped>
  .example {
  }

  .var-chips {
    margin-right: 20px;
    margin-bottom: 10px;
  }
</style>
