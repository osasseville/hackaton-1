<template>

<md-whiteframe>
  <md-toolbar class="md-transparent">

    <add-button @newChannel="addChannel"></add-button>

  </md-toolbar>

  <md-list class="md-transparent">
    <channel v-for="channel in channelList" :channelName="channel.name" :channelKey="channel['.key']"
    @channelSelected="onSelectChannel"/>
      <!--put channels here-->
  </md-list>
</md-whiteframe>

</template>

<script>
import Channel from './Channel.vue'
import AddButton from './AddButton.vue'
import { channelsRef, createChannel } from '../db'

export default {
  name: 'channels',
  firebase: {
    channelList: channelsRef
  },
  data () {
    return {}
  },
  components: {
    Channel, AddButton
  },
  methods: {
    addChannel (name) {
      createChannel(name)
      .then(
        key => this.$emit('channelSelected', key))
    },
    onSelectChannel (key) {
      this.$emit('channelSelected', key)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
