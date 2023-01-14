<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card class="mx-auto" width="800" height="500" hover>
    <v-card-actions class="grey darken-3" style="height: 10%"> </v-card-actions>
    <v-row class="overflow-y-auto" style="height: 80%" no-gutters>
      <div id="back" style="height: 100%; width: 100%">
        <div id="contents" style="max-height: 100%" v-html="text"></div>
      </div>
    </v-row>
    <v-card-actions class="grey darken-3" style="height: 10%"> </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { styleSetter } from '@/lib/style-set'
import { nestClone } from '@/lib/common'

import '@/lib/pro.scss'

export default {
  components: {},
  props: {
    receive: {
      type: Object || Array,
      default: () => ({}),
    },
  },
  data() {
    return {
      window: 0,
      text: '',
    }
  },
  computed: {
    ...mapGetters({
      project: 'api/projects/resource',
      markdown: 'api/projects/markdown',
      markdownText: 'api/projects/markdownText',
      design: 'api/designs/resource',
      local: 'local/project/get',
      isSet: 'local/project/isSet',
    }),
  },

  async created() {
    const page = nestClone(this.receive)
    const primitive = this.local.project.text ?? page.contents
    if (this.markdown === '' || this.local.project.text !== this.markdownText) {
      await this.$store.dispatch('api/projects/getMarkdown', { data: primitive })
    }
    this.text = this.markdown
    if (await this.$store.dispatch('api/designs/get', { id: page.design_uuid })) {
      styleSetter(JSON.parse(this.design.contents))
    }
  },
  methods: {},
}
</script>
