<template>
  <v-main class="pa-10 grey darken-3" style="color: white">
    <v-row>
      <v-col>
        <div class="pa-10 algin-center">
          <v-col cols="6">
            <h1 class="mb-5">FRIDAYの機能説明</h1>
            <div>
              <br /><br />
              <b class="text-h5"
                ><v-icon class="mr-2" color="white">mdi-file-document-multiple</v-icon>サービスについて</b
              >
              <div class="py-5">
                <p>サイトの内容や見た目を作成することができるサービスです。<br /></p>
              </div>
            </div>
            <v-divider class="mb-5" color="grey"></v-divider>
            <div>
              <b class="text-h5"
                ><v-icon class="mr-2" color="white">mdi-file-document-edit</v-icon>ProjectEditorについて</b
              >
              <div class="py-5">
                <p>
                  Webページ上に表示される文章を入力していきます。Markdown方式を用いて、見出しや太字などの設定もこちらで行うことができます。<br />
                </p>
              </div>
              <v-divider class="mb-5" color="grey"></v-divider>
              <b class="text-h5"><v-icon class="mr-2" color="white">mdi-pencil-ruler</v-icon>DesignEditorについて</b>
              <div class="py-5">
                <p>
                  文字の色や背景色をこちらで指定します。 CSSのようにして、こちらで定義したものをProjectEditer側で
                  適用することが可能です。<br />
                </p>
              </div>
              <v-divider class="mb-10" color="grey"></v-divider>
              <b class="text-h5"><v-icon class="mr-2" color="white">mdi-book-open-variant</v-icon>利用手順</b>
              <div class="py-5">
                トップページからProjectEditorやDesignEditorなどを選択し、サービスを利用していきます<br /><br />
                <p class="text-h5" style="border-bottom: 2px solid white; display: inline-block">Project作成の流れ</p>
                <br /><br />
                <span class="exp">1. ProjectListの「New Project」からProjectを作成していきます</span><br /><br />
                <span class="exp">2. サイトの内容の入力、見出しや太字の設定していきます</span><br /><br />
                <p class="text-h5" style="border-bottom: 2px solid white; display: inline-block">Design作成の流れ</p>
                <br /><br />
                <span class="exp">1. DesignListの「New Design」からDesignを作成していきます</span><br /><br />
                <span class="exp">2. 各タグの色や背景色などの設定していきます</span><br /><br />
              </div>
            </div>
          </v-col>
        </div>
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
export default {
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
