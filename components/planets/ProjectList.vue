<template>
  <div>
    <v-row>
      <v-col cols="4" class="mt-2">
        <AddProjectCard :click-callback="() => jumpToNewProject()" />
      </v-col>
      <v-col v-if="isSet" class="mt-2" cols="4">
        <EditingProjectCard :receive="releaseEditingProject" :click-callback="() => jumpToEditingProject()" />
      </v-col>
      <v-col v-for="(project, index) in releaseProjects" :key="index" class="mt-2" cols="4">
        <PreviewCard :receive="project" :click-callback="() => jumpToProject(project.uuid, project.number)" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import AddProjectCard from '@/components/materials/cards/AddProjectCard.vue'
import EditingProjectCard from '@/components/materials/cards/EditingProjectCard.vue'
import PreviewCard from '@/components/materials/cards/PreviewCard.vue'
export default {
  components: {
    AddProjectCard,
    EditingProjectCard,
    PreviewCard,
  },
  data() {
    return {
      disabled: false,
      releaseEditingProject: {},
      releaseProjects: [],
    }
  },
  computed: {
    ...mapGetters({
      projects: 'api/projects/collection',
      newProject: 'api/projects/resource',
      localProject: 'local/project/get',
      localPreviews: 'local/project/previews',
      isSet: 'local/project/isSet',
      back: 'common/back',
    }),
  },
  async created() {
    this.$store.dispatch('common/backed')
    await this.$store.dispatch('local/project/check')
    if (this.isSet) {
      this.releaseEditingProject = this.localProject.project
    }
    await this.$store.dispatch('api/projects/gets')
    this.releaseProjects = this.projects.reduce((accumulators, currentValue) => {
      if (this.localProject?.project.uuid !== currentValue.uuid) accumulators.push(this.projectSet(currentValue))
      return accumulators
    }, [])
  },
  methods: {
    async jumpToNewProject() {
      this.$store.dispatch('common/loadingStart')
      if (this.isSet) {
        if (!this.jumpConfirm()) return
        await this.$store.dispatch('local/project/remove')
      }
      if (await this.createNewProject()) {
        this.$router.push({ path: `/projects/${this.newProject.uuid}/1` })
      }
      this.$store.dispatch('common/loadingEnd')
    },
    jumpToEditingProject() {
      const project = this.localProject.project
      this.$router.push({ path: `/projects/${project.uuid}/${project.number}` })
    },
    jumpToProject(uuid, number) {
      if (this.isSet) {
        if (!this.jumpConfirm()) {
          return
        }
      }
      this.$store.dispatch('local/project/remove')
      this.$router.push({ path: `/projects/${uuid}/${number}` })
    },
    jumpConfirm() {
      return window.confirm(
        '\n編集中のプロジェクトがあります。\n\nこのまま別のプロジェクトへ進むと、保存されていない変更は失われます。\n本当に続行してもよろしいですか？\n'
      )
    },
    projectSet(primitiveProject) {
      return {
        uuid: primitiveProject.uuid,
        number: primitiveProject.last.number,
        name: primitiveProject.name,
        text: primitiveProject.last.contents,
        preview: this.localPreviews?.[primitiveProject.uuid] ?? null,
        updatedAt: primitiveProject.last.updated_at,
      }
    },
    async createNewProject() {
      const createProject = {
        name: `Project ${(this.projects.length ?? 0) + 1}`,
        ui: JSON.stringify({ id: 0, name: 'ZERO' }),
      }
      return await this.$store.dispatch('api/projects/post', { data: createProject })
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
