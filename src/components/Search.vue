<template>
  <b-input-group
    size="md"
    class="mb-2"
  >
    <b-input-group-prepend is-text>
      <b-icon icon="search" />
    </b-input-group-prepend>
    <b-form-input
      class="tasks__search"
      type="search"
      placeholder="Поиск по названию..."
      v-model="searchText"
      @input="$emit('searchByTitle', searchText)"
    />
  </b-input-group>
</template>

<script>
export default {
  data () {
    return {
      searchText: ''
    }
  }
}
</script>
