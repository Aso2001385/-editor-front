<template>
  <v-main class="grey darken-2">
    <v-container fill-height class="grey darken-2">
      <VariableHeader :route-name="'Home'" />
      <v-card class="pa-5 mx-auto mt-0" color="grey darken-3" width="80%" height="80%" style="margin-top: 40%">
        <v-row class="mt-0 pl-5" style="height: 50%">
          <!-- <v-col cols="6" class="pt-10">
            <v-row
              ><v-icon color="white darken-2" class="mr-1" large> mdi-file-document-edit </v-icon
              ><a class="white--text text-h6 pt-1" @click="submit('projects')">ProjectEditor</a></v-row
            >
            <v-row class="mt-9">
              <v-col cols="10" class="white--text"
                >ウェブページ上に表示される文章を入力していきます。 マークダウン方式を用いて、見出しや太字などの設定も
                こちらで行うことができます。</v-col
              >
            </v-row>
          </v-col> -->
          <v-card class="mr-10" color="grey darken-3" width="45%" outlined @click="submit('projects')">
            <v-col cols="12" class="pt-0 white--text">
              <v-card-title>
                <v-icon color="white darken-2" class="mr-1" large> mdi-file-document-edit </v-icon>
                <p class="text-h6 pt-4 mb-2">ProjectEditor</p>
              </v-card-title>
              <v-card-text>
                <v-col cols="12" class="white--text ml-7"
                  >ウェブページ上に表示される文章を入力していきます。 マークダウン方式を用いて、見出しや太字などの設定も
                  こちらで行うことができます。</v-col
                >
              </v-card-text>
            </v-col>
          </v-card>
          <v-divider vertical dark></v-divider>
          <v-card class="ml-10" color="grey darken-3" width="40%" outlined @click="submit('designs')">
            <v-col cols="12" class="pt-0 white--text">
              <v-card-title>
                <v-icon color="white darken-2" class="mr-1" large> mdi-pencil-ruler</v-icon>
                <p class="text-h6 pt-4 mb-2">DesignEditor</p>
              </v-card-title>
              <v-card-text>
                <v-col cols="12" class="white--text ml-7"
                  >文字の色や背景色をこちらで指定します。 CSSのようにして、こちらで定義したものをProjectEditer側で
                  適用することが可能です。</v-col
                >
              </v-card-text>
            </v-col>
          </v-card>
          <!-- <v-col cols="6" class="pt-10">
            <v-row
              ><v-icon color="white darken-2" class="mr-1 ml-6" large> mdi-pencil-ruler </v-icon
              ><a class="white--text text-h6 pt-1" @click="submit('designs')">DesignEditor</a></v-row
            >
            <v-row class="mt-9 mb-5"
              ><v-col cols="10" class="white--text ml-5"
                >文字の色や背景色をこちらで指定します。 CSSのようにして、こちらで定義したものをProjectEditer側で
                適用することが可能です。</v-col
              ></v-row
            >
          </v-col> -->
        </v-row>
        <v-divider dark class="mt-3"></v-divider>
        <v-row class="pt-3 pl-5" style="height: 50%">
          <!-- <v-col cols="6" class="pt-15">
            <v-row
              ><v-icon color="white darken-2" class="mr-1" large> mdi-book-open-variant </v-icon
              ><a class="white--text text-h6 pt-1" @click="submit('explanation')"
                ><strong>プロジェクト説明</strong></a
              ></v-row
            >
          </v-col> -->
          <v-card color="grey darken-3 mr-10" width="45%" outlined>
            <v-col cols="12" class="white--text">
              <v-card-title>
                <v-icon color="white darken-2" class="mr-1" large> mdi-file-document-edit </v-icon>
                <p class="text-h6 pt-5">プロジェクト説明</p>
              </v-card-title>
              <v-card-text>
                <v-col cols="10" class="ml-9 white--text white--text"
                  ><a href="#" @click="submit('explanation')">詳しくはこちら</a></v-col
                >
              </v-card-text>
            </v-col>
          </v-card>
          <v-divider vertical dark></v-divider>
          <!-- <v-col cols="6" class="pt-15">
            <v-row
              ><v-icon color="white darken-2" class="mr-1 ml-6" large> mdi-github </v-icon
              ><a class="white--text text-h6 pt-1"><strong>その他・使用技術</strong></a>
            </v-row>
            <v-row class="mt-10">
              <v-col cols="12" class="white--text ml-6"
                ><a href="https://github.com/Aso2001385/editor-frontend">FRONTENDのリポジトリ</a></v-col
              >
              <v-col cols="12" class="white--text ml-6"
                ><a href="https://github.com/Aso2001385/editor-backend">BACKENDのリポジトリ</a></v-col
              >
            </v-row>
          </v-col> -->
          <v-card class="ml-10" color="grey darken-3" width="40%" outlined>
            <v-col cols="12" class="white--text">
              <v-card-title>
                <v-icon color="white darken-2" class="mr-1" large> mdi-file-document-edit </v-icon>
                <p class="text-h6 pt-5">リポジトリ</p>
              </v-card-title>
              <v-card-text class="mb-5">
                <v-row class="mt-0">
                  <v-col cols="12" class="white--text ml-9"
                    ><a href="https://github.com/Aso2001385/editor-frontend">FRONTENDのリポジトリ</a></v-col
                  >
                  <v-col cols="12" class="white--text ml-9"
                    ><a href="https://github.com/Aso2001385/editor-backend">BACKENDのリポジトリ</a></v-col
                  ></v-row
                >
              </v-card-text>
            </v-col>
          </v-card>
        </v-row>
      </v-card>
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
    if (!sessionStorage.getItem('user')) this.$router.push({ path: `/explanation` })
  },
  methods: {
    submit(route) {
      this.$router.push({ path: `/${route}` })
    },
  },
}
</script>
