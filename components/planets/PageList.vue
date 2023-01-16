<template>
  <v-card class="mx-auto" width="600" height="500">
    <v-card-actions class="grey darken-3" style="height: 10%"><NeoHelper :receive="pageList" /></v-card-actions>
    <v-row style="height: 80%" no-gutters>
      <v-col cols="12" style="height: 100%" max-height="auto" class="pa-5 overflow-y-auto">
        <v-simple-table>
          <tbody>
            <tr v-for="item in pages" :key="item.number">
              <td @dblclick="jumpToAnotherPage(item.number)">
                <v-row justify="center" class="pr-1" style="cursor: pointer">
                  <v-col cols="1" class="d-flex align-center">
                    {{ item.number }}
                  </v-col>
                  <v-col cols="8" class="d-flex align-center">
                    {{ item.title }}
                  </v-col>

                  <v-tooltip v-if="now == item.number" bottom>
                    <template #activator="{ on, attrs }">
                      <v-col cols="3" class="d-flex align-center text-caption" v-bind="attrs" v-on="on">
                        <v-spacer />
                        <v-icon style="cursor: pointer" v-bind="attrs" v-on="on"> mdi-circle-edit-outline </v-icon>
                      </v-col>
                    </template>
                    <span>
                      <slot name="text">編集中のページです</slot>
                    </span>
                  </v-tooltip>

                  <v-tooltip v-else bottom>
                    <template #activator="{ on, attrs }">
                      <v-col cols="3" class="d-flex align-center text-caption" v-bind="attrs" v-on="on">
                        <v-spacer /> {{ item.updated_at | elapsedDateTime }} ago
                      </v-col>
                    </template>
                    <span>
                      <slot name="text"> {{ item.updated_at | formatter }}</slot>
                    </span>
                  </v-tooltip>
                </v-row>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-card-actions style="height: 10%"> </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import '@/lib/pro.scss'
import NeoHelper from '@/components/materials/buttons/NeoHelper.vue'
import { orderBy, dateTimeFormatter, getDiff, nestClone } from '~/lib/common'
import { pageList } from '~/lib/commons/helpers/projects/project-editor'
export default {
  filters: {
    formatter(dateTime) {
      return dateTimeFormatter(new Date(dateTime), 'YYYY/MM/DD hh:mm:ss')
    },
    elapsedDateTime(dateTime) {
      const now = new Date()
      const past = new Date(dateTime)
      const diffMs = now.getTime() - past.getTime()
      return getDiff(diffMs)
    },
  },
  components: {
    NeoHelper,
  },
  props: {
    receive: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      window: 0,
      dialog: true,
      pages: [],
      now: 0,
      pageList,
    }
  },
  computed: {
    ...mapGetters({
      project: 'api/projects/resource',
      isSet: 'local/project/isSet',
    }),
  },
  mounted() {
    this.now = this.$route.params.number
    if (this.project) {
      this.pages = orderBy(nestClone(this.project.pages), 'number', 'num', true)
    }
  },
  methods: {
    async jumpToAnotherPage(number) {
      await this.$store.dispatch('local/project/check')
      if (this.now + '' === number + '') return ''
      if (this.isSet) {
        if (!this.jumpConfirm()) return
        await this.$store.dispatch('local/project/remove')
      }
      this.$router.push({ path: `/projects/${this.project.uuid}/${number}` })
    },
    jumpConfirm() {
      return window.confirm(
        '\n編集中のプロジェクトがあります。\n\nこのまま別のプロジェクトへ進むと、保存されていない変更は失われます。\n本当に続行してもよろしいですか？\n'
      )
    },
  },
}
</script>
