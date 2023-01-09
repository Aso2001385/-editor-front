<template>
  <v-main class="pa-10">
    <VariableHeader :route-name="'ProjectList'" />
    <div class="pa-10">
      <ProjectList />
    </div>
  </v-main>
</template>
<script>
import ProjectList from '@/components/planets/ProjectList.vue'
import VariableHeader from '@/components/planets/VariableHeader.vue'

export default {
  components: {
    VariableHeader,
    ProjectList,
  },
}
</script>
