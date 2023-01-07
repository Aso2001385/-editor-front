<template>
  <v-main class="pa-10">
    <div class="pa-10">
      <DesignList />
    </div>
  </v-main>
</template>
<script>
import { mapGetters } from 'vuex'
import previews from '@/assets/previews.json'
import DesignList from '@/components/planets/DesignList.vue'

export default {
  components: {
    DesignList,
  },
  layout: 'design',
  data() {
    return {
      projectData: {},
      default_previews: null,
      PROJECT_LINK: 0,
      projects: [],
    }
  },
  computed: {
    ...mapGetters({
      authFlg: 'api/users/authFlg',
    }),
  },
  created() {
    const data = previews
    this.default_previews = data
  },
  mounted() {},
  methods: {},
}
</script>
