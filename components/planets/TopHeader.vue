<template>
  <v-app-bar color="grey darken-3" app clipped-left>
    <v-spacer />
    <MenuButton v-for="(menu, index) in menus" :key="index" :icon="menu.icon" :text="menu.text" :to="menu.to" />
  </v-app-bar>
</template>
<script>
import common from '@/plugins/common'
import MenuButton from '@/components/materials/buttons/MenuButton.vue'
export default {
  components: {
    MenuButton,
  },
  props: {
    receive: {
      type: Array,
      default: () => [
        {
          icon: 'mdi-home',
          text: 'HOME',
          to: '',
        },
      ],
    },
  },
  computed: {
    menus: {
      get() {
        return common.nestClone(this.receive)
      },
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
