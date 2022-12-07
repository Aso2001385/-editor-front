<template>
  <v-main class="align-center">
    <!-- ここでページ遷移を話をする -->
    <NotFound>
      <template v-slot:rt>projectリストへ</template>
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
<style lang="scss"></style>
