<template>
  <p>
    <md-card-header id="messageCard">
    <div class="md-title"> {{ msg }} </div>
    <div class="md-subhead"> {{ username }} {{ timestamp}} </div>
  </md-card-header>
  </p>
</template>

<script>
export default {
  name: 'message',
  props: [
    'username',
    'timestamp',
    'msg'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#messageCard {
  text-align: left;
}


</style>
