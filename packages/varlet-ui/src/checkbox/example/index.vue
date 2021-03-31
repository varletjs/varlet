<template>
  <var-checkbox />
</template>

<script>
import Checkbox from '../Checkbox'

export default {
  name: 'CheckboxExample',
  components: {
    [Checkbox.name]: Checkbox,
  },
}
</script>
