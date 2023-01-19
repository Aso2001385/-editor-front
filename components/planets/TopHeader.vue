<!-- eslint-disable vue/no-v-html -->
<template>
  <v-app-bar color="grey darken-3" app clipped-left>
    <v-row class="pr-15">
      <div class="white--text caption mx-4" style="cursor: pointer" @click="home">
        <span class="text-h6">FRIDAY EDITOR</span><br />explanation
      </div>
      <NeoHelper :receive="projectListRoot" />
      <v-spacer />
      <MenuButton v-if="!authFlg" :click-callback="login">
        <template #icon>mdi-login-variant</template>
        <template #text>ログインページへ</template>
      </MenuButton>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import NeoHelper from '@/components/materials/buttons/NeoHelper.vue'
import MenuButton from '@/components/materials/buttons/MenuButton.vue'

import '@/assets/scss/pro.scss'

export default {
  components: {
    MenuButton,
    NeoHelper,
  },

  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      authFlg: 'api/users/authFlg',
    }),
  },
  methods: {
    async home() {
      if (this.authFlg) await this.$router.push({ path: '/' })
      else await this.$router.push({ path: '/account/login' })
    },
    async login() {
      await this.$router.push({ path: '/account/login' })
    },
  },
}
</script>
