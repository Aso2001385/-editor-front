<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-left pa-4 grey darken-4">
            <h3 class="text-left white--text">会員情報</h3>
          </v-card-title>
          <v-divider class="pb-5"> </v-divider>
          <div class="pa-10">
            <v-text-field v-model="name" label="name" required></v-text-field>
            <v-row justify="center" class="mt-5">
              <v-col cols="4">
                <ApiEventButton color="grey darken-2" :click-callback="submit"> Next </ApiEventButton>
              </v-col>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/sign-up">メールアドレス・パスワードの変更ですか？こちらから変更</NuxtLink>
            </v-row>
          </div>
        </v-card>

        <v-container class="pb-10 fill-width mt-10 grey lighten-5">
          <v-row class="grey darken-2">
            <h3 class="white--text d-flex justify-left pa-4 gray">利用できるデザインセット</h3>
          </v-row>
          <v-row class="pl-10 pr-10">
            <v-card
              v-for="(preview, index) in default_previews"
              :key="index"
              class="mt-15"
              cols="6"
              style="float: left"
            >
              <ProjectList
                :ProjectData="
                  (ProjectData = {
                    PreviewId: preview.id,
                    PreviewName: preview.name,
                    PreviewText: preview.text,
                    ProjectGenre: preview.texteditor,
                    PreviewBackColor: preview.backgroundColor,
                    ProjectLink: PROJECT_LINK,
                  })
                "
              />
            </v-card>
          </v-row>
        </v-container>

        <!-- <v-col v-for="(preview, index) in default_previews" :key="index" cols="4" style="float: left">
          <ProjectList
            :ProjectData="
              (ProjectData = { PreviewId: preview.id, PreviewName: preview.name, PreviewText: preview.text })
            "
          />
        </v-col> -->
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import previews from '~/assets/previews.json'
import ProjectList from '~/components/ProjectList.vue'

export default {
  layout: 'auth',
  data() {
    return {
      name: '麻生',
      email: 'aso@gmail.com',
      password: 'aaaaa',
      default_previews: null,
      PROJECT_LINK: 2,
    }
  },

  // email: '1001999@s..ac.jp',
  // password: 'test-2022Aso',

  mounted() {
    const data = previews
    this.default_previews = data
  },
  components: { ProjectList },
}
</script>
<style lang="scss"></style>
