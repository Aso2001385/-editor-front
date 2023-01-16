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
            <v-text-field v-model="name" label="name" readonly></v-text-field>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import previews from '@/assets/previews.json'
import { nestClone } from '@/lib/common'

export default {
  layout: 'auth',
  props: {
    receive: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      name: '翔',
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
  mounted() {
    this.getAccount()
  },
  methods: {
    async getAccount() {
      if (sessionStorage.getItem('user') === null) {
        await this.$router.push({ path: '/' })
      }
    },
    jumpToNewProject() {},
  },
}
</script>
