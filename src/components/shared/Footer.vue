<template>
  <footer>
    developed by
    <a href="https://aspenjames.dev/">Aspen James</a>, licensed under
    <a
      href="https://github.com/AspenJames/coffee-journal/blob/master/LICENSE.txt"
      >GNU GPLv<span id="digit">3</span></a
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
  font-family: Raphtalia
  background-color: $footer-color
  color: $text-color-light
  text-align: center
  padding: 30px 0

  a
    font-family: Rozanova
    font-size: inherit
    color: $navlink-color-active
    font-weight: bold
    &:hover
      color: $link-color-hover

span#digit
  font-family: Helvetica
  color: inherit
  font-size: inherit

@media screen and (max-width: $mq-phone)
  footer
    font-size: $text-size-default
</style>
