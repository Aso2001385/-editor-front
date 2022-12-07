<template>
  <v-main>
    <client-only style="position: relative">
      <mavon-editor
        ref="mav"
        v-model="markData"
        disabled
        class="d-flex"
        :toolbars="markdownOption"
        language="ja"
        style="height: 100%; width: 100%; overflow-y: auto; z-index: 1; position: absolute"
      />
    </client-only>
  </v-main>
</template>

<script>
import { mapGetters } from 'vuex'
import { markdownOptions } from '@/lib/markdown-options'

export default {
  layout: 'editor',
  data() {
    return {
      markData: '# タイトル \n ## サブタイトル',
      markdownOption: markdownOptions,
      setOpenFlg: false,
    }
  },
  computed: {
    ...mapGetters({
      localSaveProject: 'local/getLocalSaveProject',
    }),
  },
  created() {
    // URLを取得している
    console.log(location.href)
  },
  mounted() {
    const project = this.localSaveProject
    this.markData = project.contents
    console.log('UUID : ' + project.uuid)
  },
  updated() {
    const projectData = {
      id: 'UUID',
      number: '2',
      name: 'testPro',
      primaryColor: '#F57C00',
      secondaryColor: '#FFB74D',
      text: this.markData,
      texteditor: '# タイトル## サブタイトル* ジャンル１* 項目１* 項目２**** ジャンル',
    }
    this.$store.dispatch('local/setLocalSaveProject', { data: projectData })
  },
}
</script>
