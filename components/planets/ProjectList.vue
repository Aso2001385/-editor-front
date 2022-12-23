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
      <!-- <v-col v-for="(project, index) in projects" :key="index" class="mt-2" cols="4">
        <ProjectCard :receive="project" :click-callback="() => jumpToProject(project.id)" />
      </v-col> -->
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { nestClone } from '@/lib/common'
import AddProjectCard from '@/components/materials/cards/AddProjectCard.vue'
import EditingProjectCard from '@/components/materials/cards/EditingProjectCard.vue'
// import ProjectCard from '@/components/materials/cards/ProjectCard.vue'
export default {
  components: {
    AddProjectCard,
    EditingProjectCard,
    // ProjectCard,
  },
  props: {
    receive: {
      type: Array,
      default: () => [],
    },
    userId: {
      type: Number,
      default: () => 0,
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
    localStorage.getItem('MarkdownData')
    this.$store.dispatch('local/setLocalSaveProject', { data: localStorage.getItem('MarkdownData') })
    // const user = sessionStorage.getItem('user')
    // this.$store.dispatch('local/checkLocalSaveProject')
    // console.log(user)
    // this.$store.dispatch('api/getProjects', { data: user })
  },
  mounted() {
    this.getAccount()
    console.log(this.localSaveProject)
    // this.localSaveProject = localStorage.getItem('HtmlFromMarkdown')
    // const user = JSON.stringify(sessionStorage.getItem('user'))
    // this.$store.dispatch('local/checkLocalSaveProject')
    // this.$store.dispatch('api/getProjects', { data: user })
  },
  methods: {
    getAccount() {
      this.localSaveProject = localStorage.getItem('HtmlFromMarkdown')
    },
    async jumpToNewProject() {
      //  UUIDの部分はデータベースから取ってきたデータを利用する

      // ローカルに有るかないか
      if (this.isSetLocal) {
        console.log('確認:true')
        // いいえを選択したら、消すこともなくページの遷移など何も行わない
        // if (this.jumpConfirm) {
        if (
          window.confirm(
            '\n編集中のプロジェクトがあります。\n\nこのまま別のプロジェクトへ進むと、保存されていない変更は失われます。\n本当に続行してもよろしいですか？\n'
          )
        ) {
          // ローカルのデータを消した上でデータベースから取得した作成済みのプロジェクトの編集に移る
          await this.$store.dispatch('local/deleteLocalSaveProject')
          console.log(this.newProject)
          await this.$store.dispatch('local/setLocalSaveProject', { data: this.newProject })
          localStorage.setItem('MarkdownData', '')
          // いらないかも
          localStorage.setItem('HtmlFromMarkdown', '')
          // とりあえず1のプロジェクトに
          this.$router.push({ path: `/projects/1/${this.userId}` })
        }
      } else {
        console.log('確認:false')
        // await this.$store.dispatch('api/postProjects')
        localStorage.setItem('MarkdownData', '')
        // いらないかも
        localStorage.setItem('HtmlFromMarkdown', '')
        await this.$store.dispatch('local/setLocalSaveProject', { data: this.newProject })
        this.$router.push({ path: '/projects/1/1' })
      }
    },
    jumpToEditingProject(id) {
      this.$router.push({ path: `/projects/1/${this.userId}` })
    },
    jumpToProject(id) {
      console.log(this.isSetLocal)
      if (this.isSetLocal) {
        if (this.jumpConfirm()) {
          this.$store.dispatch('local/deleteLocalSaveProject')
          this.$router.push({ path: `/projects/1/${this.userId}` })
        }
      } else {
        this.$router.push({ path: `/projects/1/${this.userId}` })
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
