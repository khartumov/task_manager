<template>
  <div>
    <h1 class="title">Список задач</h1>
    <b-container class="tasks">
      <b-row>
        <b-col
          md="6"
          offset-md="1"
        >
          <b-input-group size="md" class="mb-2">
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            class="tasks__search"
            type="search"
            placeholder="Поиск по названию..."
          />
          </b-input-group>
        </b-col>
        <b-col
          md="4"
        >
          <b-form-select
            v-model="selected"
            :options="options"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col
          lg="10"
          offset-lg="1"
        >
          <TaskList />
        </b-col>
      </b-row>
      <router-link
        to="/newtask"
        class="round-button"
      >
        <b-icon
          class="round-button__icon"
          icon="plus"
          font-scale="2"
        />
      </router-link>
    </b-container>
  </div>
</template>

<script>
import TaskList from './TaskList'

export default {
  name: 'tasks',

  components: {
    TaskList
  },

  data () {
    return {
      selected: null,
      options: [
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

<style lang="less" scoped>
  .tasks {
    padding-top: 25px;

  }
</style>
