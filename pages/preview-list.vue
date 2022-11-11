<template>
  <!-- <div class="markdown-editor"> -->
  <v-flex>
    <!-- <MenuHeader /> -->
    <!-- <client-only>
      <v-btn color="grey lighten-3" style="z-index: 2; position: absolute; margin-left: 88%; top: 90%">
        <v-icon large :class="colorName + '--text'" style="font-size: 35px"> mdi-eyedropper-variant</v-icon>
        <div :class="colorName + '--text'">{{ colorName }}</div>
      </v-btn>

      <mavon-editor
        v-model="projectData"
        :toolbars="markdownOption"
        language="ja"
        style="height: 93vh; overflow: hidden !important; overflow-y: auto; z-index: 1"
        :class="colorName + '--text'"
        @change="EditorData()"
      /> -->
    <!-- /client-only> -->
    <v-row style="position: absolute; z-index: 2; min-height: 100vh; width: 50%">
      <!-- <v-col
        cols="2"
        style="padding-left: 5%; overflow: hidden !important; height: 93vh; overflow-y: auto; background-color: white"
      >
        <v-row class="pt-10"
          ><a class="text-h6 black--text" style="background-color: transparent; font-weight: bold" @click="Setting(0)">
            基本設定
          </a></v-row
        >
        <v-row class="pt-10"
          ><a class="text-h6 black--text" style="font-weight: bold" @click="Setting(1)">全体設定</a></v-row
        >
        <v-row class="pt-10" v-for="item in killData" :key="item" @click="Setting(1)">
          <a class="text-h6 black--text">{{ item }}</a>
        </v-row> -->
      <!-- </v-col> -->
      <div style="height: 100%; width: 100%; background-color: white">
        <v-col cols="12" style="overflow: hidden !important; height: 95vh; overflow-y: auto; background-color: #dcdcdc">
          <EditorSetting v-if="OpenFlg === 0" style="background-color: white" />
          <v-card
            class="mt-8 mb-2"
            v-for="(preview, index) in default_previews"
            :key="index"
            cols="4"
            style="float: left; width: 80%; margin-left: 10%"
            @click="selectGenre(preview)"
            v-else
          >
            <ProjectList
              :ProjectData="
                (ProjectData = {
                  PreviewId: preview.id,
                  PreviewName: preview.name,
                  PreviewText: preview.text,
                  PreviewBackColor: preview.backgroundColor,
                  ProjectLink: PROJECT_LINK,
                })
              "
            />
          </v-card>
        </v-col>
      </div>
      <!-- <v-col
        cols="6"
        v-html="HtmlContent.text"
        style="overflow: hidden !important; height: 92vh; overflow-y: auto"
        :class="HtmlContent.backgroundColor"
      >
      </v-col> -->
    </v-row>
  </v-flex>
</template>

<script>
import previews from '../assets/previews.json'
// import MenuHeader from '~/components/MenuHeader.vue'
import ProjectList from '~/components/ProjectList.vue'
import EditorSetting from '~/components/EditorSetting.vue'

export default {
  data() {
    return {
      selectionGenre: 0,
      projectData: {},
      designPreview: '1',
      HtmlColor: '',
      // markData: '# タイトル \n ## サブタイトル',
      PROJECT_LINK: 1,
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
      killData: [
        'page1',
        'page2',
        'page3',
        'page4',
        'page5',
        'page6',
        'page7',
        'page8',
        'page9',
        'page10',
        'page11',
        'page12',
      ],
      default_previews: null,
      OPENSETTING: 0,
      OpenFlg: 999,
      HtmlContent: {
        id: '1',
        name: 'project1ああああああ',
        text: '<h1>タイトル</h1><h2>サブタイトル</2><b>WebEditorの内容を出していく</b>',
      },
    }
  },
  mounted() {
    // デフォルトのデータ取得
    this.projectData = previews
    // 実際に入力されたデータをローカルストレージから取得
    // this.projectData = localStorage.getItem('MarkdownData')
    // this.colorName = localStorage.getItem('MarkdownColor')

    if (this.colorName === '') {
      this.colorName = 'black'
    }
    const data = previews
    this.default_previews = data
  },

  methods: {
    // EditorData() {
    //   localStorage.setItem('MarkdownData', this.markData)
    // },
    Setting(value) {
      if (this.OPENSETTING === value) {
        this.OpenFlg = value
      } else {
        this.OpenFlg = value
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
    selectGenre(value) {
      // this.designPreview = id
      this.HtmlContent = value
      this.HtmlColor = value.backgroundColor
      // for (let i = 0; i < this.HtmlContent; i++) {
      // console.log(this.HtmlContent)
      // }
    },
  },
  components: {
    // MenuHeader,
    ProjectList,
    EditorSetting,
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
