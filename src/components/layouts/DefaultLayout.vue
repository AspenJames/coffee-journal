<template>
  <div class="default">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
  padding: 30px
  background-color: $header-color
  color: $navlink-color
  font-size: 1.5em
  margin: 0

  a
    font-weight: bold
    color: $navlink-color
    &:hover
      color: $link-color-hover

  a.router-link-exact-active
    color: $navlink-color-active

main.content
  padding-bottom: 50px
  margin: 20px 0 50px
  height: 100%
</style>