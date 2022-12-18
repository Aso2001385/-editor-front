<!-- eslint-disable vue/no-v-html -->
<template>
  <v-main>
    <v-row style="height: 100%" no-gutters>
      <v-col cols="6">
        <v-row style="height: 100%" no-gutters>
          <v-col cols="3" class="grey lighten-2">
            <v-item-group v-model="window" class="pa-3">
              <v-item v-for="(tem, index) in temps" :key="index" v-slot="{ active, toggle }">
                <div>
                  <v-btn :input-value="active" large text block @click="toggle">
                    {{ tem.name }}
                  </v-btn>
                </div>
              </v-item>
            </v-item-group>
          </v-col>
          <v-col cols="9" style="height: 100%">
            <v-window v-model="window" style="height: 100%" class="elevation-1" vertical>
              <v-window-item v-for="(tem, index) in temps" :key="index" style="height: 100%">
                <div v-if="tem.name !== 'body'" class="pa-5">
                  <Headline :receive="tem.attributes" />
                </div>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <div id="contents" v-html="markDown"></div>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapGetters } from 'vuex'
import { styleSetter } from '@/lib/style-set'
import temp from '@/lib/template.json'
import preMarkDown from '@/lib/pre-md.json'
import Headline from '@/components/materials/inputs/Headline.vue'
import '@/lib/pro.scss'
export default {
  components: {
    Headline,
  },
  layout: 'editor',
  data() {
    return {
      window: 0,
      temps: [],
    }
  },
  computed: {
    ...mapGetters({
      markDown: 'api/markDown',
      // page: 'api/getterPage',
      // localSaveProject: 'local/getLocalSaveProject',
    }),
  },
  watch: {
    temps: {
      handler() {
        styleSetter(this.temps)
        console.log(JSON.stringify(this.temps))
      },
      deep: true,
    },
  },
  async created() {
    this.temps = temp
    await this.$store.dispatch('api/getMarkDown', { data: preMarkDown })
  },
}
</script>
