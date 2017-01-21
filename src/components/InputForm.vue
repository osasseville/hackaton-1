<template>
  <div class="inputForm">
      <form novalidate @submit.stop.prevent="submit">

        <md-input-container>
          <label>eventName</label>
          <md-input placeholder="Event Name"></md-input>
        </md-input-container>

        <md-input-container>
          <label>ddmmyyyy format</label>
          <md-input placeholder="Date"></md-input>
        </md-input-container>

        <md-input-container>
          <label>24 hour format, ex.22:00 for 10pm</label>
          <md-input placeholder="Start Time"></md-input>
        </md-input-container>

        <md-input-container>
          <label>24 hour format, ex.22:00 for 11pm</label>
          <md-input placeholder="End Time"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Duration between each check-up (in minutes)</label>
          <md-input type="number"></md-input>
        </md-input-container>

        <md-button class="md-raised md-primary">Record Message</md-button>

        <md-button class="md-fab md-fab-bottom-left">+</md-button>
      </form>
</template>

<script>
</script>
<style>

  .inputForm {
    padding: 20px;
  }

</style>
