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
              <NuxtLink to="/account/signup">サインインページへ</NuxtLink>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/designs">デザインへ</NuxtLink>
            </v-row>
            <!-- <v-row class="mt-10" justify="center">
              <NuxtLink to="/account/sign-up">パスワードを忘れましたか？</NuxtLink>
            </v-row> -->
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import EventButton from '@/components/materials/buttons/EventButton.vue'
export default {
  components: {
    EventButton,
  },
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapGetters({
      user: 'api/account/user',
    }),
  },
  methods: {
    async submit() {
      const user = {
        email: this.email,
        password: this.password,
      }
      const userInfo = await this.$store.dispatch('api/account/postLogin', { data: user })
      console.log(userInfo)
      if (userInfo === true) {
        this.$router.push({ path: '/projects' })
      }
      // 下記の書き方だとユーザー情報取得しても遷移していなかったから変更しました
      // if (this.user.id) {
      //   this.$router.push({ path: '/projects' })
      // }
    },
  },
}
</script>
