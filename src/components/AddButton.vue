<template lang="html">
  <div>
  <md-button class="md-primary md-raised" @click="openDialog('dialog6')">+</md-button>
    <md-dialog-prompt
      md-input-id="add-channel-dialog"
      :md-title="prompt.title"
      :md-ok-text="prompt.ok"
      :md-cancel-text="prompt.cancel"
      @open="onOpen"
      @close="onClose"
      ref="dialog6"
      v-model="result" />
      <br>
  </div>
</template>

<script>
export default {
  data: () => ({
    result: '',
    prompt: {
      title: 'Enter a channel name',
      ok: 'Done',
      cancel: 'Cancel',
      id: 'name',
      name: 'name',
      placeholder: '',
      maxlength: 30
    }
  }),
  watch: {
    result (val) {
      if (val !== '') {
        this.$emit('newChannel', val.trim())
        this.result = ''
        window.document.getElementById('add-channel-dialog').value = ''
      }
    }
  },
  methods: {
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
    }
  }
}
</script>
<style scoped>

</style>
