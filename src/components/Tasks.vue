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
        class="tasks__add-new"
      >
        <b-icon
          class="tasks__add-new-icon"
          icon="plus"
          font-scale="3"
        />
      </router-link>
    </b-container>
  </div>
</template>

<script>
import TaskList from './TaskList'

export default {
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

    &__add-new {
      position: fixed;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 40px;
      right: 40px;
      background: #2c3e50;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      transition: all 0.3s;

      @media (max-width: 768px) {
        height: 45px;
        width: 45px;
      }

      &:hover {
        box-shadow: 0 0 20px 0 rgba(50, 50, 50, 0.75);
        transform: rotate(180deg);
      }
    }

    &__add-new-icon {
      color: #fff;
    }
  }
</style>
