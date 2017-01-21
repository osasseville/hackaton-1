<template>
  <div class="inputForm">
    <div class="md-list-text-container">
      <p>
        {{ newEventName }}
      </br>
        {{ newDate }}
      </br>
        {{ newStartTime }} -- {{ newEndTime }}
      </br>
      </p>

    </div>
  </div>

</template>

<script>
export default {
  name: 'eventList',
  props: [
    'thing',
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
