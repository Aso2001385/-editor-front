<template>
  <div>
    <VariableHeader :route-name="'ProjectList'" />
    <v-main class="pa-10">
      <div class="pa-10">
        <ProjectList />
      </div>
    </v-main>
  </div>
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
