<template>
  <div>
    <message-board
      v-if="channel" id="message-board" :messages="channel.message"></message-board>
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
    'userData'
  ],
  components: {
    MessageBoard,
    ChatBox
  },
  data () {
    return {
      channel: null
    }
  },
  methods: {
    chatFlag (message) {
      message.key = this.channelKey
      this.$emit('message', message)
    },
    refreshChannel () {
      this.$bindAsObject(
        'channel',
        firebase.database().ref(`channels/${this.channelKey}`)
      )
    }
  },
  mounted () {
    this.refreshChannel()
  },
  watch: {
    channelKey () {
      this.refreshChannel()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
