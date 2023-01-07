<template>
  <div>
    <v-row>
      <v-col cols="4" class="mt-2">
        <AddDesignCard :click-callback="() => jumpToNewDesign()" />
      </v-col>
      <v-col v-for="(design, index) in designs" :key="index" class="mt-2" cols="4">
        <PreviewCard :receive="designRelease(design)" :click-callback="() => jumpToDesign(design.uuid)" />
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
  },
  methods: {
    async jumpToNewDesign() {
      if (!this.designs) this.designs = []
      const newDesign = {
        name: 'Design' + (this.designs.length + 1),
        point: 0,
        contents: JSON.stringify(temp),
      }
      if (await this.$store.dispatch('api/designs/post', { data: newDesign })) {
        this.$router.push({ path: `/designs/${this.newDesign.uuid}/edit` })
      }
    },
    jumpToDesign(id) {
      this.$router.push({ path: `/designs/${id}/edit` })
    },
    designRelease(primitiveDesign) {
      return {
        uuid: primitiveDesign.uuid,
        name: primitiveDesign.name,
        text: htmlPreset.text,
        design: primitiveDesign.contents,
        updatedAt: primitiveDesign.updated_at,
      }
    },
  },
}
</script>

<style lang="scss">
#project-names {
  background: #eee;
  overflow: hidden;
  width: 30%;

  #project-name {
    overflow: hidden;
    white-space: nowrap;
  }
}
.container {
  background: #eee;
  overflow: hidden;
  width: 100%;
  height: 100%;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.warp {
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
