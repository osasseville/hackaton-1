<template>
  <div>
    <input-form></input-form>



  <md-list class="custom-list md-triple-line">
    <md-list-item>
    <md-avatar>
      <img src="https://placeimg.com/40/40/people/1" alt="People">
    </md-avatar>



</div>
</template>

<script>
  import InputForm from './components/InputForm'
  export default {
    name: 'app',
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
