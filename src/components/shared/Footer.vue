<template>
  <footer>
    developed by
    <a href="https://aspenjames.dev/">Aspen James</a>, licensed under
    <a
      href="https://github.com/AspenJames/coffee-journal/blob/master/LICENSE.txt"
      >GNU GPLv3</a
    >
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="sass" scoped>
footer
  position: fixed
  left: 0
  bottom: 0
  width: 100%
  background-color: $footer-color
  color: $text-color-light
  text-align: center
  padding: 30px 0

  a
    color: $navlink-color
    font-weight: bold
    text-decoration: none
    &:hover
      color: $link-color-hover
      text-decoration: underline
</style>
