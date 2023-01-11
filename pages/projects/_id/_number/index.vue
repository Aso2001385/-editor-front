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

  validate(data) {
    const number = /^\d+$/.test(data.params.number)
    const id = /([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/.test(data.params.id)
    return number && id
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
      remotePage: 'api/projects/page',
      localProject: 'local/project/get',
      isSet: 'local/project/isSet',
    }),
  },
  watch: {
    watch: {
      $route() {
        location.reload()
      },
    },
    page: {
      handler() {
        if (this.firstAccess) {
          this.firstAccess = false
          return
        }
        const saveParam = {
          project: {
            uuid: this.project.uuid,
            number: this.project.last.number,
            name: this.project.name,
            text: this.page.contents,
            preview: this.localPreviews?.[this.project.uuid] ?? null,
            updatedAt: this.project.last.updated_at,
          },
          page: nestClone(this.page),
        }
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
    await this.$store.dispatch('api/projects/getPage', {
      id: this.$route.params.id,
      number: this.$route.params.number,
    })
    this.setPage(this.isSet)
  },
  methods: {
    setPage(isSet) {
      const page = isSet ? this.localProject.page : this.remotePage

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
