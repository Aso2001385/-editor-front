<template>
  <v-container style="background-color: #dcdcdc; width: 90%" class="mt-10">
    <v-row>
      <NuxtLink to="/information"
        ><v-icon x-large color="#0085ff" style="font-size: 80px; float: left"
          >mdi-account-circle-outline</v-icon
        ></NuxtLink
      >
      <v-icon x-large class="ml-10" color="#0085ff" style="font-size: 60px; float: left">mdi-grease-pencil</v-icon>
    </v-row>

    <v-col v-for="(preview, index) in default_previews" :key="index" class="mt-15" cols="4" style="float: left">
      <v-card>
        <ProjectList
          :ProjectData="
            (ProjectData = {
              PreviewId: preview.id,
              PreviewName: preview.name,
              PreviewText: preview.text,
              ProjectGenre: preview.texteditor,
              PreviewBackColor: preview.backgroundColor,
              ProjectLink: PROJECT_LINK,
            })
          "
        />
      </v-card>
    </v-col>
    <v-col cols="4" style="float: left; margin-top: 2.5rem">
      <!-- <NuxtLink to="/create-editor" class="white--text" style="text-decoration: none"> -->
      <v-card class="mt-5" style="width: 100%" @click="RoutePages(0)">
        <v-col
          cols="12"
          class="black--text"
          style="background-color: transparent; border: 1px solid lightgrey; text-align: center"
        >
          <v-icon
            class="grey--text"
            style="font-size: 5rem; margin-left: auto; padding-top: 2rem; padding-bottom: 3.3rem; margin-top: 10px"
            >mdi-plus-circle</v-icon
          >
        </v-col>
        <v-col cols="12" class="black--text" style="border-top: 1px solid lightgrey; background-color: white">
          <p style="font-size: 17px; margin-left: 3%; margin-bottom: 0.2rem; color: #212121">Project新規作成</p>
        </v-col>
      </v-card>
      <!-- </NuxtLink> -->
    </v-col>
  </v-container>
</template>

<script>
import previews from '~/assets/previews.json'
import ProjectList from '~/components/ProjectList.vue'

export default {
  data() {
    return {
      projectData: {},
      markdown: '# Marked in the browserRendered by **marked**.',
      default_previews: null,
      PROJECT_LINK: 0,
    }
  },

  mounted() {
    const data = previews
    this.default_previews = data
  },
  methods: {
    // valueの中に新規なのか更新なのか
    RoutePages(value) {
      // 押された瞬間にローカルに押されたページ(createなのかupdateなのかの判定に)
      localStorage.setItem('projectCreateUpdate', value)
      this.$router.push({ path: `/projects/${value}` })
    },
  },
  components: { ProjectList },
}
</script>
