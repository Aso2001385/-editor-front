<template>
  <v-app>
    <TopHeader :receive="menus" />
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
            <v-icon>mdi-content-save-alert</v-icon>
            <v-icon>mdi-content-save-check</v-icon>
            <a href="#" class="white--text text-center" style="text-decoration: none" @click="setEditorData"> SAVE</a>
          </div>
        </v-col>
      </v-row> -->
    <!-- <v-btn text class="pa-5">
      <v-icon color="white">mdi-home-variant</v-icon>
      <div class="ml-3 text-h6 white--text text-center">HOME</div>
    </v-btn>
    <v-spacer />
    <v-btn text class="pa-5">
      <v-icon color="white">mdi-text-box-multiple</v-icon>
      <div class="ml-3 text-h6 white--text text-center">PAGES</div>
    </v-btn>
    <v-spacer />
    <v-btn text class="pa-5">
      <v-icon color="white">mdi-file-cog</v-icon>
      <div class="ml-3 text-h6 white--text text-center">SETTINGS</div>
    </v-btn>
    <v-spacer />
    <v-btn text class="pa-5">
      <v-icon color="white">mdi-content-save-alert</v-icon>
      <div class="ml-3 text-h6 white--text text-center">SAVE</div>
    </v-btn> -->
    <Nuxt class="white" />
  </v-app>
</template>

<script>
import TopHeader from '~/components/planets/TopHeader.vue'
export default {
  name: 'TopLayout',
  components: {
    TopHeader,
  },
  data() {
    return {
      menus: [
        {
          icon: 'mdi-home-variant',
          text: 'HOME',
          to: '/',
        },
      ],
    }
  },
}
</script>
<style lang="sass">
html
  &::-webkit-scrollbar
    display: none
</style>
