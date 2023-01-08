<template>
  <v-dialog v-model="dialog" class="d-flex" width="auto">
    <!-- <DesignCard :base="base" :click-callback="close">{{ name }}</DesignCard> -->
    <v-card class="mx-auto" max-width="400" hover @click="close">
      <div class="" style="height: 12rem">
        <v-img style="box-sizing: border-box; max-height: 12rem; margin-top: 0" position="top left" :src="base" />
      </div>
      <v-divider />
      <v-card-subtitle class="py-0 mt-2"> save completed </v-card-subtitle>
      <v-card-title class="pt-0">{{ name }}</v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
// import DesignCard from '@/components/materials/cards/DesignCard.vue'
export default {
  comments: {
    // DesignCard,
  },
  props: {
    receive: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    name: {
      get() {
        return this.receive.name
      },
    },
    base: {
      get() {
        return this.receive.base
      },
    },
  },
  methods: {
    close() {
      this.dialog = false
    },
  },
}
</script>
