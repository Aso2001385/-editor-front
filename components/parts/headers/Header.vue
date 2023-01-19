<template>
  <header class="header">
    <Hamburger />
    <Contents />
    <input id="search" type="text" />
  </header>
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
  width: 100vw
  background-color: #1b1310
  border-bottom: 1px solid #fff
  color: white
  display: flex
  height: 10vh
  justify-content: space-between
  position: relative

#search
  background-color: white
  color: black
  width: 70%
  max-width: 600px
  position: absolute
  left: 50%
  transform: translateX(-50%)
  -webkit-transform: translateX(-50%)
  -ms-transform: translateX(-50%)
  border-radius: 5px
</style>
