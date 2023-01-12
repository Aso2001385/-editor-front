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
import axios from 'axios'
import temp from '@/lib/template.json'

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
      const BASE_URL = process.env.API_BASE_URL
      if (this.password === this.confirmPassword) {
        const data = { name: this.name, email: this.email, password: this.password }
        const a = await axios
          .get(`${BASE_URL}/sanctum/csrf-cookie`)
          .then(async () => {
            return await axios
              // .post(`http://localhost:8080/api/users/register`, data)
              .post(`https://fridayeditor/api/users/register`, data)
              .then(response => {
                const newDesign = {
                  name: 'Design1',
                  point: 0,
                  contents: JSON.stringify(temp),
                }

                if (this.$store.dispatch('api/designs/post', { data: newDesign })) {
                  this.$router.push({ path: '/account/login' })
                } else {
                  return false
                }
                return true
              })
              .catch(() => {
                this.$router.push({ path: '/account/no_auth_signup' })
                return false
              })
          })
          .catch(() => {
            return false
          })
        console.log(a)
      }
    },
  },
}
</script>
