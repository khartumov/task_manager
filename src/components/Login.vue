<template>
  <div>
    <h1 class="title">Авторизация</h1>
    <b-container class="py-3">
      <b-row>
        <b-col
          lg="10"
          offset-lg="1"
        >
          <b-alert
            :show="alertCountDown"
            dismissible
            variant="danger"
            @dismissed="alertCountDown = 0"
          >
            {{ errorText }}
          </b-alert>
          <form action="">
            <b-form-group
              class="login__label"
              label="Введите email"
              label-for="login__email"
              :invalid-feedback="invalidFeedback"
            >
              <b-form-input
                id="login__email"
                ref="email"
                v-model.trim="email"
                :state="emailState"
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
              :disabled="!emailState"
              @click="login"
            >
              Войти
            </b-button>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {
      email: '',
      password: '',
      alertCountDown: 0,
      errorText: ''
    }
  },

  computed: {
    emailState () {
      const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i // eslint-disable-line

      return this.email === '' ? null : regExp.test(this.email)
    },

    invalidFeedback () {
      if (!this.emailState) {
        return 'Введите корректный email'
      }

      return ''
    }
  },

  methods: {
    async login () {
      const formData = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('login', formData)

        this.$router.push('/')
      } catch (error) {
        this.showAlert(error)
      }
    },

    showAlert ({ code }) {
      if (code === 'auth/invalid-email') {
        this.errorText = 'Неправильный email!'
      }
      else if (code === 'auth/wrong-password') {
        this.errorText = 'Неправильный пароль!'
      }
      else {
        this.errorText = 'Возникла ошибка при авторизации! Пожалуйста, введите корректный логин / пароль.'
      }

      this.alertCountDown = 3
    }
  },

  mounted () {
    this.$refs.email.focus()
  }
}
</script>
