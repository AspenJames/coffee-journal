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
  padding: $sizing-medium
  background-color: $header-color
  color: $navlink-color
  font-size: $heading-size-small
  margin: 0

  a
    font-weight: bold
    color: $navlink-color
    &:hover
      color: $link-color-hover

  a.router-link-exact-active
    color: $navlink-color-active

main.content
  margin: $sizing-default 0 $sizing-xlarge
  height: $content-full
</style>
