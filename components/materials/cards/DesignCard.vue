<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card class="mx-auto" max-width="400" hover :disabled="disabled" @click.prevent="click">
    <div class="" style="height: 12rem">
      <v-img style="box-sizing: border-box; max-height: 12rem" :src="base" />
    </div>
    <v-divider />
    <v-card-subtitle class="py-0 mt-2"> save completed </v-card-subtitle>
    <v-card-title class="pt-0"><slot></slot></v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    base: {
      type: String,
      default: '',
    },
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
