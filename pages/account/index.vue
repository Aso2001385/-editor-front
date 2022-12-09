<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-left pa-4 grey darken-3">
            <h3 class="text-left white--text">会員情報</h3>
          </v-card-title>
          <v-divider class="pb-5"> </v-divider>
          <div class="pa-10">
            <v-text-field v-model="name" label="name" required></v-text-field>
            <v-row justify="center" class="mt-5">
              <v-col cols="4">
                <ApiEventButton color="grey darken-3" :click-callback="submit"> Next </ApiEventButton>
              </v-col>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/user-update">メールアドレス・パスワードの変更ですか？こちらから変更</NuxtLink>
            </v-row>
          </div>
        </v-card>
        <!-- <v-container class="pb-10 fill-width mt-10 grey lighten-5">
          <v-row class="grey darken-2">
            <h3 class="white--text d-flex justify-left pa-4 gray">利用できるデザインセット</h3>
          </v-row>
          <v-row class="pl-10 pr-10">
            <v-col v-for="(project, index) in default_previews" :key="index" class="mt-2" cols="12">
              <ProjectCard :receive="project" :click-callback="() => jumpToProject()" />
            </v-col>
          </v-row>
        </v-container> -->
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import previews from '@/assets/previews.json'
import { nestClone } from '@/lib/common'
// import ProjectCard from '@/components/materials/cards/ProjectCard.vue'

export default {
  // components: { ProjectCard },
  layout: 'auth',
  props: {
    receive: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      name: 'apiにアクセスして取得した名前を表示するようにする',
      default_previews: null,
      PROJECT_LINK: 2,
    }
  },
  computed: {
    editingProject: {
      get() {
        return JSON.parse(localStorage.getItem('editingProject'))
      },
    },
    projects: {
      get() {
        console.log('aa')
        console.log(nestClone(this.receive))
        console.log(this.editingProject)
        let projects = nestClone(this.receive)
        if (this.editingProject) projects = projects.map(project => project.id !== this.editingProject.id)
        return projects
      },
    },
  },
  created() {
    const data = previews
    this.default_previews = data
  },
  methods: {
    jumpToNewProject() {},
  },
}
</script>
