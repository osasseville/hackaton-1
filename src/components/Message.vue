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
  props: [
    'username',
    'timestamp',
    'msg'
  ],
  data () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
