<template>
  <v-card class="mx-auto" max-width="400" hover :disabled="disabled" @click.prevent="click()">
    <div class="pt-4 px-4 d-flex align-center" style="height: 12rem">
      <v-icon class="mx-auto grey--text" x-large style="font-size: 5rem">mdi-plus-circle</v-icon>
    </div>
    <v-divider />
    <v-card-subtitle class="py-0 mt-2"> create a new design </v-card-subtitle>
    <v-card-title class="pt-0">New Design</v-card-title>
  </v-card>
</template>
<script>
export default {
  props: {
    clickCallback: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      disabled: false,
    }
  },
  methods: {
    async click() {
      this.disabled = true
      try {
        await this.clickCallback()
      } catch (error) {
        console.log(error)
      }
      this.disabled = false
    },
  },
}
</script>
