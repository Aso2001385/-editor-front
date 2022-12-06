<template>
  <div class="text-center">
    <v-progress-circular :size="size" :width="width" :color="color" indeterminate />
  </div>
</template>

<script>
import timeCommon from '@/plugins/time-common'

export default {
  filters: {
    elapsedDateTime(dateTime) {
      const now = new Date()
      const past = new Date(dateTime)
      const diffMs = now.getTime() - past.getTime()
      return timeCommon.getDiff(diffMs)
    },
  },
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
    return {
      disabled: false,
    }
  },
  computed: {},
}
</script>
