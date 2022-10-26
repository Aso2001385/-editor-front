<template>
  <div class="markdown-editor">
    <MenuHeader />

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
    <v-row style="position: absolute; z-index: 2; top: 5rem; width: 50%; background-color: white">
      <v-col cols="4">
        <v-row><v-btn>基本設定</v-btn></v-row>
        <v-row><v-btn>全体設定</v-btn></v-row>
        <v-row v-for="item in killData" :key="item">
          <v-btn>{{ item }}</v-btn>
        </v-row>
      </v-col>
      <v-col cols="8">
            <v-card v-for="(preview, index) in default_previews" :key="index" cols="4" style="float: left">
        <ProjectList :ProjectData="(ProjectData = { PreviewId: preview.id, PreviewName: preview.name, PreviewText: preview.text })"/>
            </v-card>
      </v-col>
    </v-row>
    <v-row>

    </v-row>
  </div>
</template>

<script>
import previews from '../assets/previews.json'
import MenuHeader from '~/components/MenuHeader.vue'
import ProjectList from '~/components/ProjectList.vue'

export default {
  data() {
    return {
            projectData: {},
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
      killData: ['page1', 'page2', 'page3', 'page4'],
      default_previews: null,
    }
  },
  mounted() {
    this.markData = localStorage.getItem('MarkdownData')
    this.colorName = localStorage.getItem('MarkdownColor')
    if (this.colorName === '') {
      this.colorName = 'black'
    }
        const data = previews
    this.default_previews = data
  },

  methods: {
    getMarkData() {
      localStorage.setItem('markdownData', this.markData)
      alert(this.markData)
      this.markData = ''
    },
    setMarkData() {
      this.markData = localStorage.getItem('markdownData')
      // alert(this.markData)
    },
    EditorData() {
      localStorage.setItem('markdownData', this.markData)
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
  components: {
    MenuHeader,
    ProjectList
   },
}
</script>

<sty
    ProjectListle>
.markdown-editor {
  width: 100%;
  height: 100%;
}
</style>
