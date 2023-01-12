<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-3">
            <h3 class="text-center white--text">SIGN IN</h3>
          </v-card-title>
          <v-divider class="pb-5"> </v-divider>
          <div class="pa-10">
            <v-text-field v-model="email" label="email" type="text"></v-text-field>
            <v-text-field v-model="password" label="password" type="password"></v-text-field>
            <v-row justify="center" class="mt-5 mb-5">
              <EventButton color="grey darken-3" :click-callback="submit">Next</EventButton>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/account/signup">サインアップページへ</NuxtLink>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/account/no_auth_signup">認証なし＿サインインページへ</NuxtLink>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/projects">プロジェクトへ</NuxtLink>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/designs">デザインへ</NuxtLink>
            </v-row>
            <v-row class="mt-10" justify="center">
              <v-btn @click="openPriset()">プリセット表示</v-btn>
            </v-row>
            <v-row class="mt-10" justify="center">
              <EventButton color="grey darken-3" :click-callback="test">テスト</EventButton>
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
    async test() {
      console.log('テストー')
      await this.$store.dispatch('api/users/gets')
      console.log('gets is')
      console.log(this.users)
      await this.$store.dispatch('api/users/get', { id: this.auth.id })
      console.log('get is')
      console.log(this.user)
      await this.$store.dispatch('api/users/put', {
        id: this.auth.id,
        data: { name: Math.random().toString(32).substring(2) },
      })
      console.log('put is')
      console.log(this.user)
    },
    openPriset() {
      console.log(JSON.stringify(temp))
    },
  },
}
</script>
