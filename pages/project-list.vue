<template>
  <v-container style="background-color: #dcdcdc; width: 90%" class="mt-10%">
    <v-row>
      <v-icon x-large color="#0085ff" style="font-size: 80px; float: left">mdi-account-circle-outline</v-icon>
      <v-icon x-large class="ml-10" color="#0085ff" style="font-size: 60px; float: left">mdi-grease-pencil</v-icon>
    </v-row>

    <v-col v-for="(preview, index) in default_previews" :key="index" cols="4" style="float: left">
      <ProjectList
        :ProjectData="(ProjectData = { PreviewId: preview.id, PreviewName: preview.name, PreviewText: preview.text })"
      />
    </v-col>
    <v-col cols="4" style="float: left; margin-top: 2.5rem">
      <NuxtLink to="/create-editor" class="white--text" style="text-decoration: none">
        <div class="mt-5" style="width: 100%">
          <v-col
            cols="12"
            class="black--text"
            style="background-color: transparent; border: 1px solid lightgrey; text-align: center"
          >
            <v-icon
              class="grey--text"
              style="font-size: 5rem; margin-left: auto; padding-top: 2.5rem; padding-bottom: 3.5rem; margin-top: 10px"
              >mdi-plus-circle</v-icon
            >
          </v-col>
          <v-col cols="12" class="black--text" style="border-top: 1px solid lightgrey; background-color: white">
            <p style="font-size: 20px; margin-left: 3%; margin-bottom: 0.2rem; color: #212121">Project新規作成</p>
          </v-col>
        </div>
      </NuxtLink>
    </v-col>
  </v-container>
</template>

<script>
import previews from '../assets/previews.json'
import ProjectList from '~/components/ProjectList.vue'
export default {
  data() {
    return {
      projectData: {},
      markdown: '# Marked in the browserRendered by **marked**.',
      // lists: [
      //   { id: 1, name: 'project1', text: 'project1の内容表示' },
      //   { id: 2, name: 'project2', text: 'project2の内容表示' },
      //   { id: 3, name: 'project3', text: 'project3の内容表示' },
      //   { id: 4, name: 'project4', text: 'project4の内容表示' },
      //   { id: 5, name: 'project5', text: 'project5の内容表示' },
      // ],
      default_previews: null,
    }
  },
  mounted() {
    const data = previews
    this.default_previews = data
  },
  components: { ProjectList },
}
</script>
