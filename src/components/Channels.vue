<template>

<md-whiteframe md-elevation="2">
  <md-toolbar class="md-transparent">

    <add-button @newChannel="addChannel"></add-button>

  </md-toolbar>

  <md-list class="md-transparent">
    <channel v-for="channel in channelList" :channelname="channel.name" />
      <!--put channels here-->
  </md-list>
</md-whiteframe>

</template>

<script>
import Channel from './Channel.vue'
import AddButton from './AddButton.vue'

export default {
  name: 'channels',
  data () {
    return {
      channelList: [{ name: 'test' }]
    }
  },
  components: {
    Channel, AddButton
  },
  methods: {
    addChannel (name) {
      this.channelList.push({ name })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
