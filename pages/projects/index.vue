<template>
  <v-main class="pa-10">
    <div class="pa-10">
      <ProjectList :receive="default_previews.projects" />
    </div>
  </v-main>
</template>
<script>
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
      projects: [],
    }
  },

  computed: {
    user() {
      return this.$store.state.user
    },
  },
  created() {
    const data = previews
    this.default_previews = data
    const getUser = JSON.parse(sessionStorage.getItem('user'))
    console.log(getUser.id)
    const userId = getUser.id
    // apiで取得してその情報を渡す
    this.$store.dispatch('api/getProjects', { id: userId })
    this.default_previews = JSON.parse(sessionStorage.getItem('userProjects'))
  },
  mounted() {
    this.getAccount()
  },
  methods: {
    getAccount() {
      console.log('this.user')
      const usr = this.$store.state.user
      console.log(usr)
    },
    getProjects() {
      // this.$store.dispatch('api/getProjects', { data: user })
    },

    // RoutePages(value) {
    //   const confilmMarkdownData = localStorage.getItem('MarkdownData')
    //   if (confilmMarkdownData !== '') {
    //     //  前回編集していた情報が0(新規作成ページ)だった場合そのデータを保存しておくか削除させるかをユーザーに決めさせる
    //     const confirm = window.confirm(
    //       '編集途中のプロジェクトがあります。保存しますか？(保存しない場合、編集したデータは破棄されます。)'
    //     )
    //     if (confirm) {
    //       // データベースにデータの保存
    //       this.$router.push({ path: `/projects/${value}` })
    //     } else {
    //       localStorage.setItem('projectCreateUpdate', value)
    //       localStorage.setItem('MarkdownData', '')
    //       localStorage.setItem('HtmlFromMarkdown', '')
    //       this.$router.push({ path: `/projects/${value}` })
    //     }
    //   } else {
    //     this.$router.push({ path: `/projects/${value}` })
    //   }
    // },
  },
}
</script>
