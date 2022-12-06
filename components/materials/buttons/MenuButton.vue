<template>
  <div>
    <v-btn class="pa-5" :to="to" text nuxt>
      <v-icon color="white">{{ icon }}</v-icon>
      <div class="ml-3 text-h6 white--text text-center">{{ text }}</div>
    </v-btn>
    <v-spacer />
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'mdi-circle',
    },
    text: {
      type: String,
      default: 'btn',
    },
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>
