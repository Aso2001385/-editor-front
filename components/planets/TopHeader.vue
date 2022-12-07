<template>
  <v-app-bar color="grey darken-3" app clipped-left>
    <MenuButton :to="'/projects'">
      <template v-slot:icon>mdi-home</template>
      <template v-slot:text>HOME</template>
    </MenuButton>

    <MenuButton :to="'/account'">
      <template v-slot:icon>mdi-account-circle</template>
      <template v-slot:text>ACCOUNT</template>
    </MenuButton>
    <v-spacer />
  </v-app-bar>
</template>
<script>
import MenuButton from '@/components/materials/buttons/MenuButton.vue'
export default {
  components: {
    MenuButton,
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
