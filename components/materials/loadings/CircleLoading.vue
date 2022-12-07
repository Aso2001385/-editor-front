<template>
  <div class="text-center">
    <v-progress-circular :size="size" :width="width" :color="color" indeterminate />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'grey',
    },
    size: {
      type: Number,
      default: 20,
    },
    width: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {}
  },
}
</script>
