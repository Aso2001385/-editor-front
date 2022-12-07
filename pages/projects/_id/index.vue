<template>
  <v-main class="align-center">
    <NotFound :to="'/'" :text="'本当のトップページへ'">
      申し訳ございません<br />
      指定されたプロジェクトが見つかりません
    </NotFound>
  </v-main>
</template>
<script>
import NotFound from '@/components/materials/commons/NotFound.vue'
export default {
  components: {
    NotFound,
  },
}
</script>
