<template>
  <v-card class="ma-auto py-10 rounded-xl" flat max-width="600">
    <v-card-text class="justify-center px-10">
      <div class="text-h1 text--primary text-center">404</div>
      <div class="text-h4 text--primary text-center">NOT FOUND</div>
    </v-card-text>
    <v-card-text class="justify-center text-center text-h10">
      <slot>
        申し訳ございません<br />
        指定されたページが見つかりません
      </slot>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn class="ma-2" outlined color="black" :to="to" link> {{ text }} </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      default: '/projects',
    },
    text: {
      type: String,
      default: 'トップページへ',
    },
  },
}
</script>
