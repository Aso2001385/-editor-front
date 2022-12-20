<template>
  <div>
    <v-sheet
      :color="attribute.value"
      elevation="1"
      height="40"
      rounded="10"
      style="width: 100%; border-radius: 15em"
      @click="dialog = !dialog"
    />
    <v-dialog v-model="dialog" class="d-flex" width="auto">
      <v-color-picker v-model="attribute.value" class="mx-auto" />
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    receive: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    attribute: {
      get() {
        return this.receive
      },
    },
  },
}
</script>
