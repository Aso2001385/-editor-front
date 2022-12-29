<template>
  <!-- <v-btn class="pa-5" :to="to" nuxt> -->
  <a class="pa-5" :href="to">
    <div class="ml-3 text-h6 white--text text-center">
      <v-icon color="white" style="float: left; margin-top: 2px; padding: 1px"><slot name="icon"></slot></v-icon>
      <slot name="text"></slot>
    </div>
  </a>
  <!-- </v-btn> -->
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      default: '/projects',
    },
  },
  methods: {
    reload() {
      location.reload()
      this.$router.push({ path: '/projects' })
    },
  },
}
</script>
<style scoped>
a {
  width: 3rem;
  margin-right: 10%;
  text-decoration: none;
}
</style>
