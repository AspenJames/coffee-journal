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
  position: relative
  width: $content-full
  font-family: $heading-family
  background-color: $footer-color
  color: $text-color-light
  text-align: center
  padding: $sizing-medium 0

  a
    font-family: $heading-family
    font-size: inherit
    color: $navlink-color-active
    font-weight: bold
    &:hover
      color: $link-color-hover

@media screen and (max-width: $mq-phone)
  footer
    font-size: $text-size-default
</style>
