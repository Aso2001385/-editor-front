<template>
  <v-app>
    <TopHeader />
    <Nuxt class="grey darken-2" />
  </v-app>
</template>

<script>
import TopHeader from '~/components/planets/TopHeader.vue'
export default {
  name: 'TopLayout',
  components: {
    TopHeader,
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
