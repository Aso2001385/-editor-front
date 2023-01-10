<template>
  <v-tooltip bottom>
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        :loading="disabled"
        :loading-color="'red'"
        :disabled="disabled"
        v-bind="attrs"
        v-on="on"
        @click.prevent="click"
      >
        <v-icon :color="btnColor">
          <slot name="icon"></slot>
        </v-icon>
        <template slot="loader">
          <CircleLoading :color="'red'" :size="20" :width="2" />
        </template>
      </v-btn>
    </template>
    <div>
      <slot name="text"></slot>
    </div>
  </v-tooltip>
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
    btnColor: {
      type: String,
      default: 'white',
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
