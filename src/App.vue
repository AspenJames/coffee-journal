<template>
  <div id="app">
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "App",
  data() {
    return {
      layout: DefaultLayout
    };
  }
};
</script>

<style lang="sass">
@font-face
  font-family: "Raphtalia"
  src: url('assets/fonts/Raphtalia.ttf') format('truetype')

@font-face
  font-family: "Rozanova"
  src: url('assets/fonts/RozanovaThinAlt.otf') format('opentype')

*
  font-family: Rozanova, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $text-color
  margin: 0

body
  background-color: $bg-color
</style>
