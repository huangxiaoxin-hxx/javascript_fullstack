<template>
  <div class="footer">
    footer
  </div>
</template>

<script>
import {open} from './notification2'
// toast
export default {
  mounted() {
    setTimeout(() => {
      open({
        title: 'title1',
        content: 'content1'
      })
       open({
        title: 'title2',
        content: 'content2'
      })
      close()
    }, 3000);
  }
}
</script>

<style>
  .footer {
    position: fixed;
    bottom: 0;
  }
</style>