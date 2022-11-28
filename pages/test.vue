<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-2">
            <h3 class="text-center white--text">SIGN IN</h3>
          </v-card-title>
          <v-divider class="pb-5"> </v-divider>
          <div class="pa-10">
            <v-text-field v-model="email" label="email" type="text"></v-text-field>
            <v-text-field v-model="password" label="password" type="text"></v-text-field>
            <v-row justify="center" class="mt-5 mb-5">
              <v-col cols="4">
                <ApiEventButton color="grey darken-2" :click-callback="submit">Next</ApiEventButton>
              </v-col>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/signup">サインインページへ</NuxtLink>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/sign-up">パスワードを忘れましたか？</NuxtLink>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'auth',
  data() {
    return {
      url: 'http://localost:8080/api/login',
      email: '2001195@s.asojuku.ac.jp',
      password: 'AsoΣ2001195',
    }
  },
  computed: {},
  mounted() {},
  methods: {
    async submit() {
      const user = {
        email: this.email,
        password: this.password,
      }
      await this.$store.dispatch('api/sendLogin', { data: user })
      await this.$store.dispatch('api/getUsers')
      console.log('getTest! data is auth!')
      await this.$store.dispatch('api/getTest')
    },
  },
}
</script>
