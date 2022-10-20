<template>
  <div class="markdown-editor">
    <MenuHeader />
    <client-only>
      <v-btn
        color="grey lighten-3"
        style="z-index: 2; position: absolute; margin-left: 88%; top: 90%"
        @click="color(colorNumber)"
      >
        <v-icon large :class="colorName + '--text'" style="font-size: 35px"> mdi-eyedropper-variant</v-icon>
        <div :class="colorName + '--text'">{{ colorName }}</div>
      </v-btn>
      <mavon-editor
        :toolbars="markdownOption"
        language="ja"
        v-model="markData"
        style="height: 93vh; overflow: hidden !important; overflow-y: auto; z-index: 1"
        :class="colorName + '--text'"
      />
    </client-only>
    <!-- <v-btn class="white--text" @click="getMarkData()">一時保存</v-btn> -->
    <!-- <v-btn class="white--text" @click="setMarkData()">表示</v-btn> -->
  </div>
</template>

<script>
import MenuHeader from '~/components/MenuHeader.vue'

export default {
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
      provisionalData: '',
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
    color(value) {
      if (value === 1) {
        this.colorNumber = value + 1
        this.colorName = 'red'
      } else if (value === 2) {
        this.colorNumber = value + 1
        this.colorName = 'blue'
      } else if (value === 3) {
        this.colorNumber = value + 1
        this.colorName = 'green'
      } else if (value === 4) {
        this.colorNumber = 0
        this.colorName = 'purple'
      } else {
        this.colorNumber = 1
        this.colorName = 'black'
      }
    },
  },
  components: { MenuHeader },
}
</script>

<style>
.markdown-editor {
  width: 100%;
  height: 100%;
}
</style>
