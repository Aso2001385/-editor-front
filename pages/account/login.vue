<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-3">
            <h3 class="text-center white--text">LOG IN</h3>
          </v-card-title>
          <v-divider class="pb-5"> </v-divider>
          <div class="pa-10">
            <v-text-field v-model="email" label="email" type="text"></v-text-field>
            <v-text-field v-model="password" label="password" type="password"></v-text-field>
            <v-row justify="center" class="mt-5 mb-5">
              <EventButton color="grey darken-3" :click-callback="submit">Login</EventButton>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/account/signup">サインアップページへ</NuxtLink>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import EventButton from '@/components/materials/buttons/EventButton.vue'
import temp from '@/lib/template'
export default {
  components: {
    EventButton,
  },
  layout: 'auth',
  data() {
    return {
      email: process.env.LOGIN_TEST_MAIL,
      password: process.env.LOGIN_TEST_PASS,
    }
  },
  computed: {
    ...mapGetters({
      auth: 'api/users/auth',
      users: 'api/users/collection',
      user: 'api/users/resource',
      design: 'api/designs/resource',
    }),
  },
  methods: {
    async submit() {
      const user = {
        email: this.email,
        password: this.password,
      }
      const userInfo = await this.$store.dispatch('api/users/postLogin', { data: user })
      console.log('userInfo')
      console.log(userInfo)
      console.log('auth')
      console.log(this.auth)
      console.log('users')
      console.log(this.users)
      this.$router.push({ path: '/' })
    },

    openPriset() {
      console.log(JSON.stringify(temp))
    },
  },
}
</script>
