<template>
  <p>
    <md-card-content id="messageCard">
      <div class="md-content"> {{ msg }} </div>
      <div class="md-subhead"> {{ username }} {{ timestamp}} </div>
    </md-card-content>
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
