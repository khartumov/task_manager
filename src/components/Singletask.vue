<template>
  <div class="singletask">
    <h1 class="title">{{ task.title }}</h1>
    <b-container class="py-3">
      <b-row>
        <b-col
          lg="10"
          offset-lg="1"
        >
          <p class="singletask__row singletask__date"><strong>Дедлайн</strong><em>{{task.date }}</em></p>
          <p class="singletask__row singletask__status"><strong>Статус</strong><em>{{task.status | status}}</em></p>
          <template v-if="task.text">
            <strong>Описание</strong>
            <div class="singletask__text my-3">
              <vue-simple-markdown
                :source="task.text"
              />
            </div>
          </template>
          <div class="singletask__buttons">
            <b-button
              v-if="task.status !== 'completed'"
              @click="completeTask"
            >
              Завершить задачу
            </b-button>
            <b-button
              class="ml-auto"
              @click="editTask"
            >
              Редактировать задачу
            </b-button>
          </div>
        </b-col>
      </b-row>
      <RoundButton
        to="/"
        icon="arrow-left"
        :isBack="true"
        tooltip="Назад"
      />
    </b-container>
  </div>
</template>

<script>
import RoundButton from '@/components/RoundButton'

export default {
  name: 'singletask',

  components: {
    RoundButton
  },

  data () {
    return {
      task: {}
    }
  },

  methods: {
    async completeTask () {
      try {
        this.task.status = 'completed'

        await this.$store.dispatch('updateTask', {
          title: this.task.title,
          date: this.task.date,
          text: this.task.text,
          status: 'completed',
          id: this.$route.params.id
        })
      } catch (e) {}
    },

    editTask () {
      this.$router.push({
        name: 'edittask',
        params: this.task
      })
    },

    async getTask () {
      try {
        const task = await this.$store.dispatch('fetchTask', this.$route.params.id)

        this.task = { ...task }
      } catch (error) {}
    }
  },

  mounted () {
    this.getTask()
  }
}
</script>

<style lang="less">
  .singletask {
    &__row {
      display: flex;
      justify-content: space-between;
    }

    &__text {
      padding: 30px;
      border-radius: 0.25rem;
      background: #f5f5f5;
    }

    &__buttons {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
