<template>
  <div class="edittask">
    <h1 class="title">Редактировать задачу</h1>
    <b-container class="py-3">
      <b-row>
        <b-col
          lg="10"
          offset-lg="1"
        >
          <b-form-group
            class="edittask__label"
            label="Введите название задачи"
            label-for="edittask__title"
            :invalid-feedback="invalidFeedback"
          >
            <b-form-input
              id="edittask__title"
              ref="taskTitle"
              v-model="task.title"
              :state="titleState"
              trim
            />
          </b-form-group>
          <b-form-group
            class="edittask__label"
            label="Установите дедлайн"
            label-for="edittask__date"
          >
            <b-form-datepicker
              id="edittask__date"
              v-model="task.date"
              :state="dateState"
            />
          </b-form-group>
          <b-form-group
            class="edittask__label"
            label="Выберите статус"
            label-for="edittask__status"
          >
            <b-form-select
              v-model="task.status"
              :options="statusList"
            />
          </b-form-group>
          <b-form-group
            class="edittask__label"
            label="Введите описание задачи"
            label-for="edittask__editor"
          >
            <markdown-editor
              id="edittask__editor"
              v-model="task.text"
              toolbar="bold italic heading | undo redo | link numlist bullist | fullscreen"
            />
          </b-form-group>
          <b-button
            :disabled="!titleState || !dateState"
            @click="saveChanges"
          >
            Сохранить
          </b-button>
        </b-col>
      </b-row>
      <RoundButton
        :to="{
          name: 'singletask',
          params: {
            id: $route.params.id,
            title: $route.params.title,
            date: $route.params.date,
            status: $route.params.status,
            text: $route.params.text
          }
        }"
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
  name: 'edittask',

  components: {
    RoundButton
  },

  data () {
    return {
      task: {
        title: '',
        date: '',
        status: '',
        text: ''
      },
      statusList: [
        {
          value: 'progress',
          text: 'В работе'
        },
        {
          value: 'expired',
          text: 'Просрочена'
        },
        {
          value: 'completed',
          text: 'Завершена'
        }
      ]
    }
  },

  computed: {
    titleState () {
      return this.task.title === '' ? null : this.task.title.length >= 5
    },

    dateState () {
      return this.task.date !== '' ? true : null
    },

    invalidFeedback () {
      if (this.task.title.length > 5) {
        return ''
      }
      else if (this.task.title.length >= 0) {
        return 'Минимум 5 символов'
      }
      else {
        return 'Введите название'
      }
    }
  },

  mounted () {
    this.getTask()
    this.$refs.taskTitle.focus()
  },

  methods: {
    async getTask () {
      const task = await this.$store.dispatch('fetchTask', this.$route.params.id)

      this.task = { ...task }
    },

    async saveChanges () {
      if (new Date(this.task.date) < new Date() && this.task.status === 'progress') {
        this.task.status = 'expired'
      }

      if (new Date(this.task.date) > new Date() && this.task.status === 'expired') {
        this.task.status = 'progress'
      }

      try {
        await this.$store.dispatch('updateTask', {
          title: this.task.title,
          date: this.task.date,
          text: this.task.text,
          status: this.task.status,
          id: this.$route.params.id
        })

        this.$router.push(`/${this.$route.params.id}`)
      } catch (error) {}
    }
  }
}
</script>

<style lang="less">
  .edittask {
    &__buttons {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
