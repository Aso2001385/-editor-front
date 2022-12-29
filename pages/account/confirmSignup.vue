<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-3">
            <h3 class="text-center white--text">まだ登録は完了していません</h3>
          </v-card-title>
          <v-divider class="pb-5"> </v-divider>
          <div class="pa-10">
            <p>入力したメールアドレス宛に確認コードが送信されています。</p>
            <v-text-field v-model="email" label="email" type="text" disabled></v-text-field>
            <v-otp-input v-model="code" :length="6" />
            <v-row justify="center" class="mt-5 mb-5">
              <v-col cols="4">
                <ApiEventButton color="grey darken-3" :click-callback="reSend">Re Send</ApiEventButton>
              </v-col>
              <v-col cols="4">
                <ApiEventButton color="grey darken-3" :click-callback="submit">Next</ApiEventButton>
              </v-col>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/account/signup">戻る</NuxtLink>
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
      email: '',
      code: '',
    }
  },
  computed: {
    ...mapGetters({
      user: 'api/account/user',
    }),
  },
  created() {
    console.log(this.user)
    if (!this.user.email) {
      this.$router.push({ path: '/account/signup' })
    }
    this.email = this.user.email
  },
  methods: {
    async submit() {
      if (this.code !== '') {
        const user = {
          email: this.email,
          code: this.code,
        }

        await this.$store.dispatch('api/account/confirmRegister', { data: user })
        if (this.user.id) {
          console.log(this.user)
          // await this.$router.push({ path: '/projects' })
        } else {
          alert('失敗しました。再度入力してください。')
        }
      } else {
        alert('確認コードを入力しましょう。')
      }
    },
    async reSend() {
      await this.$store.dispatch('api/account/reSendEmail', { email: this.user.email })
    },
  },
}
</script>
