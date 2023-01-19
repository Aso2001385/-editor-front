<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-4">
            <h3 class="text-center white--text">SIGN IN</h3>
          </v-card-title>
          <v-divider class="pb-5"> </v-divider>
          <v-form ref="form" v-model="valid" lazy-validation>
            <div class="pa-10">
              <v-text-field v-model="email" label="E-mail" :rules="emailRules" />
              <v-text-field
                v-model="password"
                label="Password"
                :rules="passwordRules"
                :append-icon="eye ? 'mdi-eye' : 'mdi-eye-off'"
                :type="eye ? 'text' : 'password'"
                @click:append="eye = !eye"
              />
              <v-row justify="center" class="mt-5 mb-5">
                <EventButton color="grey darken-3" :click-callback="submit">Login</EventButton>
              </v-row>

              <v-row class="mt-10" justify="center">
                <NuxtLink to="/account/signup">サインアップページへ</NuxtLink>
              </v-row>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="error">
      {{ errorText }}
      <template #action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="error = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import EventButton from '@/components/materials/buttons/EventButton.vue'
import temp from '@/assets/json/template.json'
export default {
  components: {
    EventButton,
  },
  layout: 'auth',
  data() {
    const valid = true
    const emailRules = [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid']
    const passwordRules = [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must be least 8 characters',
    ]
    return {
      // email: process.env.LOGIN_TEST_MAIL,
      // password: process.env.LOGIN_TEST_PASS,
      email: '',
      password: '',
      valid,
      emailRules,
      passwordRules,
      eye: false,
      error: false,
      errorText: '',
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
      this.$store.dispatch('common/loadingStart')
      if (this.validate()) {
        const user = {
          email: this.email,
          password: this.password,
        }
        const result = await this.$store.dispatch('api/users/postLogin', { data: user })
        if (result === 200) this.$router.push({ path: '/' })
        else if (result === 401) [this.error, this.errorText] = [true, 'メールアドレスかパスワードが間違っています']
        else if (result === 422) [this.error, this.errorText] = [true, '入力内容に謝りがあります']
        else [this.error, this.errorText] = [true, '予期せぬエラーが発生しました']
      }
      await this.$store.dispatch('common/loadingEnd')
    },
    validate() {
      return this.$refs.form.validate()
    },
    openPriset() {
      console.log(JSON.stringify(temp))
    },
  },
}
</script>
