<template>
  <div class="nav-wrapper">
    <!-- ②ナビゲーションメニュー -->
    <nav class="header-nav">
      <ul class="nav-list">
        <li class="nav-item"><a href="https://crestadesign.org/">About</a></li>
        <li class="nav-item"><a href="https://crestadesign.org/">News</a></li>
        <li class="nav-item"><a href="https://crestadesign.org/">Access</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    const burgerBtn = document.getElementsByClassName('burger-btn').item(0)

    const btnAction = () => {
      burgerBtn.classList.remove('restore')
      burgerBtn.classList.add('close')
      document.getElementsByClassName('nav-wrapper').item(0).classList.toggle('fade')
      document.querySelector('body').classList.toggle('noscroll')
      burgerBtn.addEventListener('click', btnClassRemover)
    }

    const btnClassRemover = () => {
      burgerBtn.classList.remove('close')
      burgerBtn.classList.add('restore')

      burgerBtn.removeEventListener('click', btnClassRemover)
      burgerBtn.addEventListener('click', btnAction)
    }

    burgerBtn.addEventListener('click', btnAction)
  },
}
</script>

<style lang="sass" scoped>
.nav-wrapper
  position: fixed
  height: 100vh
  width: 100vw
  left: 0
  top: 0
  opacity: 0
  visibility: hidden
  transition: 0.5s
  z-index: 2

  /*キービジュアルと.btn_triggerとの重なりの前後関係を調整

.header-nav
  background-color: #1b1310
  height: 100%
  width: 100%
  z-index: 2

.nav-list
  display: block
  left: 50%
  position: absolute
  text-align: center
  top: 50%
  transform: translate(-50%, -50%)

.nav-item
  margin-bottom: 40px
  margin-right: 0

/* メニューオープン時

.nav-wrapper.fade
  opacity: 0.9
  visibility: visible
</style>
