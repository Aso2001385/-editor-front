<template>
  <v-btn class="pa-5" :to="to" text nuxt>
    <v-icon color="white"><slot name="icon"></slot></v-icon>
    <div class="ml-3 text-h6 white--text text-center"><slot name="text"></slot></div>
  </v-btn>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      default: '/projects',
    },
  },
}
</script>
