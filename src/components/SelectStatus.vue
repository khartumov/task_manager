<template>
  <b-form-select
    v-model="selectedStatus"
    :options="statusList"
    @input="$emit('selectStatus', selectedStatus)"
  />
</template>

<script>
export default {
  data () {
    return {
      selectedStatus: null,
      statusList: [
        {
          value: null,
          text: 'Все'
        },
        {
          value: 'progress',
          text: 'В работе'
        },
        {
          value: 'expired',
          text: 'Просроченные'
        },
        {
          value: 'completed',
          text: 'Завершенные'
        }
      ]
    }
  }
}
</script>
