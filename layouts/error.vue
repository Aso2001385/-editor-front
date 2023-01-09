<template>
  <v-app dark>
    <v-main class="align-center">
      <v-card class="ma-auto py-10 rounded-xl" flat max-width="600">
        <v-card-text class="justify-center px-10" v-if="error.statusCode === 404">
          <div class="text-h1 text--primary text-center">404</div>
          <div class="text-h4 text--primary text-center">Not found</div>
        </v-card-text>
        <v-card-text class="justify-center px-10" v-else>
          <div class="text-h1 text--primary text-center">ERROR</div>
          <div class="text-h4 text--primary text-center">An error occurred</div>
        </v-card-text>
        <v-card-text class="justify-center text-center text-h10" v-if="error.statusCode === 404">
          入力したリンクの内容が見つかりませんでした。
        </v-card-text>
        <v-card-text class="justify-center text-center text-h10" v-else>
          問題が発生し、ページを表示できませんでした。
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn class="ma-2" outlined color="black" to="/" link>トップページへ</v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {}
  },

  head() {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
