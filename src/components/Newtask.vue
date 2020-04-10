<template>
  <div class="newtask">
    <h1 class="title">Новая задача</h1>
    <b-container class="py-3">
      <b-row>
        <b-col
          lg="10"
          offset-lg="1"
        >
          <b-form-group
            class="newtask__label"
            label="Введите название задачи"
            label-for="newtask__title"
            :invalid-feedback="invalidFeedback"
          >
            <b-form-input
              id="newtask__title"
              ref="taskTitle"
              v-model="title"
              :state="titleState"
              trim
            />
          </b-form-group>
          <b-form-group
            class="newtask__label"
            label="Установите дедлайн"
            label-for="newtask__date"
          >
            <b-form-datepicker
              id="newtask__date"
              v-model="date"
              :state="dateState"
            />
          </b-form-group>
          <b-form-group
            class="newtask__label"
            label="Введите описание задачи"
            label-for="newtask__editor"
          >
            <markdown-editor
              id="newtask__editor"
              v-model="editor"
              toolbar="bold italic heading | undo redo | link numlist bullist | fullscreen"
            />
          </b-form-group>
          <b-button
            :disabled="!titleState || !dateState"
            @click="createNewTask"
          >
            Создать задачу
          </b-button>
        </b-col>
      </b-row>
      <router-link
        to="/"
        class="round-button round-button_back"
      >
        <b-icon
          class="round-button__icon"
          icon="arrow-left"
          font-scale="2"
        />
      </router-link>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'newtask',

  data () {
    return {
      title: '',
      date: '',
      editor: ''
    }
  },
  computed: {
    titleState () {
      return this.title === '' ? null : this.title.length >= 5
    },

    dateState () {
      return this.date !== '' ? true : null
    },

    invalidFeedback () {
      if (this.title.length > 5) {
        return ''
      } else if (this.title.length >= 0) {
        return 'Минимум 5 символов'
      } else {
        return 'Введите название'
      }
    }
  },

  mounted () {
    this.$refs.taskTitle.focus()
  },

  methods: {
    createNewTask () {
      // TODO: createNewTask
    }
  }
}
</script>

<style lang="less">

</style>
