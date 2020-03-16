<template>
  <div id="app">
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      // ensure layout is set in each view
      layout: "div"
    };
  }
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Montserrat&display=swap')

*
  font-family: $text-family, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $text-color
  margin: 0

body
  background-color: $bg-color
</style>
