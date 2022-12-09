<!-- プロジェクトリスト-->
<template>
  <v-main class="align-center">
    <v-card class="ma-auto py-10 rounded-xl" flat max-width="600">
      <v-card-text class="justify-center px-10">
        <div class="text-h1 text--primary text-center">404</div>
        <div class="text-h4 text--primary text-center">NOT FOUND</div>
      </v-card-text>
      <v-card-text class="justify-center text-center">
        申し訳ございません<br />
        指定されたページが見つかりません
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn class="ma-2" outlined color="black" to="/projects" link> プロジェクト一覧へ </v-btn>
      </v-card-actions>
    </v-card>
  </v-main>
</template>
<script>
export default {
  layout: 'top',
  data() {},
}
</script>
