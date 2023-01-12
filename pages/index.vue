<template>
  <v-main class="grey darken-2">
    <v-container fill-height class="grey darken-2">
      <VariableHeader :route-name="'Home'" />
      <!-- <v-rpw justify="center"> -->
      <v-card class="pa-5 mx-auto mt-5" color="grey darken-3" width="80%" height="80%" style="margin-top: 40%">
        <v-row class="mt-1 pl-5" style="height: 50%">
          <v-col cols="6" class="pt-10 pl-5">
            <v-row
              ><v-icon color="white darken-2" class="mr-1" large> mdi-file-document-edit </v-icon
              ><a class="white--text text-h4" @click="submit('projects')">ProjectEditor</a></v-row
            >
            <v-row class="mt-10">
              <v-col cols="11" class="white--text ml-6"
                >ウェブページ上に表示される文章を入力していきます。 マークダウン方式を用いて、見出しや太字などの設定も
                こちらで行うことができます。</v-col
              >
            </v-row>
          </v-col>
          <v-divider vertical dark></v-divider>
          <v-col cols="6" class="pt-10 pl-5">
            <v-row
              ><v-icon color="white darken-2" class="mr-1 ml-6" large> mdi-pencil-ruler </v-icon
              ><a class="white--text text-h4" @click="submit('designs')">DesignEditor</a></v-row
            >
            <v-row class="mt-10"
              ><v-col cols="11" class="white--text ml-13"
                >文字の色や背景色をこちらで指定します。 CSSのようにして、こちらで定義したものをProjectEditer側で
                適用することが可能です。</v-col
              ></v-row
            >
          </v-col>
        </v-row>
        <v-divider dark></v-divider>
        <v-row class="pt-5 pl-5" style="height: 50%">
          <v-col cols="6" class="pt-10 pl-5">
            <v-row
              ><v-icon color="white darken-2" class="mr-1" large> mdi-book-open-variant </v-icon
              ><a class="white--text text-h4" @click="submit('explanation')">プロジェクト説明</a></v-row
            >
            <v-row class="mt-10"><v-col cols="11" class="white--text ml-6"></v-col></v-row>
          </v-col>
          <v-divider vertical dark></v-divider>
          <v-col cols="6" class="pt-10 pl-5">
            <v-row
              ><v-icon color="white darken-2" class="mr-1 ml-6" large> mdi-github </v-icon
              ><a class="white--text text-h4">その他・使用技術</a>
            </v-row>
            <v-row class="mt-10">
              <v-col cols="11" class="white--text ml-13"
                >フロントエンド：Nuxt.js <br />バックエンド：Laravel
                <br />インフラ：AWS<br />利用サービス[EC2・S3・CloudFront・Route53・mariaDB]</v-col
              ></v-row
            >
            <v-row class="mt-10"><v-col cols="11" class="white--text ml-13"></v-col></v-row>
          </v-col>
        </v-row>
      </v-card>
      <!-- </v-rpw> -->
    </v-container>
  </v-main>
</template>
<script>
import VariableHeader from '@/components/planets/VariableHeader.vue'
export default {
  components: {
    VariableHeader,
  },
  created() {
    this.confirmUser()
  },
  methods: {
    async confirmUser() {
      if (sessionStorage.getItem('user') === null) {
        await this.$router.push({ path: '/account/login' })
      }
    },
    submit(route) {
      this.$router.push({ path: `/${route}` })
    },
  },
}
</script>
