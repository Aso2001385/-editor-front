<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card style="height: 100%; width: 100%" flat>
    <v-row style="height: 80%" no-gutters>
      <v-col cols="12" style="height: 100%" max-height="auto" class="pa-5 overflow-y-auto">
        <v-row justify="center" no-gutters>
          <v-col cols="12" class="text-p mb-2"></v-col>
          <v-col cols="12" class="my-0">
            <v-btn><v-icon>mdi-download</v-icon>Download</v-btn>
          </v-col>
          <v-col cols="12" class="text-p mb-2"></v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-card-actions style="height: 20%">
      <v-spacer />

      <MenuButton :click-callback="addPage" :btn-color="'grey darken-3'" :db="true">
        <template #icon>mdi-plus-circle</template>
        <template #text>ページを追加します</template>
      </MenuButton>

      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuButton from '@/components/materials/buttons/MenuButton.vue'
import '@/assets/scss/pro.scss'
import { orderBy, nestClone } from '~/lib/common'

export default {
  components: {
    MenuButton,
  },
  props: {
    receive: {
      type: Array,
      default: () => [],
    },
    edit: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      window: 0,
      dialog: true,
      pages: [],
    }
  },
  computed: {
    ...mapGetters({
      auth: 'api/users/auth',
      project: 'api/projects/resource',
      page: 'api/projects/page',
    }),
  },
  watch: {
    edit: {
      handler() {
        this.pages[this.pages.findIndex(item => item.id === this.edit.id)] = this.edit
      },
      deep: true,
    },
  },
  mounted() {
    if (this.project) {
      this.pages = orderBy(nestClone(this.project.pages), 'number', 'num', true)
      this.pages[this.pages.findIndex(item => item.id === this.edit.id)] = this.edit
    }
  },
  methods: {
    addPage() {
      const count = this.pages.length + 1

      const page = {
        id: null,
        project_uuid: this.project.uuid,
        design_uuid: this.page.design_uuid,
        user_id: this.auth.id,
        title: `新規ページ ${count}`,
      }

      this.pages.push(page)
    },
    copyPage(index) {
      const copy = {
        id: 'C' + this.pages[index].id,
        title: this.pages[index].title + ' のコピー',
      }
      this.pages.push(copy)
    },
    deletePage(id, index) {
      id && !isNaN(id) ? (this.pages[index].id *= -1) : this.pages.splice(index, 1)
    },
  },
}
</script>
