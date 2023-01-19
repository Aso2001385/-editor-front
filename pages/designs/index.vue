<template>
  <div>
    <VariableHeader :route-name="'DesignList'" />
    <v-main class="pa-10">
      <div class="pa-10">
        <DesignList />
      </div>
    </v-main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import DesignList from '@/components/planets/DesignList.vue'
import VariableHeader from '@/components/planets/VariableHeader.vue'

export default {
  components: {
    VariableHeader,
    DesignList,
  },
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
}
</script>
