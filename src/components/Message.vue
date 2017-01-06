<template>
  <p>
    <strong>{{ username }} </strong>
    <em>{{ timestamp }}:   </em>
    {{ msg }}
  </p>
</template>

<script>
export default {
  name: 'message',
  data () {

    return {
      username: 'wai',
      timestamp: new Date(),
      msg: 'amanda'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
