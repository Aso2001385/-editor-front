<template>
  <v-app-bar color="grey darken-3" app clipped-left>
    <v-row>
      <v-col cols="3" class="d-flex align-center">
        <div class="white--text text-p" style="cursor: pointer" @click="home">
          <span class="text-h5 mr-5">FRIDAY EDITOR</span><br />{{ routeName }}
        </div>
      </v-col>
      <v-col cols="1" class="d-flex align-center">
        <MenuButton :click-callback="back">
          <template #icon>mdi-arrow-u-down-left-bold</template>
          <template #text>前のページへ戻ります</template>
        </MenuButton>
      </v-col>
      <v-col cols="1" class="d-flex align-center">
        <MenuButton :to="'/account'">
          <template v-slot:icon>mdi-account-circle</template>
          <template v-slot:text>ACCOUNT</template>
        </MenuButton>
      </v-col>
      <v-spacer />
    </v-row>
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
