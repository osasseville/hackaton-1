<template>
  <div>
    <h1>message-board</h1>
    <message></message>
  </div>
</template>

<script>
import Message from './Message'

export default {
  name: 'messageboard',
  data () {
    return {
      listOfMessages: []
    }
  },
  components: {
    Message
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
