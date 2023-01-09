<template>
  <v-main class="pa-10">
    <VariableHeader :route-name="'ProjectList'" />
    <div class="pa-10">
      <ProjectList />
    </div>
  </v-main>
</template>
<script>
import { mapGetters } from 'vuex'
import previews from '@/assets/previews.json'
import ProjectList from '@/components/planets/ProjectList.vue'
import VariableHeader from '@/components/planets/VariableHeader.vue'

export default {
  components: {
    VariableHeader,
    ProjectList,
  },
  layout: 'design',
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
      projects: 'api/projects/collection',
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
