<template>
  <div id="app">
    <div class="login-button">
      <login-button />
    </div>
    <div class="channels">
      <channels />
    </div>
    <div class="chatroom"><chatroom></chatroom></div>
  </div>
</template>

<script>
import Chatroom from './components/Chatroom'
import LoginButton from './components/LoginButton'
import Channels from './components/Channels'

export default {
  name: 'app',
  components: {
    Chatroom,
    Channels,
    LoginButton
  }
}
</script>
<style>
html, body, #app {
  height: 100%;
}
#app {
  border-style: solid;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: stretch;
}
.login-button {
  position: absolute;
  right: 10px;
  top: 10px;
}
.channels {
  width: 215px;
  padding: 10px;
}
.chatroom {
  flex-grow: 1;
}
</style>
