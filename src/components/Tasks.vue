<template>
  <div>
    <h1 class="title">Список задач</h1>
    <div
      v-if="tasks.length === 0 && !isFetching"
      class="mt-3 text-center"
    >
      <p>У вас пока нет задач. Самое время их добавить.</p>
      <b-button
        class="mt-1"
        @click="addNewTask"
      >
        Добавить задачу
      </b-button>
    </div>
    <b-container
      v-else
      class="tasks pt-3"
    >
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
          md="10"
          offset-md="1"
        >
          <TaskList :tasks="filteredTasks" />
        </b-col>
      </b-row>
      <RoundButton
        icon="box-arrow-left"
        :isGrey="true"
        :isBack="true"
        tooltip="Выйти"
        @click.native="logout"
      />
      <RoundButton
        icon="plus"
        to="/newtask"
        tooltip="Добавить задачу"
      />
    </b-container>
  </div>
</template>

<script>
import TaskList from '@/components/TaskList'
import Search from '@/components/Search'
import SelectStatus from '@/components/SelectStatus'
import RoundButton from '@/components/RoundButton'

export default {
  name: 'tasks',

  components: {
    TaskList,
    Search,
    SelectStatus,
    RoundButton
  },

  data () {
    return {
      tasks: [],
      filterOptions: {
        text: '',
        status: null
      },
      isFetching: false
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
    },

    async logout () {
      try {
        await this.$store.dispatch('logout')

        this.$router.push('/login')
      } catch (error) {}
    },

    async getTasks () {
      this.isFetching = true
      this.tasks = await this.$store.dispatch('fetchTasks')
      this.isFetching = false
    },

    addNewTask () {
      this.$router.push('/newtask')
    }
  },

  mounted () {
    this.getTasks()
  }
}
</script>
