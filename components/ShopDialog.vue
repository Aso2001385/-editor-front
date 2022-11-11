<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="justify-center text-h5 indigo darken-1 white--text"> 確認 </v-card-title>
        <v-card-text class="pt-5"> 入手 </v-card-text>
        <v-card-text class="pt-5"> アップグレード </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" icon @click="dialog = false"><v-icon> mdi-close-circle </v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
