<template>
  <div id="app">
    <div class="login-button"><LoginButton /></div>
    <div class="channels">Channels</div>
    <div class="chatroom">Chatroom</div>
  </div>
</template>

<script>
import LoginButton from './components/LoginButton'
export default {
  name: 'app',
  components: {
    LoginButton
  }
}
</script>
<style>
html, body, #app {
  height: 100%;
}
#app {
  display: flex;
  align-items: stretch;
}
.login-button {
  position: absolute;
  right: 10px;
  top: 10px;
}
.channels {
  width: 150px;
}
.chatroom {
  flex-grow: 1;
  border-left: 1px solid black;
}
</style>
