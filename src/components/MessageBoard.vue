<template>
  <div>
    <md-card>
      <md-card-area>
        <div class="md-title">Message Board</div>
        <ul>
          <li id="messages" v-for="(message, key) of messages">
            <message
              v-bind:username="message.author"
              v-bind:msg="message.message.message" />
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
  props: ['messages'],
  data () {
    return {
      listOfMessages: []
    }
  },
  computed: {
    sortedMessages () {
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
