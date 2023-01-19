<template>
  <v-app>
    <v-app-bar color="grey darken-3" app clipped-left>
      <v-btn text class="pa-5" @click="jumpToProjectList">
        <v-icon color="white">mdi-home-variant</v-icon>
        <div class="ml-3 text-h6 white--text text-center">HOME</div>
      </v-btn>

      <v-btn text class="pa-5" @click="overlay = !overlay">
        <v-icon color="white">mdi-text-box-multiple</v-icon>
        <div class="ml-3 text-h6 white--text text-center">PAGES</div>
      </v-btn>
      <v-btn text class="pa-5" @click="modal()">
        <v-icon color="white">mdi-file-cog</v-icon>
        <div class="ml-3 text-h6 white--text text-center">PREVIEW</div>
      </v-btn>
      <v-btn text class="pa-5">
        <v-icon color="white">mdi-file-cog</v-icon>
        <div class="ml-3 text-h6 white--text text-center">SETTINGS</div>
      </v-btn>
      <v-btn text class="pa-5" @click="projectSave()">
        <v-icon color="white">mdi-content-save</v-icon>
        <div class="ml-3 text-h6 white--text text-center">SAVE</div>
      </v-btn>

      <v-spacer />

      <!-- <v-row dance>
        <v-col cols="3">
          <div class="white--text text-center" @click="RoutePages(0)"><v-icon>mdi-home-variant</v-icon> HOME</div>
        </v-col>
        <v-col cols="3">
          <div class="white--text text-center" @click="overlay = !overlay">
            <v-icon>mdi-text-box-multiple</v-icon> PAGES
          </div>
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
              <v-btn color="primary" class="black--text mt-10" @click="RoutePages(3)">CLOSE</v-btn>
            </div>
          </v-overlay>
        </v-col>
        <v-col cols="3">
          <div class="white--text text-center" @click="RoutePages(2)"><v-icon>mdi-file-cog</v-icon> SETTING</div>
        </v-col>
        <v-col cols="3">
          <div class="text-center">
            <v-icon>mdi-content-save</v-icon>
            <v-icon>mdi-content-save-check</v-icon>
            <a href="#" class="white--text text-center" style="text-decoration: none" @click="setEditorData"> SAVE</a>
          </div>
        </v-col>
      </v-row> -->
    </v-app-bar>
    <v-dialog v-model="overlay">
      <v-container fluid>
        <v-row>
          <v-col cols="6">
            <div></div>
          </v-col>
          <v-col cols="6">ka</v-col>
        </v-row>
      </v-container>
    </v-dialog>
    <ProjectPreviewModal v-if="preview" ref="modal" />
    <Nuxt class="grey lighten-4" />
  </v-app>
</template>

<script>
import ProjectPreviewModal from '@/components/planets/ProjectPreviewModal.vue'

export default {
  name: 'EditorLayout',
  components: { ProjectPreviewModal },

  data() {
    return {
      preview: false,
      overlay: false,
    }
  },
  methods: {
    jumpToProjectList() {
      this.$router.push({ path: '/projects' })
    },
    projectSave() {
      const project = {
        name: 'test1',
        ui: '[]',
      }
      this.$store.dispatch('api/putProject', { data: project })
      this.$router.push({ path: '/projects' })
    },
    modal() {
      this.$router.push({ path: '/projects/1/1/preview' })
    },
  },
}
</script>
<style lang="sass">
html
  &::-webkit-scrollbar
    display: none
</style>
