<template>
  <div>
    <v-row>
      <v-col cols="4" class="mt-2">
        <AddDesignCard :click-callback="() => jumpToNewDesign()" />
      </v-col>
      <v-col v-for="(design, index) in releaseDesigns" :key="index" class="mt-2" cols="4">
        <PreviewCard :receive="design" :click-callback="() => jumpToDesign(design.uuid)" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import AddDesignCard from '@/components/materials/cards/AddDesignCard.vue'
import PreviewCard from '@/components/materials/cards/PreviewCard.vue'

import temp from '@/lib/template.json'
import htmlPreset from '@/lib/pre-html.json'
export default {
  components: {
    AddDesignCard,
    PreviewCard,
  },
  props: {
    receive: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      disabled: false,
      releaseDesigns: [],
    }
  },
  computed: {
    ...mapGetters({
      auth: 'api/user/auth',
      authFlg: 'api/user/authFlg',
      designs: 'api/designs/collection',
      newDesign: 'api/designs/resource',
    }),
    editingDesign: {
      get() {
        return JSON.parse(localStorage.getItem('editingDesign'))
      },
    },
  },
  async created() {
    await this.$store.dispatch('api/designs/gets')
    this.releaseDesigns = this.designs.map(design => {
      return this.designsSet(design)
    })
  },
  methods: {
    async jumpToNewDesign() {
      const newDesign = {
        name: 'Design' + ((this.designs.length ?? 0) + 1),
        point: 0,
        contents: JSON.stringify(temp),
      }
      if (await this.$store.dispatch('api/designs/post', { data: newDesign })) {
        this.$router.push({ path: `/designs/${this.newDesign.uuid}/edit` })
      }
    },
    jumpToDesign(uuid) {
      this.$router.push({ path: `/designs/${uuid}/edit` })
    },
    designsSet(primitiveDesign) {
      return {
        uuid: primitiveDesign.uuid,
        name: primitiveDesign.name,
        text: htmlPreset.text,
        design: primitiveDesign.contents,
        preview: primitiveDesign.preview,
        updatedAt: primitiveDesign.updated_at,
      }
    },
  },
}
</script>
