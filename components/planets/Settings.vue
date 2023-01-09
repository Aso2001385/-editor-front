<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card class="mx-auto" width="1200" height="500" hover>
    <v-card-actions class="grey darken-3" style="height: 10%">
      <MenuButton :click-callback="() => saveSettings()">
        <template #icon>mdi-content-save-alert</template>
        <template #text>設定を保存します<br />(編集中のコンテンツはセーブされません)</template>
      </MenuButton>
    </v-card-actions>
    <v-row style="height: 90%" no-gutters>
      <v-col cols="5" style="height: 100%" max-height="auto" class="overflow-y-auto">
        <v-row justify="center" class="pa-11 align-center" no-gutters>
          <v-col cols="12" class="text-p mb-2">プロジェクト名</v-col>
          <v-col cols="12" class="my-0">
            <v-text-field v-model="projectSet.name" solo />
          </v-col>
          <v-col cols="12" class="text-p mb-2">ページ名 ({{ page.number }}ページ目)</v-col>
          <v-col cols="12" class="my-0">
            <v-text-field v-model="page.title" solo />
          </v-col>
          <v-col cols="12" class="text-p mb-2">選択中のデザイン</v-col>
          <v-col cols="12" class="my-0">
            <PreviewCard :receive="releaseDesign" :click-callback="openList" />
          </v-col>
        </v-row>
      </v-col>
      <v-divider vertical />
      <v-col cols="7" style="height: 100%" max-height="auto" class="overflow-y-auto">
        <div v-if="previewFlg" id="contents" v-html="htmlPreset.text"></div>
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
import { nestClone } from '@/lib/common'
import htmlPreset from '@/lib/pre-html.json'
import PreviewCard from '@/components/materials/cards/PreviewCard.vue'
import MenuButton from '@/components/materials/buttons/MenuButton.vue'
import '@/lib/pro.scss'

export default {
  components: {
    PreviewCard,
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
      projectSet: {
        name: '',
        pages: [],
      },
      releaseDesigns: [],
      releaseDesign: {},
      page: {
        title: '',
        number: 0,
        design_uuid: '',
        project_uuid: '',
      },
      htmlPreset,
      previewFlg: true,
    }
  },
  computed: {
    ...mapGetters({
      project: 'api/projects/resource',
      designs: 'api/designs/collection',
      design: 'api/designs/resource',
    }),
  },
  async created() {
    this.projectSet = nestClone(this.project)
    this.page = nestClone(this.receive)
    if (await this.$store.dispatch('api/designs/get', { id: this.page.design_uuid })) {
      this.releaseDesign = this.designSet(this.design)
      if (await this.$store.dispatch('api/designs/gets')) {
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
    },
    selectDesign(index) {
      const design = nestClone(this.designs[index])
      this.releaseDesign = this.designSet(design)
      this.page.design_uuid = design.uuid
      styleSetter(JSON.parse(design.contents))
      this.previewFlg = true
    },
    async saveSettings() {
      this.$store.dispatch('common/loadingStart')
      const project = {
        name: this.projectSet.name,
      }
      const page = {
        project_uuid: this.page.project_uuid,
        title: this.page.title,
        number: this.page.number,
        design_uuid: this.page.design_uuid,
      }
      await this.$store.dispatch('api/projects/put', { id: this.project.uuid, data: project })
      await this.$store.dispatch('api/projects/putPage', { data: page })
      location.reload()
      this.$store.dispatch('common/loadingEnd')
    },
  },
}
</script>
