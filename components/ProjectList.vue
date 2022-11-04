<template>
  <v-container style="background-color: #dcdcdc">
    <v-row>
      <div
        :to="project_link"
        class="white--text"
        style="text-decoration: none"
        @click="RoutePages(ProjectData.PreviewId)"
      >
        <v-row style="float: left; background-color: white">
          <!-- <v-card style="background-color: white; height: 20%"> -->
          <div class="pt-5 pb-5" style="width: 100%" :class="ProjectData.PreviewBackColor">
            <v-col
              cols="12"
              class="black--text"
              style="height: 9rem; width: 60rem; margin-left: 1%; padding-bottom: 10rem"
            >
              <div id="container" class="warp" v-html="ProjectData.PreviewText" style="height: 5rem; width: 80%"></div>
            </v-col>
          </div>
          <v-col
            cols="12"
            class="black--text"
            style="border-top: 1px solid lightgrey; background: transparent; overflow: hidden; width: 100%"
          >
            <p
              id="project-name"
              style="
                font-size: 17px;
                margin-left: 2.5%;
                color: #212121;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 12rem;
              "
            >
              {{ ProjectData.PreviewName }}
            </p>
          </v-col>
          <!-- </v-card> -->
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>

<script>
// import previews from '~/assets/previews.json'

export default {
  props: {
    ProjectData: Object,
  },
  data() {
    return {
      markdown: '# Marked in the browserRendered by **marked**.',
      project_link: 'create-editor',
      EDITORSETTING: 1,
    }
  },
  mounted() {
    const userProjectId = localStorage.getItem('projectCreateUpdate')
    if (this.ProjectData.ProjectLink === this.EDITORSETTING) {
      // Webエディターデザイン設定のページでは遷移をせずhtml表示の部分に反映させるようにする
      // this.project_link = 'editor-setting'
      this.project_link = `/projects/${userProjectId}/pages/${userProjectId}/settings`
      // this.$router.push({ path: `/projects/${userProjectId}/pages/${userProjectId}/settings` })
    }
  },
  methods: {
    RoutePages(value) {
      // 押された瞬間にローカルに押されたページ(createなのかupdateなのかの判定に)
      localStorage.setItem('projectCreateUpdate', value)
      console.log(this.ProjectData)
      if (this.ProjectData.ProjectLink === this.EDITORSETTING) {
        this.$router.push({ path: `${this.project_link}` })
      } else {
        this.$router.push({ path: `/projects/${value}` })
      }
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
