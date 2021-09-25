<template>
  <var-pagination current="6" total="115" :simple="false" show-quick-jumper disabled />
</template>

<script>
import Pagination from '../Pagination'

export default {
  name: 'Disabled',
  components: {
    [Pagination.name]: Pagination,
  },
}
</script>
