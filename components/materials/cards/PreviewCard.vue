<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card class="mx-auto" max-width="400" hover :disabled="disabled" @click.prevent="click">
    <div class="" style="height: 12rem">
      <v-img
        v-if="preview"
        class="rounded-t"
        style="box-sizing: border-box; max-height: 12rem"
        position="top left"
        :src="preview"
      />
      <div
        v-else
        id="contents"
        class="warp rounded-t"
        style="font-size: 9px; box-sizing: border-box; max-height: 12rem"
        v-html="text"
      ></div>
    </div>
    <v-divider />
    <v-card-subtitle class="py-0 mt-2"> {{ updatedAt | elapsedDateTime }} ago </v-card-subtitle>
    <v-card-title class="pt-0">{{ name }}</v-card-title>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { getDiff } from '@/lib/common'
import { styleSetter } from '@/lib/style-set'
import designValuesTemplate from '@/lib/template.json'

export default {
  filters: {
    elapsedDateTime(dateTime) {
      const now = new Date()
      const past = new Date(dateTime)
      const diffMs = now.getTime() - past.getTime()
      return getDiff(diffMs)
    },
  },
  props: {
    clickCallback: {
      type: Function,
      default: () => {},
    },
    receive: {
      type: Object,
      default: () => ({
        uuid: 0,
        name: '',
        text: '',
        design: '',
        updatedAt: '',
      }),
    },
  },
  data() {
    return {
      disabled: false,
    }
  },
  computed: {
    uuid: {
      get() {
        return this.receive.uuid
      },
    },
    name: {
      get() {
        return this.receive.name
      },
    },
    text: {
      get() {
        return this.receive.text
      },
    },
    preview: {
      get() {
        return this.receive.preview
      },
    },
    updatedAt: {
      get() {
        return this.receive.updatedAt
      },
    },
  },
  created() {
    if (!this.preview) styleSetter(designValuesTemplate)
  },
  methods: {
    ...mapGetters({
      markdown: 'api/designs/markdown',
    }),
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
<style lang="scss" scoped>
@import '../../../assets/pro.scss';
</style>
