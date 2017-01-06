<template>
  <div id="app">
    <div class="channels">Channels</div>
    <div class="chatroom">Chatroom</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
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
.channels {
  width: 150px;
}
.chatroom {
  flex-grow: 1;
  border-left: 1px solid black;
}
</style>
