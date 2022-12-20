<template>
  <div>
    <v-row>
      <v-col cols="4" class="mt-2">
        <AddProjectCard :click-callback="() => jumpToNewProject()" />
      </v-col>
      <v-col v-if="isSetLocal" class="mt-2" cols="4">
        <EditingProjectCard
          :receive="localSaveProject"
          :click-callback="() => jumpToEditingProject(editingProject.id)"
        />
      </v-col>
      <v-col v-for="(project, index) in projects" :key="index" class="mt-2" cols="4">
        <ProjectCard :receive="project" :click-callback="() => jumpToProject(project.id)" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { nestClone } from '@/lib/common'
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
    ...mapGetters({
      newProject: 'api/project',
      localSaveProject: 'local/getLocalSaveProject',
      isSetLocal: 'local/getIsSetLocal',
    }),
    editingProject: {
      get() {
        return JSON.parse(localStorage.getItem('editingProject'))
      },
    },
    projects: {
      get() {
        console.log('aa')
        console.log('isset' + this.isSetLocal)
        console.log(nestClone(this.receive))
        console.log(this.editingProject)
        let projects = nestClone(this.receive)
        if (this.editingProject) projects = projects.map(project => project.id !== this.editingProject.id)
        return projects
      },
    },
  },
  created() {
    this.$store.dispatch('local/checkLocalSaveProject')
  },
  methods: {
    async jumpToNewProject() {
      //  UUIDの部分はデータベースから取ってきたデータを利用する
      if (this.isSetLocal) {
        if (this.jumpConfirm) {
          this.$store.dispatch('local/deleteLocalSaveProject')
        }
      } else {
        await this.$store.dispatch('api/postProjects')
        this.$router.push({ path: '/projects/UUID/1' })
      }
    },
    jumpToEditingProject(id) {
      this.$router.push({ path: `/projects/UUID/${id}` })
    },
    jumpToProject(id) {
      console.log(this.isSetLocal)
      if (this.isSetLocal) {
        if (this.jumpConfirm()) {
          this.$store.dispatch('local/deleteLocalSaveProject')
          this.$router.push({ path: `/projects/UUID/${id}` })
        }
      } else {
        this.$router.push({ path: `/projects/UUID/${id}` })
      }
    },
    jumpConfirm() {
      return window.confirm(
        '\n編集中のプロジェクトがあります。\n\nこのまま別のプロジェクトへ進むと、保存されていない変更は失われます。\n本当に続行してもよろしいですか？\n'
      )
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
