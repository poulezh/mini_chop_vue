<template>
  <div>
    <EMainWrapper />
  </div>
</template>

<script>
import EMainWrapper from "./components/EMainWrapper.vue";

export default {
  name: 'App',
  components: {
    EMainWrapper
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
