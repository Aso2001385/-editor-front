<!-- eslint-disable vue/no-v-html -->
<template>
  <v-main>
    <VariableHeader :route-name="'DesignEdit'" :receive="{ uuid: design.uuid, contents: temps }" />
    <v-row style="height: 100%" no-gutters>
      <v-col cols="6">
        <v-row style="height: 100%" no-gutters>
          <v-col cols="3" class="grey lighten-2">
            <v-item-group v-model="window" class="pa-3">
              <v-item v-for="(tem, index) in Object.keys(temps)" :key="index" v-slot="{ active, toggle }">
                <div>
                  <v-btn :input-value="active" large text block @click="toggle">
                    {{ temps[tem].name }}
                  </v-btn>
                </div>
              </v-item>
            </v-item-group>
          </v-col>
          <v-col cols="9" style="height: 100%" max-height="auto">
            <v-window v-model="window" style="height: 100%" class="elevation-1" vertical>
              <v-window-item
                v-for="(tem, index) in Object.keys(temps)"
                :key="index"
                class="overflow-y-auto"
                style="max-height: 90vh"
              >
                <div v-if="temps[tem].name === 'body'" class="pa-5">
                  <Body :receive="temps[tem].attributes" :all="temps" />
                </div>
                <div v-else-if="temps[tem].name === 'table'" class="pa-5">
                  <Table :receive="temps[tem].attributes" />
                </div>
                <div v-else-if="temps[tem].name === 'list'" class="pa-5">
                  <List :receive="temps[tem].attributes" />
                </div>
                <div v-else class="pa-5">
                  <Headline :receive="temps[tem].attributes" />
                </div>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" class="overflow-y-auto" style="max-height: 90vh">
        <div id="back" style="height: fit-content">
          <div id="contents" v-html="preHtml.text"></div>
        </div>
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
import { mapGetters } from 'vuex'
import { styleSetter } from '@/lib/style-set'
// import temp from '@/lib/template.json'
// import preMarkdown from '@/lib/pre-md.json'
import preHtml from '@/lib/pre-html.json'
import Body from '@/components/materials/inputs/Body.vue'
import Table from '@/components/materials/inputs/Table.vue'
import Headline from '@/components/materials/inputs/Headline.vue'
import VariableHeader from '@/components/planets/VariableHeader.vue'
import List from '@/components/materials/inputs/List.vue'
import '@/lib/pro.scss'
import { tagOrder } from '~/lib/common'

export default {
  components: {
    VariableHeader,
    Body,
    Table,
    List,
    Headline,
  },

  validate(data) {
    const id = /([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/.test(data.params.id)
    return id
  },

  data() {
    return {
      window: 0,
      temps: [],
      preHtml,
    }
  },
  computed: {
    ...mapGetters({
      markdown: 'api/designs/markdown',
      design: 'api/designs/resource',
    }),
  },
  watch: {
    temps: {
      handler() {
        styleSetter(this.temps)
      },
      deep: true,
    },
  },
  async created() {
    if (!(this.design.uuid === this.$route.params.id)) {
      await this.$store.dispatch('api/designs/get', { id: this.$route.params.id })
    }
    this.temps = tagOrder(JSON.parse(this.design.contents))
  },
  methods: {
    async seveDesign() {
      const design = {
        contents: this.temps,
      }
      await this.$store.dispatch('api/designs/put', { id: this.design.uuid, data: design })
    },
  },
}
</script>
