<template>
  <div>
    <input-form></input-form>

    <md-button @click="onClick">Login</md-button>

</div>
</template>

<script>
  import InputForm from './components/InputForm'
  import { login } from './db'
  export default {
    name: 'app',
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
    },
    components: {
      InputForm
    }
  }
</script>
<style>

  .inputForm {
    padding: 20px;
  }

</style>
