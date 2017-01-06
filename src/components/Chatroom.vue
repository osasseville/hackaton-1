<template>
  <div>
    <message-board id="message-board"></message-board>
    <chat-box id="chat-box"></chat-box>
  </div>
</template>

<script>
import MessageBoard from './MessageBoard'
import ChatBox from './ChatBox'

export default {
  name: 'chatroom',
  data () {
  },
  components: {
    MessageBoard,
    ChatBox
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#message-board {
  border-style: solid;
  border-color: green;
}
#chat-box {
  border-style: solid;
  border-color: orange;
}
</style>
