<template>
  <v-main id="v-main">
    <div>
      <client-only v-if="openDialog" style="position: relative">
        <HeaderVue id="nameHeader" />
        <mavon-editor
          v-model="markData"
          disabled
          class="d-flex"
          :toolbars="markdownOption"
          language="ja"
          style="height: 100%; width: 100%; z-index: 1; overflow-y: auto; position: absolute"
          @change="EditorData()"
        />
        <FooterVue id="nameFooter" :height="footerHei" />
      </client-only>

      <pagesError v-else><template v-slot:rt>projectリストへ</template></pagesError>
    </div>
  </v-main>
</template>

<script>
import { marked } from 'marked'
import pagesError from '@/pages/errors/pagesError.vue'
import HeaderVue from '@/components/parts/headers/Header.vue'
import FooterVue from '@/components/parts/footers/Footer.vue'
export default {
  components: {
    pagesError,
    HeaderVue,
    FooterVue,
  },
  layout: 'editor',
  data() {
    return {
      markData: '# タイトル \n ## サブタイトル',
      markdownOption: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        code: true,
        table: true,
        fullscreen: true,
        htmlcode: true,
      },
      setOpenFlg: false,
      openDialog: true,
      headerHei: '0px',
      footerHei: '10px',
      contetntHei: '0px',
      editorFlg: true,
      htmlData: '',
    }
  },
  created() {
    const answer = 790 * 0.1
    this.footerHei = Math.ceil(answer) + 'px'
  },
  mounted() {
    this.markData = localStorage.getItem('MarkdownData')
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
      localStorage.setItem('HtmlFromMarkdown', marked(this.markData))
      const template = document.getElementsByClassName('v-show-content').item(0)
      // console.log(template)
      const perment = document.getElementsByClassName('v-note-show').item(0)
      const editScreen = document.getElementsByClassName('v-note-edit').item(0)
      const header = document.getElementById('nameHeader')
      const footer = document.getElementById('nameFooter')

      // const inp = document.importNode(header, true)
      // const footInp = document.importNode(footer, true)
      perment.insertBefore(header, template)
      // perment.insertBefore(footer, template.nextSibling)
      // perment.insertBefore(footer, document.importNode(template, true))
      const impo = document.importNode(template, true)
      //  ここでよくわからない現象が起きている
      // 104行目のconsoleを実行したら103行目の結果にv-show-contentの中にfooterの記述が入る
      // 104行目がない場合は103行目の結果は挿入されず表示される
      console.log(impo)
      console.log(
        document
          .getElementsByClassName('v-show-content')[0]
          .appendChild(document.createTextNode(impo.appendChild(footer)))
      )
      // const getData = document
      //   .getElementsByClassName('v-show-content')[0]
      //   .appendChild(document.createTextNode(document.importNode(template, true)))
      // console.log(getData)

      // perment.insertBefore(header, getData)
      // console.log(lastElementChild + 'こ要素取得')
      // const textbox_element = document.querySelector('p')
      // textbox_element.id = 'footer_dev'
      // 新しいHTML要素を作成
      // const new_element = document.createElement('div')
      // new_element.textContent = '親要素'
      // // 指定した要素の中の末尾に挿入
      // textbox_element.appendChild(new_element)

      // const footerDev = document.getElementById('footer_dev')
      // template.insertBefore(footer, footerDev)

      console.log(perment)
      console.log('permentの中身を確認')
      // console.log(footInp)
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

<!-- height: 85vh -->
<style lang="sass">
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
</style>
