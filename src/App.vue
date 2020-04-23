<template>
  <div id="app">
    <!-- <home></home> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./views/home/Home";
import Login from './views/login/Login';

export default {
  name: "App",
  components: {
    Home,
    Login
  }
};
</script>

<style scoped>

</style>