<template>
  <v-main class="pa-10">
    <div class="pa-10">
      <ProjectList :userId="getUser.id" :receive="default_previews" />
    </div>
  </v-main>
</template>
<script>
import { mapGetters } from 'vuex'
import previews from '@/assets/previews.json'
import ProjectList from '@/components/planets/ProjectList.vue'

export default {
  components: {
    ProjectList,
  },
  layout: 'top',
  data() {
    return {
      projectData: {},
      default_previews: null,
      PROJECT_LINK: 0,
      // projects: [],
      getUser: [],
    }
  },
  computed: {
    ...mapGetters({
      projects: 'api/projects/projects',
    }),
  },
  created() {
    this.getUser = JSON.parse(sessionStorage.getItem('user'))
    console.log(this.getUser)
    this.getAccount()
    this.default_previews = previews
  },
  methods: {
    async getAccount() {
      if (sessionStorage.getItem('user') === null) {
        await this.$router.push({ path: '/' })
      }
      if (await this.$store.dispatch('api/projects/getProjects', { data: this.getUser.id })) {
        console.log('データの取得成功')
        this.default_previews = JSON.parse()
      } else {
        console.log('作成したプロジェクトはありません')
        // からのデータを入れる
        this.default_previews = []
      }
      // if (projectFlg === true) {
      //   this.default_previews = JSON.parse(sessionStorage.getItem('userProjects'))
      // } else {

      //   this.default_previews = []
      // }

      // console.log('this.user')
      // const usr = this.$store.state.user
      // console.log(usr)
    },
  },
}
</script>
