<template>
  <div>
    <message-board id="message-board"></message-board>
    <chat-box @message="chatFlag" id="chat-box"></chat-box>
  </div>
</template>

<script>
import MessageBoard from './MessageBoard'
import ChatBox from './ChatBox'
import firebase from 'firebase'

export default {
  name: 'chatroom',
  props: [
    'channelKey',
    'userData',
    'messages'
  ],
  components: {
    MessageBoard,
    ChatBox
  },
  methods: {
    chatFlag (message) {
      message.key = this.channelKey
      this.$emit('message', message)
    }
  },
  watch: {
    channelKey () {
      this.$bindAsObject(
        'channel',
        firebase.database().ref(`channels/${this.channelKey}`))
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
