<template>
  <div class="header">
    header
    <Notification :visiable="visiable" title="通知" content="放假" />
  </div>
</template>

<script>
import Notification from './Notification'
export default {
  data () {
    return {
      visiable: true
    }
  },
  components: {
    Notification
  },
  mounted () {
    setTimeout (() => {
      this.visiable = false
    },3000)
  }
}
</script>

<style>
  .header {
    position: fixed;
    top: 0;
  }
  
</style>