<template>
  <button class="burger-btn">
    <!-- ③ハンバーガーボタン -->
    <span class="bar bar_top"></span>
    <span class="bar bar_mid"></span>
    <span class="bar bar_bottom"></span>
  </button>
</template>

<script></script>

<style lang="sass" scoped>
.burger-btn
  display: block
  height: 39px
  position: relative
  width: 39px
  z-index: 3

  /* codepenの挙動のため
  background-color: transparent
  border: none

.bar
  background-color: #fff
  display: block
  height: 1px
  left: 50%
  position: absolute
  transform: translateX(-50%)
  width: 20px

.bar_top
  top: 10px

.bar_mid
  height: 1.5px
  top: 50.5%
  transform: translate(-50%, -50%)

.bar_bottom
  bottom: 10px

.burger-btn
  &.close
    .bar_top
      transform: translate(-50%, 10px) rotate(45deg)
      transition: transform 0.3s

    .bar_mid
      opacity: 0
      transform: translate(-900px, 0px) scale(100, 1)
      transition: 0.5s

    .bar_bottom
      transform: translate(-50%, -8px) rotate(-45deg)
      transition: transform 0.3s

  &.restore
    .bar_top
      transform: translate(-50%, 0px) rotate(0deg)
      transition: transform 0.3s

    .bar_mid
      opacity: 1
      transition: opacity 0.5s

    .bar_bottom
      transform: translate(-50%, 0px) rotate(0deg)
      transition: transform 0.3s

/* もどす
</style>
