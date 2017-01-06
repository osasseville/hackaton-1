<template>

    <md-list-item @click="selectChannel">
      <div class="md-list-text-container">
      <span>{{ channelName }}</span>
      </div>
    </md-list-item>
</template>

<script>
export default {
  name: 'channel',
  props: ['channelName', 'channelKey'],
  data () {
    return {
    }
  },
  methods: {
    selectChannel () {
      this.$emit('channelSelected', this.channelKey)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body,
.app-viewport {
  height: 100%;
  overflow: hidden;
}

.app-viewport {
  display: flex;
  flex-flow: column;
}

.md-fab {
  margin: 0;
  position: absolute;
  bottom: -20px;
  left: 16px;

  .md-icon {
    color: #fff;
  }
}

.md-title {
  padding-left: 8px;
  color: #fff;
}

.md-list {
  overflow: auto;
}

.md-list-action .md-icon {
  color: rgba(#000, .26);
}

.md-avatar-icon .md-icon {
  color: #fff !important;
}

.md-sidenav .md-list-text-container > :nth-child(2) {
  color: rgba(#fff, .54);
}

.md-account-header {
  .md-list-item:hover .md-button:hover {
    background-color: inherit;
  }

  .md-avatar-list .md-list-item-container:hover {
    background: none !important;
  }
}
</style>
