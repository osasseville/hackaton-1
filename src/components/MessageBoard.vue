<template>
  <div>
    <md-card>
      <md-card-area md-inset>
        <div class="md-title">Message Board</div>
        <ul>
          <li id="messages" v-for="message in listOfMessages">
            <message v-bind:username="message.username" v-bind:timestamp="message.timestamp" v-bind:msg="message.msg"></message>
          </li>
        </ul>
      </md-card-area>
    </md-card>
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
#MessageBoard{
  border: 5px solid red;
  list-style: none;
}
#messages{
  list-style: none;
}


</style>
