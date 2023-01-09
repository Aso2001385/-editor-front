<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card class="mx-auto" width="600" height="500" hover>
    <v-card-actions class="grey darken-3" style="height: 10%">
      <MenuButton :click-callback="() => saveSettings()">
        <template #icon>mdi-content-save-alert</template>
        <template #text>設定を保存します<br />(編集中のコンテンツはセーブされません)</template>
      </MenuButton>
    </v-card-actions>
    <v-row style="height: 90%" no-gutters>
      <v-col cols="12" style="height: 100%" max-height="auto" class="overflow-y-auto">
        <v-row justify="center" class="pa-11 align-center" no-gutters>
          <v-col cols="12" class="text-p mb-2">デザイン名</v-col>
          <v-col cols="12" class="my-0">
            <v-text-field v-model="releaseDesign.name" solo />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { nestClone } from '@/lib/common'
import MenuButton from '@/components/materials/buttons/MenuButton.vue'
import '@/lib/pro.scss'

export default {
  components: {
    MenuButton,
  },
  props: {
    receive: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      window: 0,
      dialog: true,
      releaseDesign: {
        name: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      design: 'api/designs/resource',
    }),
  },
  created() {
    this.releaseDesign = nestClone(this.design)
  },
  methods: {
    async saveSettings() {
      this.$store.dispatch('common/loadingStart')
      const design = {
        name: this.releaseDesign.name,
      }
      await this.$store.dispatch('api/designs/put', { id: this.design.uuid, data: design })
      this.$store.dispatch('common/loadingEnd')
    },
  },
}
</script>
