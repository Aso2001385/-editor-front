<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card class="mx-auto" width="1200" height="500" hover>
    <v-card-actions class="grey darken-3" style="height: 10%">
      <NeoHelper :receive="pageSettingList" />
      <v-spacer />
      <MenuButton :click-callback="() => saveSettings()">
        <template #icon>mdi-content-save</template>
        <template #text>設定を保存します<br />(編集中のコンテンツはセーブされません)</template>
      </MenuButton>
    </v-card-actions>
    <v-row style="height: 90%" no-gutters>
      <v-col cols="2" class="grey lighten-2">
        <v-item-group v-model="window" class="pa-3">
          <v-item v-slot="{ active, toggle }">
            <div>
              <v-btn :input-value="active" large text block @click="toggle"> 基本設定 </v-btn>
            </div>
          </v-item>
          <v-item v-slot="{ active, toggle }">
            <div>
              <v-btn :input-value="active" large text block @click="toggle"> 一覧設定 </v-btn>
            </div>
          </v-item>
        </v-item-group>
      </v-col>
      <v-col cols="5" style="height: 100%" max-height="auto" class="overflow-y-auto">
        <v-window v-model="window" style="height: 100%" class="elevation-1" vertical>
          <v-window-item class="overflow-y-auto pb-15" style="max-height: 90vh">
            <v-row justify="center" class="pa-11 align-center mb-15" no-gutters>
              <v-col cols="12" class="text-p mb-2">プロジェクト名</v-col>
              <v-col cols="12" class="my-0">
                <v-text-field v-model="projectSet.name" solo />
              </v-col>
              <v-col cols="12" class="text-p mb-2">ページ名 ({{ page.number }}ページ目)</v-col>
              <v-col cols="12" class="my-0">
                <v-text-field v-model="page.title" solo />
              </v-col>
              <v-col cols="12" class="text-p mb-2">選択中のデザイン</v-col>
              <v-col cols="12" class="mb-5">
                <PreviewCard :receive="releaseDesign" :click-callback="openList" />
              </v-col>
              <v-col cols="12" class="text-p mb-2">
                <v-divider class="my-10" />
                プロジェクトのダウンロード
              </v-col>
              <v-col cols="12" class="my-0">
                <v-btn class="grey darken-3 white--text" @click.prevent="download"
                  ><v-icon color="white">mdi-download</v-icon>Download
                </v-btn>
              </v-col>
            </v-row>
          </v-window-item>

          <v-window-item class="px-1" style="max-height: 90vh; height: 100%">
            <PageListSetting ref="pageSettings" :receive="pages" :edit="page" />
          </v-window-item>
        </v-window>
      </v-col>

      <v-divider vertical />
      <v-col cols="5" style="height: 100%" max-height="auto" class="overflow-y-auto">
        <div v-if="previewFlg" id="back" style="height: 100%; width: 100%">
          <div id="contents" v-html="htmlPreset.text"></div>
        </div>

        <div v-else class="py-5">
          <v-col v-for="(item, index) in releaseDesigns" :key="index" class="mt-2" cols="12">
            <PreviewCard :receive="item" :click-callback="() => selectDesign(index)" />
          </v-col>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { styleSetter } from '@/lib/style-set'
import { nestClone, onlyCopy } from '@/lib/common'
import { pageSettingList, pageSetting } from '~/lib/commons/helpers/projects/projectEditor'
import htmlPreset from '@/lib/pre-html.json'
import NeoHelper from '@/components/materials/buttons/NeoHelper.vue'
import PreviewCard from '@/components/materials/cards/PreviewCard.vue'
import PageListSetting from '@/components/planets/PageListSetting.vue'
import MenuButton from '@/components/materials/buttons/MenuButton.vue'
import '@/lib/pro.scss'

