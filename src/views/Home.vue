<template>
  <div class="home">
    <div class="callout">
      <h1>Coffee Journal</h1>
    </div>

    <carousel
      autoplay
      autoplayHoverPause
      autoplayTimeout="4000"
      loop
      navigationEnabled
      perPage="1"
      paginationColor="#BEBEBE"
    >
      <slide>
        <img
          src="https://images.pexels.com/photos/606542/pexels-photo-606542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=420"
          alt="coffee"
        />
      </slide>
      <slide>
        <img
          src="https://images.pexels.com/photos/539432/pexels-photo-539432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=420"
          alt="coffee"
        />
      </slide>
      <slide>
        <img
          src="https://images.pexels.com/photos/373888/pexels-photo-373888.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=420"
          alt="coffee"
        />
      </slide>
      <slide>
        <img
          src="https://images.pexels.com/photos/585754/pexels-photo-585754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=420"
          alt="coffee"
        />
      </slide>
      <slide>
        <img
          src="https://images.pexels.com/photos/272887/pexels-photo-272887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=420"
          alt="coffee"
        />
      </slide>
    </carousel>

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
import { Carousel, Slide } from "vue-carousel";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "Home",
  created() {
    this.$emit("update:layout", DefaultLayout);
  },
  components: {
    Carousel,
    Slide
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
  font-family: Raphtalia
  color: $text-color
  font-size: $heading-size-huge
  margin: 25px auto

.VueCarousel
  width: 80%
  height: auto
  max-height: 600px
  margin: auto

img
  width: auto
  max-width: 100%
  height: auto
  margin: auto
  object-fit: scale-down

div.text
  width: 50%
  height: auto
  margin: 20px auto
  padding: 10px
  font-size: $text-size-large

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
    font-size: $heading-size-medium

  .VueCarousel
    width: 100%

  div.inset
    width: 80%
    line-height: $line-height-medium

  div.text
    width: 75%
    font-size: $text-size-medium
</style>
