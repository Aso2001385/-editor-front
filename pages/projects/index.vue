<!-- プロジェクトリスト-->
<template>
  <v-main class="pa-10">
    <div class="pa-10">
      <ProjectList :receive="default_previews" />
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
      markdown: '# Marked in the browserRendered by **marked**.',
      default_previews: null,
      PROJECT_LINK: 0,
      projects: [],
    }
  },
  computed: {},
  created() {
    console.log(previews)
    const data = previews
    this.default_previews = data
    localStorage.setItem('id', this.userInfo[0])
    localStorage.setItem('email', this.userInfo[1])
    localStorage.setItem('name', this.userInfo[2])
  },
  methods: {
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
