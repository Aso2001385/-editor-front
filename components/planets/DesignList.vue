<template>
  <div>
    <v-row>
      <v-col cols="4" class="mt-2">
        <AddDesignCard :click-callback="() => jumpToNewDesign()" />
      </v-col>
      <v-col v-for="(disign, index) in disigns" :key="index" class="mt-2" cols="4">
        <DesignPreviewCard :receive="disign" :click-callback="() => jumpToDesign(disign.id)" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
// import { nestClone } from '@/lib/common'
import AddDesignCard from '@/components/materials/cards/AddDesignCard.vue'
import DesignPreviewCard from '@/components/materials/cards/DesignPreviewCard.vue'
import temp from '@/lib/template.json'
export default {
  components: {
    AddDesignCard,
    DesignPreviewCard,
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
      disigns: 'api/designs',
      newDisign: 'api/design',
    }),
    editingDesign: {
      get() {
        return JSON.parse(localStorage.getItem('editingDesign'))
      },
    },
  },
  async created() {
    await this.$store.dispatch('api/getDesigns')
  },
  methods: {
    async jumpToNewDesign() {
      //  UUIDの部分はデータベースから取ってきたデータを利用する
      const newDesign = {
        name: 'Design' + this.designs.length + 1,
        point: 0,
        contents: temp,
      }
      await this.$store.dispatch('api/postDesign', newDesign)
      this.$router.push({ path: `/designs/${this.newDesign.id}/edit` })
    },
    jumpToDesign(id) {
      this.$router.push({ path: `/designs/${id}/edit` })
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
