<template>
  <v-main>
    <VariableHeader :route-name="'ProjectEdit'" :receive="page" />
    <client-only style="position: relative">
      <mavon-editor
        ref="mav"
        v-model="page.contents"
        disabled
        class="d-flex"
        :toolbars="markdownOptions"
        language="ja"
        style="height: 100%; width: 100%; overflow-y: auto; z-index: 1; position: absolute"
      />
    </client-only>
  </v-main>
</template>

<script>
import { mapGetters } from 'vuex'
import { markdownOptions } from '@/lib/markdown-options'
import VariableHeader from '@/components/planets/VariableHeader.vue'
import { nestClone } from '~/lib/common'
export default {
  components: {
    VariableHeader,
  },
  data() {
    return {
      firstAccess: true,
      page: {
        contents: '',
      },
      markdownOptions,
    }
  },
  computed: {
    ...mapGetters({
      project: 'api/projects/resource',
      localPage: 'local/project/page',
      isSet: 'local/project/isSet',
    }),
  },
  watch: {
    page: {
      handler() {
        if (this.firstAccess) {
          this.firstAccess = false
          return
        }
        const saveParam = nestClone(this.page)
        this.$store.dispatch('local/project/save', { data: saveParam })
      },
      deep: true,
    },
  },
  async created() {
    await this.$store.dispatch('local/project/check')
    if (!(this.project.uuid === this.$route.params.id)) {
      await this.$store.dispatch('api/projects/get', { id: this.$route.params.id })
    }
    this.setPage(this.isSet)
  },
  methods: {
    setPage(isSet) {
      const page = isSet
        ? this.localPage
        : this.project.pages.find(page => page.number === this.$route.params.number) ??
          this.project.pages.find(page => page.number === this.project.last.number) ??
          this.project.pages.find(page => page.number === 1)

      if (page) {
        this.page = nestClone(page)
        return true
      } else {
        return false
      }
    },
  },
}
</script>
