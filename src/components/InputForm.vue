<template>
  <div class="inputForm">
      <form novalidate @submit.stop.prevent="submit">

        <md-input-container>
          <label>Event Name</label>
          <md-input v-model="eventName" placeholder="Event Name"></md-input>
        </md-input-container>

        <md-input-container>
          <label>ddmmyyyy format</label>
          <md-input v-model="date" placeholder="Date"></md-input>
        </md-input-container>

        <md-input-container>
          <label>24 hour format, ex.22:00 for 10pm</label>
          <md-input v-model="startTime" placeholder="Start Time"></md-input>
        </md-input-container>

        <md-input-container>
          <label>24 hour format, ex.22:00 for 11pm</label>
          <md-input v-model="endTime" placeholder="End Time"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Duration between each check-up (in minutes)</label>
          <md-input v-model="durationInBetween" type="number"></md-input>
        </md-input-container>

        <md-button class="md-raised md-primary">Record Message</md-button>

        <md-button class="md-fab md-fab-right">+</md-button>
      </form>

      <event-list
        thing="noo"
        :newEventName="eventName"
        :newDate="date"
        :newStartTime="startTime"
        :newEndTime="endTime"
        :newDuration="durationInBetween" />

  </div>

</template>

<script>
import eventList from './eventList'
export default{
  components: {
    eventList
  },
  data () {
    return {
      eventName: null,
      date: null,
      startTime: null,
      endTime: null,
      durationInBetween: null
    }
  }
}
</script>
<style>

  .inputForm {
    padding: 20px;
  }

</style>
