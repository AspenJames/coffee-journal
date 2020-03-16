<template>
  <div class="default">
    <nav id="nav">
      <router-link to="/" class="logo"
        ><img
          width="64"
          alt="Caffeine"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffeine.svg/64px-Caffeine.svg.png"
      /></router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/signup">Signup</router-link>
      <router-link to="/login">Login</router-link>
    </nav>

    <main class="content">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/shared/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Footer
  }
};
</script>

<style lang="sass" scoped>
#nav
  display: flex
  justify-content: space-between
  align-items: center
  padding: $sizing-medium
  background-color: $header-color
  color: $navlink-color
  font-size: $heading-size-small
  margin: 0

  a
    height: auto
    vertical-align: middle
    background-color: $bg-accent
    padding: $sizing-tiny $sizing-small
    text-decoration: none
    font-weight: bold
    color: $navlink-color
    &:hover
      color: $link-color-hover

  a.logo
    background-color: $navlink-color

  img
    filter: white
    -webkit-filter: grayscale(9)
    filter: grayscale(9)

  a.router-link-exact-active
    color: $navlink-color-active

main.content
  margin: $sizing-default 0 $sizing-xlarge
  height: $content-full
</style>
