<template>
  <div id="app">
    <chatroom></chatroom>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Chatroom from './components/Chatroom'

export default {
  name: 'app',
  components: {
    Hello,
    Chatroom
  }
}
</script>

<style>
#app {
  border-style: solid;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
