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
      <v-col cols="4" style="padding-left: 10%; overflow: hidden !important; height: 90vh; overflow-y: auto">
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
        </v-row>
      </v-col>
      <v-col cols="8" style="overflow: hidden !important; height: 90vh; overflow-y: auto">
        <EditorSetting v-if="OpenFlg === 0" />
        <v-card
          class="mt-8 mb-2"
          v-for="(preview, index) in default_previews"
          :key="index"
          cols="4"
          style="float: left; width: 80%; margin-left: 10%"
          v-else
        >
          <ProjectList
            :ProjectData="
              (ProjectData = {
                PreviewId: preview.id,
                PreviewName: preview.name,
                PreviewText: preview.text,
                ProjectLink: PROJECT_LINK,
              })
            "
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import previews from '../assets/previews.json'
import MenuHeader from '~/components/MenuHeader.vue'
import ProjectList from '~/components/ProjectList.vue'
import EditorSetting from '~/components/EditorSetting.vue'

export default {
  data() {
    return {
      projectData: {},
      markData: '# タイトル \n ## サブタイトル',
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
    EditorData() {
      localStorage.setItem('MarkdownData', this.markData)
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
  },
  components: {
    MenuHeader,
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
</style>
