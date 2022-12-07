<template>
  <v-main>
    <client-only style="position: relative" v-if="openDialog">
      <mavon-editor
        v-model="markData"
        disabled
        class="d-flex"
        :toolbars="markdownOption"
        language="ja"
        style="height: 100%; width: 100%; overflow-y: auto; z-index: 1; position: absolute"
        @change="EditorData()"
      />
    </client-only>
    <pagesError v-else><template v-slot:rt>projectリストへ</template></pagesError>
  </v-main>
</template>

<script>
import { marked } from 'marked'
import pagesError from '@/pages/errors/pagesError.vue'

export default {
  components: {
    pagesError,
  },
  layout: 'editor',
  data() {
    return {
      markData: '# タイトル \n ## サブタイトル',
      markdownOption: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        code: true,
        table: true,
        fullscreen: true,
        htmlcode: true,
      },
      setOpenFlg: false,
      openDialog: true,
    }
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
  methods: {
    EditorData() {
      localStorage.setItem('MarkdownData', this.markData)
      localStorage.setItem('HtmlFromMarkdown', marked(this.markData))
    },
  },
}
</script>
