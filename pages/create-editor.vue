<template>
  <div class="markdown-editor">
    <MenuHeader :EditorContent="markData" />
    <client-only>
      <v-btn
        color="grey lighten-3"
        style="z-index: 2; position: absolute; margin-left: 88%; top: 90%"
        @click="color(colorNumber)"
      >
        <v-icon large :class="colorName + '--text'" style="font-size: 35px"> mdi-eyedropper-variant</v-icon>
        <div :class="colorName + '--text'">{{ colorName }}</div>
      </v-btn>
      <v-card v-resize="onResize" :style="style">
        <mavon-editor
          v-model="markData"
          disabled
          :toolbars="markdownOption"
          language="ja"
          style="height: 100%; overflow: hidden !important; overflow-y: auto; z-index: 1"
          :class="colorName + '--text'"
          @change="EditorData()"
        />
      </v-card>
    </client-only>
  </div>
</template>

<script>
import MenuHeader from '~/components/MenuHeader.vue'

export default {
  data() {
    return {
      markData: '# タイトル \n ## サブタイトル',
      SubMarkData: '',
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

      windowSize: {
        x: 0,
        y: 0,
      },

      iconColor: 'black--text',
      colorNumber: 1,
      colorName: 'black',
    }
  },

  mounted() {
    this.markData = localStorage.getItem('MarkdownData')
    this.SubMarkData = this.markData
    this.colorName = localStorage.getItem('markdownColor')
    this.color(5)
    this.onResize()
  },

  computed: {
    style() {
      return 'height:' + Math.round(this.windowSize.y * 0.9) + 'px'
    },
  },

  methods: {
    EditorData() {
      localStorage.setItem('MarkdownData', this.markData)
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
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
  components: { MenuHeader },
}
</script>

<style>
.markdown-editor {
  width: 100%;
}
</style>
