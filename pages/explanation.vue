<!-- プロジェクトリスト-->
<template>
  <v-main class="pa-10 grey darken-3" style="color: white">
    <!-- <VariableHeader :route-name="'Home'" /> -->
    <v-row>
      <v-col>
        <div class="pa-10 algin-center">
          <h1 class="mb-5">FRIDAYの機能説明</h1>
          <p v-if="authFlg === true"><a href="/projects">プロジェクトへ進む</a></p>
          <p v-else><a href="/account/login">プロジェクトへ進む</a></p>
          <div>
            <b class="text-h5"
              ><v-icon class="mr-2" color="white">mdi-file-document-edit</v-icon>ProjectEditorについて</b
            >
            <div class="py-5">
              <p>
                ウェブページ上に表示される文章を入力していきます。マークダウン方式を用いて、見出しや太字などの設定もこちらで行うことができます。<br />
              </p>
            </div>
            <v-divider class="mb-5" color="white"></v-divider>
            <b class="text-h5"><v-icon class="mr-2" color="white">mdi-pencil-ruler</v-icon>DesignEditorについて</b>
            <div class="py-5">
              <p>
                文字の色や背景色をこちらで指定します。 CSSのようにして、こちらで定義したものをProjectEditer側で
                適用することが可能です。<br />
              </p>
            </div>
            <v-divider class="mb-10" color="white"></v-divider>
            <b class="text-h5"><v-icon class="mr-2" color="white">mdi-book-open-variant</v-icon>利用手順</b>
            <div class="py-5">
              <p>
                1. 会員登録を行う(<span><nuxt-link to="/account/signup">会員登録へ</nuxt-link></span
                >)<br />
                2. 登録した内容でログインをする(<span><nuxt-link to="/account/login">ログインへ</nuxt-link></span
                >)<br />
                3. トップページからProjectEditorやDesignEditorなどを選択し、サービスを利用していく<br />
                4. はじめにprojectを作成する前に、DesigneditorからDesignを作成していく<br />
                <v-icon color="white">mdi-arrow-right-bottom-bold</v-icon>Design作成の流れ<br />
                <span class="exp ml-5">1. DesignListから新規登録の＋ボタンを押し、デザインを決めていく</span><br />
                <span class="exp ml-5">2. Bodyタグでは、画面全体の背景色、文字の間隔、文字の色などを設定していく</span
                ><br />
                <span class="exp ml-5">3. H1からPタグでは、文字のサイズや横幅、高さ、色、間隔などを設定していく</span
                ><br />
                <span class="exp ml-5"
                  >4. TABLEやLISTタグでは、背景色、ボーダーのスタイル、色、間隔、サイズなどを設定していく</span
                ><br />
                <span class="exp ml-5"
                  >5. メニューにある「プロジェクトを保存します」と出るボタンを押し、デザインを保存する</span
                ><br />
                <span class="exp ml-5"
                  >6.
                  メニューにある「前のページに戻る」と出るボタンを押しデザインリストに戻ると、作成したデザインが反映されている</span
                ><br />
                <v-icon color="white">mdi-arrow-right-bottom-bold</v-icon>Project作成の流れ<br />
                <span class="exp ml-5">1. ProjectListから新規登録の＋ボタンを押し、内容を入力していく</span><br />
                <span class="exp ml-5">2. 見出しや太字の設定をやっていく</span><br />
                <span class="exp ml-5"
                  >3. メニューにある「プロジェクトを保存します」と出るボタンを押し、プロジェクトを保存する</span
                ><br />
                <span class="exp ml-5"
                  >4.
                  メニューにある「前のページに戻る」と出るボタンを押しプロジェクトリストに戻ると、作成したプロジェクトが反映されている</span
                ><br />
              </p>
            </div>
          </div>
          <p v-if="authFlg === true"><a href="/projects">プロジェクトへ進む</a></p>
          <p v-else><a href="/account/login">プロジェクトへ進む</a></p>
        </div>
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
// import VariableHeader from '@/components/planets/VariableHeader.vue'

export default {
  // components: {
  //   VariableHeader,
  // },
  layout: 'top',
  data() {
    return {
      authFlg: false,
    }
  },
  created() {
    sessionStorage.getItem('user') !== null ? (this.authFlg = true) : (this.authFlg = false)
  },
}
</script>
