<template>
  <v-app>
    <v-app-bar color="grey darken-3" app clipped-left>
      <v-toolbar-title class="white--text">
        <strong>
          <NuxtLink to="/" style="color: white; text-decoration: none">FRIDAY EDITOR</NuxtLink>
        </strong>
        <NeoHelper :receive="login" />
      </v-toolbar-title>
    </v-app-bar>
    <v-main app light class="grey lighten-3">
      <Nuxt />
    </v-main>
    <LoadingDialog />
  </v-app>
</template>

<script>
import NeoHelper from '@/components/materials/buttons/NeoHelper.vue'
import LoadingDialog from '@/components/planets/LoadingDialog.vue'
import { accountRoot, login } from '~/lib/commons/helpers/accounts/account'

export default {
  components: {
    NeoHelper,
    LoadingDialog,
  },
  data() {
    return {
      nav_lists: [
        {
          icon: 'mdi-close-circle-outline',
          name: 'close-circle-cutline',
        },
      ],
      drawer: false,
      accountRoot,
      login,
    }
  },
}
</script>
