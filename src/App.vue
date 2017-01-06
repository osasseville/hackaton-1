<template>
  <div id="app">
    <div class="login-button">
      <login-button />
    </div>
    <div class="channels">
      <channels />
    </div>
    <div class="chatroom">Chatroom</div>
  </div>
</template>

<script>
import LoginButton from './components/LoginButton'
import Channels from './components/Channels'

export default {
  name: 'app',
  components: {
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
