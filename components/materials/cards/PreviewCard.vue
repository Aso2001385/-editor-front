<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card class="mx-auto" max-width="400" hover :disabled="disabled" @click.prevent="click">
    <div class="">
      <div class="" style="height: 12rem">
        <div
          id="contents"
          class="warp rounded-t"
          style="font-size: 9px; box-sizing: border-box; max-height: 12rem"
          v-html="text"
        ></div>
      </div>
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
import '@/lib/pro.scss'

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
    design: {
      get() {
        return this.receive.design
      },
    },
    updatedAt: {
      get() {
        return this.receive.updatedAt
      },
    },
  },
  created() {
    styleSetter(JSON.parse(this.design))
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

<style lang="scss">
#project-names {
  background: #eee;
  overflow: hidden;
  width: 30%;

  #project-name {
    overflow: hidden;
    white-space: nowrap;
  }
}
.container {
  background: #eee;
  overflow: hidden;
  width: 100%;
  height: 100%;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.warp {
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
