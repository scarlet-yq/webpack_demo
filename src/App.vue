<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>姓名：{{userInfo.name}}</p>
    <p>年龄：{{userInfo.age}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
        userInfo: {}
    }
  },
  created() {
    this.$http.get('data.json').then(response => {
        this.userInfo = response.data;
    })
  }
}
</script>

<style lang="less">
@color: red;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @color;
  margin-top: 60px;
}
</style>
