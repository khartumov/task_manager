<template>
  <div>
    <h1 class="title">Авторизация</h1>
    <b-container class="py-3">
      <b-row>
        <b-col
          lg="10"
          offset-lg="1"
        >
          <form action="">
            <b-form-group
              class="login__label"
              label="Введите email"
              label-for="login__email"
            >
              <b-form-input
                id="login__email"
                ref="email"
                v-model.trim="email"
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
      password: ''
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

        // TODO: error message
        this.$router.push('/')
      } catch (error) {}
    }
  },

  mounted () {
    this.$refs.email.focus()
  }
}
</script>
