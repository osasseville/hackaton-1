<template>

    <md-list-item>
      <div class="md-list-text-container">
        <span>{{ channelname }}</span>
      </div>
    </md-list-item>
</template>

<script>
export default {
  name: 'channel',
  props: ['channelname'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
