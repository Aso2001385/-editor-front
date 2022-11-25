<template>
  <v-flex>
    <v-row style="position: absolute; z-index: 2; width: 100%; height: 100%">
      <v-col cols="6" style="overflow: hidden !important; height: 101vh; overflow-y: auto; background-color: white">
        <v-card
          v-for="(preview, index) in default_previews"
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
        style="overflow: hidden !important; height: 101vh; overflow-y: auto"
        :style="{ backgroundColor: setBackColor }"
        v-html="UserProjectData"
      >
      </v-col>
      <footer
        style="
          background-color: white;
          position: absolute;
          top: 92%;
          width: 100%;
          height: 8%;
          margin-left: 50%;
          padding-bottom: 5%;
        "
      >
        <v-col style="margin-top: 0.5%; z-index: 2">
          <!-- <Nuxt-link to="/information" style="text-decoration: none"> -->
          <v-icon large color="#0085ff" style="font-size: 45px; float: left; margin-left: 15%"
            >mdi-account-circle-outline</v-icon
          >
          <!-- </Nuxt-link> -->
          <v-tabs>
            <v-tab v-for="(preview, index) in colorSet" :key="index"> {{ preview }}</v-tab>
          </v-tabs>
        </v-col>
      </footer>
    </v-row>
  </v-flex>
</template>

<script></script>

<script>
import previews from '~/assets/previews'
import ProjectList from '~/components/ProjectList.vue'

export default {
  data() {
    return {
      selectionGenre: 0,
      UserProjectData: '<h1>demoタイトル</h1><h2>demoサブタイトル</h2>',
      colorSet: { pattern1: 'red', pattern2: 'blue', pattern3: 'green', pattern4: 'grey', pattern5: 'black' },
      designPreview: '1',
      HtmlColor: '',
      primary: 'pink',
      secondary: 'black',
      setBackColor: 'lightgreen',
      PROJECT_LINK: 3,
      iconColor: 'black--text',
      colorNumber: 1,
      colorName: 'black',
      provisionalData: '',
      default_previews: null,
      OPENSETTING: 0,
      OpenFlg: 999,
      HtmlContent: {},
      html: '',
    }
  },
  async mounted() {
    localStorage.setItem('DesignCount', 0)
    this.UserProjectData = localStorage.getItem('HtmlFromMarkdown')
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
    },
    Setting(value, key) {
      this.nowPage = key
      if (this.OPENSETTING === value) {
        this.OpenFlg = value
      } else {
        this.OpenFlg = value
      }
    },
    // color(value) {
    //   if (value === 1) {
    //     this.colorNumber = value + 1
    //     this.colorName = 'red'
    //     localStorage.setItem('MarkdownColor', this.colorName)
    //   } else if (value === 2) {
    //     this.colorNumber = value + 1
    //     this.colorName = 'blue'
    //     localStorage.setItem('MarkdownColor', this.colorName)
    //   } else if (value === 3) {
    //     this.colorNumber = value + 1
    //     this.colorName = 'green'
    //     localStorage.setItem('MarkdownColor', this.colorName)
    //   } else if (value === 4) {
    //     this.colorNumber = 0
    //     this.colorName = 'purple'
    //     localStorage.setItem('MarkdownColor', this.colorName)
    //   } else {
    //     this.colorNumber = 1
    //     this.colorName = 'black'
    //     localStorage.setItem('MarkdownColor', this.colorName)
    //   }
    // },
    selectGenre(value) {
      this.primary = value.primaryColor
      this.secondary = value.secondaryColor
      this.setBackColor = value.backgroundColor
      const stylePrimary = document.getElementById('html-css')
      var h1Tag = stylePrimary.getElementsByTagName('h1')
      var h2Tag = stylePrimary.getElementsByTagName('h2')
      for (let i = 0; i < h1Tag.length; i++) {
        h1Tag[i].style.color = this.primary
      }
      for (let i = 0; i < h2Tag.length; i++) {
        h2Tag[i].style.color = this.secondary
      }
    },
  },
  components: {
    ProjectList,
  },
}
</script>
