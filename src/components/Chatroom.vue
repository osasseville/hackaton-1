<template>
  <div>
    <message-board
      v-if="channel" id="message-board" :messages="channel.message"></message-board>
    <chat-box @message="chatFlag" id="chat-box"></chat-box>
  </div>
</template>

<script>
import { createMessage } from '../db'
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
      createMessage(this.channelKey, 'anonymous', message)
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
