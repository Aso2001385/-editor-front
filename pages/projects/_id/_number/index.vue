<!-- エディター作成・更新 -->
<template>
  <div class="markdown-editor mt-15">
    <client-only>
      <mavon-editor
        v-model="markData"
        disabled
        :toolbars="markdownOption"
        language="ja"
        style="height: 93vh; overflow: hidden !important; overflow-y: auto; z-index: 1"
        :class="colorName + '--text'"
        @change="EditorData"
      />
    </client-only>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<script>
import { marked } from 'marked'
import previews from '~/assets/previews.json'

export default {
  layout: 'design',
  data() {
    return {
      // 始めに表示される内容(既に作成されているeditorの場合はそのデータを表示)
      markData: '',
      SubMarkData: '',
      default_previews: '',
      projectGenre: 0,
      openCnt: 0,
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
      // iconColor: 'black--text',
      // colorNumber: 1,
      colorName: 'black',
      html: '',
    }
  },
  mounted() {
    // デフォルトのデータ
    const data = previews
    this.default_previews = data
    // いらないかも
    localStorage.setItem('OpenList', 0)
    this.projectGenre = localStorage.getItem('projectId')
    // this.UserProjectData = localStorage.getItem('HtmlFromMarkdown')
    this.markData = localStorage.getItem('MarkdownData')
    console.log(marked(this.markData))
    this.SubMarkData = this.markData
  },
  methods: {
    EditorData() {
      const confirm = localStorage.getItem('MarkdownData')
      console.log(confirm == this.markData)
      //   if (confirm != this.markData) {
      localStorage.setItem('MarkdownData', this.markData)
      console.log('動いている')
      localStorage.setItem('HtmlFromMarkdown', marked(this.markData))
      //   } else {
      //     this.markData = confirm
      //   }
    },
  },
  // components: { MenuHeader },
}
</script>

<style>
.markdown-editor {
  width: 100%;
  height: 100%;
}
</style>
