<template>
  <div>
    <h1>chatbox</h1>
    <md-input-container>
      <label>Send a message...</label>
      <md-textarea v-model="input" id="textarea"> </md-textarea>
      <md-button id="md-button" v-on:click="send" class="md-raised md-dense">SEND</md-button>
    </md-input-container>
  </div>
</template>

<script>
export default {
  name: 'chatbox',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    send () {
      if (this.input !== '') {
        var message = {
          username: 'bob',
          timestamp: new Date(),
          msg: this.input
        }
        this.$emit('message', message)
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#md-button {
  float: right;
}
#textarea {

}
</style>
