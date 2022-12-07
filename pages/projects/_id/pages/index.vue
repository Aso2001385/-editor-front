<template>
  <div class="markdown-editor">
    <MenuHeader :openSetting="0" />
    <Setting v-if="setOpenFlg === true" />
    <client-only>
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
import MenuHeader from '~/components/MenuHeader.vue'

export default {
  components: { MenuHeader, Setting },
  data() {
    return {
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
      // 始めに表示される内容(既に作成されているeditorの場合はそのデータを表示)
      markData: '',
      default_previews: '',
      projectGenre: 0,
      openCnt: 0,
      iconColor: 'black--text',
      colorNumber: 1,
      colorName: 'black',
      html: '',
      setOpenFlg: false,
    }
  },

  mounted() {
    const data = previews
    this.default_previews = data
    localStorage.setItem('OpenList', 0)
    this.projectGenre = localStorage.getItem('projectCreateUpdate')
    this.UserProjectData = localStorage.getItem('HtmlFromMarkdown')
    this.markData = localStorage.getItem('MarkdownData')
    this.colorName = localStorage.getItem('markdownColor')
    this.color(5)
  },
  methods: {
    editorData() {
      //   const confirm = localStorage.getItem('MarkdownData')
      localStorage.setItem('MarkdownData', this.markData)
      localStorage.setItem('HtmlFromMarkdown', marked(this.markData))
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
    openSetting(value) {
      //  settingのページを表示させるようにする
      if (value === true) {
        this.setOpenFlg = false
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
