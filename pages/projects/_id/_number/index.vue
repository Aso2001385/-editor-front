<template>
  <v-main>
    <client-only style="position: relative" v-if="openDialog">
      <mavon-editor
        ref="mav"
        v-model="markData"
        disabled
        class="d-flex"
        :toolbars="markdownOption"
        language="ja"
        style="height: 100%; width: 100%; overflow-y: auto; z-index: 1; position: absolute"
      />
    </client-only>
    <pagesError v-else><template #:rt>projectリストへ</template></pagesError>
  </v-main>
</template>

<script>
import { mapGetters } from 'vuex'
import { markdownOptions } from '@/lib/markdown-options'
import pagesError from '@/pages/errors/pagesError.vue'

export default {
  components: {
    pagesError,
  },
  layout: 'editor',
  data() {
    return {
      markData: '# タイトル \n ## サブタイトル',
      markdownOption: markdownOptions,
      setOpenFlg: false,
      openDialog: true,
    }
  },
  computed: {
    ...mapGetters({
      localSaveProject: 'local/getLocalSaveProject',
    }),
  },
  created() {
    // URLを取得している
    // プロジェクトがない場合はリストに
    // ある場合は、その中のページが1
    // const getUrl = this.$route.fullPath
    // const baseUrl = '/projects/'
    // const Url = getUrl.substring(getUrl.indexOf(baseUrl) + 10)
    // if (!Url.includes('/')) {
    //   // 存在しているuuidかを確かめてない場合に遷移させる
    //   this.openDialog = false
    //   this.$router.push({ path: '/projects' })
    // } else {
    //   this.$router.push({ path: '/projects/UUID/1' })
    // }
  },
  mounted() {
    const project = this.localSaveProject
    this.markData = project.contents
    console.log('UUID : ' + project.uuid)
    this.markData = localStorage.getItem('MarkdownData')
    const getUrl = this.$route.fullPath
    const baseUrl = '/projects/'
    const Url = getUrl.substring(getUrl.indexOf(baseUrl) + 10)
    if (!Url.includes('/')) {
      // 存在しているuuidかを確かめてない場合に遷移させる
      this.openDialog = false
      // this.$router.push({ path: '/projects' })
    } else {
      this.$router.push({ path: '/projects/UUID/1' })
    }
  },
  updated() {
    const projectData = {
      id: 'UUID',
      number: '2',
      name: 'testPro',
      primaryColor: '#F57C00',
      secondaryColor: '#FFB74D',
      text: this.markData,
      texteditor: '# タイトル## サブタイトル* ジャンル１* 項目１* 項目２**** ジャンル',
    }
    this.$store.dispatch('local/setLocalSaveProject', { data: projectData })
    // this.$store.dispatch('api/getMarkDown', { data: this.markData })
  },
}
</script>
