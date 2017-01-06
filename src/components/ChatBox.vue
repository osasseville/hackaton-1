<template>
  <div>
    <h1>chatbox</h1>
    <md-input-container>
      <label>Send a message...</label>
      <md-textarea> </md-textarea>
      <md-button id ="md-button" @click="send" class="md-raised md-dense">SEND</md-button>
    </md-input-container>
  </div>
</template>

<script>
export default {
  name: 'chatbox',
  data () {
  },
  methods: {
    send () {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#md-button {
  float: right;;
}
</style>
