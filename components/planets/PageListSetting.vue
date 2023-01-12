<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card style="height: 100%; width: 100%" flat>
    <v-row style="height: 80%" no-gutters>
      <v-col cols="12" style="height: 100%" max-height="auto" class="pa-5 overflow-y-auto">
        <v-simple-table>
          <draggable v-model="pages" tag="tbody">
            <tr v-for="(item, index) in pages" :key="index">
              <td>
                <v-row style="width: 100%" justify="center" class="pr-1">
                  <v-col cols="1" class="d-flex align-center">
                    <v-tooltip bottom>
                      <template #activator="{ on, attrs }">
                        <v-icon style="cursor: pointer" v-bind="attrs" v-on="on"> mdi-drag</v-icon>
                      </template>
                      <span>
                        <slot name="text">順番を並べ変えます<br />(ドラッグ＆ドロップ)</slot>
                      </span>
                    </v-tooltip>
                    <v-spacer />
                  </v-col>
                  <v-col cols="9" xs="11" class="d-flex align-center">
                    {{ item.title }}
                  </v-col>
                  <v-col cols="1" class="d-flex align-center">
                    <MenuButton
                      v-if="item.id && !isNaN(item.id)"
                      :click-callback="() => copyPage(index)"
                      :btn-color="'grey darken-3'"
                      :db="true"
                    >
                      <template #icon>mdi-content-copy</template>
                      <template #text>{{ item.title }}を複製します</template>
                    </MenuButton>
                    <MenuButton v-else :click-callback="() => newPage()" :btn-color="'grey darken-3'">
                      <template #icon>mdi-new-box</template>
                      <template #text>新規作成したページです </template>
                    </MenuButton>
                  </v-col>
                  <v-col cols="1" class="d-flex align-center">
                    <MenuButton
                      v-if="item.id > 0 || item.id === null || isNaN(item.id)"
                      :click-callback="() => deletePage(item.id, index)"
                      :btn-color="'grey darken-3'"
                      :db="true"
                    >
                      <template #icon>mdi-delete</template>
                      <template #text>{{ item.title }}を削除します</template>
                    </MenuButton>
                    <MenuButton v-else :click-callback="() => deletePage(item.id, index)" :btn-color="'red darken-3'">
                      <template #icon>mdi-delete-alert</template>
                      <template #text>{{ item.title }}を復元します</template>
                    </MenuButton>
                  </v-col>
                </v-row>
              </td>
            </tr>
          </draggable>
        </v-simple-table>
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
import Draggable from 'vuedraggable'
import MenuButton from '@/components/materials/buttons/MenuButton.vue'
import '@/lib/pro.scss'
import { orderBy, nestClone } from '~/lib/common'

export default {
  components: {
    MenuButton,
    Draggable,
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
