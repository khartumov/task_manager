<template>
  <div>
    <h1 class="title">Список задач</h1>
    <b-container class="tasks pt-3">
      <b-row>
        <b-col
          md="6"
          offset-md="1"
        >
          <Search @searchByTitle="filterByTitle" />
        </b-col>
        <b-col
          md="4"
        >
          <SelectStatus @selectStatus="filterByStatus" />
        </b-col>
      </b-row>
      <b-row>
        <b-col
          lg="10"
          offset-lg="1"
        >
          <TaskList :tasks="filteredTasks" />
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
import SelectStatus from '@/components/SelectStatus'

export default {
  name: 'tasks',

  components: {
    TaskList,
    Search,
    SelectStatus
  },

  data () {
    return {
      tasks: [
        {
          id: 1,
          title: 'Первая задача',
          date: new Date(2020, 7, 7),
          status: 'progress',
          text: 'По своей сути **рыбатекст** является альтернативой традиционному *lorem ipsum*, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст.'
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
          title: 'Выучить JS',
          date: new Date(2020, 8, 23),
          status: 'progress'
        },
        {
          id: 5,
          title: 'Бинарный поиск',
          date: new Date(2020, 8, 23),
          status: 'completed'
        },
        {
          id: 6,
          title: 'Выучить алгоритмы',
          date: new Date(2020, 9, 23),
          status: 'completed'
        }
      ],
      filterOptions: {
        text: '',
        status: null
      }
    }
  },

  computed: {
    filteredTasks () {
      return this.tasks
        .filter(({ title }) => this.filterOptions.text === '' ? title : title.toLowerCase().includes(this.filterOptions.text))
        .filter(({ status }) => this.filterOptions.status === null ? status : status === this.filterOptions.status)
    }
  },

  methods: {
    filterByTitle (searchText) {
      this.filterOptions.text = searchText.toLowerCase()
    },

    filterByStatus (selectedStatus) {
      this.filterOptions.status = selectedStatus
    }
  }
}
</script>
