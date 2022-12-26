<template>
  <v-main class="pa-10">
    <div class="pa-10">
      <DesignList />
    </div>
  </v-main>
</template>
<script>
import previews from '@/assets/previews.json'
import DesignList from '@/components/planets/DesignList.vue'

export default {
  components: {
    DesignList,
  },
  layout: 'design',
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
      console.log('ユーザーの中身確認')
      return this.$store.state.user
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
    getAccount() {
      if (sessionStorage.getItem('user') === '') {
        this.$router.push({ path: '/' })
      }
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
