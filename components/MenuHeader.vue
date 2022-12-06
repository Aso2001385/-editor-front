<template>
  <div class="menuBar" style="width: 100%">
    <v-flex>
      <v-row class="grey darken-3 ma-0 pa-2">
        <v-col>
          <div class="white--text" @click="RoutePages(0)">HOME</div>
        </v-col>
        <v-col>
          <div class="white--text" @click="overlay = !overlay">PAGES</div>
          <v-overlay :absolute="absolute" :opacity="opacity" :value="overlay">
            <v-btn
              v-for="(page, key) in pages"
              :key="key"
              :value="page"
              style="color: white"
              class="white--text ml-5 mt-5"
              color="blue"
              @click="RoutePageChange(key)"
              >{{ page }}</v-btn
            >
            <div style="margin-left: 50%">
              <v-btn color="primary" class="black--text mt-10" @click="RoutePages(2)">CLOSE</v-btn>
            </div>
          </v-overlay>
        </v-col>
        <v-col>
          <div class="white--text" @click="settingOpen()">SETTING</div>
        </v-col>
        <v-col><a href="#" class="white--text" style="text-decoration: none" @click="setEditorData">SAVE</a></v-col>
      </v-row>
    </v-flex>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    openSet: Boolean,
  },
  data() {
    return {
      markData: '# タイトル \n ## サブタイトル',
      absolute: true,
      overlay: false,
      opacity: 1,
      pages: [
        'NewPage',
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
    }
  },
  mounted() {
    console.log('RoutePage')
    console.log(this.RoutePage)
    console.log(this.RoutePage !== 'fromSetting')
  },
  methods: {
    ...mapActions({
      submit: 'api/sendWebEditor',
    }),
    setEditorData() {
      this.submit()
      alert('保存しました')
      this.markData = ''
      localStorage.setItem('MarkdownData', this.markData)
      this.$router.push({ path: `/projects` })
    },
    RoutePages(value) {
      if (value === 0) {
        this.$router.push({ path: `/projects/` })
      } else if (value === 2) {
        this.overlay = false
        this.RoutePageChange(1)
      } else {
        this.$router.push({ path: `/projects` })
      }
    },
    RoutePageChange(key) {
      const ProjectUrl = localStorage.getItem('ProjectId')
      const URL = `/projects/${ProjectUrl}/pages/${key}`
      this.$router.push({ path: URL })
    },
    settingOpen() {
      if (this.openSet === true) {
        this.$emit('settingFlg', true)
      } else if (this.openSet === false) {
        this.$emit('settingFlg', false)
      }
      this.$emit('settingFlg', false)
    },
  },
}
</script>
