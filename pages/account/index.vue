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
            <v-text-field v-model="User.name" label="name" readonly></v-text-field>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
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
      User: '',
      // name: '',
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
        console.log(nestClone(this.receive))
        console.log(this.editingProject)
        let projects = nestClone(this.receive)
        if (this.editingProject) projects = projects.map(project => project.id !== this.editingProject.id)
        return projects
      },
    },
    ...mapGetters({
      auth: 'api/users/auth',
      users: 'api/users/collection',
      user: 'api/users/resource',
      design: 'api/designs/resource',
    }),
  },
  created() {
    const data = previews
    this.default_previews = data
    this.User = JSON.parse(sessionStorage.getItem('user'))
    console.log(this.User)
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
  },
}
</script>
