<template>
  <div>
    <h1>message-board</h1>
    <ul>
      <li id="messages" v-for="message in listOfMessages">
        <message v-bind:username="message.username" v-bind:timestamp="message.timestamp" v-bind:msg="message.msg"></message>
      </li>
    </ul>
  </div>
</template>

<script>
import Message from './Message'

export default {
  name: 'messageboard',
  data () {
    return {
      listOfMessages: [
        {
          username: 'wai',
          timestamp: new Date(),
          msg: 'amanda'
        },
        {
          username: 'lau',
          timestamp: new Date(),
          msg: 'wai'
        }
      ]
    }
  },
  components: {
    Message
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #messages {
    list-style: none;
    text-align: left;
  }
</style>
