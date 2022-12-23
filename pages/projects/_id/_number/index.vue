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
        @change="EditorData"
      />
    </client-only>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<script>
import { marked } from 'marked'
// import previews from '~/assets/previews.json'

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
      html: '',
    }
  },
  mounted() {
    // デフォルトのデータ
    // const data = previews
    // this.default_previews = data

    this.projectGenre = localStorage.getItem('projectId')
    // this.UserProjectData = localStorage.getItem('HtmlFromMarkdown')
    this.markData = localStorage.getItem('MarkdownData')
    console.log(marked(this.markData))
  },
  methods: {
    async EditorData() {
      localStorage.setItem('MarkdownData', this.markData)
      localStorage.setItem('localSaveProject', this.markData)
      // いらないかも
      localStorage.setItem('HtmlFromMarkdown', marked(this.markData))
      // await this.$store.dispatch('local/setLocalSaveProject', { data: this.newProject })
    },
  },
}
</script>

<style>
.markdown-editor {
  width: 100%;
  height: 100%;
}
</style>
