<template>
  <div class="markdown-editor">
    <client-only>
      <mavon-editor
        :toolbars="markdownOption"
        language="ja"
        v-model="MarkData"
        @change="EditorData()"
        style="height: 93vh; overflow: hidden !important; overflow-y: auto; z-index: 1"
        :class="colorName + '--text'"
      />
    </client-only>
    <!-- 左半分に画面を重ねる(z-index使用) -->
    <v-container style="background-color: #dcdcdc; width: 50%; position: absolute; top: 0; z-index: 2" class="mt-10%">
      <v-col v-for="(preview, index) in default_previews" :key="index" cols="4" style="float: left">
        <ProjectList
          :ProjectData="(ProjectData = { PreviewId: preview.id, PreviewName: preview.name, PreviewText: preview.text })"
        />
      </v-col>
      <v-col cols="4" style="float: left; margin-top: 2.5rem">
        <nuxt-link to="/create-editor" class="white--text" style="text-decoration: none">
          <div class="mt-5" style="width: 100%">
            <v-col
              cols="12"
              class="black--text"
              style="background-color: transparent; border: 1px solid lightgrey; text-align: center"
            >
              <v-icon
                class="grey--text"
                style="
                  font-size: 5rem;
                  margin-left: auto;
                  padding-top: 2.5rem;
                  padding-bottom: 3.5rem;
                  margin-top: 10px;
                "
                >mdi-plus-circle</v-icon
              >
            </v-col>
            <v-col cols="12" class="black--text" style="border-top: 1px solid lightgrey; background-color: white">
              <p style="font-size: 20px; margin-left: 3%; margin-bottom: 0.2rem; color: #212121">Project新規作成</p>
            </v-col>
          </div>
        </nuxt-link>
      </v-col>
    </v-container>
    <footer style="background-color: black; position: absolute; bottom: 0; width: 100%; height: 8%">
      <v-row>
        <v-col style="margin-top: 0.5%; margin-left: 60%; z-index: 2">
          <Nuxt-link to="/information" style="text-decoration: none">
            <v-icon large color="#0085ff" style="font-size: 45px">mdi-account-circle-outline</v-icon>
          </Nuxt-link>
        </v-col>
        <v-btn
          color="grey lighten-3"
          style="z-index: 2; position: absolute; margin-left: 88%; top: 20%"
          @click="color(colorNumber)"
        >
          <v-icon large :class="colorName + '--text'" style="font-size: 35px">mdi-eyedropper-variant</v-icon>
          <div :class="colorName + '--text'">{{ colorName }}</div>
        </v-btn>
      </v-row>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      MarkData: '# デザイン・カラー確認用文章 \n ## この画面は書き込み不可になっています',
      default_previews: null,
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
      markdown: '# Marked in the browserRendered by **marked**.',
    }
  },
  mounted() {
    this.markData = localStorage.getItem('MarkdownData')
    this.colorName = localStorage.getItem('MarkdownColor')
    if (this.colorName === null) {
      this.colorName = 'black'
    }
  },
  methods: {
    // getMarkData() {
    //   localStorage.setItem('markdownData', this.markData)
    //   alert(this.markData)
    //   this.markData = ''
    // },
    // setMarkData() {
    //   this.markData = localStorage.getItem('markdownData')
    //   alert(this.markData)
    // },
    EditorData() {
      localStorage.setItem('MarkdownData', this.markData)
    },
    color(value) {
      console.log('反応')
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

body {
  overflow: hidden;
}
</style>
