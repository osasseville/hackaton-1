<template>
  <div>
    <message-board id="message-board"></message-board>
    <chat-box @message="chatFlag" id="chat-box"></chat-box>
  </div>
</template>

<script>
import MessageBoard from './MessageBoard'
import ChatBox from './ChatBox'

export default {
  name: 'chatroom',
  props: [
    'channelKey',
    'userData',
  ]
  components: {
    MessageBoard,
    ChatBox
  },
  methods: {
    chatFlag (message) {
      this.$emit('message', message)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
