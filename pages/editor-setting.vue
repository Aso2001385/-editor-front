<template>
  <div class="markdown-editor">
    <!-- <MenuHeader :EditorContent="markData" /> -->

    <client-only>
      <v-btn color="grey lighten-3" style="z-index: 2; position: absolute; margin-left: 88%; top: 90%">
        <v-icon large :class="colorName + '--text'" style="font-size: 35px"> mdi-eyedropper-variant</v-icon>

        <div :class="colorName + '--text'">{{ colorName }}</div>
      </v-btn>

      <mavon-editor
        v-model="markData"
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
// import MenuHeader from '~/components/MenuHeader.vue'

export default {
  data() {
    return {
      MarkData: '# タイトル \n ## サブタイトル',
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
      provisionalData: '',
    }
  },
  mounted() {
    this.markData = localStorage.getItem('MarkdownData')
    this.colorName = localStorage.getItem('MarkdownColor')
    if (this.colorName === '') {
      this.colorName = 'black'
    }
  },
  methods: {
    getMarkData() {
      localStorage.setItem('markdownData', this.markData)
      alert(this.markData)
      this.markData = ''
    },
    setMarkData() {
      this.markData = localStorage.getItem('markdownData')
      alert(this.markData)
    },
    EditorData() {
      localStorage.setItem('MarkdownData', this.markData)
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
        // this.colorName = 'black'
        localStorage.setItem('MarkdownColor', this.colorName)
      }
    },
    // color(value) {
    // if (value === 1) {
    //   this.colorNumber = value + 1
    //   this.colorName = 'red'
    //   localStorage.setItem('MarkdownColor', this.colorName)
    // } else if (value === 2) {
    //   this.colorNumber = value + 1
    //   this.colorName = 'blue'
    //   localStorage.setItem('MarkdownColor', this.colorName)
    // } else if (value === 3) {
    //   this.colorNumber = value + 1
    //   this.colorName = 'green'
    //   localStorage.setItem('MarkdownColor', this.colorName)
    // } else if (value === 4) {
    //   this.colorNumber = 0
    //   this.colorName = 'purple'
    //   localStorage.setItem('MarkdownColor', this.colorName)
    // } else {
    //   this.colorNumber = 1
    //   this.colorName = 'black'
    //   localStorage.setItem('MarkdownColor', this.colorName)
    // },
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
