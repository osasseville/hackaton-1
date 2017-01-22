<template lang="html">
  <md-button @click="onClick">Login</md-button>
</template>

<script>
import { login } from '../db'

export default {
  data () {
    return {
      user: null
    }
  },
  methods: {
    onClick () {
      login().then(x => {
        this.user = x
      })
    }
  }
}
</script>

<style lang="css">
</style>
