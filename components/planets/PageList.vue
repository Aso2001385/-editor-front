<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card class="mx-auto" width="600" height="500">
    <v-card-actions class="grey darken-3" style="height: 10%">
      <MenuButton :click-callback="() => saveSettings()">
        <template #icon>mdi-content-save-alert</template>
        <template #text>設定を保存します<br />(編集中のコンテンツはセーブされません)</template>
      </MenuButton>
    </v-card-actions>
    <v-row style="height: 70%" no-gutters>
      <v-col cols="12" style="height: 100%" max-height="auto" class="pa-5 overflow-y-auto">
        <v-simple-table>
          <draggable v-model="pages" tag="tbody">
            <tr v-for="item in pages" :key="item.number" @dblclick="jumpToAnotherPage(item.number)">
              <td>
                <v-row justify="center" class="pr-1">
                  <v-col cols="1" class="d-flex align-center">
                    <v-tooltip bottom>
                      <template #activator="{ on, attrs }">
                        <v-icon style="cursor: pointer" v-bind="attrs" v-on="on"> mdi-drag</v-icon>
                      </template>
                      <span>
                        <slot name="text">順番を並べ変えます<br />(ドラッグ＆ドロップ)</slot>
                      </span>
                    </v-tooltip>
                  </v-col>
                  <v-col cols="9" class="d-flex align-center">
                    {{ item.title }}
                  </v-col>
                  <v-col cols="1" class="d-flex align-center">
                    <MenuButton :click-callback="() => saveSettings()" :btn-color="'grey darken-3'">
                      <template #icon>mdi-content-copy</template>
                      <template #text>このページを複製します</template>
                    </MenuButton>
                  </v-col>
                  <v-col cols="1" class="d-flex align-center">
                    <MenuButton :click-callback="() => saveSettings()" :btn-color="'grey darken-3'">
                      <template #icon>mdi-delete-circle</template>
                      <template #text>このページを削除します</template>
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
      <MenuButton :click-callback="() => saveSettings()" :btn-color="'grey darken-3'">
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
import { nestClone } from '~/lib/common'
export default {
  components: {
    MenuButton,
    Draggable,
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
      pages: [],
    }
  },
  computed: {
    ...mapGetters({
      project: 'api/projects/resource',
    }),
  },
  mounted() {
    console.log(this.project)
    if (this.project) {
      this.pages = nestClone(this.project.pages)
    }
  },
  methods: {
    saveSettings() {
      // this.User = JSON.parse(sessionStorage('user'))
      console.log(sessionStorage('user'))
      // const page = {
      //   contents: '# new',
      //   design_uuid: '',
      //   id: this.project.pages[0].id,
      //   number: this.project.pages[0].number + 1,
      //   project_uuid: this.project.pages[0].project_uuid,
      //   title: '新規ページ',
      //   user_id: '',
      // }
      // if (this.project) {
      //   this.pages = page
      //   return true
      // } else {
      //   return false
      // }
    },
    jumpToAnotherPage(number) {
      this.$router.push({ path: `/projects/${this.project.uuid}/${number}` })
    },
  },
}
</script>
