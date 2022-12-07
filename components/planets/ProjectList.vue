<template>
  <v-row>
    <v-col cols="4" class="mt-2">
      <AddProjectCard :click-callback="() => jumpToNewProject()" />
    </v-col>
    <v-col v-if="editingProject !== null" class="mt-2" cols="4">
      <EditingProjectCard :receive="editingProject" :click-callback="() => jumpToEditingProject(editingProject.id)" />
    </v-col>
    <v-col v-for="(project, index) in projects" :key="index" class="mt-2" cols="4">
      <ProjectCard :receive="project" :click-callback="() => jumpToProject(project.id)" />
    </v-col>
  </v-row>
</template>
<script>
import common from '@/plugins/common'
import AddProjectCard from '@/components/materials/cards/AddProjectCard.vue'
import EditingProjectCard from '@/components/materials/cards/EditingProjectCard.vue'
import ProjectCard from '@/components/materials/cards/ProjectCard.vue'
export default {
  components: {
    AddProjectCard,
    EditingProjectCard,
    ProjectCard,
  },
  props: {
    receive: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      disabled: false,
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
        console.log(common.nestClone(this.receive))
        console.log(this.editingProject)
        let projects = common.nestClone(this.receive)
        if (this.editingProject) projects = projects.map(project => project.id !== this.editingProject.id)
        return projects
      },
    },
  },
  methods: {
    jumpToNewProject() {
      //  UUIDの部分はデータベースから取ってきたデータを利用する
      this.$router.push({ path: '/projects/UUID/1' })
    },
    jumpToEditingProject(id) {
      this.$router.push({ path: `/projects/UUID/${id}` })
    },
    jumpToProject(id) {
      this.$router.push({ path: `/projects/UUID/${id}` })
    },
  },
}
</script>

<style lang="scss">
#project-names {
  background: #eee;
  overflow: hidden;
  width: 30%;

  #project-name {
    overflow: hidden;
    white-space: nowrap;
  }
}
.container {
  background: #eee;
  overflow: hidden;
  width: 100%;
  height: 100%;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.warp {
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
