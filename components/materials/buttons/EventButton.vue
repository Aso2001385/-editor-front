<template>
  <v-btn
    :color="color"
    class="white--text"
    :loading="disabled"
    :loading-color="'red'"
    :disabled="disabled"
    @click.prevent="click"
  >
    <slot></slot>
    <template slot="loader">
      <CircleLoading :color="'red'" :size="20" :width="2" />
    </template>
  </v-btn>
</template>
<script>
import CircleLoading from '@/components/materials/loadings/CircleLoading.vue'
export default {
  components: { CircleLoading },
  props: {
    clickCallback: {
      type: Function,
      default: () => {},
    },
    color: {
      type: String,
      default: 'success',
    },
    block: {
      type: Boolean,
      default: true,
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
