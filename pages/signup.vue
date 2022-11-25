<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-2">
            <h3 class="text-center white--text">SIGN UP</h3>
          </v-card-title>
          <v-divider class="pb-5"></v-divider>
          <div class="pa-10">
            <v-text-field v-model="name" label="name" type="text"></v-text-field>
            <v-text-field v-model="email" label="email" type="text"></v-text-field>
            <v-text-field v-model="password" label="password" type="password"></v-text-field>
            <v-row justify="center" class="mt-5 mb-5">
              <v-col cols="4">
                <ApiEventButton color="grey darken-2" :click-callback="submit">Next</ApiEventButton>
              </v-col>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/login">サインインページへ</NuxtLink>
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
      layout: 'auth',
      name: '',
      email: '',
      password: '',
    }
  },
  mounted() {},
  methods: {
    submit() {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('api/postUserInfo', { user })
    },
  },
}
</script>
