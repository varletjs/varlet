<template>
  <var-pagination current="6" total="115" :simple="false" show-quick-jumper />
</template>

<script>
import Pagination from '../Pagination'

export default {
  name: 'BasicUse',
  components: {
    [Pagination.name]: Pagination,
  },
}
</script>
