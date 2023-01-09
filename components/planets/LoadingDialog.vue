<template>
  <v-overlay :value="isLoading" fullscreen>
    <CircleLoading :width="5" :size="100" :color="'yellow'" />
    <!-- <v-progress-circular indeterminate size="64"></v-progress-circular> -->
  </v-overlay>
</template>

<script>
import { mapGetters } from 'vuex'
import CircleLoading from '@/components/materials/loadings/CircleLoading.vue'
export default {
  components: {
    CircleLoading,
  },
  props: {
    receive: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters({
      isLoading: 'common/isLoading',
    }),
  },
}
</script>