export default {
  components: {
    NeoHelper,
    PreviewCard,
    PageListSetting,
    MenuButton,
  },
  props: {
    receive: {
      type: Object || Array,
      default: () => ({}),
    },
  },
  data() {
    return {
      window: 0,
      dialog: true,
      projectSet: {
        name: '',
        pages: [],
      },
      releaseDesigns: [],
      releaseDesign: {},
      page: {
        id: '',
        title: '',
        number: 0,
        design_uuid: '',
        project_uuid: '',
      },
      htmlPreset,
      previewFlg: true,
      selectIndex: false,
      pageSettingList,
      pageSetting,
    }
  },
  computed: {
    ...mapGetters({
      project: 'api/projects/resource',
      designs: 'api/designs/collection',
      localProject: 'local/project/get',
      isSet: 'local/project/isSet',
      design: 'api/designs/resource',
    }),
    pages: {
      get() {
        return this.receive?.pages
      },
    },
  },

  async created() {
    this.projectSet = nestClone(this.project)
    this.page = nestClone(this.receive)

    if (await this.$store.dispatch('api/designs/get', { id: this.page.design_uuid })) {
      this.releaseDesign = this.designSet(this.design)
      if (await this.$store.dispatch('api/designs/getProjectDesigns', { id: this.projectSet.uuid })) {
        this.releaseDesigns = this.designs.map(design => {
          return this.designSet(design)
        })
      }
      styleSetter(JSON.parse(this.design.contents))
    }
  },

  methods: {
    designSet(primitiveDesign) {
      return {
        uuid: primitiveDesign.uuid,
        name: primitiveDesign.name,
        text: htmlPreset.text,
        design: primitiveDesign.contents,
        preview: primitiveDesign.preview,
        updatedAt: primitiveDesign.updated_at,
      }
    },
    openList() {
      this.previewFlg = !this.previewFlg
      if (this.previewFlg) {
        const design = nestClone(this.selectIndex ? this.designs[this.selectIndex] : this.design)
        styleSetter(JSON.parse(design.contents))
        this.releaseDesign = this.designSet(design)
      }
    },
    selectDesign(index) {
      this.selectIndex = index
      const design = nestClone(this.designs[index])
      this.releaseDesign = this.designSet(design)
      this.page.design_uuid = design.uuid
      styleSetter(JSON.parse(design.contents))
      this.previewFlg = true
    },
    async saveSettings() {
      this.$store.dispatch('common/loadingStart')
      const pages = nestClone(this.$refs.pageSettings?.pages ?? [this.page])

      if (this.$refs.pageSettings?.pages) {
        pages.forEach(page => {
          if (page.id === this.page.id) {
            page = {
              project_uuid: this.page.project_uuid,
              design_uuid: this.page.design_uuid,
            }
          }
        })
      }
      pages.forEach((page, index) => {
        page.number = index + 1
      })

      pages.forEach((page, index) => {
        pages[index] = onlyCopy(page, ['id', 'number', 'title', 'user_id', 'project_uuid', 'design_uuid'])
      })

      const project = {
        name: this.projectSet.name,
      }

      const putPages = {
        id: this.project.uuid,
        data: {
          last: {
            id: this.page.id,
            design_uuid: this.page.design_uuid,
          },
          pages,
        },
      }

      if (!(await this.$store.dispatch('api/projects/putPages', putPages))) {
        this.$store.dispatch('common/loadingEnd')
        return
      }
      await this.$store.dispatch('api/projects/put', { id: this.project.uuid, data: project })
      const putPage = this.project.pages.find(page => page.id === this.page.id)

      if (this.isSet) {
        const saveParam = {
          project: {
            uuid: this.project.uuid,
            number: putPage.number,
            name: this.project.name,
            text: this.localProject?.text ?? putPage.contents,
            design_uuid: putPage.design_uuid,
            preview: this.localPreviews?.[this.project.uuid] ?? null,
            updatedAt: this.page.updated_at,
          },
          page: nestClone(putPage),
        }

        await this.$store.dispatch('local/project/nowEditChange', saveParam)
      }

      this.$store.dispatch('common/loadingEnd')
      if ('' + putPage.number === this.$route.params.number) {
        location.reload()
      } else {
        this.$router.push({ path: `/projects/${this.project.uuid}/${putPage.number}` })
      }
    },
    async download() {
      this.$store.dispatch('common/loadingStart')
      const status = { id: this.project.uuid, name: this.project.name }
      if (await this.$store.dispatch('api/projects/download', status)) {
        this.$store.dispatch('common/loadingEnd')
      } else {
        this.$store.dispatch('common/loadingEnd')
      }
    },
  },
}
</script>
