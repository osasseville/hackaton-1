<template>
  <div>
    <md-card>
      <div class="md-title">Chatbox</div>
      <form novalidate @submit.stop.prevent="send">
        <md-input-container md-inline>
          <label>Send a message...</label>
          <md-input v-model="input" id="textarea" />
        </md-input-container>
      </form>
    </md-card>
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
          author: 'bob',
          message: this.input
        }
        this.$emit('message', message)
        this.input = ''
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
