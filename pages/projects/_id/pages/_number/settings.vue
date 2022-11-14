<!-- ヘッダーからいけるデザインの種類を決めるページ -->
<template>
  <!-- <div class="markdown-editor"> -->
  <v-flex>
    <MenuHeader />
    <client-only>
      <v-btn color="grey lighten-3" style="z-index: 2; position: absolute; margin-left: 88%; top: 90%">
        <v-icon large :class="colorName + '--text'" style="font-size: 35px"> mdi-eyedropper-variant</v-icon>
        <div :class="colorName + '--text'">{{ colorName }}</div>
      </v-btn>
    </client-only>
    <v-row style="position: absolute; z-index: 2; top: 4.8rem; width: 100%">
      <v-col
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
        <v-row v-for="item in killData" :key="item" class="pt-10" @click="Setting(1)">
          <a class="text-h6 black--text">{{ item }}</a>
        </v-row>
      </v-col>
      <v-col cols="4" style="overflow: hidden !important; height: 93vh; overflow-y: auto; background-color: white">
        <EditorSetting v-if="OpenFlg === 0" style="background-color: white" />
        <v-card
          v-for="(preview, index) in default_previews"
          v-else
          :key="index"
          class="mt-8 mb-2"
          cols="4"
          style="float: left; width: 80%; margin-left: 10%"
          @click="selectGenre(preview)"
        >
          <ProjectList
            :ProjectData="
              (ProjectData = {
                PreviewId: preview.id,
                PreviewName: preview.name,
                PreviewText: preview.text,
                PreviewBackColor: preview.backgroundColor,
                PreviewColor: preview.primaryColor,
                PreviewSecColor: preview.secondaryColor,
                ProjectLink: PROJECT_LINK,
              })
            "
          />
        </v-card>
      </v-col>

      <v-col
        id="OpenHtml"
        cols="6"
        style="overflow: hidden !important; height: 93vh; overflow-y: auto"
        :style="{ backgroundColor: setBackColor }"
        v-html="UserProjectData"
      ></v-col>
    </v-row>
  </v-flex>
</template>

<script></script>

<script>
import DemoWebEditor from '~/assets/demo-web-editor.json'
import previews from '~/assets/previews'
import MenuHeader from '~/components/MenuHeader.vue'
import ProjectList from '~/components/ProjectList.vue'
import EditorSetting from '~/components/EditorSetting.vue'

export default {
  data() {
    return {
      selectionGenre: 0,
      UserProjectData: '<h1>demoタイトル</h1><h2>demoサブタイトル</h2>',
      designPreview: '1',
      HtmlColor: '',
      primary: 'pink',
      secondary: 'black',
      setBackColor: 'lightgreen',

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
      HtmlContent: {},
      // openList: 0,
    }
  },
  async mounted() {
    this.UserProjectData = DemoWebEditor[0].text
    localStorage.setItem('DesignCount', 0)
    var test = document.getElementById('OpenHtml')
    console.log(test)
    test.id = 'html-css'
    if (this.colorName === '') {
      this.colorName = 'black'
    }

    const data = previews
    this.default_previews = await previews
    await this.EditorData()
  },

  methods: {
    EditorData() {
      const designSetH1 = []
      const designSetH2 = []
      for (var i = 0; i < this.default_previews.length; i++) {
        designSetH1.push(this.default_previews[i].primaryColor)
        designSetH2.push(this.default_previews[i].secondaryColor)
      }
      localStorage.setItem('DesignSetH1', designSetH1)
      localStorage.setItem('DesignSetH2', designSetH2)
      // localStorage.setItem('OpenList', this.openList)
    },
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
      this.primary = value.primaryColor
      this.secondary = value.secondaryColor
      this.setBackColor = value.backgroundColor
      const stylePrimary = document.getElementById('html-css')
      var h1Tag = stylePrimary.getElementsByTagName('h1')
      var h2Tag = stylePrimary.getElementsByTagName('h2')
      h1Tag[0].style.color = this.primary
      h2Tag[0].style.color = this.secondary
    },
  },
  components: {
    MenuHeader,
    ProjectList,
    EditorSetting,
  },
}
</script>
