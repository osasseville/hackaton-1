<template>
  <div id="app">
    <channels></channels>
  </div>
</template>

<script>
import Channels from './components/Channels'

export default {
  name: 'app',
  components: {
    Channels
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
