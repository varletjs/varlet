<template>
	<div
		class="var-option"
		:class="[optionSelected ? 'var-option--selected-color' : null]"
		:style="{
			width: wrapWidth,
			color: optionSelected ? activeColor : null,
		}"
		v-ripple
		v-bind="$attrs"
		@click="handleClick"
	>
		<div
			class="var-option__cover"
			:class="[optionSelected ? 'var-option--selected-background' : null]"
			:style="{
				background: optionSelected ? activeColor : null,
			}"
		></div>
		<var-checkbox ref="checkbox" v-if="multiple" v-model="optionSelected" @click.stop @change="handleSelect" />

		<div class="var-option__text">
			<slot>
				{{ label }}
			</slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, ref, Ref } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import { SELECT_BIND_OPTION_KEY, SELECT_COUNT_OPTION_KEY, SelectProvider } from '../select/provide'
import { OptionProvider } from './provide'
import { props } from './props'
import Checkbox from '../checkbox'
import Ripple from '../ripple'

export default defineComponent({
  name: 'VarOption',
  directives: { Ripple },
  components: {
    [Checkbox.name]: Checkbox,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const { bindParent, parentProvider: selectProvider } = useParent<SelectProvider, OptionProvider>(
      SELECT_BIND_OPTION_KEY
    )
    useAtParentIndex(SELECT_COUNT_OPTION_KEY)

    if (!bindParent || !selectProvider) {
      throw Error('<var-option/> must in <var-select/>')
    }

    const optionSelected: Ref<boolean> = ref(false)

    const selected: ComputedRef<boolean> = computed(() => optionSelected.value)
    const label: ComputedRef<string | undefined> = computed(() => props.label)
    const value: ComputedRef<string | number | boolean | undefined> = computed(() => props.value)

    const { wrapWidth, multiple, activeColor, onSelect } = selectProvider

    const handleClick = () => {
      optionSelected.value = !optionSelected.value
      onSelect(optionProvider)
    }

    const handleSelect = () => {
      onSelect(optionProvider)
    }

    const sync = (checked: boolean) => {
      optionSelected.value = checked
    }

    const optionProvider: OptionProvider = {
      label,
      value,
      selected,
      sync,
    }

    bindParent(optionProvider)

    return {
      optionSelected,
      wrapWidth,
      multiple,
      activeColor,
      handleClick,
      handleSelect,
    }
  },
})
</script>

<style lang="less">
@import './option';
</style>
