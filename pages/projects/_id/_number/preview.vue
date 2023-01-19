<!-- eslint-disable vue/no-v-html -->
<template>
  <v-main style="position: relative">
    <HeaderVue />
    <div style="position: absolute; overflow-y: auto; height: 90vh; width: 100%">
      <div id="contents" v-html="markdown"></div>
      <div class="blue darken-4">dgadgdsafa</div>
    </div>
    <div v-if="loading" style="height: 90vh; display: grid; place-items: center">
      <CircleLoadingVue :color="'green'" :size="100" :width="3" />
    </div>
  </v-main>
</template>
<script>
import { mapGetters } from 'vuex'
import HeaderVue from '@/components/parts/headers/Header.vue'
import CircleLoadingVue from '@/components/materials/loadings/CircleLoading.vue'
import { styleSetter } from '@/lib/style-set'
import template from '@/assets/json/template.json'
import '@/assets/scss/pro.scss'

export default {
  components: {
    HeaderVue,
    CircleLoadingVue,
  },

  validate(data) {
    const number = /^\d+$/.test(data.params.number)
    const id = /([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/.test(data.params.id)
    return number && id
  },

  data() {
    return {
      loading: false,
      textSize: '500px',
    }
  },
  computed: {
    ...mapGetters({
      markdown: 'api/design/markdown',
      // page: 'api/getterPage',
      // localSaveProject: 'local/getLocalSaveProject',
    }),
  },
  async created() {
    // created() {
    this.loading = true
    await this.getMarkdownPage()
    this.loading = false
    this.styles('red')
  },
  mounted() {
    this.getAccount()
  },
  methods: {
    async getAccount() {
      if (sessionStorage.getItem('user') === null) {
        await this.$router.push({ path: '/' })
      }
    },
    async getMarkdownPage() {
      // await this.$store.dispatch('api/Page', { data: { uuid: this.$route.uuid, number: this.$route.number } })
      // const text = this.page.contents
      let text = ''
      for (let i = 0; i < 10; i++) {
        text +=
          "# GoodMorningWorld\n### Dr.Stone\n---\nおはよう世界!GoodMorningWorld!\n- てん\n- てん\n  - てんてん\n```javaScript\nconsole.log(new Ans('que'))\n```\n"
      }
      await this.$store.dispatch('api/design/getMarkdown', { data: text })
    },
    styles(color) {
      styleSetter(template)
    },
  },
}
</script>
