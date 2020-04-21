<template>
  <div id="app">
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
#app {
  height: 1000px;
  background-color: #cdcdcd;
}
</style>