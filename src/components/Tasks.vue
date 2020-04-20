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
          md="10"
          offset-md="1"
        >
          <TaskList :tasks="filteredTasks" />
        </b-col>
      </b-row>
      <button
        class="round-button round-button_back round-button_grey"
        @click="logout"
      >
        <b-icon
          class="round-button__icon round-button__icon_grey"
          icon="box-arrow-left"
          font-scale="2"
        />
      </button>
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
      tasks: [],
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
    },

    async logout () {
      try {
        await this.$store.dispatch('logout')

        this.$router.push('/login')
      } catch (error) {}
    },

    async getTasks () {
      this.tasks = await this.$store.dispatch('fetchTasks')
    }
  },

  mounted () {
    this.getTasks()
  }
}
</script>
