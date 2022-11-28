<!-- エディター作成・更新 -->
<template>
  <div class="markdown-editor">
    <MenuHeader />
    <client-only>
      <!-- <v-btn
        color="grey lighten-3"
        style="z-index: 2; position: absolute; margin-left: 88%; top: 90%"
        @click="color(colorNumber)"
      >
        <v-icon large :class="colorName + '--text'" style="font-size: 35px"> mdi-eyedropper-variant</v-icon>
        <div :class="colorName + '--text'">{{ colorName }}</div>
      </v-btn> -->
      <mavon-editor
        v-model="markData"
        disabled
        :toolbars="markdownOption"
        language="ja"
        style="height: 93vh; overflow: hidden !important; overflow-y: auto; z-index: 1"
        :class="colorName + '--text'"
        @change="editorData()"
      />
    </client-only>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<script>
import { marked } from 'marked'
import previews from '~/assets/previews.json'
import MenuHeader from '~/components/MenuHeader.vue'

export default {
  components: { MenuHeader },
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
      iconColor: 'black--text',
      colorNumber: 1,
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
    this.projectGenre = localStorage.getItem('projectCreateUpdate')
    this.UserProjectData = localStorage.getItem('HtmlFromMarkdown')

    // if (this.projectGenre === '0') {
    // createということでデフォルトのデータを表示する
    this.markData = localStorage.getItem('MarkdownData')
    console.log(marked(this.markData))
    this.SubMarkData = this.markData
    // }
    this.colorName = localStorage.getItem('markdownColor')
    this.color(5)

    // localStorage.setItem('MarkdownData', localStorage.getItem('MarkdownData'))
    // localStorage.setItem('HtmlFromMarkdown', marked(localStorage.getItem('MarkdownData')))
  },
  methods: {
    editorData() {
      const confirm = localStorage.getItem('MarkdownData')
      console.log(confirm == this.markData)
      if (confirm != this.markData) {
        localStorage.setItem('MarkdownData', this.markData)
        localStorage.setItem('HtmlFromMarkdown', marked(this.markData))
      } else {
        this.markData = confirm
      }
    },
    color(value) {
      if (value === 1) {
        this.colorNumber = value + 1
        this.colorName = 'red'
        localStorage.setItem('MarkdownColor', this.colorName)
      } else if (value === 2) {
        this.colorNumber = value + 1
        this.colorName = 'blue'
        localStorage.setItem('MarkdownColor', this.colorName)
      } else if (value === 3) {
        this.colorNumber = value + 1
        this.colorName = 'green'
        localStorage.setItem('MarkdownColor', this.colorName)
      } else if (value === 4) {
        this.colorNumber = 0
        this.colorName = 'purple'
        localStorage.setItem('MarkdownColor', this.colorName)
      } else {
        this.colorNumber = 1
        this.colorName = 'black'
        localStorage.setItem('MarkdownColor', this.colorName)
      }
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
