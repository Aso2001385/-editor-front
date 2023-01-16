<template>
  <v-tooltip bottom>
    <template #activator="{ on, attrs }">
      <v-btn v-if="detail" icon v-bind="attrs" v-on="on" @click.prevent="dialog = true">
        <v-icon :color="btnColor">
          <slot>mdi-help</slot>
        </v-icon>
      </v-btn>
      <v-btn v-else icon v-bind="attrs" v-on="on" @click.prevent="dialog = true">
        <v-icon :color="btnColor">
          <slot>mdi-help-circle</slot>
        </v-icon>
      </v-btn>
    </template>
    <div v-for="(item, index) in items" :key="index" class="px-2">
      <v-col v-if="item.color" cols="12">
        <v-icon :color="item.color"> mdi-{{ item.icon }} </v-icon> <span class="pl-3">{{ item.text }}</span>
      </v-col>
      <v-col v-else cols="12">
        <v-icon color="white"> mdi-{{ item.icon }} </v-icon> <span class="pl-3">{{ item.text }}</span>
      </v-col>
      <v-divider v-if="index < items.length - 1" />
    </div>
    <div v-if="text" class="px-2">
      <v-col cols="12">
        <span class="pl-3">{{ text }}</span>
      </v-col>
    </div>
    <v-dialog v-if="detail" v-model="dialog" class="d-flex" width="auto">
      <v-card class="mx-auto" max-width="400" hover @click="dialog = false">
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
    btnColor: {
      type: String,
      default: 'white',
    },
  },
  data() {
    return {
      dialog: false,
      disabled: true,
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
        return this.receive.text
      },
    },
    items: {
      get() {
        console.log(this.receive.icons)
        return this.receive.icons
      },
    },
    detail: {
      get() {
        return this.receive.detail ?? false
      },
    },
  },
}
</script>
