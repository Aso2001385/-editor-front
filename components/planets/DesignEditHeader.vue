<template>
  <v-app-bar color="grey darken-3" app clipped-left>
    <v-btn text class="pa-5" @click="jumpToHome()">
      <v-icon color="white">mdi-home-variant</v-icon>
      <div class="ml-3 text-h6 white--text text-center">HOME</div>
    </v-btn>
    <v-btn text class="pa-5">
      <v-icon color="white">mdi-file-cog</v-icon>
      <div class="ml-3 text-h6 white--text text-center">SETTINGS</div>
    </v-btn>
    <v-btn text class="pa-5" :disabled="disabled" :loading="disabled" @click.prevent="click()">
      <v-icon color="white">mdi-content-save-alert</v-icon>
      <div class="ml-3 text-h6 white--text text-center">SAVE</div>
      <template slot="loader">
        <CircleLoading :color="'white'" :size="20" :width="2" />
      </template>
    </v-btn>
    <v-spacer />
  </v-app-bar>
</template>
<script>
import CircleLoading from '@/components/materials/loadings/CircleLoading.vue'
export default {
  components: {
    CircleLoading,
  },
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
    jumpToHome() {
      this.$router.push({ path: '/' })
    },
  },
}
</script>
