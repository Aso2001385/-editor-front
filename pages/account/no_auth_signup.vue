<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-3">
            <h3 class="text-center white--text">SIGN UP</h3>
          </v-card-title>
          <v-divider class="pb-5"></v-divider>
          <div class="pa-10">
            <v-text-field v-model="name" label="name" type="text"></v-text-field>
            <v-text-field v-model="email" label="email" type="text"></v-text-field>
            <v-text-field v-model="password" label="password" type="password"></v-text-field>
            <v-text-field v-model="confirmPassword" label="確認用 password" type="password"></v-text-field>
            <v-row justify="center" class="mt-5 mb-5">
              <v-col cols="4">
                <ApiEventButton color="grey darken-3" :click-callback="submit">Next</ApiEventButton>
              </v-col>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/account/login">サインインページへ</NuxtLink>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'auth',
  data() {
    return {
      url: '',
      name: process.env.LOGIN_TEST_NAME,
      email: process.env.LOGIN_TEST_MAIL,
      password: process.env.LOGIN_TEST_PASS,
      confirmPassword: process.env.LOGIN_TEST_PASS,
      // name: '',
      // email: '',
      // password: '',
      // confirmPassword: '',
    }
  },
  computed: {
    ...mapGetters({
      user: 'api/users/auth',
      authFlg: 'api/users/authFlg',
    }),
  },
  created() {
    if (this.authFlg) {
      this.$router.push({
        path: '/',
      })
    }
  },
  methods: {
    async submit() {
      if (this.password === this.confirmPassword) {
        const data = { name: this.name, email: this.email, password: this.password }
        await this.$axios
          .post(`http://localhost:8080/api/users/register`, data)
          .then(response => {
            this.$store.commit('setAuth', response.data)
            return this.$router.push({ path: '/account/login' })
          })
          .catch(() => {
            return this.$router.push({ path: '/account/no_auth_signup' })
          })

        // await this.$store.dispatch('api/users/register', { data })
        // if (this.user) {
        //   this.$router.push({
        //     path: '/account/confirmSignup',
        //   })
        // } else {
        //   alert('登録に失敗しました')
        // }
      } else {
        alert('パスワードが確認用と違います')
      }
    },
  },
}
</script>
