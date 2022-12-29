<!-- eslint-disable vue/no-v-html -->
<template>
  <v-main style="position: relative">
    <HeaderVue />
    <div style="position: absolute; overflow-y: auto; height: 90vh; width: 100%">
      <div id="contents" v-html="markDown"></div>
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
import template from '@/lib/template.json'
import '@/lib/pro.scss'

export default {
  components: {
    HeaderVue,
    CircleLoadingVue,
  },
  data() {
    return {
      loading: false,
      textSize: '500px',
    }
  },
  computed: {
    ...mapGetters({
      markDown: 'api/design/markDown',
      // page: 'api/getterPage',
      // localSaveProject: 'local/getLocalSaveProject',
    }),
  },
  async created() {
    // created() {
    this.loading = true
    await this.getMarkDownPage()
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
    async getMarkDownPage() {
      // await this.$store.dispatch('api/Page', { data: { uuid: this.$route.uuid, number: this.$route.number } })
      // const text = this.page.contents
      let text = ''
      for (let i = 0; i < 10; i++) {
        text +=
          "# GoodMorningWorld\n### Dr.Stone\n---\nおはよう世界!GoodMorningWorld!\n- てん\n- てん\n  - てんてん\n```javaScript\nconsole.log(new Ans('que'))\n```\n"
      }
      await this.$store.dispatch('api/design/getMarkDown', { data: text })
    },
    styles(color) {
      styleSetter(template)
    },
  },
}
</script>
