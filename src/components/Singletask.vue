<template>
  <div class="singletask">
    <h1 class="title">{{ $route.params.title }}</h1>
    <b-container class="py-3">
      <b-row>
        <b-col
          lg="10"
          offset-lg="1"
        >
          <p class="singletask__row singletask__date"><strong>Дедлайн</strong><em>{{$route.params.date | date}}</em></p>
          <p class="singletask__row singletask__status"><strong>Статус</strong><em>{{$route.params.status | status}}</em></p>
          <template v-if="$route.params.text">
            <strong>Описание</strong>
            <div class="singletask__text my-3">
              <vue-simple-markdown
                :source="$route.params.text"
              />
            </div>
          </template>
          <div class="singletask__buttons">
            <b-button
              @click="completeTask"
            >
              Завершить задачу
            </b-button>
            <b-button
              @click="editTask"
            >
              Редактировать задачу
            </b-button>
          </div>
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
  name: 'singletask',

  methods: {
    completeTask () {
      // TODO: completeTask
    },

    editTask () {
      this.$router.push({
        name: 'edittask',
        params: {
          id: this.$route.params.id,
          title: this.$route.params.title,
          date: this.$route.params.date,
          status: this.$route.params.status,
          text: this.$route.params.text
        }
      })
    }
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
