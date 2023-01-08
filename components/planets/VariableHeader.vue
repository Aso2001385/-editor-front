<template>
  <v-app-bar color="grey darken-3" app clipped-left>
    <!-- 共通 -->
    <MenuButton :click-callback="home">
      <template #icon>mdi-home</template>
      <template #text>HOME</template>
    </MenuButton>

    <MenuButton :click-callback="account">
      <template #icon>mdi-account</template>
      <template #text>ACCOUNT</template>
    </MenuButton>

    <!-- Project -->
    <MenuButton v-if="projectFlg" :click-callback="pages">
      <template #icon>mdi-text-box-multiple</template>
      <template #text>PAGES</template>
    </MenuButton>

    <MenuButton v-if="projectFlg" :click-callback="preview">
      <template #icon>mdi-eye-arrow-right</template>
      <template #text>PREVIEW</template>
    </MenuButton>

    <MenuButton v-if="projectFlg" :click-callback="settings">
      <template #icon>mdi-file-cog</template>
      <template #text>SETTINGS</template>
    </MenuButton>

    <MenuButton v-if="projectFlg" :click-callback="save">
      <template #icon>mdi-content-save-alert</template>
      <template #text>SAVE</template>
    </MenuButton>

    <!-- design -->

    <MenuButton v-if="designFlg" :click-callback="preview">
      <template #icon>mdi-eye-arrow-right</template>
      <template #text>PREVIEW</template>
    </MenuButton>

    <MenuButton v-if="designFlg" :click-callback="settings">
      <template #icon>mdi-file-cog</template>
      <template #text>SETTINGS</template>
    </MenuButton>

    <MenuButton v-if="designFlg" :click-callback="saveDesign">
      <template #icon>mdi-content-save-alert</template>
      <template #text>SAVE</template>
    </MenuButton>
    <PreviewDialog ref="dig" :receive="saveDesignStatus"></PreviewDialog>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import html2canvas from 'html2canvas'
import MenuButton from '@/components/materials/buttons/MenuButton.vue'
import PreviewDialog from '@/components/materials/dialogs/PreviewDialog.vue'
import { tagOrder } from '~/lib/common'

export default {
  components: {
    MenuButton,
    PreviewDialog,
  },
  props: {
    routeName: {
      type: String,
      default: '/',
    },
    receive: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      saveDesignStatus: {},
    }
  },
  computed: {
    ...mapGetters({
      design: 'api/designs/resource',
    }),
    projectFlg: {
      get() {
        return this.routeName === 'projectEditor'
      },
    },
    designFlg: {
      get() {
        return this.routeName === 'designEditor'
      },
    },
  },
  methods: {
    async home() {
      await this.$router.push({ path: '/' })
    },
    async account() {
      await this.$router.push({ path: '/account' })
    },
    async pages() {},
    async preview() {},
    async settings() {},
    async saveProject() {
      const putProject = this.receive
      await this.$store.dispatch('api/projects/put', { id: this.receive.uuid, data: putProject })
    },
    async saveDesign() {
      const oldContents = JSON.stringify(tagOrder(JSON.parse(this.design.contents)))
      const newContents = JSON.stringify(this.receive.contents)
      await this.getPreview(document.getElementById('contents'))
      if (newContents === oldContents) return
      const putDesign = {
        contents: newContents,
        preview: this.saveDesignStatus.base,
      }
      await this.$store.dispatch('api/designs/put', { id: this.receive.uuid, data: putDesign })
      this.$refs.dig.dialog = true
    },
    async getPreview(document) {
      await html2canvas(document, { useCORS: true, windowWidth: 1400 }).then(canvas => {
        this.saveDesignStatus = {
          name: this.design.name,
          base: canvas.toDataURL(),
        }
      })
    },
  },
}
</script>
