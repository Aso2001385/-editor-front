<!-- eslint-disable vue/no-v-html -->
<template>
  <v-app-bar color="grey darken-3" app clipped-left>
    <v-row class="pr-15">
      <!-- <v-col cols="3" class="d-flex align-center"> -->
      <div class="white--text caption mx-4" style="cursor: pointer" @click="home">
        <span class="text-h6">Jason</span><br />{{ routeName }}
      </div>
      <!-- </v-col> -->
      <!-- 共通 -->
      <!-- <v-col cols="6" class="d-flex align-center"> -->

      <!-- <MenuButton :click-callback="account">
        <template #icon>mdi-account</template>
        <template #text>アカウントページへ移動します</template>
      </MenuButton> -->

      <MenuButton :click-callback="back">
        <template #icon>mdi-arrow-u-down-left-bold</template>
        <template #text>前のページへ戻ります</template>
      </MenuButton>

      <!-- Top -->
      <MenuButton v-if="homeFlg" :click-callback="userInfo">
        <template #icon>mdi-account</template>
        <template #text>会員情報を表示します</template>
      </MenuButton>

      <v-spacer />
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

      <MenuButton v-if="projectFlg" :click-callback="() => saveProject()">
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

      <MenuButton v-if="designFlg" :click-callback="() => saveDesign()">
        <template #icon>mdi-content-save-alert</template>
        <template #text>デザインを保存します</template>
      </MenuButton>
      <!-- <v-spacer /> -->
      <!-- </v-col>
      <v-col cols="3"></v-col> -->
    </v-row>

    <!-- ページ一覧 -->
    <v-dialog v-if="projectFlg" v-model="pagesFlg" class="d-flex" absolute width="auto">
      <PageList :receive="receive" />
    </v-dialog>

    <!-- Project設定 -->
    <v-dialog v-if="projectFlg" v-model="settingsFlg" class="d-flex" absolute width="auto">
      <ProjectSettings :receive="receive" />
    </v-dialog>

    <!-- デザイン設定 -->
    <v-dialog v-if="designFlg" v-model="settingsFlg" class="d-flex" absolute width="auto">
      <DesignSettings :receive="receive" />
    </v-dialog>

    <PreviewDialog ref="dig" :receive="savePreviewStatus"></PreviewDialog>
    <div v-if="hiddenFlg" style="position: absolute; opacity: 0; height: 100vh; width: 65vw">
      <div id="contents" style="min-height: 100%; width: 100%" v-html="markdownText"></div>
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuButton from '@/components/materials/buttons/MenuButton.vue'
import PreviewDialog from '@/components/materials/dialogs/PreviewDialog.vue'
import ProjectSettings from '@/components/planets/ProjectSettings.vue'
import DesignSettings from '@/components/planets/DesignSettings.vue'
import PageList from '@/components/planets/PageList.vue'
import { getPreview, tagOrder } from '~/lib/common'
import gitMarkdownApi from '~/lib/git-markdown-api'
import { styleSetter } from '~/lib/style-set'
import '@/lib/pro.scss'
export default {
  components: {
    MenuButton,
    PreviewDialog,
    ProjectSettings,
    DesignSettings,
    PageList,
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
      savePreviewStatus: {},
      settingsFlg: false,
      pagesFlg: true,
      hiddenFlg: false,
      markdownText: '',
    }
  },
  computed: {
    ...mapGetters({
      isSet: 'local/project/isSet',
      project: 'api/projects/resource',
      design: 'api/designs/resource',
    }),
    homeFlg: {
      get() {
        return this.routeName === 'Home'
      },
    },
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
    async userInfo() {
      await this.$router.push({ path: '/account' })
    },
    async back() {
      await this.$router.go(-1)
    },
    async account() {
      await this.$router.push({ path: '/account' })
    },
    pages() {
      this.pagesFlg = true
    },
    async preview() {},
    settings() {
      this.settingsFlg = true
    },
    async saveProject() {
      try {
        await this.$store.dispatch('common/loadingStart')
        const oldContents = JSON.stringify(this.project.pages.find(page => page.number === this.receive.number))
        const newContents = JSON.stringify(this.receive)
        if (newContents === oldContents) {
          await this.$store.dispatch('common/loadingEnd')
          return
        }
        if (!(await this.$store.dispatch('api/designs/get', { id: this.receive.design_uuid }))) return
        const text = await gitMarkdownApi(this.receive.contents)
        this.markdownText = text
        this.hiddenFlg = true
        this.$nextTick(async () => {
          styleSetter(JSON.parse(this.design.contents))
          const imageBase = await getPreview(document.getElementById('contents'))
          this.savePreviewStatus = {
            name: this.project.name,
            base: imageBase,
          }
          this.$store.dispatch('local/project/putPreview', {
            uuid: putPage.uuid,
            preview: imageBase,
          })
          this.hiddenFlg = false
        })
        const putPage = {
          uuid: this.project.uuid,
          number: this.receive.number,
          contents: this.receive.contents,
          title: this.receive.title,
        }
        if (await this.$store.dispatch('api/projects/putPage', { data: putPage })) {
          this.$store.dispatch('local/project/remove')
        } else {
          console.log('error')
        }
        await this.$store.dispatch('common/loadingEnd')
        this.$refs.dig.dialog = true
        this.hiddenFlg = false
      } catch (error) {
        console.log(error)
        await this.$store.dispatch('common/loadingEnd')
      }
    },
    async saveDesign() {
      try {
        await this.$store.dispatch('common/loadingStart')
        const oldContents = JSON.stringify(tagOrder(JSON.parse(this.design.contents)))
        const newContents = JSON.stringify(this.receive.contents)
        if (newContents === oldContents) return
        const imageBase = await getPreview(document.getElementById('contents'))
        this.savePreviewStatus = {
          name: this.receive.name,
          base: imageBase,
        }
        const putDesign = {
          contents: newContents,
          preview: imageBase,
        }
        await this.$store.dispatch('api/designs/put', { id: this.receive.uuid, data: putDesign })
        await this.$store.dispatch('common/loadingEnd')
        this.$refs.dig.dialog = true
      } catch (error) {
        await this.$store.dispatch('common/loadingEnd')
      }
    },
  },
}
</script>
