<template>
  <v-main>
    <client-only style="position: relative" v-if="openDialog">
      <mavon-editor
        ref="mav"
        v-model="markData"
        disabled
        class="d-flex"
        :toolbars="markdownOption"
        language="ja"
        style="height: 100%; width: 100%; overflow-y: auto; z-index: 1; position: absolute"
      />
    </client-only>
    <pagesError v-else><template #:rt>projectリストへ</template></pagesError>
  </v-main>
</template>

<script>
import { mapGetters } from 'vuex'
import { markdownOptions } from '@/lib/markdown-options'
import pagesError from '@/pages/errors/pagesError.vue'
// import HeaderVue from '@/components/parts/headers/Header.vue'
// import FooterVue from '@/components/parts/footers/Footer.vue'
export default {
  components: {
    pagesError,
    // HeaderVue,
    // FooterVue,
  },
  layout: 'editor',
  data() {
    return {
      markData: '# タイトル \n ## サブタイトル',
      markdownOption: markdownOptions,
      setOpenFlg: false,
      openDialog: true,
      headerHei: '0px',
      footerHei: '10px',
      contetntHei: '0px',
      editorFlg: true,
      htmlData: '',
    }
  },
  computed: {
    ...mapGetters({
      localSaveProject: 'local/getLocalSaveProject',
    }),
  },
  created() {
    const answer = 790 * 0.1
    this.footerHei = Math.ceil(answer) + 'px'
  },
  mounted() {
    const project = this.localSaveProject
    this.markData = project.contents
    console.log('UUID : ' + project.uuid)
    this.markData = localStorage.getItem('MarkdownData')
    const user = sessionStorage.getItem('user')
    console.log('sessionから持ってこれているかの確認')
    console.log(user)
    const getUrl = this.$route.fullPath
    const baseUrl = '/projects/'
    //  「projects/」移行のURLを取得している
    const Url = getUrl.substring(getUrl.indexOf(baseUrl) + 10)
    console.log(Url)
    if (!Url.includes('/')) {
      // 存在しているuuidかを確かめてない場合に遷移させる
      this.openDialog = false
    } else {
      // UUIDの部分がユーザーによって変わるようにする 未実装
      this.$router.push({ path: '/projects/UUID/1' })
    }
  },
  methods: {
    async EditorData() {
      localStorage.setItem('MarkdownData', this.markData)
      // localStorage.setItem('HtmlFromMarkdown', marked(this.markData))
      const template = document.getElementsByClassName('v-show-content').item(0)
      const perment = document.getElementsByClassName('v-note-show').item(0)
      const editScreen = document.getElementsByClassName('v-note-edit').item(0)
      // const header = document.getElementById('nameHeader')
      // const footer = document.getElementById('nameFooter')
      // perment.insertBefore(header, template)
      const impo = document.importNode(template, true)
      //  ここでよくわからない現象が起きている
      // 104行目のconsoleを実行したら103行目の結果にv-show-contentの中にfooterの記述が入る
      // 104行目がない場合は103行目の結果は挿入されず表示される
      console.log(template)
      console.log(impo)
      // console.log(
      //   document
      //     .getElementsByClassName('v-show-content')[0]
      //     .appendChild(document.createTextNode(impo.appendChild(footer)))
      // )
      console.log(perment)
      const headerDom = document.getElementById('nameHeader')
      const displayScreen = document.getElementsByClassName('v-note-show').item(0)
      // pcに合わせたサイズを指定している
      displayScreen.style.height = Math.floor(window.innerHeight / 8 - 3)
      editScreen.style.height = Math.floor(window.innerHeight / 8 - 3)
      console.log(displayScreen.style.height)
      const headerRect = headerDom.getBoundingClientRect()
      const displayRect = await displayScreen.getBoundingClientRect()
      console.log(Math.ceil(headerRect.height))
      console.log(Math.ceil(displayRect.height))
      const difficultStyle = document.getElementsByClassName('v-show-content').item(0)
      console.log(difficultStyle)
      difficultStyle.style.marginTop = Math.ceil(headerRect.height) + 'px'
      // 余裕を保つためにプラス10している
      const plusPaddingSpace = Math.ceil(headerRect.height) + 10
      difficultStyle.style.paddingBottom = plusPaddingSpace + 'px'
    },
    updated() {
      const projectData = {
        id: 'UUID',
        number: '2',
        name: 'testPro',
        primaryColor: '#F57C00',
        secondaryColor: '#FFB74D',
        text: this.markData,
        texteditor: '# タイトル## サブタイトル* ジャンル１* 項目１* 項目２**** ジャンル',
      }
      this.$store.dispatch('local/setLocalSaveProject', { data: projectData })
      // this.$store.dispatch('api/getMarkDown', { data: this.markData })
    },
  },
}
</script>
<style scoped>
pre {
  background-color: darkgray !important;
  border-radius: 0 !important;
}

code {
  display: inline-block !important;
  padding: 0.1em 0.25em !important; /* 文字周りの余白 */
  color: aquamarine; /* 文字色 */
}
</style>

<!-- <style lang="sass">
.v-note-show
  overflow: hidden !important
.v-show-content
  position: relative
  overflow: hidden !important
  overflow-y: auto
#nameHeader
  position: fixed
  width: 50%
  z-index: 2
#nameFooter
  width: 50%
  z-index: 2
</style> -->
