<template>
  <v-app>
    <Nuxt />
    <LoadingDialog />
  </v-app>
</template>

<script>
import LoadingDialog from '@/components/planets/LoadingDialog.vue'
export default {
  name: 'DefaultLayout',
  components: {
    LoadingDialog,
  },
  data() {
    return {}
  },
}
</script>
<style lang="sass">
html
  &::-webkit-scrollbar
    display: none
</style>
