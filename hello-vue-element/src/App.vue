<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    // window.addEventListener("unload", function () {
    //   console.log("页面刷新了");
    // });
    window.addEventListener("unload", this.saveState)
  },
  methods: {
    saveState: function () {
      sessionStorage.setItem("state", JSON.stringify(this.$store.state.User))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
