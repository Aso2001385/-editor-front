<!-- プロジェクトリスト-->
<template>
  <v-main class="pa-10">
    <!-- <VariableHeader :route-name="'Home'" /> -->
    <v-row>
      <v-col>
        <div class="pa-10 algin-center">
          <h1 class="mb-5">FRIDAYの機能説明</h1>
          <p v-if="authFlg === true"><a href="/projects">プロジェクトへ進む</a></p>
          <p v-else><a href="/account/login">プロジェクトへ進む</a></p>
          <div>
            <b class="text-h5">ProjectEditorについて</b>
            <div class="py-10">
              <p>
                ウェブページ上に表示される文章を入力していきます。マークダウン方式を用いて、見出しや太字などの設定もこちらで行うことができます。<br />
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
