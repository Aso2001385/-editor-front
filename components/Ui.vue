<template>
  <header class="header">
    <h1 class="site-title"><a href="./">クリ★スタ</a></h1>
    <Hamburger />
    <Contents />
  </header>
</template>
<script>
import Hamburger from '~/components/parts/headers/menu/buttons/Hamburger.vue'
import Contents from '~/components/parts/headers/menu/contents'
export default {
  components: {
    Hamburger,
    Contents,
  },
}
</script>
<style lang="sass" scoped>
.header
  align-items: center
  background-color: #1b1310
  border-bottom: 1px solid #fff
  color: #fff
  display: flex
  height: 74px
  justify-content: space-between
  padding: 0 120px
</style>
