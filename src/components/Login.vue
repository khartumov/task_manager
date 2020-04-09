<template>
  <div>
    <h1 class="title">Авторизация</h1>
    <b-container class="py-3">
      <b-row>
        <b-col
          lg="10"
          offset-lg="1"
        >
          <b-form-group
            class="login__label"
            label="Введите email"
            label-for="login__email"
          >
            <b-form-input
              id="login__email"
              v-model="email"
              type="email"
              trim
            />
          </b-form-group>
          <b-form-group
            class="login__password"
            label="Введите пароль"
            label-for="login__password"
          >
            <b-form-input
              id="login__password"
              type="password"
              v-model="password"
              trim
            />
          </b-form-group>
          <b-button
            class="text-left mt-3"
            @click="login"
          >
            Войти
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      // TODO: login
    }
  }
}
</script>

<style lang="less" scoped>

</style>
