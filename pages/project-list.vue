<template>
  <v-container style="background-color:#dcdcdc" class="mt-10%">
    <v-icon x-large color="#0085ff" style="font-size:80px; float:left">mdi-account-circle-outline</v-icon>
    <ProjectList />
  </v-container>
  </template>

<script>
import ProjectList from '~/components/ProjectList.vue';
export default {
    data() {
        return {
        };
    },
    components: { ProjectList }
}
</script>
