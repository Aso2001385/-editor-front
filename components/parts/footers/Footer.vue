<template id="footerTemp">
  <div id="headContent">
    <footer id="footer">
      <p class="p-tag"></p>
    </footer>
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
  mounted() {
    console.log(this.height)
    // const footerStyle = document.getElementById('footer')
    // footerStyle.style.height = this.height
  },
}
</script>

<style lang="sass" scoped>
#footer
  background-color: black
  padding-top: 5%
  color: white
  z-index: 2
</style>
