<template>
  <div>
    <h1 class="title">Список задач</h1>
    <b-container class="tasks">
      <b-row>
        <b-col
          md="6"
          offset-md="1"
        >
          <Search
            @searchByTitle="filterByTitle"
          />
        </b-col>
        <b-col
          md="4"
        >
          <b-form-select
            v-model="selectedStatus"
            :options="statusList"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col
          lg="10"
          offset-lg="1"
        >
          <TaskList
            :tasks="filteredTasks"
          />
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
import TaskList from '@/components/TaskList'
import Search from '@/components/Search'

export default {
  name: 'tasks',

  components: {
    TaskList,
    Search
  },

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
      ],
      tasks: [
        {
          id: 1,
          title: 'Первая задача',
          date: new Date(2020, 7, 7),
          status: 'progress',
          text: '**Дедуктивный**\nметод\nрешительно\nпредставляет\nсобой\nбабувизм.\nДедуктивный\nметод\nрешительно\nпредставляет\nсобой\nбабувизм.\nОтсюда\nестественно\nследует,\nчто\nавтоматизация\nдискредитирует\nпредмет\nдеятельности.'
        },
        {
          id: 2,
          title: 'Вторая задача',
          date: new Date(2020, 3, 7),
          status: 'expired',
          text: 'test text'
        },
        {
          id: 3,
          title: 'Третья задача',
          date: new Date(2020, 2, 6),
          status: 'completed',
          text: '*Дедуктивный*\nметод\nрешительно\nпредставляет\nсобой\nбабувизм.\nОтсюда\nестественно\nследует,\nчто\nавтоматизация\nдискредитирует\nпредмет\nдеятельности.'
        },
        {
          id: 4,
          title: 'Четвертая задача',
          date: new Date(2020, 8, 23),
          status: 'progress'
        }
      ],
      filteredTasks: []
    }
  },

  methods: {
    filterByTitle (searchText) {
      this.filteredTasks = this.tasks.filter(({ title }) => {
        return title.toLowerCase().includes(searchText.toLowerCase())
      })
    }
  },

  mounted () {
    this.filteredTasks = [].concat(this.tasks)
  }
}
</script>

<style lang="less" scoped>
  .tasks {
    padding-top: 25px;
  }
</style>
