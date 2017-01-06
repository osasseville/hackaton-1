<template>
  <div>
    <message-board></message-board>
    <chat-box></chat-box>
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
<style scoped>

</style>
