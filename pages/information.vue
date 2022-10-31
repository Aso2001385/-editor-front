<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-left pa-4 gray">
            <h3 class="text-left brack--text">会員情報</h3>
          </v-card-title>
          <v-divider class="pb-5"> </v-divider>
          <v-form>
            <div id="app">
              <input type="text" v-model="textInput" />
            </div>
          </v-form>
        </v-card>
        <v-col v-for="(preview, index) in default_previews" :key="index" cols="4" style="float: left">
          <ProjectList
            :ProjectData="
              (ProjectData = { PreviewId: preview.id, PreviewName: preview.name, PreviewText: preview.text })
            "
          />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'auth',

  // email: '1001999@s..ac.jp',
  // password: 'test-2022Aso',
}
</script>
