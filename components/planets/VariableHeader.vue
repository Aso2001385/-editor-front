<template>
  <v-app-bar color="grey darken-3" app clipped-left>
    <v-row>
      <v-col cols="3" class="d-flex align-center">
        <div class="white--text text-p" style="cursor: pointer" @click="home">
          <span class="text-h5 mr-5">FRIDAY EDITOR</span><br />{{ routeName }}
        </div>
      </v-col>
      <!-- 共通 -->
      <v-col cols="6" class="d-flex align-center">
        <v-spacer />
        <MenuButton :click-callback="back">
          <template #icon>mdi-arrow-u-down-left-bold</template>
          <template #text>前のページへ戻ります</template>
        </MenuButton>

        <MenuButton :click-callback="account">
          <template #icon>mdi-account</template>
          <template #text>アカウントページへ移動します</template>
        </MenuButton>

        <!-- Project -->
        <MenuButton v-if="projectFlg" :click-callback="pages">
          <template #icon>mdi-text-box-multiple</template>
          <template #text>ページ一覧を表示します</template>
        </MenuButton>

        <MenuButton v-if="projectFlg" :click-callback="preview">
          <template #icon>mdi-eye-arrow-right</template>
          <template #text>プレビューを表示します</template>
        </MenuButton>

        <MenuButton v-if="projectFlg" :click-callback="settings">
          <template #icon>mdi-file-cog</template>
          <template #text>設定を表示します</template>
        </MenuButton>

        <MenuButton v-if="projectFlg" :click-callback="save">
          <template #icon>mdi-content-save-alert</template>
          <template #text>プロジェクトを保存します</template>
        </MenuButton>

        <!-- design -->

        <MenuButton v-if="designFlg" :click-callback="preview">
          <template #icon>mdi-eye-arrow-right</template>
          <template #text>プレビューを表示します</template>
        </MenuButton>

        <MenuButton v-if="designFlg" :click-callback="settings">
          <template #icon>mdi-file-cog</template>
          <template #text>設定を表示します</template>
        </MenuButton>

        <MenuButton v-if="designFlg" :click-callback="saveDesign">
          <template #icon>mdi-content-save-alert</template>
          <template #text>デザインを保存します</template>
        </MenuButton>
        <v-spacer />
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>

    <PreviewDialog ref="dig" :receive="saveDesignStatus"></PreviewDialog>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

import MenuButton from '@/components/materials/buttons/MenuButton.vue'
import PreviewDialog from '@/components/materials/dialogs/PreviewDialog.vue'
import { getPreview, tagOrder } from '~/lib/common'

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
    projectListFlg: {
      get() {
        return this.routeName === 'ProjectList'
      },
    },
    projectFlg: {
      get() {
        return this.routeName === 'ProjectEdit'
      },
    },
    designListFlg: {
      get() {
        return this.routeName === 'DesignList'
      },
    },
    designFlg: {
      get() {
        return this.routeName === 'DesignEdit'
      },
    },
  },
  methods: {
    async home() {
      await this.$router.push({ path: '/' })
    },
    async back() {
      await this.$router.go(-1)
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
      if (newContents === oldContents) return

      const imageBase = await getPreview(document.getElementById('contents'))
      this.saveDesignStatus = {
        name: this.receive.name,
        base: imageBase,
      }
      const putDesign = {
        contents: newContents,
        preview: imageBase,
      }
      await this.$store.dispatch('api/designs/put', { id: this.receive.uuid, data: putDesign })
      this.$refs.dig.dialog = true
    },
  },
}
</script>
