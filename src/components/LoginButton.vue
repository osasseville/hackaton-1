<template>
  <div v-if="loaded">
    <md-button v-show="!isLogin" class="md-raised md-primary" @click="onClickLogin">
      Login
    </md-button>
    <md-button v-show="isLogin" class="md-raised md-warn" @click="onClickLogout">
      Logout
    </md-button>
  </div>
</template>
<script>
import firebase from 'firebase'
import { login as loginFb } from '../db'
export default {
  data () {
    return {
      loaded: false,
      isLogin: false
    }
  },
  methods: {
    onClickLogin () {
      loginFb()
    },
    onClickLogout () {
      firebase.auth().signOut()
      this.$emit('logout')
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLogin = true
        this.$emit('login', user)
      } else {
        this.isLogin = false
      }
      this.loaded = true
    })
  }
}
</script>
