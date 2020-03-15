<template>
  <div class="home">
    <div class="callout">
      <h1>Coffee Journal</h1>
    </div>
    <div class="inset">
      <img
        src="https://images.pexels.com/photos/373888/pexels-photo-373888.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=420"
        alt="coffee"
      />
    </div>

    <div class="text">
      <p>
        Like grandma's recipe book, but digital and for coffee! Read some
        recipes for inspiration, or <a href="/signup">make an account</a> to
        start your own coffee journal.
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "Home",
  created() {
    this.$emit("update:layout", DefaultLayout);
  }
};
</script>

<style lang="sass" scoped>
div.callout
  background-color: $div-card-color
  padding: 20px
  margin: 20px auto
  width: 65%
  border-radius: 50px
  box-shadow: 0 8px 6px -2px $div-shadow-color

h1
  color: $text-color
  font-size: $heading-size-large
  margin: 25px auto

div.inset
  width: 60%
  height: auto
  margin: auto
  padding: 9px 0
  box-shadow: inset 0 0 10px $div-shadow-color

img
  width: 98%
  height: auto
  margin: auto

div.text
  width: 50%
  height: auto
  margin: 20px auto
  padding: 10px
  font-size: $text-size-medium

p
  color: $text-color
  line-height: $line-height-default
  font-size: inherit

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
    font-size: $heading-size-default

  div.inset
    width: 80%
    line-height: $line-height-medium

  div.text
    width: 75%
    font-size: $text-size-default
</style>
