<template>
  <div class="about">
    <div class="callout">
      <h1>Coffee Journal</h1>
    </div>

    <div class="text">
      <p>
        Coffee Journal is an online book to keep and share your coffee recipes.
        I worked in the coffee industry for over 9 years, and I've brewed coffee
        in many different ways. Some coffees seemed to "favor" certain brew
        methods or recipes, but these were hard to reference and maintain in a
        traditional notebook. Coffee Journal gives you an online, paperless, and
        structured way to keep track of your recipe cards, with the added bonus
        of sharing and searching others' recipe cards!
      </p>
      <p v:if="!loggedIn">
        Browse some <a href="/entries">public recipe cards</a>, or
        <a href="/signup">sign up</a> for an account to start your own journal.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style lang="sass" scoped>
div.callout
  background-color: $div-card-color
  padding: $sizing-default
  margin: $sizing-xlarge auto
  width: $content-medium
  border-radius: $sizing-xlarge
  box-shadow: 0 8px 6px -2px $div-shadow-color

h1
  font-family: Raphtalia
  color: $text-color
  font-size: $heading-size-huge
  margin: $sizing-medium auto

div.text
  width: $content-wide
  height: auto
  margin: $sizing-default auto
  padding: $sizing-tiny
  font-size: $text-size-xlarge
  line-height: $line-height-default

  p
    color: $text-color
    font-size: inherit
    line-height: inherit
    margin-bottom: $sizing-default

  a
    color: $link-color
    text-decoration: none
    font-size: inherit
    line-height: inherit
    &:hover
      color: $link-color-hover
      text-decoration: underline
      cursor: pointer

@media screen and (max-width: $mq-phone)
  h1
    font-size: $heading-size-medium

  div.text
    width: $content-wide
    line-height: $line-height-medium
    font-size: $text-size-medium
</style>