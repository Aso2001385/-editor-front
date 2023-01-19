<!-- eslint-disable vue/no-v-html -->
<template>
  <v-dialog v-model="preview" fullscreen>
    <v-container fluid>
      <div v-html="saveLocalProject.text"></div>
    </v-container>
  </v-dialog>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      preview: false,
    }
  },
  computed: {
    ...mapGetters({
      saveLocalProject: 'getsaveLocalProject',
    }),
  },
}
</script>
