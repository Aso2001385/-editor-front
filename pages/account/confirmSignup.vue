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
            <v-text-field v-model="user.email" label="email" type="text" disabled></v-text-field>
            <v-text-field v-model="token" label="確認コード9桁入力してください。" type="text"></v-text-field>
            <v-row justify="center" class="mt-5 mb-5">
              <v-col cols="4">
                <ApiEventButton color="grey darken-3" :click-callback="back">Back</ApiEventButton>
              </v-col>
              <v-col cols="4">
                <ApiEventButton color="grey darken-3" :click-callback="submit">Next</ApiEventButton>
              </v-col>
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
      url: '/projects',
      email: '',
      token: '',
    }
  },
  computed: {
    ...mapGetters({
      user: 'api/user',
    }),
  },
  mounted() {
    console.log(this.user)
    this.email = this.user.email
  },
  methods: {
    async submit() {
      if (this.token !== '') {
        const user = {
          email: this.email,
          token: this.token,
        }
        console.log(user)
        //    後で変更入る
        await this.$store.dispatch('/api/register', { data: user })

        //   //   成功失敗で遷移を変える
        await this.$router.push({ path: this.url })
      } else {
        alert('確認コードを入力しましょう。')
      }
    },
    back() {
      this.$router.push({ path: '/account/signup' })
    },
  },
}
</script>
