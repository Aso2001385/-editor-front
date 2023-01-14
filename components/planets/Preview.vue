<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card class="mx-auto" width="800" height="500" hover>
    <v-card-actions class="grey darken-3" style="height: 10%"> </v-card-actions>
    <v-row class="overflow-y-auto" style="height: 80%" no-gutters>
      <div>
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
import gitMarkdownApi from '@/lib/git-markdown-api'

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
      design: 'api/designs/resource',
      local: 'local/project/get',
      isSet: 'local/project/isSet',
    }),
  },

  async created() {
    console.log('created')
    let text = ''
    const page = nestClone(this.receive)
    if (this.isSet) {
      text = await gitMarkdownApi(page.contents)
    } else {
      text = await gitMarkdownApi(this.local.contents)
    }
    this.text = text
    if (await this.$store.dispatch('api/designs/get', { id: page.design_uuid })) {
      styleSetter(JSON.parse(this.design.contents))
    }
  },

  methods: {},
}
</script>
