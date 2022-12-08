<template id="headerTemp">
  <div id="headContent">
    <header id="headId" class="header">
      <Hamburger class="ml-5" />
      <Contents />
      <h1 class="site-title">
        <a href="./"></a>
      </h1>
      <input type="text" style="background-color: white; color: black; width: 70%" />
    </header>
  </div>
</template>
<script>
import Hamburger from '@/components/parts/headers/menu/buttons/Hamburger.vue'
import Contents from '@/components/parts/headers/menu/contents/IndexModal.vue'
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
  color: white
  display: flex
  height: 74px
  justify-content: space-between
  padding-right: 120px

.site-title
  margin-right: 10%
</style>
