<!-- eslint-disable vue/no-v-html -->
<template>
  <v-tooltip bottom>
    <template #activator="{ on, attrs }">
      <v-btn icon :disabled="disabled" v-bind="attrs" v-on="on" @click.prevent="dialog = true">
        <v-icon :color="btnColor">
          <slot>help-circle</slot>
        </v-icon>
      </v-btn>
    </template>
    <div v-for="item in items" :key="item.icon" class="px-2">
      <v-col cols="1">
        <v-icon :color="item.color">
          {{ item.mdi }}
        </v-icon>
      </v-col>
      <v-col cols="11">
        {{ item.text }}
      </v-col>
      <v-divider />
    </div>
    <v-dialog v-if="detail" v-model="dialog" class="d-flex" width="auto">
      <v-card class="mx-auto" max-width="400" hover @click="close">
        <div style="height: 12rem">
          <slot name="desc"></slot>
        </div>
        <v-divider />
      </v-card>
    </v-dialog>
  </v-tooltip>
</template>

<script>
export default {
  components: {},
  props: {
    receive: {
      type: Object,
      default: () => ({}),
    },
    detail: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    icons: {
      get() {
        return this.receive.icons
      },
    },
    text: {
      get() {
        return this.text
      },
    },
  },
}
</script>
