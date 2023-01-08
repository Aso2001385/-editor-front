<template>
  <v-main class="align-center">
    <VariableHeader />
    <NotFound :to="'/'" :text="'本当のトップページへ'">
      申し訳ございません<br />
      指定されたプロジェクトが見つかりません
    </NotFound>
  </v-main>
</template>
<script>
import NotFound from '@/components/materials/commons/NotFound.vue'
import VariableHeader from '@/components/planets/VariableHeader.vue'
export default {
  components: {
    VariableHeader,
    NotFound,
  },
}
</script>
