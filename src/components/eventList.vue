<template>
  <div class="inputForm">

    <md-list-item>
      <div class="md-list-text-container">
        <p>
          {{ newEventName }}
        </br>
          {{ newDate }}
        </br>
          {{ newStartTime }} - {{ newEndTime }}
        </br>
        </p>

      </div>
    </md-list-item>
  </div>

</template>

<script>
export default {
  name: 'eventList',
  props: [
    'newEventName',
    'newDate',
    'newStartTime',
    'newEndTime',
    'newDuration'
  ]
}
</script>
<style>

  .inputForm {
    padding: 20px;
  }

</style>
