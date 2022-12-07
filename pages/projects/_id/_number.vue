<template>
  <v-main>
    <client-only style="position: relative">
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
  </v-main>
</template>

<script>
import { marked } from 'marked'

export default {
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
    }
  },
  created() {
    // URLを取得している
    console.log(location.href)
  },
  mounted() {
    this.markData = localStorage.getItem('MarkdownData')
  },
  methods: {
    EditorData() {
      localStorage.setItem('MarkdownData', this.markData)
      localStorage.setItem('HtmlFromMarkdown', marked(this.markData))
    },
  },
}
</script>
