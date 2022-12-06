<!-- デザインを決めていく内容を表示 -->
<template>
  <div class="markdown-editor">
    <MenuHeader @settingFlg="openSetting" />
    <Setting v-if="setOpenFlg === true" />
    <client-only>
      <mavon-editor
        v-model="markData"
        disabled
        :toolbars="markdownOption"
        language="ja"
        style="height: 93vh; overflow: hidden !important; overflow-y: auto; z-index: 1"
        :class="colorName + '--text'"
        @change="EditorData()"
      />
    </client-only>
  </div>
</template>

<script>
import { marked } from 'marked'
import MenuHeader from '~/components/MenuHeader.vue'
import Setting from '@/pages/setting.vue'

export default {
  components: { MenuHeader, Setting },
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
      iconColor: 'black--text',
      colorNumber: 1,
      colorName: 'black',
      setOpenFlg: false,
    }
  },
  mounted() {
    this.markData = localStorage.getItem('MarkdownData')
    this.SubMarkData = this.markData
    this.colorName = localStorage.getItem('markdownColor')
    this.color(5)
  },
  methods: {
    EditorData() {
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
    openSetting() {
      this.setOpenFlg = true
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
